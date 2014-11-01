// Compiled by ClojureScript 0.0-2322
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.encore');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
taoensso.sente.chan_QMARK_ = (function chan_QMARK_(x){return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.sente.validate_event_form = (function validate_event_form(x){if(!(cljs.core.vector_QMARK_.call(null,x)))
{return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else
{if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x))))
{return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else
{var vec__20695 = x;var ev_id = cljs.core.nth.call(null,vec__20695,(0),null);var _ = cljs.core.nth.call(null,vec__20695,(1),null);if(!((ev_id instanceof cljs.core.Keyword)))
{return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else
{if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id)))
{return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else
{return null;

}
}

}
}
});
/**
* Valid [ev-id ?ev-data] form?
*/
taoensso.sente.event_QMARK_ = (function event_QMARK_(x){return (taoensso.sente.validate_event_form.call(null,x) == null);
});
taoensso.sente.assert_event = (function assert_event(x){var temp__4126__auto__ = taoensso.sente.validate_event_form.call(null,x);if(cljs.core.truth_(temp__4126__auto__))
{var _QMARK_err = temp__4126__auto__;var err_fmt = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20697 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);switch (G__20697) {
case "else":
return "Malformed event (unknown error).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-type":
return "Malformed event (wrong type).";

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err))));

}
})())+" Event should be of `[ev-id ?ev-data]` form: %s");throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else
{return null;
}
});
taoensso.sente.cb_success_QMARK_ = (function cb_success_QMARK_(cb_reply){return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply));
});
/**
* edn -> [clj ?cb-uuid]
*/
taoensso.sente.unwrap_edn_msg_with__QMARK_cb__GT_clj = (function unwrap_edn_msg_with__QMARK_cb__GT_clj(edn){var msg = cljs.reader.read_string.call(null,edn);var _QMARK_cb_uuid = (function (){var and__3563__auto__ = cljs.core.map_QMARK_.call(null,msg);if(and__3563__auto__)
{return new cljs.core.Keyword("chsk","cb-uuid","chsk/cb-uuid",767803545).cljs$core$IFn$_invoke$arity$1(msg);
} else
{return and__3563__auto__;
}
})();var clj = ((cljs.core.not.call(null,_QMARK_cb_uuid))?msg:new cljs.core.Keyword("chsk","clj","chsk/clj",-655164811).cljs$core$IFn$_invoke$arity$1(msg));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid], null);
});
taoensso.sente.assert_send_args = (function assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){taoensso.sente.assert_event.call(null,x);
if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("encore","nneg-int?","encore/nneg-int?",1565384456,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)))))))));
}
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.sente.chan_QMARK_.call(null,_QMARK_cb)))
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",1219428,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))))))));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function pull_unused_cb_fn_BANG_(cbs_waiting_,cb_uuid){if(cljs.core.truth_(cb_uuid))
{return cljs.core.first.call(null,cljs.core.swap_BANG_.call(null,cbs_waiting_,(function (p__20701){var vec__20702 = p__20701;var _ = cljs.core.nth.call(null,vec__20702,(0),null);var m = cljs.core.nth.call(null,vec__20702,(1),null);var temp__4124__auto__ = m.call(null,cb_uuid);if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.dissoc.call(null,m,cb_uuid)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
}
})));
} else
{return null;
}
});
/**
* clj -> [edn ?cb-uuid]
*/
taoensso.sente.wrap_clj__GT_edn_msg_with__QMARK_cb = (function wrap_clj__GT_edn_msg_with__QMARK_cb(cbs_waiting_,clj,_QMARK_timeout_ms,_QMARK_cb_fn){var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null):null);var msg = ((cljs.core.not.call(null,_QMARK_cb_uuid))?clj:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("chsk","clj","chsk/clj",-655164811),clj,new cljs.core.Keyword("chsk","cb-uuid","chsk/cb-uuid",767803545),_QMARK_cb_uuid], null));var edn = cljs.core.pr_str.call(null,msg);if(cljs.core.truth_(_QMARK_cb_uuid))
{cljs.core.swap_BANG_.call(null,cbs_waiting_,((function (_QMARK_cb_uuid,msg,edn){
return (function (p__20729){var vec__20730 = p__20729;var _ = cljs.core.nth.call(null,vec__20730,(0),null);var m = cljs.core.nth.call(null,vec__20730,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,_QMARK_cb_uuid,_QMARK_cb_fn)], null);
});})(_QMARK_cb_uuid,msg,edn))
);
if(cljs.core.truth_(_QMARK_timeout_ms))
{var c__9029__auto___20755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___20755,_QMARK_cb_uuid,msg,edn){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___20755,_QMARK_cb_uuid,msg,edn){
return (function (state_20741){var state_val_20742 = (state_20741[(1)]);if((state_val_20742 === (5)))
{var inst_20739 = (state_20741[(2)]);var state_20741__$1 = state_20741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20741__$1,inst_20739);
} else
{if((state_val_20742 === (4)))
{var state_20741__$1 = state_20741;var statearr_20743_20756 = state_20741__$1;(statearr_20743_20756[(2)] = null);
(statearr_20743_20756[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20742 === (3)))
{var inst_20734 = (state_20741[(7)]);var inst_20736 = inst_20734.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));var state_20741__$1 = state_20741;var statearr_20744_20757 = state_20741__$1;(statearr_20744_20757[(2)] = inst_20736);
(statearr_20744_20757[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20742 === (2)))
{var inst_20734 = (state_20741[(7)]);var inst_20733 = (state_20741[(2)]);var inst_20734__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,cbs_waiting_,_QMARK_cb_uuid);var state_20741__$1 = (function (){var statearr_20745 = state_20741;(statearr_20745[(7)] = inst_20734__$1);
(statearr_20745[(8)] = inst_20733);
return statearr_20745;
})();if(cljs.core.truth_(inst_20734__$1))
{var statearr_20746_20758 = state_20741__$1;(statearr_20746_20758[(1)] = (3));
} else
{var statearr_20747_20759 = state_20741__$1;(statearr_20747_20759[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20742 === (1)))
{var inst_20731 = cljs.core.async.timeout.call(null,_QMARK_timeout_ms);var state_20741__$1 = state_20741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20741__$1,(2),inst_20731);
} else
{return null;
}
}
}
}
}
});})(c__9029__auto___20755,_QMARK_cb_uuid,msg,edn))
;return ((function (switch__9014__auto__,c__9029__auto___20755,_QMARK_cb_uuid,msg,edn){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_20751 = [null,null,null,null,null,null,null,null,null];(statearr_20751[(0)] = state_machine__9015__auto__);
(statearr_20751[(1)] = (1));
return statearr_20751;
});
var state_machine__9015__auto____1 = (function (state_20741){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_20741);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e20752){if((e20752 instanceof Object))
{var ex__9018__auto__ = e20752;var statearr_20753_20760 = state_20741;(statearr_20753_20760[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20741);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20752;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20761 = state_20741;
state_20741 = G__20761;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_20741){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_20741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___20755,_QMARK_cb_uuid,msg,edn))
})();var state__9031__auto__ = (function (){var statearr_20754 = f__9030__auto__.call(null);(statearr_20754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___20755);
return statearr_20754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___20755,_QMARK_cb_uuid,msg,edn))
);
} else
{}
} else
{}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn,_QMARK_cb_uuid], null);
});
taoensso.sente.IChSocket = (function (){var obj20763 = {};return obj20763;
})();
taoensso.sente.chsk_send_BANG_ = (function() {
var chsk_send_BANG_ = null;
var chsk_send_BANG___2 = (function (chsk,ev){if((function (){var and__3563__auto__ = chsk;if(and__3563__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2;
} else
{return and__3563__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2(chsk,ev);
} else
{var x__4202__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3575__auto__ = (taoensso.sente.chsk_send_BANG_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (taoensso.sente.chsk_send_BANG_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!",chsk);
}
}
})().call(null,chsk,ev);
}
});
var chsk_send_BANG___4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){if((function (){var and__3563__auto__ = chsk;if(and__3563__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4;
} else
{return and__3563__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4(chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
} else
{var x__4202__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3575__auto__ = (taoensso.sente.chsk_send_BANG_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (taoensso.sente.chsk_send_BANG_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!",chsk);
}
}
})().call(null,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
});
chsk_send_BANG_ = function(chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
switch(arguments.length){
case 2:
return chsk_send_BANG___2.call(this,chsk,ev);
case 4:
return chsk_send_BANG___4.call(this,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = chsk_send_BANG___2;
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = chsk_send_BANG___4;
return chsk_send_BANG_;
})()
;
taoensso.sente.chsk_make_BANG_ = (function chsk_make_BANG_(chsk){if((function (){var and__3563__auto__ = chsk;if(and__3563__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_make_BANG_$arity$1;
} else
{return and__3563__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_make_BANG_$arity$1(chsk);
} else
{var x__4202__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3575__auto__ = (taoensso.sente.chsk_make_BANG_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (taoensso.sente.chsk_make_BANG_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-make!",chsk);
}
}
})().call(null,chsk);
}
});
taoensso.sente.chsk_reconnect_BANG_ = (function chsk_reconnect_BANG_(chsk){if((function (){var and__3563__auto__ = chsk;if(and__3563__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1;
} else
{return and__3563__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else
{var x__4202__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3575__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
})().call(null,chsk);
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function merge_GT_chsk_state_BANG_(p__20764,merge_state){var map__20767 = p__20764;var map__20767__$1 = ((cljs.core.seq_QMARK_.call(null,map__20767))?cljs.core.apply.call(null,cljs.core.hash_map,map__20767):map__20767);var chsk = map__20767__$1;var state_ = cljs.core.get.call(null,map__20767__$1,new cljs.core.Keyword(null,"state_","state_",957667102));var chs = cljs.core.get.call(null,map__20767__$1,new cljs.core.Keyword(null,"chs","chs",376886120));var vec__20768 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__20767,map__20767__$1,chsk,state_,chs){
return (function (old_state){var new_state = cljs.core.merge.call(null,old_state,merge_state);return taoensso.encore.swapped.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
});})(map__20767,map__20767__$1,chsk,state_,chs))
);var old_state = cljs.core.nth.call(null,vec__20768,(0),null);var new_state = cljs.core.nth.call(null,vec__20768,(1),null);if(cljs.core.not_EQ_.call(null,old_state,new_state))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);
return new_state;
} else
{return null;
}
});
taoensso.sente.wrap_cb_chan_as_fn = (function wrap_cb_chan_as_fn(_QMARK_cb,ev){if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)))
{return _QMARK_cb;
} else
{if(taoensso.sente.chan_QMARK_.call(null,_QMARK_cb))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",1219428,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))));
}
taoensso.sente.assert_event.call(null,ev);
var vec__20770 = ev;var ev_id = cljs.core.nth.call(null,vec__20770,(0),null);var _ = cljs.core.nth.call(null,vec__20770,(1),null);var cb_ch = _QMARK_cb;return ((function (vec__20770,ev_id,_,cb_ch){
return (function (reply){return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.fq_name.call(null,ev_id))+".cb")),reply], null));
});
;})(vec__20770,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function receive_buffered_evs_BANG_(ch_recv,clj){if(cljs.core.vector_QMARK_.call(null,clj))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"clj","clj",980036099,null)))))));
}
var buffered_evs = clj;var seq__20775 = cljs.core.seq.call(null,buffered_evs);var chunk__20776 = null;var count__20777 = (0);var i__20778 = (0);while(true){
if((i__20778 < count__20777))
{var ev = cljs.core._nth.call(null,chunk__20776,i__20778);taoensso.sente.assert_event.call(null,ev);
cljs.core.async.put_BANG_.call(null,ch_recv,ev);
{
var G__20779 = seq__20775;
var G__20780 = chunk__20776;
var G__20781 = count__20777;
var G__20782 = (i__20778 + (1));
seq__20775 = G__20779;
chunk__20776 = G__20780;
count__20777 = G__20781;
i__20778 = G__20782;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20775);if(temp__4126__auto__)
{var seq__20775__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20775__$1))
{var c__4331__auto__ = cljs.core.chunk_first.call(null,seq__20775__$1);{
var G__20783 = cljs.core.chunk_rest.call(null,seq__20775__$1);
var G__20784 = c__4331__auto__;
var G__20785 = cljs.core.count.call(null,c__4331__auto__);
var G__20786 = (0);
seq__20775 = G__20783;
chunk__20776 = G__20784;
count__20777 = G__20785;
i__20778 = G__20786;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__20775__$1);taoensso.sente.assert_event.call(null,ev);
cljs.core.async.put_BANG_.call(null,ch_recv,ev);
{
var G__20787 = cljs.core.next.call(null,seq__20775__$1);
var G__20788 = null;
var G__20789 = (0);
var G__20790 = (0);
seq__20775 = G__20787;
chunk__20776 = G__20788;
count__20777 = G__20789;
i__20778 = G__20790;
continue;
}
}
} else
{return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function handle_when_handshake_BANG_(chsk,clj){if((cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686))))
{var vec__20793 = clj;var _ = cljs.core.nth.call(null,vec__20793,(0),null);var vec__20794 = cljs.core.nth.call(null,vec__20793,(1),null);var uid = cljs.core.nth.call(null,vec__20794,(0),null);var csrf_token = cljs.core.nth.call(null,vec__20794,(1),null);if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,csrf_token)))
{taoensso.encore.warnf.call(null,"Sente warning: NO CSRF TOKEN AVAILABLE");
} else
{}
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null));
return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else
{return null;
}
});

/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} socket_
* @param {*} kalive_ms
* @param {*} kalive_timer_
* @param {*} kalive_due_QMARK__
* @param {*} nattempt_
* @param {*} cbs_waiting_
* @param {*} state_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChWebSocket = (function (url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,__meta,__extmap){
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>9){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4161__auto__,k__4162__auto__){var self__ = this;
var this__4161__auto____$1 = this;return cljs.core._lookup.call(null,this__4161__auto____$1,k__4162__auto__,null);
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4163__auto__,k20796,else__4164__auto__){var self__ = this;
var this__4163__auto____$1 = this;var G__20798 = (((k20796 instanceof cljs.core.Keyword))?k20796.fqn:null);switch (G__20798) {
case "state_":
return self__.state_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "socket_":
return self__.socket_;

break;
case "chs":
return self__.chs;

break;
case "url":
return self__.url;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20796,else__4164__auto__);

}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4175__auto__,writer__4176__auto__,opts__4177__auto__){var self__ = this;
var this__4175__auto____$1 = this;var pr_pair__4178__auto__ = ((function (this__4175__auto____$1){
return (function (keyval__4179__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4176__auto__,cljs.core.pr_writer,""," ","",opts__4177__auto__,keyval__4179__auto__);
});})(this__4175__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4176__auto__,pr_pair__4178__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4177__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null))], null),self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return self__.__meta;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4155__auto__){var self__ = this;
var this__4155__auto____$1 = this;return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4165__auto__){var self__ = this;
var this__4165__auto____$1 = this;return (9 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4156__auto__){var self__ = this;
var this__4156__auto____$1 = this;var h__3986__auto__ = self__.__hash;if(!((h__3986__auto__ == null)))
{return h__3986__auto__;
} else
{var h__3986__auto____$1 = cljs.core.hash_imap.call(null,this__4156__auto____$1);self__.__hash = h__3986__auto____$1;
return h__3986__auto____$1;
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4157__auto__,other__4158__auto__){var self__ = this;
var this__4157__auto____$1 = this;if(cljs.core.truth_((function (){var and__3563__auto__ = other__4158__auto__;if(cljs.core.truth_(and__3563__auto__))
{return ((this__4157__auto____$1.constructor === other__4158__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4157__auto____$1,other__4158__auto__));
} else
{return and__3563__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4170__auto__,k__4171__auto__){var self__ = this;
var this__4170__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4171__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4170__auto____$1),self__.__meta),k__4171__auto__);
} else
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4171__auto__)),null));
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4168__auto__,k__4169__auto__,G__20795){var self__ = this;
var this__4168__auto____$1 = this;var pred__20799 = cljs.core.keyword_identical_QMARK_;var expr__20800 = k__4169__auto__;if(cljs.core.truth_(pred__20799.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__20800)))
{return (new taoensso.sente.ChWebSocket(G__20795,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20799.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__20800)))
{return (new taoensso.sente.ChWebSocket(self__.url,G__20795,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20799.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__20800)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,G__20795,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20799.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__20800)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,G__20795,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20799.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__20800)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__20795,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20799.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__20800)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__20795,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20799.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__20800)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__20795,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20799.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__20800)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__20795,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20799.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__20800)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__20795,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4169__auto__,G__20795),null));
}
}
}
}
}
}
}
}
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4173__auto__){var self__ = this;
var this__4173__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null))], null),self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4160__auto__,G__20795){var self__ = this;
var this__4160__auto____$1 = this;return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__20795,self__.__extmap,self__.__hash));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4166__auto__,entry__4167__auto__){var self__ = this;
var this__4166__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4167__auto__))
{return cljs.core._assoc.call(null,this__4166__auto____$1,cljs.core._nth.call(null,entry__4167__auto__,(0)),cljs.core._nth.call(null,entry__4167__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4166__auto____$1,entry__4167__auto__);
}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2 = (function (chsk,ev){var self__ = this;
var chsk__$1 = this;return taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,ev,null,null);
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){var self__ = this;
var chsk__$1 = this;taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.wrap_cb_chan_as_fn.call(null,_QMARK_cb,ev);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))))
{taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else
{return null;
}
} else
{var vec__20802 = taoensso.sente.wrap_clj__GT_edn_msg_with__QMARK_cb.call(null,self__.cbs_waiting_,ev,_QMARK_timeout_ms,_QMARK_cb_fn);var edn = cljs.core.nth.call(null,vec__20802,(0),null);var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__20802,(1),null);try{cljs.core.deref.call(null,self__.socket_).send(edn);
cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);
return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e20803){if((e20803 instanceof Error))
{var e = e20803;taoensso.encore.errorf.call(null,"Chsk send %s",e);
if(cljs.core.truth_(_QMARK_cb_uuid))
{var cb_fn_STAR__20811 = (function (){var or__3575__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return _QMARK_cb_fn;
}
})();cb_fn_STAR__20811.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else
{}
return false;
} else
{throw e20803;

}
}}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;var temp__4126__auto__ = cljs.core.deref.call(null,self__.socket_);if(cljs.core.truth_(temp__4126__auto__))
{var s = temp__4126__auto__;return s.close();
} else
{return null;
}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_make_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;var temp__4126__auto__ = (function (){var or__3575__auto__ = (window["WebSocket"]);if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return (window["MozWebSocket"]);
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var WebSocket = temp__4126__auto__;((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function connect_BANG_(){var retry_BANG_ = ((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function (){var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));
taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);
return taoensso.encore.set_exp_backoff_timeout_BANG_.call(null,connect_BANG_,nattempt_STAR_);
});})(WebSocket,temp__4126__auto__,chsk__$1))
;var temp__4124__auto__ = (function (){try{return (new WebSocket(self__.url));
}catch (e20807){if((e20807 instanceof Error))
{var e = e20807;taoensso.encore.errorf.call(null,"WebSocket js/Error: %s",e);
return false;
} else
{throw e20807;

}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var socket = temp__4124__auto__;return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__20808 = socket;(G__20808["onerror"] = ((function (G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){return taoensso.encore.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
(G__20808["onmessage"] = ((function (G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){var edn = (ws_ev["data"]);var vec__20809 = taoensso.sente.unwrap_edn_msg_with__QMARK_cb__GT_clj.call(null,edn);var clj = cljs.core.nth.call(null,vec__20809,(0),null);var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__20809,(1),null);var or__3575__auto__ = (function (){var and__3563__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);if(cljs.core.truth_(and__3563__auto__))
{return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else
{return and__3563__auto__;
}
})();if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{if(cljs.core.truth_(_QMARK_cb_uuid))
{var temp__4124__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);if(cljs.core.truth_(temp__4124__auto____$1))
{var cb_fn = temp__4124__auto____$1;return cb_fn.call(null,clj);
} else
{return taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else
{var buffered_evs = clj;return taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"recv","recv",558628610).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs);
}
}
});})(G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
(G__20808["onopen"] = ((function (G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (){if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__)))
{taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else
{}
return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
(G__20808["onclose"] = ((function (G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
return retry_BANG_.call(null);
});})(G__20808,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
return G__20808;
})());
} else
{return retry_BANG_.call(null);
}
});})(WebSocket,temp__4126__auto__,chsk__$1))
.call(null);
return chsk__$1;
} else
{return null;
}
});
taoensso.sente.ChWebSocket.cljs$lang$type = true;
taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4195__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});
taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4195__auto__,writer__4196__auto__){return cljs.core._write.call(null,writer__4196__auto__,"taoensso.sente/ChWebSocket");
});
taoensso.sente.__GT_ChWebSocket = (function __GT_ChWebSocket(url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_){return (new taoensso.sente.ChWebSocket(url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_));
});
taoensso.sente.map__GT_ChWebSocket = (function map__GT_ChWebSocket(G__20797){return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__20797),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__20797),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__20797),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__20797),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__20797),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__20797),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__20797),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__20797),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__20797),null,cljs.core.dissoc.call(null,G__20797,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102))));
});

/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} timeout
* @param {*} ajax_client_uuid
* @param {*} curr_xhr_
* @param {*} state_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChAjaxSocket = (function (url,chs,timeout,ajax_client_uuid,curr_xhr_,state_,__meta,__extmap){
this.url = url;
this.chs = chs;
this.timeout = timeout;
this.ajax_client_uuid = ajax_client_uuid;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4161__auto__,k__4162__auto__){var self__ = this;
var this__4161__auto____$1 = this;return cljs.core._lookup.call(null,this__4161__auto____$1,k__4162__auto__,null);
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4163__auto__,k20813,else__4164__auto__){var self__ = this;
var this__4163__auto____$1 = this;var G__20815 = (((k20813 instanceof cljs.core.Keyword))?k20813.fqn:null);switch (G__20815) {
case "state_":
return self__.state_;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ajax-client-uuid":
return self__.ajax_client_uuid;

break;
case "timeout":
return self__.timeout;

break;
case "chs":
return self__.chs;

break;
case "url":
return self__.url;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20813,else__4164__auto__);

}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4175__auto__,writer__4176__auto__,opts__4177__auto__){var self__ = this;
var this__4175__auto____$1 = this;var pr_pair__4178__auto__ = ((function (this__4175__auto____$1){
return (function (keyval__4179__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4176__auto__,cljs.core.pr_writer,""," ","",opts__4177__auto__,keyval__4179__auto__);
});})(this__4175__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4176__auto__,pr_pair__4178__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4177__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout","timeout",-318625318),self__.timeout],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null))], null),self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return self__.__meta;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4155__auto__){var self__ = this;
var this__4155__auto____$1 = this;return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4165__auto__){var self__ = this;
var this__4165__auto____$1 = this;return (6 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4156__auto__){var self__ = this;
var this__4156__auto____$1 = this;var h__3986__auto__ = self__.__hash;if(!((h__3986__auto__ == null)))
{return h__3986__auto__;
} else
{var h__3986__auto____$1 = cljs.core.hash_imap.call(null,this__4156__auto____$1);self__.__hash = h__3986__auto____$1;
return h__3986__auto____$1;
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4157__auto__,other__4158__auto__){var self__ = this;
var this__4157__auto____$1 = this;if(cljs.core.truth_((function (){var and__3563__auto__ = other__4158__auto__;if(cljs.core.truth_(and__3563__auto__))
{return ((this__4157__auto____$1.constructor === other__4158__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4157__auto____$1,other__4158__auto__));
} else
{return and__3563__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4170__auto__,k__4171__auto__){var self__ = this;
var this__4170__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4171__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4170__auto____$1),self__.__meta),k__4171__auto__);
} else
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4171__auto__)),null));
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4168__auto__,k__4169__auto__,G__20812){var self__ = this;
var this__4168__auto____$1 = this;var pred__20816 = cljs.core.keyword_identical_QMARK_;var expr__20817 = k__4169__auto__;if(cljs.core.truth_(pred__20816.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__20817)))
{return (new taoensso.sente.ChAjaxSocket(G__20812,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20816.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__20817)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,G__20812,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20816.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),expr__20817)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,G__20812,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20816.call(null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),expr__20817)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,G__20812,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20816.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__20817)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,G__20812,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20816.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__20817)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,G__20812,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4169__auto__,G__20812),null));
}
}
}
}
}
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4173__auto__){var self__ = this;
var this__4173__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout","timeout",-318625318),self__.timeout],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null))], null),self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4160__auto__,G__20812){var self__ = this;
var this__4160__auto____$1 = this;return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,G__20812,self__.__extmap,self__.__hash));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4166__auto__,entry__4167__auto__){var self__ = this;
var this__4166__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4167__auto__))
{return cljs.core._assoc.call(null,this__4166__auto____$1,cljs.core._nth.call(null,entry__4167__auto__,(0)),cljs.core._nth.call(null,entry__4167__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4166__auto____$1,entry__4167__auto__);
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2 = (function (chsk,ev){var self__ = this;
var chsk__$1 = this;return taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,ev,null,null);
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){var self__ = this;
var chsk__$1 = this;taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.wrap_cb_chan_as_fn.call(null,_QMARK_cb,ev);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))))
{taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else
{return null;
}
} else
{taoensso.encore.ajax_lite.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout","timeout",-318625318),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var dummy_cb_QMARK_ = cljs.core.not.call(null,_QMARK_cb_fn);var msg = ((!(dummy_cb_QMARK_))?ev:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("chsk","clj","chsk/clj",-655164811),ev,new cljs.core.Keyword("chsk","dummy-cb?","chsk/dummy-cb?",1470544223),true], null));var edn = cljs.core.pr_str.call(null,msg);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"edn","edn",1317840885),edn,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))], null);
})()], null),((function (_QMARK_cb_fn,chsk__$1){
return (function ajax_cb(p__20819){var map__20821 = p__20819;var map__20821__$1 = ((cljs.core.seq_QMARK_.call(null,map__20821))?cljs.core.apply.call(null,cljs.core.hash_map,map__20821):map__20821);var error = cljs.core.get.call(null,map__20821__$1,new cljs.core.Keyword(null,"error","error",-978969032));var content = cljs.core.get.call(null,map__20821__$1,new cljs.core.Keyword(null,"content","content",15833224));if(cljs.core.truth_(error))
{if(cljs.core._EQ_.call(null,error,new cljs.core.Keyword(null,"timeout","timeout",-318625318)))
{if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else
{return null;
}
} else
{taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else
{return null;
}
}
} else
{var resp_edn = content;var resp_clj = cljs.reader.read_string.call(null,resp_edn);if(cljs.core.truth_(_QMARK_cb_fn))
{_QMARK_cb_fn.call(null,resp_clj);
} else
{if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","cb-dummy-200","chsk/cb-dummy-200",70990919)))
{taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else
{}
}
return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1))
);
return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;var temp__4126__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);if(cljs.core.truth_(temp__4126__auto__))
{var x = temp__4126__auto__;return x.abort();
} else
{return null;
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_make_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;((function (chsk__$1){
return (function async_poll_for_update_BANG_(nattempt){var retry_BANG_ = ((function (chsk__$1){
return (function (){var nattempt_STAR_ = (nattempt + (1));taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);
return taoensso.encore.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1))
;var ajax_req_BANG_ = ((function (retry_BANG_,chsk__$1){
return (function (){return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.encore.ajax_lite.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout","timeout",-318625318),self__.timeout,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid], null)], null),((function (retry_BANG_,chsk__$1){
return (function ajax_cb(p__20825){var map__20827 = p__20825;var map__20827__$1 = ((cljs.core.seq_QMARK_.call(null,map__20827))?cljs.core.apply.call(null,cljs.core.hash_map,map__20827):map__20827);var error = cljs.core.get.call(null,map__20827__$1,new cljs.core.Keyword(null,"error","error",-978969032));var content = cljs.core.get.call(null,map__20827__$1,new cljs.core.Keyword(null,"content","content",15833224));if(cljs.core.truth_(error))
{if((cljs.core._EQ_.call(null,error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))) || (cljs.core._EQ_.call(null,error,new cljs.core.Keyword(null,"abort","abort",521193198))))
{return async_poll_for_update_BANG_.call(null,(0));
} else
{taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
return retry_BANG_.call(null);
}
} else
{var edn = content;var clj = cljs.reader.read_string.call(null,edn);var or__3575__auto___20829 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);if(cljs.core.truth_(or__3575__auto___20829))
{} else
{var buffered_evs_20830 = clj;taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"recv","recv",558628610).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs_20830);
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
return async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
});})(retry_BANG_,chsk__$1))
;var temp__4124__auto__ = (window["Pace"]);if(cljs.core.truth_(temp__4124__auto__))
{var pace = temp__4124__auto__;return pace.ignore(ajax_req_BANG_);
} else
{return ajax_req_BANG_.call(null);
}
});})(chsk__$1))
.call(null,(0));
return chsk__$1;
});
taoensso.sente.ChAjaxSocket.cljs$lang$type = true;
taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4195__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});
taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4195__auto__,writer__4196__auto__){return cljs.core._write.call(null,writer__4196__auto__,"taoensso.sente/ChAjaxSocket");
});
taoensso.sente.__GT_ChAjaxSocket = (function __GT_ChAjaxSocket(url,chs,timeout,ajax_client_uuid,curr_xhr_,state_){return (new taoensso.sente.ChAjaxSocket(url,chs,timeout,ajax_client_uuid,curr_xhr_,state_));
});
taoensso.sente.map__GT_ChAjaxSocket = (function map__GT_ChAjaxSocket(G__20814){return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__20814),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__20814),new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(G__20814),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580).cljs$core$IFn$_invoke$arity$1(G__20814),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__20814),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__20814),null,cljs.core.dissoc.call(null,G__20814,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102))));
});
taoensso.sente.default_chsk_url_fn = (function default_chsk_url_fn(path,p__20831,websocket_QMARK_){var map__20833 = p__20831;var map__20833__$1 = ((cljs.core.seq_QMARK_.call(null,map__20833))?cljs.core.apply.call(null,cljs.core.hash_map,map__20833):map__20833);var window_location = map__20833__$1;var pathname = cljs.core.get.call(null,map__20833__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));var host = cljs.core.get.call(null,map__20833__$1,new cljs.core.Keyword(null,"host","host",-1558485167));var protocol = cljs.core.get.call(null,map__20833__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:")))+"//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3575__auto__ = path;if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return pathname;
}
})()));
});
/**
* Returns `{:keys [chsk ch-recv send-fn state]}` for new ChWebSocket/ChAjaxSocket:
* * chsk    - The IChSocket implementer. You can usually ignore this.
* * ch-recv - core.async channel that'll receive async (notably server>user)
* events.
* * send-fn - API fn to send client>server[1].
* * state   - Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
* 
* Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
* routes should be configured accordingly.
* @param {...*} var_args
*/
taoensso.sente.make_channel_socket_BANG_ = (function() { 
var make_channel_socket_BANG___delegate = function (url,p__20834){var vec__20837 = p__20834;var map__20838 = cljs.core.nth.call(null,vec__20837,(0),null);var map__20838__$1 = ((cljs.core.seq_QMARK_.call(null,map__20838))?cljs.core.apply.call(null,cljs.core.hash_map,map__20838):map__20838);var chsk_url_fn = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);var lp_timeout = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302),(25000));var ws_kalive_ms = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));var recv_buf_or_n = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));var type = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));var _deprecated_more_opts = cljs.core.nth.call(null,vec__20837,(1),null);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null).call(null,type)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.Symbol(null,"type","type",-1480165421,null)))))));
}
if(!((_deprecated_more_opts == null)))
{taoensso.encore.warnf.call(null,"`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else
{}
var chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1))),new cljs.core.Keyword(null,"recv","recv",558628610),cljs.core.async.chan.call(null,recv_buf_or_n),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,recv_buf_or_n)], null);var window_location = taoensso.encore.get_window_location.call(null);var chsk = (function (){var or__3575__auto__ = (function (){var and__3563__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));if(and__3563__auto__)
{return taoensso.sente.chsk_make_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[ws_kalive_ms,cljs.core.atom.call(null,(0)),chs,cljs.core.atom.call(null,null),chsk_url_fn.call(null,url,window_location,new cljs.core.Keyword(null,"ws","ws",86841443)),cljs.core.atom.call(null,true),cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null)),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else
{return and__3563__auto__;
}
})();if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{var and__3563__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));if(and__3563__auto__)
{var ajax_client_uuid = taoensso.encore.uuid_str.call(null);return taoensso.sente.chsk_make_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"url","url",276297046),chsk_url_fn.call(null,url,window_location,cljs.core.not.call(null,new cljs.core.Keyword(null,"ws","ws",86841443))),new cljs.core.Keyword(null,"chs","chs",376886120),chs,new cljs.core.Keyword(null,"timeout","timeout",-318625318),lp_timeout,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),ajax_client_uuid,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))], null)));
} else
{return and__3563__auto__;
}
}
})();var ever_opened_QMARK__ = cljs.core.atom.call(null,false);var state_STAR_ = ((function (chs,window_location,chsk,ever_opened_QMARK__,vec__20837,map__20838,map__20838__$1,chsk_url_fn,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){if(cljs.core.truth_((function (){var or__3575__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));if(or__3575__auto__)
{return or__3575__auto__;
} else
{return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})()))
{return state;
} else
{cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(chs,window_location,chsk,ever_opened_QMARK__,vec__20837,map__20838,map__20838__$1,chsk_url_fn,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
;if(cljs.core.truth_(chsk))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.map_LT_.call(null,((function (chs,window_location,chsk,ever_opened_QMARK__,state_STAR_,vec__20837,map__20838,map__20838__$1,chsk_url_fn,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){if(taoensso.sente.event_QMARK_.call(null,ev))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"event?","event?",-2038386683,null),new cljs.core.Symbol(null,"ev","ev",1233704203,null)))))));
}
return ev;
});})(chs,window_location,chsk,ever_opened_QMARK__,state_STAR_,vec__20837,map__20838,map__20838__$1,chsk_url_fn,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs)),cljs.core.async.map_LT_.call(null,((function (chs,window_location,chsk,ever_opened_QMARK__,state_STAR_,vec__20837,map__20838,map__20838__$1,chsk_url_fn,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(chs,window_location,chsk,ever_opened_QMARK__,state_STAR_,vec__20837,map__20838,map__20838__$1,chsk_url_fn,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs)),cljs.core.async.map_LT_.call(null,((function (chs,window_location,chsk,ever_opened_QMARK__,state_STAR_,vec__20837,map__20838,map__20838__$1,chsk_url_fn,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(chs,window_location,chsk,ever_opened_QMARK__,state_STAR_,vec__20837,map__20838,map__20838__$1,chsk_url_fn,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"recv","recv",558628610).cljs$core$IFn$_invoke$arity$1(chs))], null))], null);
} else
{return null;
}
};
var make_channel_socket_BANG_ = function (url,var_args){
var p__20834 = null;if (arguments.length > 1) {
  p__20834 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_channel_socket_BANG___delegate.call(this,url,p__20834);};
make_channel_socket_BANG_.cljs$lang$maxFixedArity = 1;
make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__20839){
var url = cljs.core.first(arglist__20839);
var p__20834 = cljs.core.rest(arglist__20839);
return make_channel_socket_BANG___delegate(url,p__20834);
});
make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = make_channel_socket_BANG___delegate;
return make_channel_socket_BANG_;
})()
;
taoensso.sente.start_chsk_router_loop_BANG_ = (function start_chsk_router_loop_BANG_(event_handler,ch){var ctrl_ch = cljs.core.async.chan.call(null);var c__9029__auto___20918 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___20918,ctrl_ch){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___20918,ctrl_ch){
return (function (state_20901){var state_val_20902 = (state_20901[(1)]);if((state_val_20902 === (7)))
{var inst_20897 = (state_20901[(2)]);var state_20901__$1 = state_20901;var statearr_20903_20919 = state_20901__$1;(statearr_20903_20919[(2)] = inst_20897);
(statearr_20903_20919[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20902 === (6)))
{var inst_20886 = (state_20901[(7)]);var inst_20892 = cljs.core.nth.call(null,inst_20886,(0),null);var inst_20893 = cljs.core.nth.call(null,inst_20886,(1),null);var inst_20894 = event_handler.call(null,inst_20886,ch);var state_20901__$1 = (function (){var statearr_20904 = state_20901;(statearr_20904[(8)] = inst_20893);
(statearr_20904[(9)] = inst_20892);
(statearr_20904[(10)] = inst_20894);
return statearr_20904;
})();var statearr_20905_20920 = state_20901__$1;(statearr_20905_20920[(2)] = null);
(statearr_20905_20920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20902 === (5)))
{var state_20901__$1 = state_20901;var statearr_20906_20921 = state_20901__$1;(statearr_20906_20921[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));
(statearr_20906_20921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20902 === (4)))
{var inst_20885 = (state_20901[(2)]);var inst_20886 = cljs.core.nth.call(null,inst_20885,(0),null);var inst_20887 = cljs.core.nth.call(null,inst_20885,(1),null);var inst_20888 = (inst_20887 === ctrl_ch);var state_20901__$1 = (function (){var statearr_20907 = state_20901;(statearr_20907[(7)] = inst_20886);
return statearr_20907;
})();if(cljs.core.truth_(inst_20888))
{var statearr_20908_20922 = state_20901__$1;(statearr_20908_20922[(1)] = (5));
} else
{var statearr_20909_20923 = state_20901__$1;(statearr_20909_20923[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20902 === (3)))
{var inst_20899 = (state_20901[(2)]);var state_20901__$1 = state_20901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20901__$1,inst_20899);
} else
{if((state_val_20902 === (2)))
{var inst_20881 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20882 = [ch,ctrl_ch];var inst_20883 = (new cljs.core.PersistentVector(null,2,(5),inst_20881,inst_20882,null));var state_20901__$1 = state_20901;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20901__$1,(4),inst_20883);
} else
{if((state_val_20902 === (1)))
{var state_20901__$1 = state_20901;var statearr_20910_20924 = state_20901__$1;(statearr_20910_20924[(2)] = null);
(statearr_20910_20924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__9029__auto___20918,ctrl_ch))
;return ((function (switch__9014__auto__,c__9029__auto___20918,ctrl_ch){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_20914 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20914[(0)] = state_machine__9015__auto__);
(statearr_20914[(1)] = (1));
return statearr_20914;
});
var state_machine__9015__auto____1 = (function (state_20901){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_20901);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e20915){if((e20915 instanceof Object))
{var ex__9018__auto__ = e20915;var statearr_20916_20925 = state_20901;(statearr_20916_20925[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20901);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20915;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20926 = state_20901;
state_20901 = G__20926;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_20901){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_20901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___20918,ctrl_ch))
})();var state__9031__auto__ = (function (){var statearr_20917 = f__9030__auto__.call(null);(statearr_20917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___20918);
return statearr_20917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___20918,ctrl_ch))
);
return ((function (ctrl_ch){
return (function stop_BANG_(){return cljs.core.async.close_BANG_.call(null,ctrl_ch);
});
;})(ctrl_ch))
});
