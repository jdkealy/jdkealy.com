(ns jdkealy.app
  (:require-macros [cljs.core.async.macros :refer [go alt! go-loop]])
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [put! <! >! chan timeout map< mult tap close!]]
   [om.core :as om :include-macros true]
   [om-tools.core :refer-macros [defcomponentk]]
   [taoensso.sente :as sente :refer (cb-success?)]
   [sablono.core :as html :refer-macros [html]]))

(def app-state (atom {}))

(defn log
  [message]
  (.log js/console (clj->js message)))

(defn do-get-stories [owner]
  (go
    (let [res (<! (http/get (str  "/edn/stories.edn")))]
      (om/transact! (om/get-props owner) (fn [props]
                                           (assoc props :stories (cljs.reader/read-string (:body res))))))))

(defcomponentk app-view [data owner]
  (will-mount [this]
              (do-get-stories owner))
  (did-update [_ p n]
              (.highlight (.-SyntaxHighlighter js/window)))
  (render-state [_ state]
                (html
                 [:div
                  [:div {:class "nav"}
                   [:div {:class "wrap"}
                    [:div {:class "active header-font logo nav-element"}
                     [:div {:class "head-font bold"}
                      "jOhNkEaLY.cOM"]]]]
                  [:div {:class "wrap body"}
                   (map (fn [e]
                          [:div {:class "main"}
                           [:hr ]
                           [:h2 (:title e)]
                           [:div {:class "content"}
                            (map (fn [p]
                                   (if (string? p)
                                     [:p p]
                                     (case (:type p)
                                       :code [:p
                                              [:pre {:class (str "brush: " (:brush p))}
                                               (str (:body p))]]
                                       :link [:p
                                              [:a {:href (:href p)}
                                               (:body p)]]))
                                   ) (:body e))]
                           [:div {:class "commit"}
                            (:commit e)]]
                          ) (:stories (om/get-props owner)))]])))


(om/root app-view app-state {
                             :target (. js/document (getElementById "app"))
                             :shared {:channels  channels
                                      :broadcasters  app/broadcasters}})
