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
return (function (state_25195){var state_val_25196 = (state_25195[(1)]);if((state_val_25196 === (2)))
{var inst_25190 = (state_25195[(2)]);var inst_25191 = om.core.get_props.call(null,owner);var inst_25192 = (function (){var res = inst_25190;return ((function (res,inst_25190,inst_25191,state_val_25196,c__9029__auto__){
return (function (props){return cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"stories","stories",-1910187794),cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(res)));
});
;})(res,inst_25190,inst_25191,state_val_25196,c__9029__auto__))
})();var inst_25193 = om.core.transact_BANG_.call(null,inst_25191,inst_25192);var state_25195__$1 = state_25195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25195__$1,inst_25193);
} else
{if((state_val_25196 === (1)))
{var inst_25187 = ("/edn/stories.edn");var inst_25188 = cljs_http.client.get.call(null,inst_25187);var state_25195__$1 = state_25195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25195__$1,(2),inst_25188);
} else
{return null;
}
}
});})(c__9029__auto__))
;return ((function (switch__9014__auto__,c__9029__auto__){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_25200 = [null,null,null,null,null,null,null];(statearr_25200[(0)] = state_machine__9015__auto__);
(statearr_25200[(1)] = (1));
return statearr_25200;
});
var state_machine__9015__auto____1 = (function (state_25195){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_25195);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e25201){if((e25201 instanceof Object))
{var ex__9018__auto__ = e25201;var statearr_25202_25204 = state_25195;(statearr_25202_25204[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25201;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25205 = state_25195;
state_25195 = G__25205;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_25195){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_25195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto__))
})();var state__9031__auto__ = (function (){var statearr_25203 = f__9030__auto__.call(null);(statearr_25203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto__);
return statearr_25203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto__))
);
return c__9029__auto__;
});
/**
* @param {...*} var_args
*/
jdkealy.app.app_view = (function() { 
var app_view__delegate = function (data__7794__auto__,owner25206,p__25208){var vec__25231 = p__25208;var opts__7795__auto__ = cljs.core.nth.call(null,vec__25231,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema25234 = schema.core.Any;var input_schema25235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map25232","map25232",134263788,null))], null);var input_checker25236 = schema.core.checker.call(null,input_schema25235);var output_checker25237 = schema.core.checker.call(null,output_schema25234);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__){
return (function fnk25233(G__25238){var validate__5989__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__5989__auto__))
{var args__5990__auto___25253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25238], null);var temp__4126__auto___25254 = input_checker25236.call(null,args__5990__auto___25253);if(cljs.core.truth_(temp__4126__auto___25254))
{var error__5991__auto___25255 = temp__4126__auto___25254;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk25233","fnk25233",1448385245,null),cljs.core.pr_str.call(null,error__5991__auto___25255)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25235,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___25253,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___25255], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var map25232 = G__25238;while(true){
if(cljs.core.map_QMARK_.call(null,map25232))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map25232)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map25232,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map25232,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof jdkealy.app.t25246 !== 'undefined')
{} else
{
/**
* @constructor
*/
jdkealy.app.t25246 = (function (data__7794__auto__,app_view,output_checker25237,owner,opts__7795__auto__,data,input_checker25236,G__25238,map25232,owner25206,validate__5989__auto__,p__25208,vec__25231,input_schema25235,output_schema25234,ufv__,fnk25233,meta25247){
this.data__7794__auto__ = data__7794__auto__;
this.app_view = app_view;
this.output_checker25237 = output_checker25237;
this.owner = owner;
this.opts__7795__auto__ = opts__7795__auto__;
this.data = data;
this.input_checker25236 = input_checker25236;
this.G__25238 = G__25238;
this.map25232 = map25232;
this.owner25206 = owner25206;
this.validate__5989__auto__ = validate__5989__auto__;
this.p__25208 = p__25208;
this.vec__25231 = vec__25231;
this.input_schema25235 = input_schema25235;
this.output_schema25234 = output_schema25234;
this.ufv__ = ufv__;
this.fnk25233 = fnk25233;
this.meta25247 = meta25247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jdkealy.app.t25246.cljs$lang$type = true;
jdkealy.app.t25246.cljs$lang$ctorStr = "jdkealy.app/t25246";
jdkealy.app.t25246.cljs$lang$ctorPrWriter = ((function (owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__){
return (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"jdkealy.app/t25246");
});})(owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__))
;
jdkealy.app.t25246.prototype.om$core$IRenderState$ = true;
jdkealy.app.t25246.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "nav"},React.DOM.div({"className": "wrap"},React.DOM.div({"className": "active header-font logo nav-element"},React.DOM.div({"className": "head-font bold"},"JOHNKEALY.cOM")))),React.DOM.div({"className": "wrap body"},React.DOM.div({"className": "left-bar"},"hi"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (___$1,owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__){
return (function (e){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"main"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),cljs.core.map.call(null,((function (___$1,owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__){
return (function (p){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null);
});})(___$1,owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__))
,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e))], null)], null);
});})(___$1,owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__))
,new cljs.core.Keyword(null,"stories","stories",-1910187794).cljs$core$IFn$_invoke$arity$1(om.core.get_props.call(null,self__.owner))))));
});})(owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__))
;
jdkealy.app.t25246.prototype.om$core$IWillMount$ = true;
jdkealy.app.t25246.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__){
return (function (this$){var self__ = this;
var this$__$1 = this;return jdkealy.app.do_get_stories.call(null,self__.owner);
});})(owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__))
;
jdkealy.app.t25246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__){
return (function (_25248){var self__ = this;
var _25248__$1 = this;return self__.meta25247;
});})(owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__))
;
jdkealy.app.t25246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__){
return (function (_25248,meta25247__$1){var self__ = this;
var _25248__$1 = this;return (new jdkealy.app.t25246(self__.data__7794__auto__,self__.app_view,self__.output_checker25237,self__.owner,self__.opts__7795__auto__,self__.data,self__.input_checker25236,self__.G__25238,self__.map25232,self__.owner25206,self__.validate__5989__auto__,self__.p__25208,self__.vec__25231,self__.input_schema25235,self__.output_schema25234,self__.ufv__,self__.fnk25233,meta25247__$1));
});})(owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__))
;
jdkealy.app.__GT_t25246 = ((function (owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__){
return (function __GT_t25246(data__7794__auto____$1,app_view__$1,output_checker25237__$1,owner__$1,opts__7795__auto____$1,data__$1,input_checker25236__$1,G__25238__$1,map25232__$1,owner25206__$1,validate__5989__auto____$1,p__25208__$1,vec__25231__$1,input_schema25235__$1,output_schema25234__$1,ufv____$1,fnk25233__$1,meta25247){return (new jdkealy.app.t25246(data__7794__auto____$1,app_view__$1,output_checker25237__$1,owner__$1,opts__7795__auto____$1,data__$1,input_checker25236__$1,G__25238__$1,map25232__$1,owner25206__$1,validate__5989__auto____$1,p__25208__$1,vec__25231__$1,input_schema25235__$1,output_schema25234__$1,ufv____$1,fnk25233__$1,meta25247));
});})(owner,data,validate__5989__auto__,ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__))
;
}
return (new jdkealy.app.t25246(data__7794__auto__,app_view,output_checker25237,owner,opts__7795__auto__,data,input_checker25236,G__25238,map25232,owner25206,validate__5989__auto__,p__25208,vec__25231,input_schema25235,output_schema25234,ufv__,fnk25233,null));
break;
}
})();if(cljs.core.truth_(validate__5989__auto__))
{var temp__4126__auto___25256 = output_checker25237.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___25256))
{var error__5991__auto___25257 = temp__4126__auto___25256;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk25233","fnk25233",1448385245,null),cljs.core.pr_str.call(null,error__5991__auto___25257)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25234,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___25257], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv__,output_schema25234,input_schema25235,input_checker25236,output_checker25237,vec__25231,opts__7795__auto__))
,schema.core.make_fn_schema.call(null,output_schema25234,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25235], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7795__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner25206,new cljs.core.Keyword(null,"data","data",-232669377),data__7794__auto__], null));
};
var app_view = function (data__7794__auto__,owner25206,var_args){
var p__25208 = null;if (arguments.length > 2) {
  p__25208 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__7794__auto__,owner25206,p__25208);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__25258){
var data__7794__auto__ = cljs.core.first(arglist__25258);
arglist__25258 = cljs.core.next(arglist__25258);
var owner25206 = cljs.core.first(arglist__25258);
var p__25208 = cljs.core.rest(arglist__25258);
return app_view__delegate(data__7794__auto__,owner25206,p__25208);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
jdkealy.app.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__7763__auto__){return om.core.build.call(null,jdkealy.app.app_view,cursor__7763__auto__);
});
var __GT_app_view__2 = (function (cursor__7763__auto__,m25207){return om.core.build.call(null,jdkealy.app.app_view,cursor__7763__auto__,m25207);
});
__GT_app_view = function(cursor__7763__auto__,m25207){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__7763__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__7763__auto__,m25207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
om.core.root.call(null,jdkealy.app.app_view,jdkealy.app.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channels","channels",1132759174),jdkealy.app.channels,new cljs.core.Keyword(null,"broadcasters","broadcasters",-1227505505),app.broadcasters], null)], null));
