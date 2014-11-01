(ns taoensso.sente
  "Channel sockets. Otherwise known as The Shiz.

      Protocol  | client>server | client>server + ack/reply | server>user[1] push
    * WebSockets:       ✓              [2]                          ✓
    * Ajax:            [3]              ✓                          [4]

    [1] By user-id => ALL of a user's connected clients (browser tabs, devices,
        etc.). Note that user > session > client > connection for consistency
        over time + multiple devices.
    [2] Emulate with cb-uuid wrapping.
    [3] Emulate with dummy-cb wrapping.
    [4] Emulate with long-polling.

  Abbreviations:
    * chsk  - Channel socket.
    * hk-ch - Http-kit Channel.
    * uid   - User-id. An application-specified identifier unique to each user
              and sessionized under `:uid` key to enable server>user push.
              May have semantic meaning (e.g. username, email address), or not
              (e.g. random uuid) - app's discresion.
    * cb    - Callback.
    * tout  - Timeout.
    * ws    - WebSocket/s.

  Special messages (implementation detail):
    * Callback replies: :chsk/closed, :chsk/timeout, :chsk/error.
    * Client-side events:
        [:chsk/handshake [<?uid> <?csrf-token>]],
        [:chsk/ws-ping],
        [:chsk/state <new-state>],
        [:chsk/recv  <[buffered-evs]>] ; server>user push

    * Server-side events:
       [:chsk/bad-edn <edn>],
       [:chsk/bad-event <chsk-event>],
       [:chsk/uidport-open],
       [:chsk/uidport-close].

    * Event wrappers: {:chsk/clj <clj> :chsk/dummy-cb? true} (for [2]),
                      {:chsk/clj <clj> :chsk/cb-uuid <uuid>} (for [4]).

  Notable implementation details:
    * Edn is used as a flexible+convenient transfer format, but can be seen as
      an implementation detail. Users may apply additional string encoding (e.g.
      JSON) at will. (This would incur a cost, but it'd be negligable compared
      to even the fastest network transfer times).
    * core.async is used liberally where brute-force core.async allows for
      significant implementation simplifications. We lean on core.async's strong
      efficiency here.
    * For WebSocket fallback we use long-polling rather than HTTP 1.1 streaming
      (chunked transfer encoding). Http-kit _does_ support chunked transfer
      encoding but a small minority of browsers &/or proxies do not. Instead of
      implementing all 3 modes (WebSockets, streaming, long-polling) - it seemed
      reasonable to focus on the two extremes. In any case client support for
      WebSockets is growing rapidly so fallback modes will become increasingly
      irrelevant in time.

  General-use notes:
    * Single HTTP req+session persists over entire chsk session but cannot
      modify sessions! Use standard a/sync HTTP Ring req/resp for logins, etc.
    * Easy to wrap standard HTTP Ring resps for transport over chsks. Prefer
      this approach to modifying handlers (better portability)."
  {:author "Peter Taoussanis"}

       
                                    
                                                                         
                                                                 
                                              
                                                   
                                                 
                                                  

        
  (:require [clojure.string  :as str]
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [cljs.reader     :as edn]
            [taoensso.encore :as encore :refer (format)])

        
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

;;;; Shared (client+server)

(defn- chan? [x]
                                                                         
         (instance?    cljs.core.async.impl.channels.ManyToManyChannel x))

(defn- validate-event-form [x]
  (cond
    (not (vector? x))        :wrong-type
    (not (#{1 2} (count x))) :wrong-length
    :else (let [[ev-id _] x]
            (cond (not (keyword? ev-id))  :wrong-id-type
                  (not (namespace ev-id)) :unnamespaced-id
                  :else nil))))

(defn event? "Valid [ev-id ?ev-data] form?" [x] (nil? (validate-event-form x)))

(defn assert-event [x]
  (when-let [?err (validate-event-form x)]
    (let [err-fmt
          (str
           (case ?err
             :wrong-type   "Malformed event (wrong type)."
             :wrong-length "Malformed event (wrong length)."
             (:wrong-id-type :unnamespaced-id)
             "Malformed event (`ev-id` should be a namespaced keyword)."
             :else "Malformed event (unknown error).")
           " Event should be of `[ev-id ?ev-data]` form: %s")]
      (throw (ex-info (format err-fmt (str x)) {:malformed-event x})))))

(defn cb-success? [cb-reply] ;; Cb reply need _not_ be `event` form!
  (not (#{:chsk/closed :chsk/timeout :chsk/error} cb-reply)))

                                                                            
                         
                            
                                                

(defn- unwrap-edn-msg-with-?cb->clj "edn -> [clj ?cb-uuid]"
  [edn]
  (let [msg                                  
                        (edn/read-string edn)
        ?cb-uuid (and (map? msg) (:chsk/cb-uuid msg))
        clj      (if-not ?cb-uuid msg (:chsk/clj msg))]
    [clj ?cb-uuid]))

;;;; Server

     
                
                                                                  
     
                               
                                                                    
                                                                    
                                                                                 
                             
                            
                                                        

     
                         
                                                                     
               
                                                                   
                              
                                                                       
                   
                                       
                                             
                                                                          
                                                                             
                                                      

                                                                         
                            
                                                             

     
                                    
                                                                       
                               
                                           
                                             

     
                                      
                                                                             
                                            
                                                                        
                                                                        
                                                         
                                                          
                                                              
                                   
                                                            
                                                                     
                                               
                                                                        
                                               
                                                                              
                                                 
                                                                         
                                                                            
                                                          
                                           
                                            
                                     
                               
                                   
                                                                        
                                                                    
                                       
                                                        
                                                     
                                
                             
                            
                                                 
                                          
                                                                                  
                                                                            
                        
                                                           
                                                                             
                                                       
                                          
                                                                                  
                                                                
                                                                 
                                                  

     
                          
                                                                            
                                      
                                                                              
                                                                       
                                                         
                                                                                  
                                                                                  
                                                                                  

          
                                                
                                                                                
                                                                      
                            
                            

                                                                     
                                                                             
                                                                             
                                                               
                                                           
                                       
                                                       
                                  
                                 
                                                                             
                                          
                                                                          
                                                                                                               
                                                                                           

                                           
                                           

                                    
                                                     
                                                                                         
                         
                                                           
                                                                                           

                    
                      
                                
                                                   
                                                       
                               
                                    
                                                                                               
                                                                                                 
                                           
                                                  
                                                   
                                                                  
                                                                  
                                                   
                              

                                                          
                 
                                   
                                                   
                                                       
                                        
                                                                          
                                                                          
                                                               
                                                                  
                               
                                                                                       
                                                                                       
                                                                                         
                                           
                                                  
                                                   
                                                                 
                                                                   
                                                      
                                  

                     
                                    
                                         
                                                                
                             
                                          
                                                                     
                                
                                      

                          
                       
                                
                                                               
                                   
                                                                               
                                                                                  
                                                                            
                                                                                
                                                                           
                                                                 
                                                             
                                                                
                                                                
                                                                 
                                                             
                                                      
                                                  
                                              

                                                                
                               
                                                                    
                                                    
                                                                    
                                                          

                                 
              
                                                        

                                     
                                        
                                       

                                                                                     
                                                            
                                      
                                           
                                                                        

              
                            
                                      
                                                        
                            
                                                  
                                                         
                                              
                                                         

                                                             
                                                                    
                                                          
                                                                               
                                                                   
                                                                                  
                                     
                                                                                    
                                          

           

                                                                              
                   
                                            
                                                                
                                                               
                                                                

                                      
                                                                                   
                                                                             
                                
                        
                        
                                 
                                                      
                                                                       
                                                   
                                                 
                                                        

                          
                                                                   
                                                                   

                                                                               
                   
                                            
                                                  
                                              
                                                  
                                                            
                                                                              
                                                                  
                                        

                                            
                                        
                                            
                                                                               
                                                  
                                       
                                              

                         
                                                
                                                                           

                                     
                                      
                                                            
                                                                
                                                                                  
                                           
                                                            

                                         
                              
                                                                               
                                             
                                     
                                                               
                                                                              
                                                                         
                                                                            
                                                          
                                                                   

                                                                    
                                       
                             
                                                
                                                 
                                                              
                                         
                                              
                                                 

                                                    
                                                                    

                      
                                                                            
                                       
                                              

                                                                         
                                                                                 
                                                                           
                                                                               
                       
                                                   
                                                                      

                                  

                                               
                                                                   
                                                                  
                            
                                      
                                                 
                                     

                                             
                                                            

                                                                    
                                       
                             
                                                                  
                                                                                

                                                           
                        
                                                                         
                                                
                                          
                                                            
                                                                            
                                                              
                                                                   
                                                    
                                                                              
                                                                
                                                                    
                                                        
                                                                           
                                                                                
                                                      
                                                         
                                                              
                                                              
                                                             
                                            
                                                         
                                                                               

                               
                                                                    
                          

;;;; Client

      
(defn- assert-send-args [x ?timeout-ms ?cb]
  (assert-event x)
  (assert (or (and (nil? ?timeout-ms) (nil? ?cb))
              (and (encore/nneg-int? ?timeout-ms)))
          (format "cb requires a timeout; timeout-ms should be a +ive integer: %s"
           ?timeout-ms))
  (assert (or (nil? ?cb) (ifn? ?cb) (chan? ?cb))
          (format "cb should be nil, an ifn, or a channel: %s" (type ?cb))))

      
(defn- pull-unused-cb-fn! [cbs-waiting_ cb-uuid]
  (when cb-uuid
    (first (swap! cbs-waiting_
             (fn [[_ m]] (if-let [f (m cb-uuid)]
                          [f (dissoc m cb-uuid)]
                          [nil m]))))))

      
(defn- wrap-clj->edn-msg-with-?cb "clj -> [edn ?cb-uuid]"
  [cbs-waiting_ clj ?timeout-ms ?cb-fn]
  (let [?cb-uuid (when ?cb-fn (encore/uuid-str))
        msg      (if-not ?cb-uuid clj {:chsk/clj clj :chsk/cb-uuid ?cb-uuid})
        ;; Note that if pr-str throws, it'll throw before swap!ing cbs-waiting:
        edn     (pr-str msg)]
    (when ?cb-uuid
      (swap! cbs-waiting_
             (fn [[_ m]] [nil (assoc m ?cb-uuid ?cb-fn)]))
      (when ?timeout-ms
        (go (<! (async/timeout ?timeout-ms))
            (when-let [cb-fn* (pull-unused-cb-fn! cbs-waiting_ ?cb-uuid)]
              (cb-fn* :chsk/timeout)))))
    [edn ?cb-uuid]))

      
(defprotocol IChSocket
  (chsk-send! [chsk ev] [chsk ev ?timeout-ms ?cb]
    "Sends `[ev-id ?ev-data :as event]` over channel socket connection and returns
     true iff send seems successful.")
  (chsk-make! [chsk]
    "Creates and returns a new channel socket connection, or nil on failure.")
  (chsk-reconnect! [chsk]
    "Re-establishes channel socket connection. Useful for re-authenticating after
    login/logout, etc."))

      
(defn- merge>chsk-state! [{:keys [chs state_] :as chsk} merge-state]
  (let [[old-state new-state]
        (encore/swap-in! state_ []
          (fn [old-state]
            (let [new-state (merge old-state merge-state)]
              (encore/swapped new-state [old-state new-state]))))]
    (when (not= old-state new-state)
      ;; (encore/debugf "Chsk state change: %s" new-state)
      (put! (:state chs) new-state)
      new-state)))

       ;; Experimental, undocumented:
(defn- wrap-cb-chan-as-fn [?cb ev]
  (if (or (nil? ?cb) (ifn? ?cb)) ?cb
    (do (assert (chan? ?cb))
        (assert-event ev)
        (let [[ev-id _] ev
              cb-ch ?cb]
          (fn [reply]
            (put! cb-ch [(keyword (str (encore/fq-name ev-id) ".cb"))
                         reply]))))))

      
(defn- receive-buffered-evs!
  [ch-recv clj] {:pre [(vector? clj)]}
  (let [buffered-evs clj]
    (doseq [ev buffered-evs]
      (assert-event ev)
      (put! ch-recv ev))))

      
(defn- handle-when-handshake! [chsk clj]
  (when (and (vector? clj) ; Nb clj may be callback reply
             (= (first clj) :chsk/handshake))
    (let [[_ [uid csrf-token]] clj]
      (when (str/blank? csrf-token)
        (encore/warnf "Sente warning: NO CSRF TOKEN AVAILABLE"))
      (merge>chsk-state! chsk
        {:open?      true
         :uid        uid
         :csrf-token csrf-token})
      :handled)))

       ;; Handles reconnects, keep-alives, callbacks:
(defrecord ChWebSocket [url chs socket_ kalive-ms kalive-timer_ kalive-due?_
                        nattempt_
                        cbs-waiting_ ; [dissoc'd-fn {<uuid> <fn> ...}]
                        state_ ; {:type _ :open? _ :uid _ :csrf-token _}
                        ]
  IChSocket
  (chsk-send! [chsk ev] (chsk-send! chsk ev nil nil))
  (chsk-send! [chsk ev ?timeout-ms ?cb]
    ;; (encore/debugf "Chsk send: (%s) %s" (if ?cb "cb" "no cb") ev)
    (assert-send-args ev ?timeout-ms ?cb)
    (let [?cb-fn (wrap-cb-chan-as-fn ?cb ev)]
      (if-not (:open? @state_) ; Definitely closed
        (do (encore/warnf "Chsk send against closed chsk.")
            (when ?cb-fn (?cb-fn :chsk/closed)))
        (let [[edn ?cb-uuid] (wrap-clj->edn-msg-with-?cb
                              cbs-waiting_ ev ?timeout-ms ?cb-fn)]
          (try
            (.send @socket_ edn)
            (reset! kalive-due?_ false)
            :apparent-success
            (catch js/Error e
              (encore/errorf "Chsk send %s" e)
              (when ?cb-uuid
                (let [cb-fn* (or (pull-unused-cb-fn! cbs-waiting_ ?cb-uuid)
                                 ?cb-fn)]
                  (cb-fn* :chsk/error)))
              false))))))

  ;; Will auto-recover and handshake:
  (chsk-reconnect! [chsk] (when-let [s @socket_] (.close s)))

  (chsk-make! [chsk]
    (when-let [WebSocket (or (aget js/window "WebSocket")
                             (aget js/window "MozWebSocket"))]
      ((fn connect! []
         (let [retry!
               (fn []
                 (let [nattempt* (swap! nattempt_ inc)]
                   (.clearInterval js/window @kalive-timer_)
                   (encore/warnf "Chsk is closed: will try reconnect (%s)."
                                 nattempt*)
                   (encore/set-exp-backoff-timeout! connect! nattempt*)))]

           (if-let [socket (try (WebSocket. url)
                                (catch js/Error e
                                  (encore/errorf "WebSocket js/Error: %s" e)
                                  false))]
             (->>
              (doto socket
                (aset "onerror"
                  (fn [ws-ev] (encore/errorf "WebSocket error: %s" ws-ev)))
                (aset "onmessage" ; Nb receives both push & cb evs!
                  (fn [ws-ev]
                    (let [edn (aget ws-ev "data")
                          ;; Nb may or may NOT satisfy `event?` since we also
                          ;; receive cb replies here!:
                          [clj ?cb-uuid] (unwrap-edn-msg-with-?cb->clj edn)]
                      ;; (assert-event clj) ;; NO!
                      (or
                        (and (handle-when-handshake! chsk clj)
                             (reset! nattempt_ 0))
                        (if ?cb-uuid
                          (if-let [cb-fn (pull-unused-cb-fn! cbs-waiting_ ?cb-uuid)]
                            (cb-fn clj)
                            (encore/warnf "Cb reply w/o local cb-fn: %s" clj))
                          (let [buffered-evs clj]
                            (receive-buffered-evs! (:recv chs) buffered-evs)))))))
                (aset "onopen"
                  (fn [_ws-ev]
                    (reset! kalive-timer_
                      (.setInterval js/window
                        (fn []
                          (when @kalive-due?_ ; Don't ping unnecessarily
                            (chsk-send! chsk [:chsk/ws-ping]))
                          (reset! kalive-due?_ true))
                        kalive-ms))
                    ;; (merge>chsk-state! chsk
                    ;;   {:open? true}) ; NO, handshake better!
                    ))
                (aset "onclose" ; Fires repeatedly when server is down
                  (fn [_ws-ev] (merge>chsk-state! chsk {:open? false})
                               (retry!))))

            (reset! socket_))

             ;; Couldn't even get a socket:
             (retry!)))))
      chsk)))

      
(defrecord ChAjaxSocket [url chs timeout ajax-client-uuid curr-xhr_ state_]
  IChSocket
  (chsk-send! [chsk ev] (chsk-send! chsk ev nil nil))
  (chsk-send! [chsk ev ?timeout-ms ?cb]
    ;; (encore/debugf "Chsk send: (%s) %s" (if ?cb "cb" "no cb") ev)
    (assert-send-args ev ?timeout-ms ?cb)
    (let [?cb-fn (wrap-cb-chan-as-fn ?cb ev)]
      (if-not (:open? @state_) ; Definitely closed
        (do (encore/warnf "Chsk send against closed chsk.")
            (when ?cb-fn (?cb-fn :chsk/closed)))
        (do
          (encore/ajax-lite url
           {:method :post :timeout ?timeout-ms
            :resp-type :text ; Prefer to do our own edn reading
            :params
            (let [dummy-cb? (not ?cb-fn)
                  msg       (if-not dummy-cb? ev {:chsk/clj       ev
                                                  :chsk/dummy-cb? true})
                  edn       (pr-str msg)]
              {:_ (encore/now-udt) ; Force uncached resp
               :edn edn :csrf-token (:csrf-token @state_)})}

           (fn ajax-cb [{:keys [content error]}]
             (if error
               (if (= error :timeout)
                 (when ?cb-fn (?cb-fn :chsk/timeout))
                 (do (merge>chsk-state! chsk {:open? false})
                     (when ?cb-fn (?cb-fn :chsk/error))))

               (let [resp-edn content
                     resp-clj (edn/read-string resp-edn)]
                 (if ?cb-fn (?cb-fn resp-clj)
                   (when (not= resp-clj :chsk/cb-dummy-200)
                     (encore/warnf "Cb reply w/o local cb-fn: %s" resp-clj)))
                 (merge>chsk-state! chsk {:open? true})))))

          :apparent-success))))

  ;; Will auto-recover and handshake _iff_ uid has changed since last handshake:
  (chsk-reconnect! [chsk] (when-let [x @curr-xhr_] (.abort x)))

  (chsk-make! [chsk]
    ((fn async-poll-for-update! [nattempt]
       (let [retry!
             (fn []
               (let [nattempt* (inc nattempt)]
                 (encore/warnf
                   "Chsk is closed: will try reconnect (%s)."
                   nattempt*)
                 (encore/set-exp-backoff-timeout!
                   (partial async-poll-for-update! nattempt*)
                   nattempt*)))

             ajax-req! ; Just for Pace wrapping below
             (fn []
               (reset! curr-xhr_
                 (encore/ajax-lite url
                   {:method :get :timeout timeout
                    :resp-type :text     ; Prefer to do our own edn reading
                    :params {:_ (encore/now-udt) ; Force uncached resp
                             :ajax-client-uuid ajax-client-uuid}}
                   (fn ajax-cb [{:keys [content error]}]
                     (if error
                       (if (or (= error :timeout)
                               (= error :abort) ; Abort => intentional, not an error
                               ;; It's particularly important that reconnect
                               ;; aborts don't mark a chsk as closed since
                               ;; we've no guarantee that a new handshake will
                               ;; take place to remark as open (e.g. if uid
                               ;; hasn't changed since last handshake).
                               )
                         (async-poll-for-update! 0)
                         (do (merge>chsk-state! chsk {:open? false})
                             (retry!)))

                       ;; The Ajax long-poller is used only for events, never cbs:
                       (let [edn content
                             clj (edn/read-string edn)]
                         (or
                           (handle-when-handshake! chsk clj)
                           (let [buffered-evs clj]
                             (receive-buffered-evs! (:recv chs) buffered-evs)
                             (merge>chsk-state! chsk {:open? true})))
                         (async-poll-for-update! 0)))))))]

         (if-let [pace (aget js/window "Pace")]
           ;; Assumes relevant extern is defined for :advanced mode compilation:
           (.ignore pace ajax-req!) ; Pace.js shouldn't trigger for long-polling
           (ajax-req!))))
     0)
    chsk))

      
(def ^:private default-chsk-url-fn
  (fn [path {:as window-location :keys [protocol host pathname]} websocket?]
    (str (if-not websocket? protocol (if (= protocol "https:") "wss:" "ws:"))
         "//" host (or path pathname))))

      
(defn make-channel-socket!
  "Returns `{:keys [chsk ch-recv send-fn state]}` for new ChWebSocket/ChAjaxSocket:
    * chsk    - The IChSocket implementer. You can usually ignore this.
    * ch-recv - core.async channel that'll receive async (notably server>user)
                events.
    * send-fn - API fn to send client>server[1].
    * state   - Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).

  Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
  routes should be configured accordingly."
  [url &
   & [{:keys [type recv-buf-or-n ws-kalive-ms lp-timeout
              chsk-url-fn ; (fn [path window-location websocket?]) -> URL string
              ]
       :or   {type          :auto
              recv-buf-or-n (async/sliding-buffer 2048) ; Mostly for buffered-evs
              ws-kalive-ms  25000 ; < Heroku 30s conn timeout
              lp-timeout    25000 ; ''
              chsk-url-fn   default-chsk-url-fn}}
      _deprecated-more-opts]]

  {:pre [(#{:ajax :ws :auto} type)]}
  (when (not (nil? _deprecated-more-opts))
    (encore/warnf
     "`make-channel-socket!` fn signature CHANGED with Sente v0.10.0."))

  (let [;; Want _separate_ buffers for state+recv even if we're later merging
        chs {:state    (chan (async/sliding-buffer 1))
             :recv     (chan recv-buf-or-n)
             :internal (chan recv-buf-or-n)}

        window-location (encore/get-window-location)

        chsk
        (or
         (and (not= type :ajax)
              (chsk-make!
                (map->ChWebSocket
                  {:url           (chsk-url-fn url window-location :ws)
                   :chs           chs
                   :socket_       (atom nil)
                   :kalive-ms     ws-kalive-ms
                   :kalive-timer_ (atom nil)
                   :kalive-due?_  (atom true)
                   :nattempt_     (atom 0)
                   :cbs-waiting_  (atom [nil {}])
                   :state_        (atom {:type :ws :open? false})})))

         (and (not= type :ws)
              (let [;; Unchanging over multiple long-poll (re)connects:
                    ajax-client-uuid (encore/uuid-str)]
                (chsk-make!
                  (map->ChAjaxSocket
                    {:url              (chsk-url-fn url window-location (not :ws))
                     :chs              chs
                     :timeout          lp-timeout
                     :ajax-client-uuid ajax-client-uuid
                     :curr-xhr_        (atom nil)
                     :state_           (atom {:type :ajax :open? false})})))))

        ever-opened?_ (atom false)
        state*        (fn [state]
                        (if (or (not (:open? state)) @ever-opened?_)
                          state
                          (do (reset! ever-opened?_ true)
                              (assoc state :first-open? true))))]

    (when chsk
      {:chsk    chsk
       :send-fn (partial chsk-send! chsk)
       :state   (:state_ chsk)
       :ch-recv
       (async/merge
        [(->> (:internal chs) (async/map< (fn [ev] {:pre [(event? ev)]} ev)))
         (->> (:state chs)    (async/map< (fn [state] [:chsk/state (state* state)])))
         (->> (:recv  chs)    (async/map< (fn [ev]    [:chsk/recv  ev])))])})))

;;;; Routers

     
                                                    
                       
               
                               
            
                                                 
                                             
                                
                    
                                                           
                                                           
                                    
                                                                                          
                            
                                                                 
                 
                                          

      
(defn start-chsk-router-loop! [event-handler ch]
  (let [ctrl-ch (chan)]
    (go-loop []
      (let [[v p] (async/alts! [ch ctrl-ch])]
        (if (identical? p ctrl-ch) ::stop
          (let [[id data :as event] v]
            ;; Provide ch to handler to allow event injection back into loop:
            (event-handler event ch)  ; Allow errors to throw
            (recur)))))
    (fn stop! [] (async/close! ctrl-ch))))

;;;;;;;;;;;; This file autogenerated from src/taoensso/sente.cljx
