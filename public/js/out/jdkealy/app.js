// Compiled by ClojureScript 0.0-2322
goog.provide('jdkealy.app');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('taoensso.sente');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs_http.client');
jdkealy.app.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
jdkealy.app.log = (function log(message){return console.log(cljs.core.clj__GT_js.call(null,message));
});
jdkealy.app.tap_chan = (function tap_chan(owner,key){return cljs.core.async.tap.call(null,om.core.get_shared.call(null,owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"broadcasters","broadcasters",-1227505505),key], null)),cljs.core.async.chan.call(null));
});
jdkealy.app.get_chan = (function get_chan(owner,key){return om.core.get_shared.call(null,owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),key], null));
});
jdkealy.app.channels = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"push","push",799791267),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"navigation","navigation",369417),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"misc","misc",-222218601),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"free","free",801364328),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll","scroll",971553779),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.async.chan.call(null)], null);
jdkealy.app.broadcasters = cljs.core.reduce_kv.call(null,(function (all,k,c){return cljs.core.assoc.call(null,all,k,cljs.core.async.mult.call(null,c));
}),cljs.core.PersistentArrayMap.EMPTY,jdkealy.app.channels);
jdkealy.app.get_stories = (function get_stories(id){return null;
});
jdkealy.app.do_get_stories = (function do_get_stories(owner){var c__9029__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto__){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto__){
return (function (state_30167){var state_val_30168 = (state_30167[(1)]);if((state_val_30168 === (2)))
{var inst_30162 = (state_30167[(2)]);var inst_30163 = om.core.get_props.call(null,owner);var inst_30164 = (function (){var res = inst_30162;return ((function (res,inst_30162,inst_30163,state_val_30168,c__9029__auto__){
return (function (props){return cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"stories","stories",-1910187794),cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(res)));
});
;})(res,inst_30162,inst_30163,state_val_30168,c__9029__auto__))
})();var inst_30165 = om.core.transact_BANG_.call(null,inst_30163,inst_30164);var state_30167__$1 = state_30167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30167__$1,inst_30165);
} else
{if((state_val_30168 === (1)))
{var inst_30159 = ("/edn/stories.edn");var inst_30160 = cljs_http.client.get.call(null,inst_30159);var state_30167__$1 = state_30167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30167__$1,(2),inst_30160);
} else
{return null;
}
}
});})(c__9029__auto__))
;return ((function (switch__9014__auto__,c__9029__auto__){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_30172 = [null,null,null,null,null,null,null];(statearr_30172[(0)] = state_machine__9015__auto__);
(statearr_30172[(1)] = (1));
return statearr_30172;
});
var state_machine__9015__auto____1 = (function (state_30167){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_30167);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e30173){if((e30173 instanceof Object))
{var ex__9018__auto__ = e30173;var statearr_30174_30176 = state_30167;(statearr_30174_30176[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30167);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30173;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30177 = state_30167;
state_30167 = G__30177;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_30167){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_30167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto__))
})();var state__9031__auto__ = (function (){var statearr_30175 = f__9030__auto__.call(null);(statearr_30175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto__);
return statearr_30175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto__))
);
return c__9029__auto__;
});
/**
* @param {...*} var_args
*/
jdkealy.app.app_view = (function() { 
var app_view__delegate = function (data__7794__auto__,owner30178,p__30180){var vec__30205 = p__30180;var opts__7795__auto__ = cljs.core.nth.call(null,vec__30205,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30208 = schema.core.Any;var input_schema30209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map30206","map30206",-1387124214,null))], null);var input_checker30210 = schema.core.checker.call(null,input_schema30209);var output_checker30211 = schema.core.checker.call(null,output_schema30208);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function fnk30207(G__30212){var validate__5989__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__5989__auto__))
{var args__5990__auto___30229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30212], null);var temp__4126__auto___30230 = input_checker30210.call(null,args__5990__auto___30229);if(cljs.core.truth_(temp__4126__auto___30230))
{var error__5991__auto___30231 = temp__4126__auto___30230;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk30207","fnk30207",1135366922,null),cljs.core.pr_str.call(null,error__5991__auto___30231)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30209,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___30229,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___30231], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var map30206 = G__30212;while(true){
if(cljs.core.map_QMARK_.call(null,map30206))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30206)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30206,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map30206,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof jdkealy.app.t30221 !== 'undefined')
{} else
{
/**
* @constructor
*/
jdkealy.app.t30221 = (function (data__7794__auto__,G__30212,app_view,owner,opts__7795__auto__,data,output_checker30211,map30206,fnk30207,output_schema30208,input_checker30210,p__30180,validate__5989__auto__,vec__30205,input_schema30209,ufv__,owner30178,meta30222){
this.data__7794__auto__ = data__7794__auto__;
this.G__30212 = G__30212;
this.app_view = app_view;
this.owner = owner;
this.opts__7795__auto__ = opts__7795__auto__;
this.data = data;
this.output_checker30211 = output_checker30211;
this.map30206 = map30206;
this.fnk30207 = fnk30207;
this.output_schema30208 = output_schema30208;
this.input_checker30210 = input_checker30210;
this.p__30180 = p__30180;
this.validate__5989__auto__ = validate__5989__auto__;
this.vec__30205 = vec__30205;
this.input_schema30209 = input_schema30209;
this.ufv__ = ufv__;
this.owner30178 = owner30178;
this.meta30222 = meta30222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jdkealy.app.t30221.cljs$lang$type = true;
jdkealy.app.t30221.cljs$lang$ctorStr = "jdkealy.app/t30221";
jdkealy.app.t30221.cljs$lang$ctorPrWriter = ((function (owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"jdkealy.app/t30221");
});})(owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
;
jdkealy.app.t30221.prototype.om$core$IRenderState$ = true;
jdkealy.app.t30221.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "nav"},React.DOM.div({"className": "wrap"},React.DOM.div({"className": "active header-font logo nav-element"},React.DOM.div({"className": "head-font bold"},"jOhNkEaLY.cOM")))),React.DOM.div({"className": "wrap body"},React.DOM.div({"className": "left-bar"}),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (___$1,owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function (e){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"main"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),cljs.core.map.call(null,((function (___$1,owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function (p){if(typeof p === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null);
} else
{var G__30228 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p).fqn:null);switch (G__30228) {
case "link":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p)], null)], null);

break;
case "code":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"brush: js"], null),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p)))], null)], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p)))));

}
}
});})(___$1,owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"commit"], null),new cljs.core.Keyword(null,"commit","commit",113374389).cljs$core$IFn$_invoke$arity$1(e)], null)], null);
});})(___$1,owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
,new cljs.core.Keyword(null,"stories","stories",-1910187794).cljs$core$IFn$_invoke$arity$1(om.core.get_props.call(null,self__.owner))))));
});})(owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
;
jdkealy.app.t30221.prototype.om$core$IDidUpdate$ = true;
jdkealy.app.t30221.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function (_,p,n){var self__ = this;
var ___$1 = this;return window.SyntaxHighlighter.highlight();
});})(owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
;
jdkealy.app.t30221.prototype.om$core$IWillMount$ = true;
jdkealy.app.t30221.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function (this$){var self__ = this;
var this$__$1 = this;return jdkealy.app.do_get_stories.call(null,self__.owner);
});})(owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
;
jdkealy.app.t30221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function (_30223){var self__ = this;
var _30223__$1 = this;return self__.meta30222;
});})(owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
;
jdkealy.app.t30221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function (_30223,meta30222__$1){var self__ = this;
var _30223__$1 = this;return (new jdkealy.app.t30221(self__.data__7794__auto__,self__.G__30212,self__.app_view,self__.owner,self__.opts__7795__auto__,self__.data,self__.output_checker30211,self__.map30206,self__.fnk30207,self__.output_schema30208,self__.input_checker30210,self__.p__30180,self__.validate__5989__auto__,self__.vec__30205,self__.input_schema30209,self__.ufv__,self__.owner30178,meta30222__$1));
});})(owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
;
jdkealy.app.__GT_t30221 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__){
return (function __GT_t30221(data__7794__auto____$1,G__30212__$1,app_view__$1,owner__$1,opts__7795__auto____$1,data__$1,output_checker30211__$1,map30206__$1,fnk30207__$1,output_schema30208__$1,input_checker30210__$1,p__30180__$1,validate__5989__auto____$1,vec__30205__$1,input_schema30209__$1,ufv____$1,owner30178__$1,meta30222){return (new jdkealy.app.t30221(data__7794__auto____$1,G__30212__$1,app_view__$1,owner__$1,opts__7795__auto____$1,data__$1,output_checker30211__$1,map30206__$1,fnk30207__$1,output_schema30208__$1,input_checker30210__$1,p__30180__$1,validate__5989__auto____$1,vec__30205__$1,input_schema30209__$1,ufv____$1,owner30178__$1,meta30222));
});})(owner,data,validate__5989__auto__,ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
;
}
return (new jdkealy.app.t30221(data__7794__auto__,G__30212,app_view,owner,opts__7795__auto__,data,output_checker30211,map30206,fnk30207,output_schema30208,input_checker30210,p__30180,validate__5989__auto__,vec__30205,input_schema30209,ufv__,owner30178,null));
break;
}
})();if(cljs.core.truth_(validate__5989__auto__))
{var temp__4126__auto___30233 = output_checker30211.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___30233))
{var error__5991__auto___30234 = temp__4126__auto___30233;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk30207","fnk30207",1135366922,null),cljs.core.pr_str.call(null,error__5991__auto___30234)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30208,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___30234], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv__,output_schema30208,input_schema30209,input_checker30210,output_checker30211,vec__30205,opts__7795__auto__))
,schema.core.make_fn_schema.call(null,output_schema30208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30209], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7795__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30178,new cljs.core.Keyword(null,"data","data",-232669377),data__7794__auto__], null));
};
var app_view = function (data__7794__auto__,owner30178,var_args){
var p__30180 = null;if (arguments.length > 2) {
  p__30180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__7794__auto__,owner30178,p__30180);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__30235){
var data__7794__auto__ = cljs.core.first(arglist__30235);
arglist__30235 = cljs.core.next(arglist__30235);
var owner30178 = cljs.core.first(arglist__30235);
var p__30180 = cljs.core.rest(arglist__30235);
return app_view__delegate(data__7794__auto__,owner30178,p__30180);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
jdkealy.app.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__7763__auto__){return om.core.build.call(null,jdkealy.app.app_view,cursor__7763__auto__);
});
var __GT_app_view__2 = (function (cursor__7763__auto__,m30179){return om.core.build.call(null,jdkealy.app.app_view,cursor__7763__auto__,m30179);
});
__GT_app_view = function(cursor__7763__auto__,m30179){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__7763__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__7763__auto__,m30179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
om.core.root.call(null,jdkealy.app.app_view,jdkealy.app.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channels","channels",1132759174),jdkealy.app.channels,new cljs.core.Keyword(null,"broadcasters","broadcasters",-1227505505),app.broadcasters], null)], null));
