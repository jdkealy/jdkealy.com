(defproject jdkealy "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :ring {:handler jdkealy.core/app
         :auto-reload? true}
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.0.3"]]
  :source-paths ["src/clj" "src/cljs"]
  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                   :username "jdkealy@gmail.com" :password "f84c35db-d76b-4b68-9e74-cb5410c9dc89"}}
  :dependencies [[org.clojure/java.jdbc "0.3.3"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [org.clojure/core.match "0.2.1"]
                                        ;server
                 [http-kit "2.1.18"]
                 [ring "1.3.0"]
                 [ring/ring-defaults        "0.1.1"]
                 [compojure "1.1.8"]
                 [com.taoensso.forks/ring-anti-forgery "0.3.1"]
                 [cheshire "5.3.1"]
                 [fogus/ring-edn "0.2.0"]
                 [ring.middleware.logger "0.4.0"]
                 [com.taoensso/sente "0.15.1"]
                 [com.taoensso/timbre       "3.2.1"]
                                        ;om
                 [secretary "1.2.1-SNAPSHOT"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [om "0.7.1"]
                 [prismatic/om-tools "0.3.0"]
                 [sablono "0.2.22"]
                 [com.cemerick/piggieback "0.1.3"]
                 ;;[weasel "0.3.0"]
                 [cljs-http "0.1.10"]
                 [cider/cider-nrepl "0.7.0"]
                 [org.clojure/tools.nrepl "0.2.3"]
                 [clj-aws-s3 "0.3.10"]
                                        ;misc
                 [com.draines/postal "1.11.1"]
                 [abengoa/clj-stripe "1.0.4"]
                 [com.cemerick/friend "0.2.0"]
                 [com.datomic/datomic-pro "0.9.4899"]
                 [hiccup "1.0.1"]
                 [geocoder-clj "0.2.3"]
                 [org.clojure/core.memoize "0.5.6"]
                 [noencore "0.1.15"]
                 [image-resizer "0.1.6"]
                 [org.clojure/core.cache "0.6.4"]
                 [http.async.client "0.5.2"]
                 [byte-streams "0.1.13"]
                 [prismatic/schema "0.2.6"]
                 [clj-time "0.8.0"]]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :cljsbuild {:builds [
                       {
                        :dependencies [[com.cemerick/piggieback "0.1.3"]
                                       [weasel "0.3.0"]]
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-dir "..//public/js/out"
                                   :output-to "..//public/js/main.js"
                                   :optimizations :none}}]}
  :main jdkealy.core
  :uberjar-name "jdkealy.jar"
  :jar-exclusions [#"\.cljx|\.swp|\.swo|\.DS_Store"]
  :hooks [leiningen.cljsbuild])
