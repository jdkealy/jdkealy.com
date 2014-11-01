// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17334 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17334 = (function (f,fn_handler,meta17335){
this.f = f;
this.fn_handler = fn_handler;
this.meta17335 = meta17335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17334.cljs$lang$type = true;
cljs.core.async.t17334.cljs$lang$ctorStr = "cljs.core.async/t17334";
cljs.core.async.t17334.cljs$lang$ctorPrWriter = (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t17334");
});
cljs.core.async.t17334.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17336){var self__ = this;
var _17336__$1 = this;return self__.meta17335;
});
cljs.core.async.t17334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17336,meta17335__$1){var self__ = this;
var _17336__$1 = this;return (new cljs.core.async.t17334(self__.f,self__.fn_handler,meta17335__$1));
});
cljs.core.async.__GT_t17334 = (function __GT_t17334(f__$1,fn_handler__$1,meta17335){return (new cljs.core.async.t17334(f__$1,fn_handler__$1,meta17335));
});
}
return (new cljs.core.async.t17334(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17338 = buff;if(G__17338)
{var bit__4225__auto__ = null;if(cljs.core.truth_((function (){var or__3575__auto__ = bit__4225__auto__;if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return G__17338.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17338.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17338);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17338);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_17339 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17339);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_17339,ret){
return (function (){return fn1.call(null,val_17339);
});})(val_17339,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4431__auto___17340 = n;var x_17341 = (0);while(true){
if((x_17341 < n__4431__auto___17340))
{(a[x_17341] = (0));
{
var G__17342 = (x_17341 + (1));
x_17341 = G__17342;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__17343 = (i + (1));
i = G__17343;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17347 = (function (flag,alt_flag,meta17348){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17348 = meta17348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17347.cljs$lang$type = true;
cljs.core.async.t17347.cljs$lang$ctorStr = "cljs.core.async/t17347";
cljs.core.async.t17347.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t17347");
});})(flag))
;
cljs.core.async.t17347.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t17347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t17347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17349){var self__ = this;
var _17349__$1 = this;return self__.meta17348;
});})(flag))
;
cljs.core.async.t17347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17349,meta17348__$1){var self__ = this;
var _17349__$1 = this;return (new cljs.core.async.t17347(self__.flag,self__.alt_flag,meta17348__$1));
});})(flag))
;
cljs.core.async.__GT_t17347 = ((function (flag){
return (function __GT_t17347(flag__$1,alt_flag__$1,meta17348){return (new cljs.core.async.t17347(flag__$1,alt_flag__$1,meta17348));
});})(flag))
;
}
return (new cljs.core.async.t17347(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17353 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17353 = (function (cb,flag,alt_handler,meta17354){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17354 = meta17354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17353.cljs$lang$type = true;
cljs.core.async.t17353.cljs$lang$ctorStr = "cljs.core.async/t17353";
cljs.core.async.t17353.cljs$lang$ctorPrWriter = (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t17353");
});
cljs.core.async.t17353.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17355){var self__ = this;
var _17355__$1 = this;return self__.meta17354;
});
cljs.core.async.t17353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17355,meta17354__$1){var self__ = this;
var _17355__$1 = this;return (new cljs.core.async.t17353(self__.cb,self__.flag,self__.alt_handler,meta17354__$1));
});
cljs.core.async.__GT_t17353 = (function __GT_t17353(cb__$1,flag__$1,alt_handler__$1,meta17354){return (new cljs.core.async.t17353(cb__$1,flag__$1,alt_handler__$1,meta17354));
});
}
return (new cljs.core.async.t17353(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17356_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17356_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17357_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17357_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3575__auto__ = wport;if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__17358 = (i + (1));
i = G__17358;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3575__auto__ = ret;if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3563__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3563__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3563__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17359){var map__17361 = p__17359;var map__17361__$1 = ((cljs.core.seq_QMARK_.call(null,map__17361))?cljs.core.apply.call(null,cljs.core.hash_map,map__17361):map__17361);var opts = map__17361__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17359 = null;if (arguments.length > 1) {
  p__17359 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17359);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17362){
var ports = cljs.core.first(arglist__17362);
var p__17359 = cljs.core.rest(arglist__17362);
return alts_BANG___delegate(ports,p__17359);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__9029__auto___17457 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___17457){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___17457){
return (function (state_17433){var state_val_17434 = (state_17433[(1)]);if((state_val_17434 === (7)))
{var inst_17429 = (state_17433[(2)]);var state_17433__$1 = state_17433;var statearr_17435_17458 = state_17433__$1;(statearr_17435_17458[(2)] = inst_17429);
(statearr_17435_17458[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (1)))
{var state_17433__$1 = state_17433;var statearr_17436_17459 = state_17433__$1;(statearr_17436_17459[(2)] = null);
(statearr_17436_17459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (4)))
{var inst_17412 = (state_17433[(7)]);var inst_17412__$1 = (state_17433[(2)]);var inst_17413 = (inst_17412__$1 == null);var state_17433__$1 = (function (){var statearr_17437 = state_17433;(statearr_17437[(7)] = inst_17412__$1);
return statearr_17437;
})();if(cljs.core.truth_(inst_17413))
{var statearr_17438_17460 = state_17433__$1;(statearr_17438_17460[(1)] = (5));
} else
{var statearr_17439_17461 = state_17433__$1;(statearr_17439_17461[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (13)))
{var state_17433__$1 = state_17433;var statearr_17440_17462 = state_17433__$1;(statearr_17440_17462[(2)] = null);
(statearr_17440_17462[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (6)))
{var inst_17412 = (state_17433[(7)]);var state_17433__$1 = state_17433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17433__$1,(11),to,inst_17412);
} else
{if((state_val_17434 === (3)))
{var inst_17431 = (state_17433[(2)]);var state_17433__$1 = state_17433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17433__$1,inst_17431);
} else
{if((state_val_17434 === (12)))
{var state_17433__$1 = state_17433;var statearr_17441_17463 = state_17433__$1;(statearr_17441_17463[(2)] = null);
(statearr_17441_17463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (2)))
{var state_17433__$1 = state_17433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17433__$1,(4),from);
} else
{if((state_val_17434 === (11)))
{var inst_17422 = (state_17433[(2)]);var state_17433__$1 = state_17433;if(cljs.core.truth_(inst_17422))
{var statearr_17442_17464 = state_17433__$1;(statearr_17442_17464[(1)] = (12));
} else
{var statearr_17443_17465 = state_17433__$1;(statearr_17443_17465[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (9)))
{var state_17433__$1 = state_17433;var statearr_17444_17466 = state_17433__$1;(statearr_17444_17466[(2)] = null);
(statearr_17444_17466[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (5)))
{var state_17433__$1 = state_17433;if(cljs.core.truth_(close_QMARK_))
{var statearr_17445_17467 = state_17433__$1;(statearr_17445_17467[(1)] = (8));
} else
{var statearr_17446_17468 = state_17433__$1;(statearr_17446_17468[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (14)))
{var inst_17427 = (state_17433[(2)]);var state_17433__$1 = state_17433;var statearr_17447_17469 = state_17433__$1;(statearr_17447_17469[(2)] = inst_17427);
(statearr_17447_17469[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (10)))
{var inst_17419 = (state_17433[(2)]);var state_17433__$1 = state_17433;var statearr_17448_17470 = state_17433__$1;(statearr_17448_17470[(2)] = inst_17419);
(statearr_17448_17470[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (8)))
{var inst_17416 = cljs.core.async.close_BANG_.call(null,to);var state_17433__$1 = state_17433;var statearr_17449_17471 = state_17433__$1;(statearr_17449_17471[(2)] = inst_17416);
(statearr_17449_17471[(1)] = (10));
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
}
}
}
}
}
}
}
});})(c__9029__auto___17457))
;return ((function (switch__9014__auto__,c__9029__auto___17457){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_17453 = [null,null,null,null,null,null,null,null];(statearr_17453[(0)] = state_machine__9015__auto__);
(statearr_17453[(1)] = (1));
return statearr_17453;
});
var state_machine__9015__auto____1 = (function (state_17433){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_17433);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e17454){if((e17454 instanceof Object))
{var ex__9018__auto__ = e17454;var statearr_17455_17472 = state_17433;(statearr_17455_17472[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17454;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17473 = state_17433;
state_17433 = G__17473;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_17433){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_17433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___17457))
})();var state__9031__auto__ = (function (){var statearr_17456 = f__9030__auto__.call(null);(statearr_17456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___17457);
return statearr_17456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___17457))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__17657){var vec__17658 = p__17657;var v = cljs.core.nth.call(null,vec__17658,(0),null);var p = cljs.core.nth.call(null,vec__17658,(1),null);var job = vec__17658;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9029__auto___17840 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___17840,res,vec__17658,v,p,job,jobs,results){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___17840,res,vec__17658,v,p,job,jobs,results){
return (function (state_17663){var state_val_17664 = (state_17663[(1)]);if((state_val_17664 === (2)))
{var inst_17660 = (state_17663[(2)]);var inst_17661 = cljs.core.async.close_BANG_.call(null,res);var state_17663__$1 = (function (){var statearr_17665 = state_17663;(statearr_17665[(7)] = inst_17660);
return statearr_17665;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17663__$1,inst_17661);
} else
{if((state_val_17664 === (1)))
{var state_17663__$1 = state_17663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17663__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9029__auto___17840,res,vec__17658,v,p,job,jobs,results))
;return ((function (switch__9014__auto__,c__9029__auto___17840,res,vec__17658,v,p,job,jobs,results){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_17669 = [null,null,null,null,null,null,null,null];(statearr_17669[(0)] = state_machine__9015__auto__);
(statearr_17669[(1)] = (1));
return statearr_17669;
});
var state_machine__9015__auto____1 = (function (state_17663){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_17663);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e17670){if((e17670 instanceof Object))
{var ex__9018__auto__ = e17670;var statearr_17671_17841 = state_17663;(statearr_17671_17841[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17663);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17670;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17842 = state_17663;
state_17663 = G__17842;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_17663){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_17663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___17840,res,vec__17658,v,p,job,jobs,results))
})();var state__9031__auto__ = (function (){var statearr_17672 = f__9030__auto__.call(null);(statearr_17672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___17840);
return statearr_17672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___17840,res,vec__17658,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__17673){var vec__17674 = p__17673;var v = cljs.core.nth.call(null,vec__17674,(0),null);var p = cljs.core.nth.call(null,vec__17674,(1),null);var job = vec__17674;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4431__auto___17843 = n;var __17844 = (0);while(true){
if((__17844 < n__4431__auto___17843))
{var G__17675_17845 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__17675_17845) {
case "async":
var c__9029__auto___17847 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__17844,c__9029__auto___17847,G__17675_17845,n__4431__auto___17843,jobs,results,process,async){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (__17844,c__9029__auto___17847,G__17675_17845,n__4431__auto___17843,jobs,results,process,async){
return (function (state_17688){var state_val_17689 = (state_17688[(1)]);if((state_val_17689 === (7)))
{var inst_17684 = (state_17688[(2)]);var state_17688__$1 = state_17688;var statearr_17690_17848 = state_17688__$1;(statearr_17690_17848[(2)] = inst_17684);
(statearr_17690_17848[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (6)))
{var state_17688__$1 = state_17688;var statearr_17691_17849 = state_17688__$1;(statearr_17691_17849[(2)] = null);
(statearr_17691_17849[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (5)))
{var state_17688__$1 = state_17688;var statearr_17692_17850 = state_17688__$1;(statearr_17692_17850[(2)] = null);
(statearr_17692_17850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (4)))
{var inst_17678 = (state_17688[(2)]);var inst_17679 = async.call(null,inst_17678);var state_17688__$1 = state_17688;if(cljs.core.truth_(inst_17679))
{var statearr_17693_17851 = state_17688__$1;(statearr_17693_17851[(1)] = (5));
} else
{var statearr_17694_17852 = state_17688__$1;(statearr_17694_17852[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (3)))
{var inst_17686 = (state_17688[(2)]);var state_17688__$1 = state_17688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17688__$1,inst_17686);
} else
{if((state_val_17689 === (2)))
{var state_17688__$1 = state_17688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17688__$1,(4),jobs);
} else
{if((state_val_17689 === (1)))
{var state_17688__$1 = state_17688;var statearr_17695_17853 = state_17688__$1;(statearr_17695_17853[(2)] = null);
(statearr_17695_17853[(1)] = (2));
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
});})(__17844,c__9029__auto___17847,G__17675_17845,n__4431__auto___17843,jobs,results,process,async))
;return ((function (__17844,switch__9014__auto__,c__9029__auto___17847,G__17675_17845,n__4431__auto___17843,jobs,results,process,async){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_17699 = [null,null,null,null,null,null,null];(statearr_17699[(0)] = state_machine__9015__auto__);
(statearr_17699[(1)] = (1));
return statearr_17699;
});
var state_machine__9015__auto____1 = (function (state_17688){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_17688);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e17700){if((e17700 instanceof Object))
{var ex__9018__auto__ = e17700;var statearr_17701_17854 = state_17688;(statearr_17701_17854[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17688);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17700;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17855 = state_17688;
state_17688 = G__17855;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_17688){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_17688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(__17844,switch__9014__auto__,c__9029__auto___17847,G__17675_17845,n__4431__auto___17843,jobs,results,process,async))
})();var state__9031__auto__ = (function (){var statearr_17702 = f__9030__auto__.call(null);(statearr_17702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___17847);
return statearr_17702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(__17844,c__9029__auto___17847,G__17675_17845,n__4431__auto___17843,jobs,results,process,async))
);

break;
case "compute":
var c__9029__auto___17856 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__17844,c__9029__auto___17856,G__17675_17845,n__4431__auto___17843,jobs,results,process,async){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (__17844,c__9029__auto___17856,G__17675_17845,n__4431__auto___17843,jobs,results,process,async){
return (function (state_17715){var state_val_17716 = (state_17715[(1)]);if((state_val_17716 === (7)))
{var inst_17711 = (state_17715[(2)]);var state_17715__$1 = state_17715;var statearr_17717_17857 = state_17715__$1;(statearr_17717_17857[(2)] = inst_17711);
(statearr_17717_17857[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17716 === (6)))
{var state_17715__$1 = state_17715;var statearr_17718_17858 = state_17715__$1;(statearr_17718_17858[(2)] = null);
(statearr_17718_17858[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17716 === (5)))
{var state_17715__$1 = state_17715;var statearr_17719_17859 = state_17715__$1;(statearr_17719_17859[(2)] = null);
(statearr_17719_17859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17716 === (4)))
{var inst_17705 = (state_17715[(2)]);var inst_17706 = process.call(null,inst_17705);var state_17715__$1 = state_17715;if(cljs.core.truth_(inst_17706))
{var statearr_17720_17860 = state_17715__$1;(statearr_17720_17860[(1)] = (5));
} else
{var statearr_17721_17861 = state_17715__$1;(statearr_17721_17861[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17716 === (3)))
{var inst_17713 = (state_17715[(2)]);var state_17715__$1 = state_17715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17715__$1,inst_17713);
} else
{if((state_val_17716 === (2)))
{var state_17715__$1 = state_17715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17715__$1,(4),jobs);
} else
{if((state_val_17716 === (1)))
{var state_17715__$1 = state_17715;var statearr_17722_17862 = state_17715__$1;(statearr_17722_17862[(2)] = null);
(statearr_17722_17862[(1)] = (2));
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
});})(__17844,c__9029__auto___17856,G__17675_17845,n__4431__auto___17843,jobs,results,process,async))
;return ((function (__17844,switch__9014__auto__,c__9029__auto___17856,G__17675_17845,n__4431__auto___17843,jobs,results,process,async){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_17726 = [null,null,null,null,null,null,null];(statearr_17726[(0)] = state_machine__9015__auto__);
(statearr_17726[(1)] = (1));
return statearr_17726;
});
var state_machine__9015__auto____1 = (function (state_17715){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_17715);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e17727){if((e17727 instanceof Object))
{var ex__9018__auto__ = e17727;var statearr_17728_17863 = state_17715;(statearr_17728_17863[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17727;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17864 = state_17715;
state_17715 = G__17864;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_17715){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_17715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(__17844,switch__9014__auto__,c__9029__auto___17856,G__17675_17845,n__4431__auto___17843,jobs,results,process,async))
})();var state__9031__auto__ = (function (){var statearr_17729 = f__9030__auto__.call(null);(statearr_17729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___17856);
return statearr_17729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(__17844,c__9029__auto___17856,G__17675_17845,n__4431__auto___17843,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__17865 = (__17844 + (1));
__17844 = G__17865;
continue;
}
} else
{}
break;
}
var c__9029__auto___17866 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___17866,jobs,results,process,async){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___17866,jobs,results,process,async){
return (function (state_17751){var state_val_17752 = (state_17751[(1)]);if((state_val_17752 === (9)))
{var inst_17744 = (state_17751[(2)]);var state_17751__$1 = (function (){var statearr_17753 = state_17751;(statearr_17753[(7)] = inst_17744);
return statearr_17753;
})();var statearr_17754_17867 = state_17751__$1;(statearr_17754_17867[(2)] = null);
(statearr_17754_17867[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17752 === (8)))
{var inst_17737 = (state_17751[(8)]);var inst_17742 = (state_17751[(2)]);var state_17751__$1 = (function (){var statearr_17755 = state_17751;(statearr_17755[(9)] = inst_17742);
return statearr_17755;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17751__$1,(9),results,inst_17737);
} else
{if((state_val_17752 === (7)))
{var inst_17747 = (state_17751[(2)]);var state_17751__$1 = state_17751;var statearr_17756_17868 = state_17751__$1;(statearr_17756_17868[(2)] = inst_17747);
(statearr_17756_17868[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17752 === (6)))
{var inst_17732 = (state_17751[(10)]);var inst_17737 = (state_17751[(8)]);var inst_17737__$1 = cljs.core.async.chan.call(null,(1));var inst_17738 = cljs.core.PersistentVector.EMPTY_NODE;var inst_17739 = [inst_17732,inst_17737__$1];var inst_17740 = (new cljs.core.PersistentVector(null,2,(5),inst_17738,inst_17739,null));var state_17751__$1 = (function (){var statearr_17757 = state_17751;(statearr_17757[(8)] = inst_17737__$1);
return statearr_17757;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17751__$1,(8),jobs,inst_17740);
} else
{if((state_val_17752 === (5)))
{var inst_17735 = cljs.core.async.close_BANG_.call(null,jobs);var state_17751__$1 = state_17751;var statearr_17758_17869 = state_17751__$1;(statearr_17758_17869[(2)] = inst_17735);
(statearr_17758_17869[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17752 === (4)))
{var inst_17732 = (state_17751[(10)]);var inst_17732__$1 = (state_17751[(2)]);var inst_17733 = (inst_17732__$1 == null);var state_17751__$1 = (function (){var statearr_17759 = state_17751;(statearr_17759[(10)] = inst_17732__$1);
return statearr_17759;
})();if(cljs.core.truth_(inst_17733))
{var statearr_17760_17870 = state_17751__$1;(statearr_17760_17870[(1)] = (5));
} else
{var statearr_17761_17871 = state_17751__$1;(statearr_17761_17871[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17752 === (3)))
{var inst_17749 = (state_17751[(2)]);var state_17751__$1 = state_17751;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17751__$1,inst_17749);
} else
{if((state_val_17752 === (2)))
{var state_17751__$1 = state_17751;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17751__$1,(4),from);
} else
{if((state_val_17752 === (1)))
{var state_17751__$1 = state_17751;var statearr_17762_17872 = state_17751__$1;(statearr_17762_17872[(2)] = null);
(statearr_17762_17872[(1)] = (2));
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
}
}
});})(c__9029__auto___17866,jobs,results,process,async))
;return ((function (switch__9014__auto__,c__9029__auto___17866,jobs,results,process,async){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_17766 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17766[(0)] = state_machine__9015__auto__);
(statearr_17766[(1)] = (1));
return statearr_17766;
});
var state_machine__9015__auto____1 = (function (state_17751){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_17751);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e17767){if((e17767 instanceof Object))
{var ex__9018__auto__ = e17767;var statearr_17768_17873 = state_17751;(statearr_17768_17873[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17751);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17767;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17874 = state_17751;
state_17751 = G__17874;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_17751){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_17751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___17866,jobs,results,process,async))
})();var state__9031__auto__ = (function (){var statearr_17769 = f__9030__auto__.call(null);(statearr_17769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___17866);
return statearr_17769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___17866,jobs,results,process,async))
);
var c__9029__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto__,jobs,results,process,async){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto__,jobs,results,process,async){
return (function (state_17807){var state_val_17808 = (state_17807[(1)]);if((state_val_17808 === (7)))
{var inst_17803 = (state_17807[(2)]);var state_17807__$1 = state_17807;var statearr_17809_17875 = state_17807__$1;(statearr_17809_17875[(2)] = inst_17803);
(statearr_17809_17875[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (20)))
{var state_17807__$1 = state_17807;var statearr_17810_17876 = state_17807__$1;(statearr_17810_17876[(2)] = null);
(statearr_17810_17876[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (1)))
{var state_17807__$1 = state_17807;var statearr_17811_17877 = state_17807__$1;(statearr_17811_17877[(2)] = null);
(statearr_17811_17877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (4)))
{var inst_17772 = (state_17807[(7)]);var inst_17772__$1 = (state_17807[(2)]);var inst_17773 = (inst_17772__$1 == null);var state_17807__$1 = (function (){var statearr_17812 = state_17807;(statearr_17812[(7)] = inst_17772__$1);
return statearr_17812;
})();if(cljs.core.truth_(inst_17773))
{var statearr_17813_17878 = state_17807__$1;(statearr_17813_17878[(1)] = (5));
} else
{var statearr_17814_17879 = state_17807__$1;(statearr_17814_17879[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (15)))
{var inst_17785 = (state_17807[(8)]);var state_17807__$1 = state_17807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17807__$1,(18),to,inst_17785);
} else
{if((state_val_17808 === (21)))
{var inst_17798 = (state_17807[(2)]);var state_17807__$1 = state_17807;var statearr_17815_17880 = state_17807__$1;(statearr_17815_17880[(2)] = inst_17798);
(statearr_17815_17880[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (13)))
{var inst_17800 = (state_17807[(2)]);var state_17807__$1 = (function (){var statearr_17816 = state_17807;(statearr_17816[(9)] = inst_17800);
return statearr_17816;
})();var statearr_17817_17881 = state_17807__$1;(statearr_17817_17881[(2)] = null);
(statearr_17817_17881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (6)))
{var inst_17772 = (state_17807[(7)]);var state_17807__$1 = state_17807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17807__$1,(11),inst_17772);
} else
{if((state_val_17808 === (17)))
{var inst_17793 = (state_17807[(2)]);var state_17807__$1 = state_17807;if(cljs.core.truth_(inst_17793))
{var statearr_17818_17882 = state_17807__$1;(statearr_17818_17882[(1)] = (19));
} else
{var statearr_17819_17883 = state_17807__$1;(statearr_17819_17883[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (3)))
{var inst_17805 = (state_17807[(2)]);var state_17807__$1 = state_17807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17807__$1,inst_17805);
} else
{if((state_val_17808 === (12)))
{var inst_17782 = (state_17807[(10)]);var state_17807__$1 = state_17807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17807__$1,(14),inst_17782);
} else
{if((state_val_17808 === (2)))
{var state_17807__$1 = state_17807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17807__$1,(4),results);
} else
{if((state_val_17808 === (19)))
{var state_17807__$1 = state_17807;var statearr_17820_17884 = state_17807__$1;(statearr_17820_17884[(2)] = null);
(statearr_17820_17884[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (11)))
{var inst_17782 = (state_17807[(2)]);var state_17807__$1 = (function (){var statearr_17821 = state_17807;(statearr_17821[(10)] = inst_17782);
return statearr_17821;
})();var statearr_17822_17885 = state_17807__$1;(statearr_17822_17885[(2)] = null);
(statearr_17822_17885[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (9)))
{var state_17807__$1 = state_17807;var statearr_17823_17886 = state_17807__$1;(statearr_17823_17886[(2)] = null);
(statearr_17823_17886[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (5)))
{var state_17807__$1 = state_17807;if(cljs.core.truth_(close_QMARK_))
{var statearr_17824_17887 = state_17807__$1;(statearr_17824_17887[(1)] = (8));
} else
{var statearr_17825_17888 = state_17807__$1;(statearr_17825_17888[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (14)))
{var inst_17787 = (state_17807[(11)]);var inst_17785 = (state_17807[(8)]);var inst_17785__$1 = (state_17807[(2)]);var inst_17786 = (inst_17785__$1 == null);var inst_17787__$1 = cljs.core.not.call(null,inst_17786);var state_17807__$1 = (function (){var statearr_17826 = state_17807;(statearr_17826[(11)] = inst_17787__$1);
(statearr_17826[(8)] = inst_17785__$1);
return statearr_17826;
})();if(inst_17787__$1)
{var statearr_17827_17889 = state_17807__$1;(statearr_17827_17889[(1)] = (15));
} else
{var statearr_17828_17890 = state_17807__$1;(statearr_17828_17890[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (16)))
{var inst_17787 = (state_17807[(11)]);var state_17807__$1 = state_17807;var statearr_17829_17891 = state_17807__$1;(statearr_17829_17891[(2)] = inst_17787);
(statearr_17829_17891[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (10)))
{var inst_17779 = (state_17807[(2)]);var state_17807__$1 = state_17807;var statearr_17830_17892 = state_17807__$1;(statearr_17830_17892[(2)] = inst_17779);
(statearr_17830_17892[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (18)))
{var inst_17790 = (state_17807[(2)]);var state_17807__$1 = state_17807;var statearr_17831_17893 = state_17807__$1;(statearr_17831_17893[(2)] = inst_17790);
(statearr_17831_17893[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17808 === (8)))
{var inst_17776 = cljs.core.async.close_BANG_.call(null,to);var state_17807__$1 = state_17807;var statearr_17832_17894 = state_17807__$1;(statearr_17832_17894[(2)] = inst_17776);
(statearr_17832_17894[(1)] = (10));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9029__auto__,jobs,results,process,async))
;return ((function (switch__9014__auto__,c__9029__auto__,jobs,results,process,async){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_17836 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17836[(0)] = state_machine__9015__auto__);
(statearr_17836[(1)] = (1));
return statearr_17836;
});
var state_machine__9015__auto____1 = (function (state_17807){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_17807);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e17837){if((e17837 instanceof Object))
{var ex__9018__auto__ = e17837;var statearr_17838_17895 = state_17807;(statearr_17838_17895[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17837;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17896 = state_17807;
state_17807 = G__17896;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_17807){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_17807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto__,jobs,results,process,async))
})();var state__9031__auto__ = (function (){var statearr_17839 = f__9030__auto__.call(null);(statearr_17839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto__);
return statearr_17839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto__,jobs,results,process,async))
);
return c__9029__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9029__auto___17997 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___17997,tc,fc){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___17997,tc,fc){
return (function (state_17972){var state_val_17973 = (state_17972[(1)]);if((state_val_17973 === (7)))
{var inst_17968 = (state_17972[(2)]);var state_17972__$1 = state_17972;var statearr_17974_17998 = state_17972__$1;(statearr_17974_17998[(2)] = inst_17968);
(statearr_17974_17998[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (1)))
{var state_17972__$1 = state_17972;var statearr_17975_17999 = state_17972__$1;(statearr_17975_17999[(2)] = null);
(statearr_17975_17999[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (4)))
{var inst_17949 = (state_17972[(7)]);var inst_17949__$1 = (state_17972[(2)]);var inst_17950 = (inst_17949__$1 == null);var state_17972__$1 = (function (){var statearr_17976 = state_17972;(statearr_17976[(7)] = inst_17949__$1);
return statearr_17976;
})();if(cljs.core.truth_(inst_17950))
{var statearr_17977_18000 = state_17972__$1;(statearr_17977_18000[(1)] = (5));
} else
{var statearr_17978_18001 = state_17972__$1;(statearr_17978_18001[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (13)))
{var state_17972__$1 = state_17972;var statearr_17979_18002 = state_17972__$1;(statearr_17979_18002[(2)] = null);
(statearr_17979_18002[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (6)))
{var inst_17949 = (state_17972[(7)]);var inst_17955 = p.call(null,inst_17949);var state_17972__$1 = state_17972;if(cljs.core.truth_(inst_17955))
{var statearr_17980_18003 = state_17972__$1;(statearr_17980_18003[(1)] = (9));
} else
{var statearr_17981_18004 = state_17972__$1;(statearr_17981_18004[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (3)))
{var inst_17970 = (state_17972[(2)]);var state_17972__$1 = state_17972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17972__$1,inst_17970);
} else
{if((state_val_17973 === (12)))
{var state_17972__$1 = state_17972;var statearr_17982_18005 = state_17972__$1;(statearr_17982_18005[(2)] = null);
(statearr_17982_18005[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (2)))
{var state_17972__$1 = state_17972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17972__$1,(4),ch);
} else
{if((state_val_17973 === (11)))
{var inst_17949 = (state_17972[(7)]);var inst_17959 = (state_17972[(2)]);var state_17972__$1 = state_17972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17972__$1,(8),inst_17959,inst_17949);
} else
{if((state_val_17973 === (9)))
{var state_17972__$1 = state_17972;var statearr_17983_18006 = state_17972__$1;(statearr_17983_18006[(2)] = tc);
(statearr_17983_18006[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (5)))
{var inst_17952 = cljs.core.async.close_BANG_.call(null,tc);var inst_17953 = cljs.core.async.close_BANG_.call(null,fc);var state_17972__$1 = (function (){var statearr_17984 = state_17972;(statearr_17984[(8)] = inst_17952);
return statearr_17984;
})();var statearr_17985_18007 = state_17972__$1;(statearr_17985_18007[(2)] = inst_17953);
(statearr_17985_18007[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (14)))
{var inst_17966 = (state_17972[(2)]);var state_17972__$1 = state_17972;var statearr_17986_18008 = state_17972__$1;(statearr_17986_18008[(2)] = inst_17966);
(statearr_17986_18008[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (10)))
{var state_17972__$1 = state_17972;var statearr_17987_18009 = state_17972__$1;(statearr_17987_18009[(2)] = fc);
(statearr_17987_18009[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17973 === (8)))
{var inst_17961 = (state_17972[(2)]);var state_17972__$1 = state_17972;if(cljs.core.truth_(inst_17961))
{var statearr_17988_18010 = state_17972__$1;(statearr_17988_18010[(1)] = (12));
} else
{var statearr_17989_18011 = state_17972__$1;(statearr_17989_18011[(1)] = (13));
}
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
}
}
}
}
}
}
}
});})(c__9029__auto___17997,tc,fc))
;return ((function (switch__9014__auto__,c__9029__auto___17997,tc,fc){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_17993 = [null,null,null,null,null,null,null,null,null];(statearr_17993[(0)] = state_machine__9015__auto__);
(statearr_17993[(1)] = (1));
return statearr_17993;
});
var state_machine__9015__auto____1 = (function (state_17972){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_17972);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e17994){if((e17994 instanceof Object))
{var ex__9018__auto__ = e17994;var statearr_17995_18012 = state_17972;(statearr_17995_18012[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17994;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18013 = state_17972;
state_17972 = G__18013;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_17972){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_17972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___17997,tc,fc))
})();var state__9031__auto__ = (function (){var statearr_17996 = f__9030__auto__.call(null);(statearr_17996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___17997);
return statearr_17996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___17997,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9029__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto__){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto__){
return (function (state_18060){var state_val_18061 = (state_18060[(1)]);if((state_val_18061 === (7)))
{var inst_18056 = (state_18060[(2)]);var state_18060__$1 = state_18060;var statearr_18062_18078 = state_18060__$1;(statearr_18062_18078[(2)] = inst_18056);
(statearr_18062_18078[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18061 === (6)))
{var inst_18046 = (state_18060[(7)]);var inst_18049 = (state_18060[(8)]);var inst_18053 = f.call(null,inst_18046,inst_18049);var inst_18046__$1 = inst_18053;var state_18060__$1 = (function (){var statearr_18063 = state_18060;(statearr_18063[(7)] = inst_18046__$1);
return statearr_18063;
})();var statearr_18064_18079 = state_18060__$1;(statearr_18064_18079[(2)] = null);
(statearr_18064_18079[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18061 === (5)))
{var inst_18046 = (state_18060[(7)]);var state_18060__$1 = state_18060;var statearr_18065_18080 = state_18060__$1;(statearr_18065_18080[(2)] = inst_18046);
(statearr_18065_18080[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18061 === (4)))
{var inst_18049 = (state_18060[(8)]);var inst_18049__$1 = (state_18060[(2)]);var inst_18050 = (inst_18049__$1 == null);var state_18060__$1 = (function (){var statearr_18066 = state_18060;(statearr_18066[(8)] = inst_18049__$1);
return statearr_18066;
})();if(cljs.core.truth_(inst_18050))
{var statearr_18067_18081 = state_18060__$1;(statearr_18067_18081[(1)] = (5));
} else
{var statearr_18068_18082 = state_18060__$1;(statearr_18068_18082[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18061 === (3)))
{var inst_18058 = (state_18060[(2)]);var state_18060__$1 = state_18060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18060__$1,inst_18058);
} else
{if((state_val_18061 === (2)))
{var state_18060__$1 = state_18060;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18060__$1,(4),ch);
} else
{if((state_val_18061 === (1)))
{var inst_18046 = init;var state_18060__$1 = (function (){var statearr_18069 = state_18060;(statearr_18069[(7)] = inst_18046);
return statearr_18069;
})();var statearr_18070_18083 = state_18060__$1;(statearr_18070_18083[(2)] = null);
(statearr_18070_18083[(1)] = (2));
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
});})(c__9029__auto__))
;return ((function (switch__9014__auto__,c__9029__auto__){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_18074 = [null,null,null,null,null,null,null,null,null];(statearr_18074[(0)] = state_machine__9015__auto__);
(statearr_18074[(1)] = (1));
return statearr_18074;
});
var state_machine__9015__auto____1 = (function (state_18060){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_18060);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e18075){if((e18075 instanceof Object))
{var ex__9018__auto__ = e18075;var statearr_18076_18084 = state_18060;(statearr_18076_18084[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18060);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18075;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18085 = state_18060;
state_18060 = G__18085;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_18060){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_18060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto__))
})();var state__9031__auto__ = (function (){var statearr_18077 = f__9030__auto__.call(null);(statearr_18077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto__);
return statearr_18077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto__))
);
return c__9029__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9029__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto__){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto__){
return (function (state_18159){var state_val_18160 = (state_18159[(1)]);if((state_val_18160 === (7)))
{var inst_18141 = (state_18159[(2)]);var state_18159__$1 = state_18159;var statearr_18161_18184 = state_18159__$1;(statearr_18161_18184[(2)] = inst_18141);
(statearr_18161_18184[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (1)))
{var inst_18135 = cljs.core.seq.call(null,coll);var inst_18136 = inst_18135;var state_18159__$1 = (function (){var statearr_18162 = state_18159;(statearr_18162[(7)] = inst_18136);
return statearr_18162;
})();var statearr_18163_18185 = state_18159__$1;(statearr_18163_18185[(2)] = null);
(statearr_18163_18185[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (4)))
{var inst_18136 = (state_18159[(7)]);var inst_18139 = cljs.core.first.call(null,inst_18136);var state_18159__$1 = state_18159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18159__$1,(7),ch,inst_18139);
} else
{if((state_val_18160 === (13)))
{var inst_18153 = (state_18159[(2)]);var state_18159__$1 = state_18159;var statearr_18164_18186 = state_18159__$1;(statearr_18164_18186[(2)] = inst_18153);
(statearr_18164_18186[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (6)))
{var inst_18144 = (state_18159[(2)]);var state_18159__$1 = state_18159;if(cljs.core.truth_(inst_18144))
{var statearr_18165_18187 = state_18159__$1;(statearr_18165_18187[(1)] = (8));
} else
{var statearr_18166_18188 = state_18159__$1;(statearr_18166_18188[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (3)))
{var inst_18157 = (state_18159[(2)]);var state_18159__$1 = state_18159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18159__$1,inst_18157);
} else
{if((state_val_18160 === (12)))
{var state_18159__$1 = state_18159;var statearr_18167_18189 = state_18159__$1;(statearr_18167_18189[(2)] = null);
(statearr_18167_18189[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (2)))
{var inst_18136 = (state_18159[(7)]);var state_18159__$1 = state_18159;if(cljs.core.truth_(inst_18136))
{var statearr_18168_18190 = state_18159__$1;(statearr_18168_18190[(1)] = (4));
} else
{var statearr_18169_18191 = state_18159__$1;(statearr_18169_18191[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (11)))
{var inst_18150 = cljs.core.async.close_BANG_.call(null,ch);var state_18159__$1 = state_18159;var statearr_18170_18192 = state_18159__$1;(statearr_18170_18192[(2)] = inst_18150);
(statearr_18170_18192[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (9)))
{var state_18159__$1 = state_18159;if(cljs.core.truth_(close_QMARK_))
{var statearr_18171_18193 = state_18159__$1;(statearr_18171_18193[(1)] = (11));
} else
{var statearr_18172_18194 = state_18159__$1;(statearr_18172_18194[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (5)))
{var inst_18136 = (state_18159[(7)]);var state_18159__$1 = state_18159;var statearr_18173_18195 = state_18159__$1;(statearr_18173_18195[(2)] = inst_18136);
(statearr_18173_18195[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (10)))
{var inst_18155 = (state_18159[(2)]);var state_18159__$1 = state_18159;var statearr_18174_18196 = state_18159__$1;(statearr_18174_18196[(2)] = inst_18155);
(statearr_18174_18196[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18160 === (8)))
{var inst_18136 = (state_18159[(7)]);var inst_18146 = cljs.core.next.call(null,inst_18136);var inst_18136__$1 = inst_18146;var state_18159__$1 = (function (){var statearr_18175 = state_18159;(statearr_18175[(7)] = inst_18136__$1);
return statearr_18175;
})();var statearr_18176_18197 = state_18159__$1;(statearr_18176_18197[(2)] = null);
(statearr_18176_18197[(1)] = (2));
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
}
}
}
}
}
}
});})(c__9029__auto__))
;return ((function (switch__9014__auto__,c__9029__auto__){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_18180 = [null,null,null,null,null,null,null,null];(statearr_18180[(0)] = state_machine__9015__auto__);
(statearr_18180[(1)] = (1));
return statearr_18180;
});
var state_machine__9015__auto____1 = (function (state_18159){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_18159);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e18181){if((e18181 instanceof Object))
{var ex__9018__auto__ = e18181;var statearr_18182_18198 = state_18159;(statearr_18182_18198[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18181;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18199 = state_18159;
state_18159 = G__18199;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_18159){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_18159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto__))
})();var state__9031__auto__ = (function (){var statearr_18183 = f__9030__auto__.call(null);(statearr_18183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto__);
return statearr_18183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto__))
);
return c__9029__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj18201 = {};return obj18201;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3563__auto__ = _;if(and__3563__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3563__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4202__auto__ = (((_ == null))?null:_);return (function (){var or__3575__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18203 = {};return obj18203;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3563__auto__ = m;if(and__3563__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3563__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4202__auto__ = (((m == null))?null:m);return (function (){var or__3575__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3563__auto__ = m;if(and__3563__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3563__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4202__auto__ = (((m == null))?null:m);return (function (){var or__3575__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3563__auto__ = m;if(and__3563__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3563__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4202__auto__ = (((m == null))?null:m);return (function (){var or__3575__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18425 = (function (cs,ch,mult,meta18426){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18426 = meta18426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18425.cljs$lang$type = true;
cljs.core.async.t18425.cljs$lang$ctorStr = "cljs.core.async/t18425";
cljs.core.async.t18425.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t18425");
});})(cs))
;
cljs.core.async.t18425.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18425.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18425.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18425.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18425.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18427){var self__ = this;
var _18427__$1 = this;return self__.meta18426;
});})(cs))
;
cljs.core.async.t18425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18427,meta18426__$1){var self__ = this;
var _18427__$1 = this;return (new cljs.core.async.t18425(self__.cs,self__.ch,self__.mult,meta18426__$1));
});})(cs))
;
cljs.core.async.__GT_t18425 = ((function (cs){
return (function __GT_t18425(cs__$1,ch__$1,mult__$1,meta18426){return (new cljs.core.async.t18425(cs__$1,ch__$1,mult__$1,meta18426));
});})(cs))
;
}
return (new cljs.core.async.t18425(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9029__auto___18646 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___18646,cs,m,dchan,dctr,done){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___18646,cs,m,dchan,dctr,done){
return (function (state_18558){var state_val_18559 = (state_18558[(1)]);if((state_val_18559 === (7)))
{var inst_18554 = (state_18558[(2)]);var state_18558__$1 = state_18558;var statearr_18560_18647 = state_18558__$1;(statearr_18560_18647[(2)] = inst_18554);
(statearr_18560_18647[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (20)))
{var inst_18459 = (state_18558[(7)]);var inst_18469 = cljs.core.first.call(null,inst_18459);var inst_18470 = cljs.core.nth.call(null,inst_18469,(0),null);var inst_18471 = cljs.core.nth.call(null,inst_18469,(1),null);var state_18558__$1 = (function (){var statearr_18561 = state_18558;(statearr_18561[(8)] = inst_18470);
return statearr_18561;
})();if(cljs.core.truth_(inst_18471))
{var statearr_18562_18648 = state_18558__$1;(statearr_18562_18648[(1)] = (22));
} else
{var statearr_18563_18649 = state_18558__$1;(statearr_18563_18649[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (27)))
{var inst_18506 = (state_18558[(9)]);var inst_18501 = (state_18558[(10)]);var inst_18430 = (state_18558[(11)]);var inst_18499 = (state_18558[(12)]);var inst_18506__$1 = cljs.core._nth.call(null,inst_18499,inst_18501);var inst_18507 = cljs.core.async.put_BANG_.call(null,inst_18506__$1,inst_18430,done);var state_18558__$1 = (function (){var statearr_18564 = state_18558;(statearr_18564[(9)] = inst_18506__$1);
return statearr_18564;
})();if(cljs.core.truth_(inst_18507))
{var statearr_18565_18650 = state_18558__$1;(statearr_18565_18650[(1)] = (30));
} else
{var statearr_18566_18651 = state_18558__$1;(statearr_18566_18651[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (1)))
{var state_18558__$1 = state_18558;var statearr_18567_18652 = state_18558__$1;(statearr_18567_18652[(2)] = null);
(statearr_18567_18652[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (24)))
{var inst_18459 = (state_18558[(7)]);var inst_18476 = (state_18558[(2)]);var inst_18477 = cljs.core.next.call(null,inst_18459);var inst_18439 = inst_18477;var inst_18440 = null;var inst_18441 = (0);var inst_18442 = (0);var state_18558__$1 = (function (){var statearr_18568 = state_18558;(statearr_18568[(13)] = inst_18439);
(statearr_18568[(14)] = inst_18441);
(statearr_18568[(15)] = inst_18476);
(statearr_18568[(16)] = inst_18442);
(statearr_18568[(17)] = inst_18440);
return statearr_18568;
})();var statearr_18569_18653 = state_18558__$1;(statearr_18569_18653[(2)] = null);
(statearr_18569_18653[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (39)))
{var state_18558__$1 = state_18558;var statearr_18573_18654 = state_18558__$1;(statearr_18573_18654[(2)] = null);
(statearr_18573_18654[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (4)))
{var inst_18430 = (state_18558[(11)]);var inst_18430__$1 = (state_18558[(2)]);var inst_18431 = (inst_18430__$1 == null);var state_18558__$1 = (function (){var statearr_18574 = state_18558;(statearr_18574[(11)] = inst_18430__$1);
return statearr_18574;
})();if(cljs.core.truth_(inst_18431))
{var statearr_18575_18655 = state_18558__$1;(statearr_18575_18655[(1)] = (5));
} else
{var statearr_18576_18656 = state_18558__$1;(statearr_18576_18656[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (15)))
{var inst_18439 = (state_18558[(13)]);var inst_18441 = (state_18558[(14)]);var inst_18442 = (state_18558[(16)]);var inst_18440 = (state_18558[(17)]);var inst_18455 = (state_18558[(2)]);var inst_18456 = (inst_18442 + (1));var tmp18570 = inst_18439;var tmp18571 = inst_18441;var tmp18572 = inst_18440;var inst_18439__$1 = tmp18570;var inst_18440__$1 = tmp18572;var inst_18441__$1 = tmp18571;var inst_18442__$1 = inst_18456;var state_18558__$1 = (function (){var statearr_18577 = state_18558;(statearr_18577[(13)] = inst_18439__$1);
(statearr_18577[(14)] = inst_18441__$1);
(statearr_18577[(16)] = inst_18442__$1);
(statearr_18577[(17)] = inst_18440__$1);
(statearr_18577[(18)] = inst_18455);
return statearr_18577;
})();var statearr_18578_18657 = state_18558__$1;(statearr_18578_18657[(2)] = null);
(statearr_18578_18657[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (21)))
{var inst_18480 = (state_18558[(2)]);var state_18558__$1 = state_18558;var statearr_18582_18658 = state_18558__$1;(statearr_18582_18658[(2)] = inst_18480);
(statearr_18582_18658[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (31)))
{var inst_18506 = (state_18558[(9)]);var inst_18510 = done.call(null,null);var inst_18511 = cljs.core.async.untap_STAR_.call(null,m,inst_18506);var state_18558__$1 = (function (){var statearr_18583 = state_18558;(statearr_18583[(19)] = inst_18510);
return statearr_18583;
})();var statearr_18584_18659 = state_18558__$1;(statearr_18584_18659[(2)] = inst_18511);
(statearr_18584_18659[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (32)))
{var inst_18501 = (state_18558[(10)]);var inst_18498 = (state_18558[(20)]);var inst_18500 = (state_18558[(21)]);var inst_18499 = (state_18558[(12)]);var inst_18513 = (state_18558[(2)]);var inst_18514 = (inst_18501 + (1));var tmp18579 = inst_18498;var tmp18580 = inst_18500;var tmp18581 = inst_18499;var inst_18498__$1 = tmp18579;var inst_18499__$1 = tmp18581;var inst_18500__$1 = tmp18580;var inst_18501__$1 = inst_18514;var state_18558__$1 = (function (){var statearr_18585 = state_18558;(statearr_18585[(10)] = inst_18501__$1);
(statearr_18585[(20)] = inst_18498__$1);
(statearr_18585[(21)] = inst_18500__$1);
(statearr_18585[(12)] = inst_18499__$1);
(statearr_18585[(22)] = inst_18513);
return statearr_18585;
})();var statearr_18586_18660 = state_18558__$1;(statearr_18586_18660[(2)] = null);
(statearr_18586_18660[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (40)))
{var inst_18526 = (state_18558[(23)]);var inst_18530 = done.call(null,null);var inst_18531 = cljs.core.async.untap_STAR_.call(null,m,inst_18526);var state_18558__$1 = (function (){var statearr_18587 = state_18558;(statearr_18587[(24)] = inst_18530);
return statearr_18587;
})();var statearr_18588_18661 = state_18558__$1;(statearr_18588_18661[(2)] = inst_18531);
(statearr_18588_18661[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (33)))
{var inst_18517 = (state_18558[(25)]);var inst_18519 = cljs.core.chunked_seq_QMARK_.call(null,inst_18517);var state_18558__$1 = state_18558;if(inst_18519)
{var statearr_18589_18662 = state_18558__$1;(statearr_18589_18662[(1)] = (36));
} else
{var statearr_18590_18663 = state_18558__$1;(statearr_18590_18663[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (13)))
{var inst_18449 = (state_18558[(26)]);var inst_18452 = cljs.core.async.close_BANG_.call(null,inst_18449);var state_18558__$1 = state_18558;var statearr_18591_18664 = state_18558__$1;(statearr_18591_18664[(2)] = inst_18452);
(statearr_18591_18664[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (22)))
{var inst_18470 = (state_18558[(8)]);var inst_18473 = cljs.core.async.close_BANG_.call(null,inst_18470);var state_18558__$1 = state_18558;var statearr_18592_18665 = state_18558__$1;(statearr_18592_18665[(2)] = inst_18473);
(statearr_18592_18665[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (36)))
{var inst_18517 = (state_18558[(25)]);var inst_18521 = cljs.core.chunk_first.call(null,inst_18517);var inst_18522 = cljs.core.chunk_rest.call(null,inst_18517);var inst_18523 = cljs.core.count.call(null,inst_18521);var inst_18498 = inst_18522;var inst_18499 = inst_18521;var inst_18500 = inst_18523;var inst_18501 = (0);var state_18558__$1 = (function (){var statearr_18593 = state_18558;(statearr_18593[(10)] = inst_18501);
(statearr_18593[(20)] = inst_18498);
(statearr_18593[(21)] = inst_18500);
(statearr_18593[(12)] = inst_18499);
return statearr_18593;
})();var statearr_18594_18666 = state_18558__$1;(statearr_18594_18666[(2)] = null);
(statearr_18594_18666[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (41)))
{var inst_18517 = (state_18558[(25)]);var inst_18533 = (state_18558[(2)]);var inst_18534 = cljs.core.next.call(null,inst_18517);var inst_18498 = inst_18534;var inst_18499 = null;var inst_18500 = (0);var inst_18501 = (0);var state_18558__$1 = (function (){var statearr_18595 = state_18558;(statearr_18595[(10)] = inst_18501);
(statearr_18595[(20)] = inst_18498);
(statearr_18595[(21)] = inst_18500);
(statearr_18595[(12)] = inst_18499);
(statearr_18595[(27)] = inst_18533);
return statearr_18595;
})();var statearr_18596_18667 = state_18558__$1;(statearr_18596_18667[(2)] = null);
(statearr_18596_18667[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (43)))
{var state_18558__$1 = state_18558;var statearr_18597_18668 = state_18558__$1;(statearr_18597_18668[(2)] = null);
(statearr_18597_18668[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (29)))
{var inst_18542 = (state_18558[(2)]);var state_18558__$1 = state_18558;var statearr_18598_18669 = state_18558__$1;(statearr_18598_18669[(2)] = inst_18542);
(statearr_18598_18669[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (44)))
{var inst_18551 = (state_18558[(2)]);var state_18558__$1 = (function (){var statearr_18599 = state_18558;(statearr_18599[(28)] = inst_18551);
return statearr_18599;
})();var statearr_18600_18670 = state_18558__$1;(statearr_18600_18670[(2)] = null);
(statearr_18600_18670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (6)))
{var inst_18490 = (state_18558[(29)]);var inst_18489 = cljs.core.deref.call(null,cs);var inst_18490__$1 = cljs.core.keys.call(null,inst_18489);var inst_18491 = cljs.core.count.call(null,inst_18490__$1);var inst_18492 = cljs.core.reset_BANG_.call(null,dctr,inst_18491);var inst_18497 = cljs.core.seq.call(null,inst_18490__$1);var inst_18498 = inst_18497;var inst_18499 = null;var inst_18500 = (0);var inst_18501 = (0);var state_18558__$1 = (function (){var statearr_18601 = state_18558;(statearr_18601[(10)] = inst_18501);
(statearr_18601[(30)] = inst_18492);
(statearr_18601[(29)] = inst_18490__$1);
(statearr_18601[(20)] = inst_18498);
(statearr_18601[(21)] = inst_18500);
(statearr_18601[(12)] = inst_18499);
return statearr_18601;
})();var statearr_18602_18671 = state_18558__$1;(statearr_18602_18671[(2)] = null);
(statearr_18602_18671[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (28)))
{var inst_18498 = (state_18558[(20)]);var inst_18517 = (state_18558[(25)]);var inst_18517__$1 = cljs.core.seq.call(null,inst_18498);var state_18558__$1 = (function (){var statearr_18603 = state_18558;(statearr_18603[(25)] = inst_18517__$1);
return statearr_18603;
})();if(inst_18517__$1)
{var statearr_18604_18672 = state_18558__$1;(statearr_18604_18672[(1)] = (33));
} else
{var statearr_18605_18673 = state_18558__$1;(statearr_18605_18673[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (25)))
{var inst_18501 = (state_18558[(10)]);var inst_18500 = (state_18558[(21)]);var inst_18503 = (inst_18501 < inst_18500);var inst_18504 = inst_18503;var state_18558__$1 = state_18558;if(cljs.core.truth_(inst_18504))
{var statearr_18606_18674 = state_18558__$1;(statearr_18606_18674[(1)] = (27));
} else
{var statearr_18607_18675 = state_18558__$1;(statearr_18607_18675[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (34)))
{var state_18558__$1 = state_18558;var statearr_18608_18676 = state_18558__$1;(statearr_18608_18676[(2)] = null);
(statearr_18608_18676[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (17)))
{var state_18558__$1 = state_18558;var statearr_18609_18677 = state_18558__$1;(statearr_18609_18677[(2)] = null);
(statearr_18609_18677[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (3)))
{var inst_18556 = (state_18558[(2)]);var state_18558__$1 = state_18558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18558__$1,inst_18556);
} else
{if((state_val_18559 === (12)))
{var inst_18485 = (state_18558[(2)]);var state_18558__$1 = state_18558;var statearr_18610_18678 = state_18558__$1;(statearr_18610_18678[(2)] = inst_18485);
(statearr_18610_18678[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (2)))
{var state_18558__$1 = state_18558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18558__$1,(4),ch);
} else
{if((state_val_18559 === (23)))
{var state_18558__$1 = state_18558;var statearr_18611_18679 = state_18558__$1;(statearr_18611_18679[(2)] = null);
(statearr_18611_18679[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (35)))
{var inst_18540 = (state_18558[(2)]);var state_18558__$1 = state_18558;var statearr_18612_18680 = state_18558__$1;(statearr_18612_18680[(2)] = inst_18540);
(statearr_18612_18680[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (19)))
{var inst_18459 = (state_18558[(7)]);var inst_18463 = cljs.core.chunk_first.call(null,inst_18459);var inst_18464 = cljs.core.chunk_rest.call(null,inst_18459);var inst_18465 = cljs.core.count.call(null,inst_18463);var inst_18439 = inst_18464;var inst_18440 = inst_18463;var inst_18441 = inst_18465;var inst_18442 = (0);var state_18558__$1 = (function (){var statearr_18613 = state_18558;(statearr_18613[(13)] = inst_18439);
(statearr_18613[(14)] = inst_18441);
(statearr_18613[(16)] = inst_18442);
(statearr_18613[(17)] = inst_18440);
return statearr_18613;
})();var statearr_18614_18681 = state_18558__$1;(statearr_18614_18681[(2)] = null);
(statearr_18614_18681[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (11)))
{var inst_18439 = (state_18558[(13)]);var inst_18459 = (state_18558[(7)]);var inst_18459__$1 = cljs.core.seq.call(null,inst_18439);var state_18558__$1 = (function (){var statearr_18615 = state_18558;(statearr_18615[(7)] = inst_18459__$1);
return statearr_18615;
})();if(inst_18459__$1)
{var statearr_18616_18682 = state_18558__$1;(statearr_18616_18682[(1)] = (16));
} else
{var statearr_18617_18683 = state_18558__$1;(statearr_18617_18683[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (9)))
{var inst_18487 = (state_18558[(2)]);var state_18558__$1 = state_18558;var statearr_18618_18684 = state_18558__$1;(statearr_18618_18684[(2)] = inst_18487);
(statearr_18618_18684[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (5)))
{var inst_18437 = cljs.core.deref.call(null,cs);var inst_18438 = cljs.core.seq.call(null,inst_18437);var inst_18439 = inst_18438;var inst_18440 = null;var inst_18441 = (0);var inst_18442 = (0);var state_18558__$1 = (function (){var statearr_18619 = state_18558;(statearr_18619[(13)] = inst_18439);
(statearr_18619[(14)] = inst_18441);
(statearr_18619[(16)] = inst_18442);
(statearr_18619[(17)] = inst_18440);
return statearr_18619;
})();var statearr_18620_18685 = state_18558__$1;(statearr_18620_18685[(2)] = null);
(statearr_18620_18685[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (14)))
{var state_18558__$1 = state_18558;var statearr_18621_18686 = state_18558__$1;(statearr_18621_18686[(2)] = null);
(statearr_18621_18686[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (45)))
{var inst_18548 = (state_18558[(2)]);var state_18558__$1 = state_18558;var statearr_18622_18687 = state_18558__$1;(statearr_18622_18687[(2)] = inst_18548);
(statearr_18622_18687[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (26)))
{var inst_18490 = (state_18558[(29)]);var inst_18544 = (state_18558[(2)]);var inst_18545 = cljs.core.seq.call(null,inst_18490);var state_18558__$1 = (function (){var statearr_18623 = state_18558;(statearr_18623[(31)] = inst_18544);
return statearr_18623;
})();if(inst_18545)
{var statearr_18624_18688 = state_18558__$1;(statearr_18624_18688[(1)] = (42));
} else
{var statearr_18625_18689 = state_18558__$1;(statearr_18625_18689[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (16)))
{var inst_18459 = (state_18558[(7)]);var inst_18461 = cljs.core.chunked_seq_QMARK_.call(null,inst_18459);var state_18558__$1 = state_18558;if(inst_18461)
{var statearr_18626_18690 = state_18558__$1;(statearr_18626_18690[(1)] = (19));
} else
{var statearr_18627_18691 = state_18558__$1;(statearr_18627_18691[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (38)))
{var inst_18537 = (state_18558[(2)]);var state_18558__$1 = state_18558;var statearr_18628_18692 = state_18558__$1;(statearr_18628_18692[(2)] = inst_18537);
(statearr_18628_18692[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (30)))
{var state_18558__$1 = state_18558;var statearr_18629_18693 = state_18558__$1;(statearr_18629_18693[(2)] = null);
(statearr_18629_18693[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (10)))
{var inst_18442 = (state_18558[(16)]);var inst_18440 = (state_18558[(17)]);var inst_18448 = cljs.core._nth.call(null,inst_18440,inst_18442);var inst_18449 = cljs.core.nth.call(null,inst_18448,(0),null);var inst_18450 = cljs.core.nth.call(null,inst_18448,(1),null);var state_18558__$1 = (function (){var statearr_18630 = state_18558;(statearr_18630[(26)] = inst_18449);
return statearr_18630;
})();if(cljs.core.truth_(inst_18450))
{var statearr_18631_18694 = state_18558__$1;(statearr_18631_18694[(1)] = (13));
} else
{var statearr_18632_18695 = state_18558__$1;(statearr_18632_18695[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (18)))
{var inst_18483 = (state_18558[(2)]);var state_18558__$1 = state_18558;var statearr_18633_18696 = state_18558__$1;(statearr_18633_18696[(2)] = inst_18483);
(statearr_18633_18696[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (42)))
{var state_18558__$1 = state_18558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18558__$1,(45),dchan);
} else
{if((state_val_18559 === (37)))
{var inst_18526 = (state_18558[(23)]);var inst_18430 = (state_18558[(11)]);var inst_18517 = (state_18558[(25)]);var inst_18526__$1 = cljs.core.first.call(null,inst_18517);var inst_18527 = cljs.core.async.put_BANG_.call(null,inst_18526__$1,inst_18430,done);var state_18558__$1 = (function (){var statearr_18634 = state_18558;(statearr_18634[(23)] = inst_18526__$1);
return statearr_18634;
})();if(cljs.core.truth_(inst_18527))
{var statearr_18635_18697 = state_18558__$1;(statearr_18635_18697[(1)] = (39));
} else
{var statearr_18636_18698 = state_18558__$1;(statearr_18636_18698[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18559 === (8)))
{var inst_18441 = (state_18558[(14)]);var inst_18442 = (state_18558[(16)]);var inst_18444 = (inst_18442 < inst_18441);var inst_18445 = inst_18444;var state_18558__$1 = state_18558;if(cljs.core.truth_(inst_18445))
{var statearr_18637_18699 = state_18558__$1;(statearr_18637_18699[(1)] = (10));
} else
{var statearr_18638_18700 = state_18558__$1;(statearr_18638_18700[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9029__auto___18646,cs,m,dchan,dctr,done))
;return ((function (switch__9014__auto__,c__9029__auto___18646,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_18642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18642[(0)] = state_machine__9015__auto__);
(statearr_18642[(1)] = (1));
return statearr_18642;
});
var state_machine__9015__auto____1 = (function (state_18558){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_18558);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e18643){if((e18643 instanceof Object))
{var ex__9018__auto__ = e18643;var statearr_18644_18701 = state_18558;(statearr_18644_18701[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18643;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18702 = state_18558;
state_18558 = G__18702;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_18558){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_18558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___18646,cs,m,dchan,dctr,done))
})();var state__9031__auto__ = (function (){var statearr_18645 = f__9030__auto__.call(null);(statearr_18645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___18646);
return statearr_18645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___18646,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj18704 = {};return obj18704;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3563__auto__ = m;if(and__3563__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3563__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4202__auto__ = (((m == null))?null:m);return (function (){var or__3575__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3563__auto__ = m;if(and__3563__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3563__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4202__auto__ = (((m == null))?null:m);return (function (){var or__3575__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3563__auto__ = m;if(and__3563__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3563__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4202__auto__ = (((m == null))?null:m);return (function (){var or__3575__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3563__auto__ = m;if(and__3563__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3563__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4202__auto__ = (((m == null))?null:m);return (function (){var or__3575__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3563__auto__ = m;if(and__3563__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3563__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4202__auto__ = (((m == null))?null:m);return (function (){var or__3575__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t18824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18824 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18825){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18825 = meta18825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18824.cljs$lang$type = true;
cljs.core.async.t18824.cljs$lang$ctorStr = "cljs.core.async/t18824";
cljs.core.async.t18824.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t18824");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18824.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18824.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18824.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18824.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18824.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18824.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18824.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18826){var self__ = this;
var _18826__$1 = this;return self__.meta18825;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18826,meta18825__$1){var self__ = this;
var _18826__$1 = this;return (new cljs.core.async.t18824(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18825__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18824 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18825){return (new cljs.core.async.t18824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18825));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18824(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9029__auto___18943 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___18943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___18943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18896){var state_val_18897 = (state_18896[(1)]);if((state_val_18897 === (7)))
{var inst_18840 = (state_18896[(7)]);var inst_18845 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18840);var state_18896__$1 = state_18896;var statearr_18898_18944 = state_18896__$1;(statearr_18898_18944[(2)] = inst_18845);
(statearr_18898_18944[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (20)))
{var inst_18855 = (state_18896[(8)]);var state_18896__$1 = state_18896;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18896__$1,(23),out,inst_18855);
} else
{if((state_val_18897 === (1)))
{var inst_18830 = (state_18896[(9)]);var inst_18830__$1 = calc_state.call(null);var inst_18831 = cljs.core.seq_QMARK_.call(null,inst_18830__$1);var state_18896__$1 = (function (){var statearr_18899 = state_18896;(statearr_18899[(9)] = inst_18830__$1);
return statearr_18899;
})();if(inst_18831)
{var statearr_18900_18945 = state_18896__$1;(statearr_18900_18945[(1)] = (2));
} else
{var statearr_18901_18946 = state_18896__$1;(statearr_18901_18946[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (24)))
{var inst_18848 = (state_18896[(10)]);var inst_18840 = inst_18848;var state_18896__$1 = (function (){var statearr_18902 = state_18896;(statearr_18902[(7)] = inst_18840);
return statearr_18902;
})();var statearr_18903_18947 = state_18896__$1;(statearr_18903_18947[(2)] = null);
(statearr_18903_18947[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (4)))
{var inst_18830 = (state_18896[(9)]);var inst_18836 = (state_18896[(2)]);var inst_18837 = cljs.core.get.call(null,inst_18836,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18838 = cljs.core.get.call(null,inst_18836,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18839 = cljs.core.get.call(null,inst_18836,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_18840 = inst_18830;var state_18896__$1 = (function (){var statearr_18904 = state_18896;(statearr_18904[(11)] = inst_18839);
(statearr_18904[(12)] = inst_18838);
(statearr_18904[(13)] = inst_18837);
(statearr_18904[(7)] = inst_18840);
return statearr_18904;
})();var statearr_18905_18948 = state_18896__$1;(statearr_18905_18948[(2)] = null);
(statearr_18905_18948[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (15)))
{var state_18896__$1 = state_18896;var statearr_18906_18949 = state_18896__$1;(statearr_18906_18949[(2)] = null);
(statearr_18906_18949[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (21)))
{var inst_18848 = (state_18896[(10)]);var inst_18840 = inst_18848;var state_18896__$1 = (function (){var statearr_18907 = state_18896;(statearr_18907[(7)] = inst_18840);
return statearr_18907;
})();var statearr_18908_18950 = state_18896__$1;(statearr_18908_18950[(2)] = null);
(statearr_18908_18950[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (13)))
{var inst_18892 = (state_18896[(2)]);var state_18896__$1 = state_18896;var statearr_18909_18951 = state_18896__$1;(statearr_18909_18951[(2)] = inst_18892);
(statearr_18909_18951[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (22)))
{var inst_18890 = (state_18896[(2)]);var state_18896__$1 = state_18896;var statearr_18910_18952 = state_18896__$1;(statearr_18910_18952[(2)] = inst_18890);
(statearr_18910_18952[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (6)))
{var inst_18894 = (state_18896[(2)]);var state_18896__$1 = state_18896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18896__$1,inst_18894);
} else
{if((state_val_18897 === (25)))
{var state_18896__$1 = state_18896;var statearr_18911_18953 = state_18896__$1;(statearr_18911_18953[(2)] = null);
(statearr_18911_18953[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (17)))
{var inst_18870 = (state_18896[(14)]);var state_18896__$1 = state_18896;var statearr_18912_18954 = state_18896__$1;(statearr_18912_18954[(2)] = inst_18870);
(statearr_18912_18954[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (3)))
{var inst_18830 = (state_18896[(9)]);var state_18896__$1 = state_18896;var statearr_18913_18955 = state_18896__$1;(statearr_18913_18955[(2)] = inst_18830);
(statearr_18913_18955[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (12)))
{var inst_18870 = (state_18896[(14)]);var inst_18851 = (state_18896[(15)]);var inst_18856 = (state_18896[(16)]);var inst_18870__$1 = inst_18851.call(null,inst_18856);var state_18896__$1 = (function (){var statearr_18914 = state_18896;(statearr_18914[(14)] = inst_18870__$1);
return statearr_18914;
})();if(cljs.core.truth_(inst_18870__$1))
{var statearr_18915_18956 = state_18896__$1;(statearr_18915_18956[(1)] = (17));
} else
{var statearr_18916_18957 = state_18896__$1;(statearr_18916_18957[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (2)))
{var inst_18830 = (state_18896[(9)]);var inst_18833 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18830);var state_18896__$1 = state_18896;var statearr_18917_18958 = state_18896__$1;(statearr_18917_18958[(2)] = inst_18833);
(statearr_18917_18958[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (23)))
{var inst_18881 = (state_18896[(2)]);var state_18896__$1 = state_18896;if(cljs.core.truth_(inst_18881))
{var statearr_18918_18959 = state_18896__$1;(statearr_18918_18959[(1)] = (24));
} else
{var statearr_18919_18960 = state_18896__$1;(statearr_18919_18960[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (19)))
{var inst_18878 = (state_18896[(2)]);var state_18896__$1 = state_18896;if(cljs.core.truth_(inst_18878))
{var statearr_18920_18961 = state_18896__$1;(statearr_18920_18961[(1)] = (20));
} else
{var statearr_18921_18962 = state_18896__$1;(statearr_18921_18962[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (11)))
{var inst_18855 = (state_18896[(8)]);var inst_18861 = (inst_18855 == null);var state_18896__$1 = state_18896;if(cljs.core.truth_(inst_18861))
{var statearr_18922_18963 = state_18896__$1;(statearr_18922_18963[(1)] = (14));
} else
{var statearr_18923_18964 = state_18896__$1;(statearr_18923_18964[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (9)))
{var inst_18848 = (state_18896[(10)]);var inst_18848__$1 = (state_18896[(2)]);var inst_18849 = cljs.core.get.call(null,inst_18848__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18850 = cljs.core.get.call(null,inst_18848__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18851 = cljs.core.get.call(null,inst_18848__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_18896__$1 = (function (){var statearr_18924 = state_18896;(statearr_18924[(15)] = inst_18851);
(statearr_18924[(17)] = inst_18850);
(statearr_18924[(10)] = inst_18848__$1);
return statearr_18924;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18896__$1,(10),inst_18849);
} else
{if((state_val_18897 === (5)))
{var inst_18840 = (state_18896[(7)]);var inst_18843 = cljs.core.seq_QMARK_.call(null,inst_18840);var state_18896__$1 = state_18896;if(inst_18843)
{var statearr_18925_18965 = state_18896__$1;(statearr_18925_18965[(1)] = (7));
} else
{var statearr_18926_18966 = state_18896__$1;(statearr_18926_18966[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (14)))
{var inst_18856 = (state_18896[(16)]);var inst_18863 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18856);var state_18896__$1 = state_18896;var statearr_18927_18967 = state_18896__$1;(statearr_18927_18967[(2)] = inst_18863);
(statearr_18927_18967[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (26)))
{var inst_18886 = (state_18896[(2)]);var state_18896__$1 = state_18896;var statearr_18928_18968 = state_18896__$1;(statearr_18928_18968[(2)] = inst_18886);
(statearr_18928_18968[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (16)))
{var inst_18866 = (state_18896[(2)]);var inst_18867 = calc_state.call(null);var inst_18840 = inst_18867;var state_18896__$1 = (function (){var statearr_18929 = state_18896;(statearr_18929[(7)] = inst_18840);
(statearr_18929[(18)] = inst_18866);
return statearr_18929;
})();var statearr_18930_18969 = state_18896__$1;(statearr_18930_18969[(2)] = null);
(statearr_18930_18969[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (10)))
{var inst_18856 = (state_18896[(16)]);var inst_18855 = (state_18896[(8)]);var inst_18854 = (state_18896[(2)]);var inst_18855__$1 = cljs.core.nth.call(null,inst_18854,(0),null);var inst_18856__$1 = cljs.core.nth.call(null,inst_18854,(1),null);var inst_18857 = (inst_18855__$1 == null);var inst_18858 = cljs.core._EQ_.call(null,inst_18856__$1,change);var inst_18859 = (inst_18857) || (inst_18858);var state_18896__$1 = (function (){var statearr_18931 = state_18896;(statearr_18931[(16)] = inst_18856__$1);
(statearr_18931[(8)] = inst_18855__$1);
return statearr_18931;
})();if(cljs.core.truth_(inst_18859))
{var statearr_18932_18970 = state_18896__$1;(statearr_18932_18970[(1)] = (11));
} else
{var statearr_18933_18971 = state_18896__$1;(statearr_18933_18971[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (18)))
{var inst_18851 = (state_18896[(15)]);var inst_18856 = (state_18896[(16)]);var inst_18850 = (state_18896[(17)]);var inst_18873 = cljs.core.empty_QMARK_.call(null,inst_18851);var inst_18874 = inst_18850.call(null,inst_18856);var inst_18875 = cljs.core.not.call(null,inst_18874);var inst_18876 = (inst_18873) && (inst_18875);var state_18896__$1 = state_18896;var statearr_18934_18972 = state_18896__$1;(statearr_18934_18972[(2)] = inst_18876);
(statearr_18934_18972[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18897 === (8)))
{var inst_18840 = (state_18896[(7)]);var state_18896__$1 = state_18896;var statearr_18935_18973 = state_18896__$1;(statearr_18935_18973[(2)] = inst_18840);
(statearr_18935_18973[(1)] = (9));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9029__auto___18943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9014__auto__,c__9029__auto___18943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_18939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18939[(0)] = state_machine__9015__auto__);
(statearr_18939[(1)] = (1));
return statearr_18939;
});
var state_machine__9015__auto____1 = (function (state_18896){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_18896);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e18940){if((e18940 instanceof Object))
{var ex__9018__auto__ = e18940;var statearr_18941_18974 = state_18896;(statearr_18941_18974[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18896);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18940;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18975 = state_18896;
state_18896 = G__18975;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_18896){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_18896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___18943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9031__auto__ = (function (){var statearr_18942 = f__9030__auto__.call(null);(statearr_18942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___18943);
return statearr_18942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___18943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj18977 = {};return obj18977;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3563__auto__ = p;if(and__3563__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3563__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4202__auto__ = (((p == null))?null:p);return (function (){var or__3575__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3563__auto__ = p;if(and__3563__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3563__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4202__auto__ = (((p == null))?null:p);return (function (){var or__3575__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3563__auto__ = p;if(and__3563__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3563__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4202__auto__ = (((p == null))?null:p);return (function (){var or__3575__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3563__auto__ = p;if(and__3563__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3563__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4202__auto__ = (((p == null))?null:p);return (function (){var or__3575__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4202__auto__)]);if(or__3575__auto__)
{return or__3575__auto__;
} else
{var or__3575__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3575__auto____$1)
{return or__3575__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3575__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3575__auto__,mults){
return (function (p1__18978_SHARP_){if(cljs.core.truth_(p1__18978_SHARP_.call(null,topic)))
{return p1__18978_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18978_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3575__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19101 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19101 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19102){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19102 = meta19102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19101.cljs$lang$type = true;
cljs.core.async.t19101.cljs$lang$ctorStr = "cljs.core.async/t19101";
cljs.core.async.t19101.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t19101");
});})(mults,ensure_mult))
;
cljs.core.async.t19101.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19101.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19101.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19101.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19103){var self__ = this;
var _19103__$1 = this;return self__.meta19102;
});})(mults,ensure_mult))
;
cljs.core.async.t19101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19103,meta19102__$1){var self__ = this;
var _19103__$1 = this;return (new cljs.core.async.t19101(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19102__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19101 = ((function (mults,ensure_mult){
return (function __GT_t19101(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19102){return (new cljs.core.async.t19101(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19102));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19101(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9029__auto___19223 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___19223,mults,ensure_mult,p){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___19223,mults,ensure_mult,p){
return (function (state_19175){var state_val_19176 = (state_19175[(1)]);if((state_val_19176 === (7)))
{var inst_19171 = (state_19175[(2)]);var state_19175__$1 = state_19175;var statearr_19177_19224 = state_19175__$1;(statearr_19177_19224[(2)] = inst_19171);
(statearr_19177_19224[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (20)))
{var state_19175__$1 = state_19175;var statearr_19178_19225 = state_19175__$1;(statearr_19178_19225[(2)] = null);
(statearr_19178_19225[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (1)))
{var state_19175__$1 = state_19175;var statearr_19179_19226 = state_19175__$1;(statearr_19179_19226[(2)] = null);
(statearr_19179_19226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (24)))
{var inst_19154 = (state_19175[(7)]);var inst_19163 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19154);var state_19175__$1 = state_19175;var statearr_19180_19227 = state_19175__$1;(statearr_19180_19227[(2)] = inst_19163);
(statearr_19180_19227[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (4)))
{var inst_19106 = (state_19175[(8)]);var inst_19106__$1 = (state_19175[(2)]);var inst_19107 = (inst_19106__$1 == null);var state_19175__$1 = (function (){var statearr_19181 = state_19175;(statearr_19181[(8)] = inst_19106__$1);
return statearr_19181;
})();if(cljs.core.truth_(inst_19107))
{var statearr_19182_19228 = state_19175__$1;(statearr_19182_19228[(1)] = (5));
} else
{var statearr_19183_19229 = state_19175__$1;(statearr_19183_19229[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (15)))
{var inst_19148 = (state_19175[(2)]);var state_19175__$1 = state_19175;var statearr_19184_19230 = state_19175__$1;(statearr_19184_19230[(2)] = inst_19148);
(statearr_19184_19230[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (21)))
{var inst_19168 = (state_19175[(2)]);var state_19175__$1 = (function (){var statearr_19185 = state_19175;(statearr_19185[(9)] = inst_19168);
return statearr_19185;
})();var statearr_19186_19231 = state_19175__$1;(statearr_19186_19231[(2)] = null);
(statearr_19186_19231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (13)))
{var inst_19130 = (state_19175[(10)]);var inst_19132 = cljs.core.chunked_seq_QMARK_.call(null,inst_19130);var state_19175__$1 = state_19175;if(inst_19132)
{var statearr_19187_19232 = state_19175__$1;(statearr_19187_19232[(1)] = (16));
} else
{var statearr_19188_19233 = state_19175__$1;(statearr_19188_19233[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (22)))
{var inst_19160 = (state_19175[(2)]);var state_19175__$1 = state_19175;if(cljs.core.truth_(inst_19160))
{var statearr_19189_19234 = state_19175__$1;(statearr_19189_19234[(1)] = (23));
} else
{var statearr_19190_19235 = state_19175__$1;(statearr_19190_19235[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (6)))
{var inst_19154 = (state_19175[(7)]);var inst_19156 = (state_19175[(11)]);var inst_19106 = (state_19175[(8)]);var inst_19154__$1 = topic_fn.call(null,inst_19106);var inst_19155 = cljs.core.deref.call(null,mults);var inst_19156__$1 = cljs.core.get.call(null,inst_19155,inst_19154__$1);var state_19175__$1 = (function (){var statearr_19191 = state_19175;(statearr_19191[(7)] = inst_19154__$1);
(statearr_19191[(11)] = inst_19156__$1);
return statearr_19191;
})();if(cljs.core.truth_(inst_19156__$1))
{var statearr_19192_19236 = state_19175__$1;(statearr_19192_19236[(1)] = (19));
} else
{var statearr_19193_19237 = state_19175__$1;(statearr_19193_19237[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (25)))
{var inst_19165 = (state_19175[(2)]);var state_19175__$1 = state_19175;var statearr_19194_19238 = state_19175__$1;(statearr_19194_19238[(2)] = inst_19165);
(statearr_19194_19238[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (17)))
{var inst_19130 = (state_19175[(10)]);var inst_19139 = cljs.core.first.call(null,inst_19130);var inst_19140 = cljs.core.async.muxch_STAR_.call(null,inst_19139);var inst_19141 = cljs.core.async.close_BANG_.call(null,inst_19140);var inst_19142 = cljs.core.next.call(null,inst_19130);var inst_19116 = inst_19142;var inst_19117 = null;var inst_19118 = (0);var inst_19119 = (0);var state_19175__$1 = (function (){var statearr_19195 = state_19175;(statearr_19195[(12)] = inst_19118);
(statearr_19195[(13)] = inst_19141);
(statearr_19195[(14)] = inst_19116);
(statearr_19195[(15)] = inst_19119);
(statearr_19195[(16)] = inst_19117);
return statearr_19195;
})();var statearr_19196_19239 = state_19175__$1;(statearr_19196_19239[(2)] = null);
(statearr_19196_19239[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (3)))
{var inst_19173 = (state_19175[(2)]);var state_19175__$1 = state_19175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19175__$1,inst_19173);
} else
{if((state_val_19176 === (12)))
{var inst_19150 = (state_19175[(2)]);var state_19175__$1 = state_19175;var statearr_19197_19240 = state_19175__$1;(statearr_19197_19240[(2)] = inst_19150);
(statearr_19197_19240[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (2)))
{var state_19175__$1 = state_19175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19175__$1,(4),ch);
} else
{if((state_val_19176 === (23)))
{var state_19175__$1 = state_19175;var statearr_19198_19241 = state_19175__$1;(statearr_19198_19241[(2)] = null);
(statearr_19198_19241[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (19)))
{var inst_19156 = (state_19175[(11)]);var inst_19106 = (state_19175[(8)]);var inst_19158 = cljs.core.async.muxch_STAR_.call(null,inst_19156);var state_19175__$1 = state_19175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19175__$1,(22),inst_19158,inst_19106);
} else
{if((state_val_19176 === (11)))
{var inst_19130 = (state_19175[(10)]);var inst_19116 = (state_19175[(14)]);var inst_19130__$1 = cljs.core.seq.call(null,inst_19116);var state_19175__$1 = (function (){var statearr_19199 = state_19175;(statearr_19199[(10)] = inst_19130__$1);
return statearr_19199;
})();if(inst_19130__$1)
{var statearr_19200_19242 = state_19175__$1;(statearr_19200_19242[(1)] = (13));
} else
{var statearr_19201_19243 = state_19175__$1;(statearr_19201_19243[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (9)))
{var inst_19152 = (state_19175[(2)]);var state_19175__$1 = state_19175;var statearr_19202_19244 = state_19175__$1;(statearr_19202_19244[(2)] = inst_19152);
(statearr_19202_19244[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (5)))
{var inst_19113 = cljs.core.deref.call(null,mults);var inst_19114 = cljs.core.vals.call(null,inst_19113);var inst_19115 = cljs.core.seq.call(null,inst_19114);var inst_19116 = inst_19115;var inst_19117 = null;var inst_19118 = (0);var inst_19119 = (0);var state_19175__$1 = (function (){var statearr_19203 = state_19175;(statearr_19203[(12)] = inst_19118);
(statearr_19203[(14)] = inst_19116);
(statearr_19203[(15)] = inst_19119);
(statearr_19203[(16)] = inst_19117);
return statearr_19203;
})();var statearr_19204_19245 = state_19175__$1;(statearr_19204_19245[(2)] = null);
(statearr_19204_19245[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (14)))
{var state_19175__$1 = state_19175;var statearr_19208_19246 = state_19175__$1;(statearr_19208_19246[(2)] = null);
(statearr_19208_19246[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (16)))
{var inst_19130 = (state_19175[(10)]);var inst_19134 = cljs.core.chunk_first.call(null,inst_19130);var inst_19135 = cljs.core.chunk_rest.call(null,inst_19130);var inst_19136 = cljs.core.count.call(null,inst_19134);var inst_19116 = inst_19135;var inst_19117 = inst_19134;var inst_19118 = inst_19136;var inst_19119 = (0);var state_19175__$1 = (function (){var statearr_19209 = state_19175;(statearr_19209[(12)] = inst_19118);
(statearr_19209[(14)] = inst_19116);
(statearr_19209[(15)] = inst_19119);
(statearr_19209[(16)] = inst_19117);
return statearr_19209;
})();var statearr_19210_19247 = state_19175__$1;(statearr_19210_19247[(2)] = null);
(statearr_19210_19247[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (10)))
{var inst_19118 = (state_19175[(12)]);var inst_19116 = (state_19175[(14)]);var inst_19119 = (state_19175[(15)]);var inst_19117 = (state_19175[(16)]);var inst_19124 = cljs.core._nth.call(null,inst_19117,inst_19119);var inst_19125 = cljs.core.async.muxch_STAR_.call(null,inst_19124);var inst_19126 = cljs.core.async.close_BANG_.call(null,inst_19125);var inst_19127 = (inst_19119 + (1));var tmp19205 = inst_19118;var tmp19206 = inst_19116;var tmp19207 = inst_19117;var inst_19116__$1 = tmp19206;var inst_19117__$1 = tmp19207;var inst_19118__$1 = tmp19205;var inst_19119__$1 = inst_19127;var state_19175__$1 = (function (){var statearr_19211 = state_19175;(statearr_19211[(12)] = inst_19118__$1);
(statearr_19211[(17)] = inst_19126);
(statearr_19211[(14)] = inst_19116__$1);
(statearr_19211[(15)] = inst_19119__$1);
(statearr_19211[(16)] = inst_19117__$1);
return statearr_19211;
})();var statearr_19212_19248 = state_19175__$1;(statearr_19212_19248[(2)] = null);
(statearr_19212_19248[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (18)))
{var inst_19145 = (state_19175[(2)]);var state_19175__$1 = state_19175;var statearr_19213_19249 = state_19175__$1;(statearr_19213_19249[(2)] = inst_19145);
(statearr_19213_19249[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19176 === (8)))
{var inst_19118 = (state_19175[(12)]);var inst_19119 = (state_19175[(15)]);var inst_19121 = (inst_19119 < inst_19118);var inst_19122 = inst_19121;var state_19175__$1 = state_19175;if(cljs.core.truth_(inst_19122))
{var statearr_19214_19250 = state_19175__$1;(statearr_19214_19250[(1)] = (10));
} else
{var statearr_19215_19251 = state_19175__$1;(statearr_19215_19251[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9029__auto___19223,mults,ensure_mult,p))
;return ((function (switch__9014__auto__,c__9029__auto___19223,mults,ensure_mult,p){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_19219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19219[(0)] = state_machine__9015__auto__);
(statearr_19219[(1)] = (1));
return statearr_19219;
});
var state_machine__9015__auto____1 = (function (state_19175){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_19175);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e19220){if((e19220 instanceof Object))
{var ex__9018__auto__ = e19220;var statearr_19221_19252 = state_19175;(statearr_19221_19252[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19220;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19253 = state_19175;
state_19175 = G__19253;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_19175){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_19175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___19223,mults,ensure_mult,p))
})();var state__9031__auto__ = (function (){var statearr_19222 = f__9030__auto__.call(null);(statearr_19222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___19223);
return statearr_19222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___19223,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__9029__auto___19390 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___19390,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___19390,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19360){var state_val_19361 = (state_19360[(1)]);if((state_val_19361 === (7)))
{var state_19360__$1 = state_19360;var statearr_19362_19391 = state_19360__$1;(statearr_19362_19391[(2)] = null);
(statearr_19362_19391[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (1)))
{var state_19360__$1 = state_19360;var statearr_19363_19392 = state_19360__$1;(statearr_19363_19392[(2)] = null);
(statearr_19363_19392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (4)))
{var inst_19324 = (state_19360[(7)]);var inst_19326 = (inst_19324 < cnt);var state_19360__$1 = state_19360;if(cljs.core.truth_(inst_19326))
{var statearr_19364_19393 = state_19360__$1;(statearr_19364_19393[(1)] = (6));
} else
{var statearr_19365_19394 = state_19360__$1;(statearr_19365_19394[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (15)))
{var inst_19356 = (state_19360[(2)]);var state_19360__$1 = state_19360;var statearr_19366_19395 = state_19360__$1;(statearr_19366_19395[(2)] = inst_19356);
(statearr_19366_19395[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (13)))
{var inst_19349 = cljs.core.async.close_BANG_.call(null,out);var state_19360__$1 = state_19360;var statearr_19367_19396 = state_19360__$1;(statearr_19367_19396[(2)] = inst_19349);
(statearr_19367_19396[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (6)))
{var state_19360__$1 = state_19360;var statearr_19368_19397 = state_19360__$1;(statearr_19368_19397[(2)] = null);
(statearr_19368_19397[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (3)))
{var inst_19358 = (state_19360[(2)]);var state_19360__$1 = state_19360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19360__$1,inst_19358);
} else
{if((state_val_19361 === (12)))
{var inst_19346 = (state_19360[(8)]);var inst_19346__$1 = (state_19360[(2)]);var inst_19347 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19346__$1);var state_19360__$1 = (function (){var statearr_19369 = state_19360;(statearr_19369[(8)] = inst_19346__$1);
return statearr_19369;
})();if(cljs.core.truth_(inst_19347))
{var statearr_19370_19398 = state_19360__$1;(statearr_19370_19398[(1)] = (13));
} else
{var statearr_19371_19399 = state_19360__$1;(statearr_19371_19399[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (2)))
{var inst_19323 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19324 = (0);var state_19360__$1 = (function (){var statearr_19372 = state_19360;(statearr_19372[(7)] = inst_19324);
(statearr_19372[(9)] = inst_19323);
return statearr_19372;
})();var statearr_19373_19400 = state_19360__$1;(statearr_19373_19400[(2)] = null);
(statearr_19373_19400[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (11)))
{var inst_19324 = (state_19360[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19360,(10),Object,null,(9));var inst_19333 = chs__$1.call(null,inst_19324);var inst_19334 = done.call(null,inst_19324);var inst_19335 = cljs.core.async.take_BANG_.call(null,inst_19333,inst_19334);var state_19360__$1 = state_19360;var statearr_19374_19401 = state_19360__$1;(statearr_19374_19401[(2)] = inst_19335);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19360__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (9)))
{var inst_19324 = (state_19360[(7)]);var inst_19337 = (state_19360[(2)]);var inst_19338 = (inst_19324 + (1));var inst_19324__$1 = inst_19338;var state_19360__$1 = (function (){var statearr_19375 = state_19360;(statearr_19375[(7)] = inst_19324__$1);
(statearr_19375[(10)] = inst_19337);
return statearr_19375;
})();var statearr_19376_19402 = state_19360__$1;(statearr_19376_19402[(2)] = null);
(statearr_19376_19402[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (5)))
{var inst_19344 = (state_19360[(2)]);var state_19360__$1 = (function (){var statearr_19377 = state_19360;(statearr_19377[(11)] = inst_19344);
return statearr_19377;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19360__$1,(12),dchan);
} else
{if((state_val_19361 === (14)))
{var inst_19346 = (state_19360[(8)]);var inst_19351 = cljs.core.apply.call(null,f,inst_19346);var state_19360__$1 = state_19360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19360__$1,(16),out,inst_19351);
} else
{if((state_val_19361 === (16)))
{var inst_19353 = (state_19360[(2)]);var state_19360__$1 = (function (){var statearr_19378 = state_19360;(statearr_19378[(12)] = inst_19353);
return statearr_19378;
})();var statearr_19379_19403 = state_19360__$1;(statearr_19379_19403[(2)] = null);
(statearr_19379_19403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (10)))
{var inst_19328 = (state_19360[(2)]);var inst_19329 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19360__$1 = (function (){var statearr_19380 = state_19360;(statearr_19380[(13)] = inst_19328);
return statearr_19380;
})();var statearr_19381_19404 = state_19360__$1;(statearr_19381_19404[(2)] = inst_19329);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19360__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19361 === (8)))
{var inst_19342 = (state_19360[(2)]);var state_19360__$1 = state_19360;var statearr_19382_19405 = state_19360__$1;(statearr_19382_19405[(2)] = inst_19342);
(statearr_19382_19405[(1)] = (5));
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
}
}
}
}
}
}
}
}
}
});})(c__9029__auto___19390,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9014__auto__,c__9029__auto___19390,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_19386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19386[(0)] = state_machine__9015__auto__);
(statearr_19386[(1)] = (1));
return statearr_19386;
});
var state_machine__9015__auto____1 = (function (state_19360){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_19360);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e19387){if((e19387 instanceof Object))
{var ex__9018__auto__ = e19387;var statearr_19388_19406 = state_19360;(statearr_19388_19406[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19387;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19407 = state_19360;
state_19360 = G__19407;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_19360){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_19360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___19390,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9031__auto__ = (function (){var statearr_19389 = f__9030__auto__.call(null);(statearr_19389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___19390);
return statearr_19389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___19390,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9029__auto___19515 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___19515,out){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___19515,out){
return (function (state_19491){var state_val_19492 = (state_19491[(1)]);if((state_val_19492 === (7)))
{var inst_19471 = (state_19491[(7)]);var inst_19470 = (state_19491[(8)]);var inst_19470__$1 = (state_19491[(2)]);var inst_19471__$1 = cljs.core.nth.call(null,inst_19470__$1,(0),null);var inst_19472 = cljs.core.nth.call(null,inst_19470__$1,(1),null);var inst_19473 = (inst_19471__$1 == null);var state_19491__$1 = (function (){var statearr_19493 = state_19491;(statearr_19493[(7)] = inst_19471__$1);
(statearr_19493[(8)] = inst_19470__$1);
(statearr_19493[(9)] = inst_19472);
return statearr_19493;
})();if(cljs.core.truth_(inst_19473))
{var statearr_19494_19516 = state_19491__$1;(statearr_19494_19516[(1)] = (8));
} else
{var statearr_19495_19517 = state_19491__$1;(statearr_19495_19517[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19492 === (1)))
{var inst_19462 = cljs.core.vec.call(null,chs);var inst_19463 = inst_19462;var state_19491__$1 = (function (){var statearr_19496 = state_19491;(statearr_19496[(10)] = inst_19463);
return statearr_19496;
})();var statearr_19497_19518 = state_19491__$1;(statearr_19497_19518[(2)] = null);
(statearr_19497_19518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19492 === (4)))
{var inst_19463 = (state_19491[(10)]);var state_19491__$1 = state_19491;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19491__$1,(7),inst_19463);
} else
{if((state_val_19492 === (6)))
{var inst_19487 = (state_19491[(2)]);var state_19491__$1 = state_19491;var statearr_19498_19519 = state_19491__$1;(statearr_19498_19519[(2)] = inst_19487);
(statearr_19498_19519[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19492 === (3)))
{var inst_19489 = (state_19491[(2)]);var state_19491__$1 = state_19491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19491__$1,inst_19489);
} else
{if((state_val_19492 === (2)))
{var inst_19463 = (state_19491[(10)]);var inst_19465 = cljs.core.count.call(null,inst_19463);var inst_19466 = (inst_19465 > (0));var state_19491__$1 = state_19491;if(cljs.core.truth_(inst_19466))
{var statearr_19500_19520 = state_19491__$1;(statearr_19500_19520[(1)] = (4));
} else
{var statearr_19501_19521 = state_19491__$1;(statearr_19501_19521[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19492 === (11)))
{var inst_19463 = (state_19491[(10)]);var inst_19480 = (state_19491[(2)]);var tmp19499 = inst_19463;var inst_19463__$1 = tmp19499;var state_19491__$1 = (function (){var statearr_19502 = state_19491;(statearr_19502[(11)] = inst_19480);
(statearr_19502[(10)] = inst_19463__$1);
return statearr_19502;
})();var statearr_19503_19522 = state_19491__$1;(statearr_19503_19522[(2)] = null);
(statearr_19503_19522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19492 === (9)))
{var inst_19471 = (state_19491[(7)]);var state_19491__$1 = state_19491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19491__$1,(11),out,inst_19471);
} else
{if((state_val_19492 === (5)))
{var inst_19485 = cljs.core.async.close_BANG_.call(null,out);var state_19491__$1 = state_19491;var statearr_19504_19523 = state_19491__$1;(statearr_19504_19523[(2)] = inst_19485);
(statearr_19504_19523[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19492 === (10)))
{var inst_19483 = (state_19491[(2)]);var state_19491__$1 = state_19491;var statearr_19505_19524 = state_19491__$1;(statearr_19505_19524[(2)] = inst_19483);
(statearr_19505_19524[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19492 === (8)))
{var inst_19463 = (state_19491[(10)]);var inst_19471 = (state_19491[(7)]);var inst_19470 = (state_19491[(8)]);var inst_19472 = (state_19491[(9)]);var inst_19475 = (function (){var c = inst_19472;var v = inst_19471;var vec__19468 = inst_19470;var cs = inst_19463;return ((function (c,v,vec__19468,cs,inst_19463,inst_19471,inst_19470,inst_19472,state_val_19492,c__9029__auto___19515,out){
return (function (p1__19408_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19408_SHARP_);
});
;})(c,v,vec__19468,cs,inst_19463,inst_19471,inst_19470,inst_19472,state_val_19492,c__9029__auto___19515,out))
})();var inst_19476 = cljs.core.filterv.call(null,inst_19475,inst_19463);var inst_19463__$1 = inst_19476;var state_19491__$1 = (function (){var statearr_19506 = state_19491;(statearr_19506[(10)] = inst_19463__$1);
return statearr_19506;
})();var statearr_19507_19525 = state_19491__$1;(statearr_19507_19525[(2)] = null);
(statearr_19507_19525[(1)] = (2));
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
}
}
}
}
});})(c__9029__auto___19515,out))
;return ((function (switch__9014__auto__,c__9029__auto___19515,out){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_19511 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19511[(0)] = state_machine__9015__auto__);
(statearr_19511[(1)] = (1));
return statearr_19511;
});
var state_machine__9015__auto____1 = (function (state_19491){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_19491);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e19512){if((e19512 instanceof Object))
{var ex__9018__auto__ = e19512;var statearr_19513_19526 = state_19491;(statearr_19513_19526[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19491);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19512;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19527 = state_19491;
state_19491 = G__19527;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_19491){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_19491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___19515,out))
})();var state__9031__auto__ = (function (){var statearr_19514 = f__9030__auto__.call(null);(statearr_19514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___19515);
return statearr_19514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___19515,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9029__auto___19620 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___19620,out){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___19620,out){
return (function (state_19597){var state_val_19598 = (state_19597[(1)]);if((state_val_19598 === (7)))
{var inst_19579 = (state_19597[(7)]);var inst_19579__$1 = (state_19597[(2)]);var inst_19580 = (inst_19579__$1 == null);var inst_19581 = cljs.core.not.call(null,inst_19580);var state_19597__$1 = (function (){var statearr_19599 = state_19597;(statearr_19599[(7)] = inst_19579__$1);
return statearr_19599;
})();if(inst_19581)
{var statearr_19600_19621 = state_19597__$1;(statearr_19600_19621[(1)] = (8));
} else
{var statearr_19601_19622 = state_19597__$1;(statearr_19601_19622[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19598 === (1)))
{var inst_19574 = (0);var state_19597__$1 = (function (){var statearr_19602 = state_19597;(statearr_19602[(8)] = inst_19574);
return statearr_19602;
})();var statearr_19603_19623 = state_19597__$1;(statearr_19603_19623[(2)] = null);
(statearr_19603_19623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19598 === (4)))
{var state_19597__$1 = state_19597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19597__$1,(7),ch);
} else
{if((state_val_19598 === (6)))
{var inst_19592 = (state_19597[(2)]);var state_19597__$1 = state_19597;var statearr_19604_19624 = state_19597__$1;(statearr_19604_19624[(2)] = inst_19592);
(statearr_19604_19624[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19598 === (3)))
{var inst_19594 = (state_19597[(2)]);var inst_19595 = cljs.core.async.close_BANG_.call(null,out);var state_19597__$1 = (function (){var statearr_19605 = state_19597;(statearr_19605[(9)] = inst_19594);
return statearr_19605;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19597__$1,inst_19595);
} else
{if((state_val_19598 === (2)))
{var inst_19574 = (state_19597[(8)]);var inst_19576 = (inst_19574 < n);var state_19597__$1 = state_19597;if(cljs.core.truth_(inst_19576))
{var statearr_19606_19625 = state_19597__$1;(statearr_19606_19625[(1)] = (4));
} else
{var statearr_19607_19626 = state_19597__$1;(statearr_19607_19626[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19598 === (11)))
{var inst_19574 = (state_19597[(8)]);var inst_19584 = (state_19597[(2)]);var inst_19585 = (inst_19574 + (1));var inst_19574__$1 = inst_19585;var state_19597__$1 = (function (){var statearr_19608 = state_19597;(statearr_19608[(8)] = inst_19574__$1);
(statearr_19608[(10)] = inst_19584);
return statearr_19608;
})();var statearr_19609_19627 = state_19597__$1;(statearr_19609_19627[(2)] = null);
(statearr_19609_19627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19598 === (9)))
{var state_19597__$1 = state_19597;var statearr_19610_19628 = state_19597__$1;(statearr_19610_19628[(2)] = null);
(statearr_19610_19628[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19598 === (5)))
{var state_19597__$1 = state_19597;var statearr_19611_19629 = state_19597__$1;(statearr_19611_19629[(2)] = null);
(statearr_19611_19629[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19598 === (10)))
{var inst_19589 = (state_19597[(2)]);var state_19597__$1 = state_19597;var statearr_19612_19630 = state_19597__$1;(statearr_19612_19630[(2)] = inst_19589);
(statearr_19612_19630[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19598 === (8)))
{var inst_19579 = (state_19597[(7)]);var state_19597__$1 = state_19597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19597__$1,(11),out,inst_19579);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9029__auto___19620,out))
;return ((function (switch__9014__auto__,c__9029__auto___19620,out){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_19616 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19616[(0)] = state_machine__9015__auto__);
(statearr_19616[(1)] = (1));
return statearr_19616;
});
var state_machine__9015__auto____1 = (function (state_19597){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_19597);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e19617){if((e19617 instanceof Object))
{var ex__9018__auto__ = e19617;var statearr_19618_19631 = state_19597;(statearr_19618_19631[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19617;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19632 = state_19597;
state_19597 = G__19632;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_19597){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_19597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___19620,out))
})();var state__9031__auto__ = (function (){var statearr_19619 = f__9030__auto__.call(null);(statearr_19619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___19620);
return statearr_19619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___19620,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19640 = (function (ch,f,map_LT_,meta19641){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19641 = meta19641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19640.cljs$lang$type = true;
cljs.core.async.t19640.cljs$lang$ctorStr = "cljs.core.async/t19640";
cljs.core.async.t19640.cljs$lang$ctorPrWriter = (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t19640");
});
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19643 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19643 = (function (fn1,_,meta19641,ch,f,map_LT_,meta19644){
this.fn1 = fn1;
this._ = _;
this.meta19641 = meta19641;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19644 = meta19644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19643.cljs$lang$type = true;
cljs.core.async.t19643.cljs$lang$ctorStr = "cljs.core.async/t19643";
cljs.core.async.t19643.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t19643");
});})(___$1))
;
cljs.core.async.t19643.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19643.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__19633_SHARP_){return f1.call(null,(((p1__19633_SHARP_ == null))?null:self__.f.call(null,p1__19633_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t19643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19645){var self__ = this;
var _19645__$1 = this;return self__.meta19644;
});})(___$1))
;
cljs.core.async.t19643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19645,meta19644__$1){var self__ = this;
var _19645__$1 = this;return (new cljs.core.async.t19643(self__.fn1,self__._,self__.meta19641,self__.ch,self__.f,self__.map_LT_,meta19644__$1));
});})(___$1))
;
cljs.core.async.__GT_t19643 = ((function (___$1){
return (function __GT_t19643(fn1__$1,___$2,meta19641__$1,ch__$2,f__$2,map_LT___$2,meta19644){return (new cljs.core.async.t19643(fn1__$1,___$2,meta19641__$1,ch__$2,f__$2,map_LT___$2,meta19644));
});})(___$1))
;
}
return (new cljs.core.async.t19643(fn1,___$1,self__.meta19641,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3563__auto__ = ret;if(cljs.core.truth_(and__3563__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3563__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19642){var self__ = this;
var _19642__$1 = this;return self__.meta19641;
});
cljs.core.async.t19640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19642,meta19641__$1){var self__ = this;
var _19642__$1 = this;return (new cljs.core.async.t19640(self__.ch,self__.f,self__.map_LT_,meta19641__$1));
});
cljs.core.async.__GT_t19640 = (function __GT_t19640(ch__$1,f__$1,map_LT___$1,meta19641){return (new cljs.core.async.t19640(ch__$1,f__$1,map_LT___$1,meta19641));
});
}
return (new cljs.core.async.t19640(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19649 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19649 = (function (ch,f,map_GT_,meta19650){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19650 = meta19650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19649.cljs$lang$type = true;
cljs.core.async.t19649.cljs$lang$ctorStr = "cljs.core.async/t19649";
cljs.core.async.t19649.cljs$lang$ctorPrWriter = (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t19649");
});
cljs.core.async.t19649.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t19649.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19649.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19651){var self__ = this;
var _19651__$1 = this;return self__.meta19650;
});
cljs.core.async.t19649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19651,meta19650__$1){var self__ = this;
var _19651__$1 = this;return (new cljs.core.async.t19649(self__.ch,self__.f,self__.map_GT_,meta19650__$1));
});
cljs.core.async.__GT_t19649 = (function __GT_t19649(ch__$1,f__$1,map_GT___$1,meta19650){return (new cljs.core.async.t19649(ch__$1,f__$1,map_GT___$1,meta19650));
});
}
return (new cljs.core.async.t19649(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19655 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19655 = (function (ch,p,filter_GT_,meta19656){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19656 = meta19656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19655.cljs$lang$type = true;
cljs.core.async.t19655.cljs$lang$ctorStr = "cljs.core.async/t19655";
cljs.core.async.t19655.cljs$lang$ctorPrWriter = (function (this__4142__auto__,writer__4143__auto__,opt__4144__auto__){return cljs.core._write.call(null,writer__4143__auto__,"cljs.core.async/t19655");
});
cljs.core.async.t19655.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19655.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t19655.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19655.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19655.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19655.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19655.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19657){var self__ = this;
var _19657__$1 = this;return self__.meta19656;
});
cljs.core.async.t19655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19657,meta19656__$1){var self__ = this;
var _19657__$1 = this;return (new cljs.core.async.t19655(self__.ch,self__.p,self__.filter_GT_,meta19656__$1));
});
cljs.core.async.__GT_t19655 = (function __GT_t19655(ch__$1,p__$1,filter_GT___$1,meta19656){return (new cljs.core.async.t19655(ch__$1,p__$1,filter_GT___$1,meta19656));
});
}
return (new cljs.core.async.t19655(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9029__auto___19740 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___19740,out){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___19740,out){
return (function (state_19719){var state_val_19720 = (state_19719[(1)]);if((state_val_19720 === (7)))
{var inst_19715 = (state_19719[(2)]);var state_19719__$1 = state_19719;var statearr_19721_19741 = state_19719__$1;(statearr_19721_19741[(2)] = inst_19715);
(statearr_19721_19741[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19720 === (1)))
{var state_19719__$1 = state_19719;var statearr_19722_19742 = state_19719__$1;(statearr_19722_19742[(2)] = null);
(statearr_19722_19742[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19720 === (4)))
{var inst_19701 = (state_19719[(7)]);var inst_19701__$1 = (state_19719[(2)]);var inst_19702 = (inst_19701__$1 == null);var state_19719__$1 = (function (){var statearr_19723 = state_19719;(statearr_19723[(7)] = inst_19701__$1);
return statearr_19723;
})();if(cljs.core.truth_(inst_19702))
{var statearr_19724_19743 = state_19719__$1;(statearr_19724_19743[(1)] = (5));
} else
{var statearr_19725_19744 = state_19719__$1;(statearr_19725_19744[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19720 === (6)))
{var inst_19701 = (state_19719[(7)]);var inst_19706 = p.call(null,inst_19701);var state_19719__$1 = state_19719;if(cljs.core.truth_(inst_19706))
{var statearr_19726_19745 = state_19719__$1;(statearr_19726_19745[(1)] = (8));
} else
{var statearr_19727_19746 = state_19719__$1;(statearr_19727_19746[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19720 === (3)))
{var inst_19717 = (state_19719[(2)]);var state_19719__$1 = state_19719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19719__$1,inst_19717);
} else
{if((state_val_19720 === (2)))
{var state_19719__$1 = state_19719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19719__$1,(4),ch);
} else
{if((state_val_19720 === (11)))
{var inst_19709 = (state_19719[(2)]);var state_19719__$1 = state_19719;var statearr_19728_19747 = state_19719__$1;(statearr_19728_19747[(2)] = inst_19709);
(statearr_19728_19747[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19720 === (9)))
{var state_19719__$1 = state_19719;var statearr_19729_19748 = state_19719__$1;(statearr_19729_19748[(2)] = null);
(statearr_19729_19748[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19720 === (5)))
{var inst_19704 = cljs.core.async.close_BANG_.call(null,out);var state_19719__$1 = state_19719;var statearr_19730_19749 = state_19719__$1;(statearr_19730_19749[(2)] = inst_19704);
(statearr_19730_19749[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19720 === (10)))
{var inst_19712 = (state_19719[(2)]);var state_19719__$1 = (function (){var statearr_19731 = state_19719;(statearr_19731[(8)] = inst_19712);
return statearr_19731;
})();var statearr_19732_19750 = state_19719__$1;(statearr_19732_19750[(2)] = null);
(statearr_19732_19750[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19720 === (8)))
{var inst_19701 = (state_19719[(7)]);var state_19719__$1 = state_19719;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19719__$1,(11),out,inst_19701);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9029__auto___19740,out))
;return ((function (switch__9014__auto__,c__9029__auto___19740,out){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_19736 = [null,null,null,null,null,null,null,null,null];(statearr_19736[(0)] = state_machine__9015__auto__);
(statearr_19736[(1)] = (1));
return statearr_19736;
});
var state_machine__9015__auto____1 = (function (state_19719){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_19719);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e19737){if((e19737 instanceof Object))
{var ex__9018__auto__ = e19737;var statearr_19738_19751 = state_19719;(statearr_19738_19751[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19719);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19737;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19752 = state_19719;
state_19719 = G__19752;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_19719){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_19719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___19740,out))
})();var state__9031__auto__ = (function (){var statearr_19739 = f__9030__auto__.call(null);(statearr_19739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___19740);
return statearr_19739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___19740,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9029__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto__){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto__){
return (function (state_19918){var state_val_19919 = (state_19918[(1)]);if((state_val_19919 === (7)))
{var inst_19914 = (state_19918[(2)]);var state_19918__$1 = state_19918;var statearr_19920_19961 = state_19918__$1;(statearr_19920_19961[(2)] = inst_19914);
(statearr_19920_19961[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (20)))
{var inst_19884 = (state_19918[(7)]);var inst_19895 = (state_19918[(2)]);var inst_19896 = cljs.core.next.call(null,inst_19884);var inst_19870 = inst_19896;var inst_19871 = null;var inst_19872 = (0);var inst_19873 = (0);var state_19918__$1 = (function (){var statearr_19921 = state_19918;(statearr_19921[(8)] = inst_19870);
(statearr_19921[(9)] = inst_19895);
(statearr_19921[(10)] = inst_19873);
(statearr_19921[(11)] = inst_19871);
(statearr_19921[(12)] = inst_19872);
return statearr_19921;
})();var statearr_19922_19962 = state_19918__$1;(statearr_19922_19962[(2)] = null);
(statearr_19922_19962[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (1)))
{var state_19918__$1 = state_19918;var statearr_19923_19963 = state_19918__$1;(statearr_19923_19963[(2)] = null);
(statearr_19923_19963[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (4)))
{var inst_19859 = (state_19918[(13)]);var inst_19859__$1 = (state_19918[(2)]);var inst_19860 = (inst_19859__$1 == null);var state_19918__$1 = (function (){var statearr_19924 = state_19918;(statearr_19924[(13)] = inst_19859__$1);
return statearr_19924;
})();if(cljs.core.truth_(inst_19860))
{var statearr_19925_19964 = state_19918__$1;(statearr_19925_19964[(1)] = (5));
} else
{var statearr_19926_19965 = state_19918__$1;(statearr_19926_19965[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (15)))
{var state_19918__$1 = state_19918;var statearr_19930_19966 = state_19918__$1;(statearr_19930_19966[(2)] = null);
(statearr_19930_19966[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (21)))
{var state_19918__$1 = state_19918;var statearr_19931_19967 = state_19918__$1;(statearr_19931_19967[(2)] = null);
(statearr_19931_19967[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (13)))
{var inst_19870 = (state_19918[(8)]);var inst_19873 = (state_19918[(10)]);var inst_19871 = (state_19918[(11)]);var inst_19872 = (state_19918[(12)]);var inst_19880 = (state_19918[(2)]);var inst_19881 = (inst_19873 + (1));var tmp19927 = inst_19870;var tmp19928 = inst_19871;var tmp19929 = inst_19872;var inst_19870__$1 = tmp19927;var inst_19871__$1 = tmp19928;var inst_19872__$1 = tmp19929;var inst_19873__$1 = inst_19881;var state_19918__$1 = (function (){var statearr_19932 = state_19918;(statearr_19932[(8)] = inst_19870__$1);
(statearr_19932[(10)] = inst_19873__$1);
(statearr_19932[(14)] = inst_19880);
(statearr_19932[(11)] = inst_19871__$1);
(statearr_19932[(12)] = inst_19872__$1);
return statearr_19932;
})();var statearr_19933_19968 = state_19918__$1;(statearr_19933_19968[(2)] = null);
(statearr_19933_19968[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (22)))
{var state_19918__$1 = state_19918;var statearr_19934_19969 = state_19918__$1;(statearr_19934_19969[(2)] = null);
(statearr_19934_19969[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (6)))
{var inst_19859 = (state_19918[(13)]);var inst_19868 = f.call(null,inst_19859);var inst_19869 = cljs.core.seq.call(null,inst_19868);var inst_19870 = inst_19869;var inst_19871 = null;var inst_19872 = (0);var inst_19873 = (0);var state_19918__$1 = (function (){var statearr_19935 = state_19918;(statearr_19935[(8)] = inst_19870);
(statearr_19935[(10)] = inst_19873);
(statearr_19935[(11)] = inst_19871);
(statearr_19935[(12)] = inst_19872);
return statearr_19935;
})();var statearr_19936_19970 = state_19918__$1;(statearr_19936_19970[(2)] = null);
(statearr_19936_19970[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (17)))
{var inst_19884 = (state_19918[(7)]);var inst_19888 = cljs.core.chunk_first.call(null,inst_19884);var inst_19889 = cljs.core.chunk_rest.call(null,inst_19884);var inst_19890 = cljs.core.count.call(null,inst_19888);var inst_19870 = inst_19889;var inst_19871 = inst_19888;var inst_19872 = inst_19890;var inst_19873 = (0);var state_19918__$1 = (function (){var statearr_19937 = state_19918;(statearr_19937[(8)] = inst_19870);
(statearr_19937[(10)] = inst_19873);
(statearr_19937[(11)] = inst_19871);
(statearr_19937[(12)] = inst_19872);
return statearr_19937;
})();var statearr_19938_19971 = state_19918__$1;(statearr_19938_19971[(2)] = null);
(statearr_19938_19971[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (3)))
{var inst_19916 = (state_19918[(2)]);var state_19918__$1 = state_19918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19918__$1,inst_19916);
} else
{if((state_val_19919 === (12)))
{var inst_19904 = (state_19918[(2)]);var state_19918__$1 = state_19918;var statearr_19939_19972 = state_19918__$1;(statearr_19939_19972[(2)] = inst_19904);
(statearr_19939_19972[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (2)))
{var state_19918__$1 = state_19918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19918__$1,(4),in$);
} else
{if((state_val_19919 === (23)))
{var inst_19912 = (state_19918[(2)]);var state_19918__$1 = state_19918;var statearr_19940_19973 = state_19918__$1;(statearr_19940_19973[(2)] = inst_19912);
(statearr_19940_19973[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (19)))
{var inst_19899 = (state_19918[(2)]);var state_19918__$1 = state_19918;var statearr_19941_19974 = state_19918__$1;(statearr_19941_19974[(2)] = inst_19899);
(statearr_19941_19974[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (11)))
{var inst_19870 = (state_19918[(8)]);var inst_19884 = (state_19918[(7)]);var inst_19884__$1 = cljs.core.seq.call(null,inst_19870);var state_19918__$1 = (function (){var statearr_19942 = state_19918;(statearr_19942[(7)] = inst_19884__$1);
return statearr_19942;
})();if(inst_19884__$1)
{var statearr_19943_19975 = state_19918__$1;(statearr_19943_19975[(1)] = (14));
} else
{var statearr_19944_19976 = state_19918__$1;(statearr_19944_19976[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (9)))
{var inst_19906 = (state_19918[(2)]);var inst_19907 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_19918__$1 = (function (){var statearr_19945 = state_19918;(statearr_19945[(15)] = inst_19906);
return statearr_19945;
})();if(cljs.core.truth_(inst_19907))
{var statearr_19946_19977 = state_19918__$1;(statearr_19946_19977[(1)] = (21));
} else
{var statearr_19947_19978 = state_19918__$1;(statearr_19947_19978[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (5)))
{var inst_19862 = cljs.core.async.close_BANG_.call(null,out);var state_19918__$1 = state_19918;var statearr_19948_19979 = state_19918__$1;(statearr_19948_19979[(2)] = inst_19862);
(statearr_19948_19979[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (14)))
{var inst_19884 = (state_19918[(7)]);var inst_19886 = cljs.core.chunked_seq_QMARK_.call(null,inst_19884);var state_19918__$1 = state_19918;if(inst_19886)
{var statearr_19949_19980 = state_19918__$1;(statearr_19949_19980[(1)] = (17));
} else
{var statearr_19950_19981 = state_19918__$1;(statearr_19950_19981[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (16)))
{var inst_19902 = (state_19918[(2)]);var state_19918__$1 = state_19918;var statearr_19951_19982 = state_19918__$1;(statearr_19951_19982[(2)] = inst_19902);
(statearr_19951_19982[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19919 === (10)))
{var inst_19873 = (state_19918[(10)]);var inst_19871 = (state_19918[(11)]);var inst_19878 = cljs.core._nth.call(null,inst_19871,inst_19873);var state_19918__$1 = state_19918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19918__$1,(13),out,inst_19878);
} else
{if((state_val_19919 === (18)))
{var inst_19884 = (state_19918[(7)]);var inst_19893 = cljs.core.first.call(null,inst_19884);var state_19918__$1 = state_19918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19918__$1,(20),out,inst_19893);
} else
{if((state_val_19919 === (8)))
{var inst_19873 = (state_19918[(10)]);var inst_19872 = (state_19918[(12)]);var inst_19875 = (inst_19873 < inst_19872);var inst_19876 = inst_19875;var state_19918__$1 = state_19918;if(cljs.core.truth_(inst_19876))
{var statearr_19952_19983 = state_19918__$1;(statearr_19952_19983[(1)] = (10));
} else
{var statearr_19953_19984 = state_19918__$1;(statearr_19953_19984[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9029__auto__))
;return ((function (switch__9014__auto__,c__9029__auto__){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_19957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19957[(0)] = state_machine__9015__auto__);
(statearr_19957[(1)] = (1));
return statearr_19957;
});
var state_machine__9015__auto____1 = (function (state_19918){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_19918);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e19958){if((e19958 instanceof Object))
{var ex__9018__auto__ = e19958;var statearr_19959_19985 = state_19918;(statearr_19959_19985[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19918);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19958;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19986 = state_19918;
state_19918 = G__19986;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_19918){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_19918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto__))
})();var state__9031__auto__ = (function (){var statearr_19960 = f__9030__auto__.call(null);(statearr_19960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto__);
return statearr_19960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto__))
);
return c__9029__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9029__auto___20083 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___20083,out){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___20083,out){
return (function (state_20058){var state_val_20059 = (state_20058[(1)]);if((state_val_20059 === (7)))
{var inst_20053 = (state_20058[(2)]);var state_20058__$1 = state_20058;var statearr_20060_20084 = state_20058__$1;(statearr_20060_20084[(2)] = inst_20053);
(statearr_20060_20084[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20059 === (1)))
{var inst_20035 = null;var state_20058__$1 = (function (){var statearr_20061 = state_20058;(statearr_20061[(7)] = inst_20035);
return statearr_20061;
})();var statearr_20062_20085 = state_20058__$1;(statearr_20062_20085[(2)] = null);
(statearr_20062_20085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20059 === (4)))
{var inst_20038 = (state_20058[(8)]);var inst_20038__$1 = (state_20058[(2)]);var inst_20039 = (inst_20038__$1 == null);var inst_20040 = cljs.core.not.call(null,inst_20039);var state_20058__$1 = (function (){var statearr_20063 = state_20058;(statearr_20063[(8)] = inst_20038__$1);
return statearr_20063;
})();if(inst_20040)
{var statearr_20064_20086 = state_20058__$1;(statearr_20064_20086[(1)] = (5));
} else
{var statearr_20065_20087 = state_20058__$1;(statearr_20065_20087[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20059 === (6)))
{var state_20058__$1 = state_20058;var statearr_20066_20088 = state_20058__$1;(statearr_20066_20088[(2)] = null);
(statearr_20066_20088[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20059 === (3)))
{var inst_20055 = (state_20058[(2)]);var inst_20056 = cljs.core.async.close_BANG_.call(null,out);var state_20058__$1 = (function (){var statearr_20067 = state_20058;(statearr_20067[(9)] = inst_20055);
return statearr_20067;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20058__$1,inst_20056);
} else
{if((state_val_20059 === (2)))
{var state_20058__$1 = state_20058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20058__$1,(4),ch);
} else
{if((state_val_20059 === (11)))
{var inst_20038 = (state_20058[(8)]);var inst_20047 = (state_20058[(2)]);var inst_20035 = inst_20038;var state_20058__$1 = (function (){var statearr_20068 = state_20058;(statearr_20068[(7)] = inst_20035);
(statearr_20068[(10)] = inst_20047);
return statearr_20068;
})();var statearr_20069_20089 = state_20058__$1;(statearr_20069_20089[(2)] = null);
(statearr_20069_20089[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20059 === (9)))
{var inst_20038 = (state_20058[(8)]);var state_20058__$1 = state_20058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20058__$1,(11),out,inst_20038);
} else
{if((state_val_20059 === (5)))
{var inst_20035 = (state_20058[(7)]);var inst_20038 = (state_20058[(8)]);var inst_20042 = cljs.core._EQ_.call(null,inst_20038,inst_20035);var state_20058__$1 = state_20058;if(inst_20042)
{var statearr_20071_20090 = state_20058__$1;(statearr_20071_20090[(1)] = (8));
} else
{var statearr_20072_20091 = state_20058__$1;(statearr_20072_20091[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20059 === (10)))
{var inst_20050 = (state_20058[(2)]);var state_20058__$1 = state_20058;var statearr_20073_20092 = state_20058__$1;(statearr_20073_20092[(2)] = inst_20050);
(statearr_20073_20092[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20059 === (8)))
{var inst_20035 = (state_20058[(7)]);var tmp20070 = inst_20035;var inst_20035__$1 = tmp20070;var state_20058__$1 = (function (){var statearr_20074 = state_20058;(statearr_20074[(7)] = inst_20035__$1);
return statearr_20074;
})();var statearr_20075_20093 = state_20058__$1;(statearr_20075_20093[(2)] = null);
(statearr_20075_20093[(1)] = (2));
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
}
}
}
}
});})(c__9029__auto___20083,out))
;return ((function (switch__9014__auto__,c__9029__auto___20083,out){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_20079 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20079[(0)] = state_machine__9015__auto__);
(statearr_20079[(1)] = (1));
return statearr_20079;
});
var state_machine__9015__auto____1 = (function (state_20058){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_20058);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e20080){if((e20080 instanceof Object))
{var ex__9018__auto__ = e20080;var statearr_20081_20094 = state_20058;(statearr_20081_20094[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20080;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20095 = state_20058;
state_20058 = G__20095;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_20058){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_20058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___20083,out))
})();var state__9031__auto__ = (function (){var statearr_20082 = f__9030__auto__.call(null);(statearr_20082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___20083);
return statearr_20082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___20083,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9029__auto___20230 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___20230,out){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___20230,out){
return (function (state_20200){var state_val_20201 = (state_20200[(1)]);if((state_val_20201 === (7)))
{var inst_20196 = (state_20200[(2)]);var state_20200__$1 = state_20200;var statearr_20202_20231 = state_20200__$1;(statearr_20202_20231[(2)] = inst_20196);
(statearr_20202_20231[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (1)))
{var inst_20163 = (new Array(n));var inst_20164 = inst_20163;var inst_20165 = (0);var state_20200__$1 = (function (){var statearr_20203 = state_20200;(statearr_20203[(7)] = inst_20164);
(statearr_20203[(8)] = inst_20165);
return statearr_20203;
})();var statearr_20204_20232 = state_20200__$1;(statearr_20204_20232[(2)] = null);
(statearr_20204_20232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (4)))
{var inst_20168 = (state_20200[(9)]);var inst_20168__$1 = (state_20200[(2)]);var inst_20169 = (inst_20168__$1 == null);var inst_20170 = cljs.core.not.call(null,inst_20169);var state_20200__$1 = (function (){var statearr_20205 = state_20200;(statearr_20205[(9)] = inst_20168__$1);
return statearr_20205;
})();if(inst_20170)
{var statearr_20206_20233 = state_20200__$1;(statearr_20206_20233[(1)] = (5));
} else
{var statearr_20207_20234 = state_20200__$1;(statearr_20207_20234[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (15)))
{var inst_20190 = (state_20200[(2)]);var state_20200__$1 = state_20200;var statearr_20208_20235 = state_20200__$1;(statearr_20208_20235[(2)] = inst_20190);
(statearr_20208_20235[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (13)))
{var state_20200__$1 = state_20200;var statearr_20209_20236 = state_20200__$1;(statearr_20209_20236[(2)] = null);
(statearr_20209_20236[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (6)))
{var inst_20165 = (state_20200[(8)]);var inst_20186 = (inst_20165 > (0));var state_20200__$1 = state_20200;if(cljs.core.truth_(inst_20186))
{var statearr_20210_20237 = state_20200__$1;(statearr_20210_20237[(1)] = (12));
} else
{var statearr_20211_20238 = state_20200__$1;(statearr_20211_20238[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (3)))
{var inst_20198 = (state_20200[(2)]);var state_20200__$1 = state_20200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20200__$1,inst_20198);
} else
{if((state_val_20201 === (12)))
{var inst_20164 = (state_20200[(7)]);var inst_20188 = cljs.core.vec.call(null,inst_20164);var state_20200__$1 = state_20200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20200__$1,(15),out,inst_20188);
} else
{if((state_val_20201 === (2)))
{var state_20200__$1 = state_20200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20200__$1,(4),ch);
} else
{if((state_val_20201 === (11)))
{var inst_20180 = (state_20200[(2)]);var inst_20181 = (new Array(n));var inst_20164 = inst_20181;var inst_20165 = (0);var state_20200__$1 = (function (){var statearr_20212 = state_20200;(statearr_20212[(7)] = inst_20164);
(statearr_20212[(8)] = inst_20165);
(statearr_20212[(10)] = inst_20180);
return statearr_20212;
})();var statearr_20213_20239 = state_20200__$1;(statearr_20213_20239[(2)] = null);
(statearr_20213_20239[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (9)))
{var inst_20164 = (state_20200[(7)]);var inst_20178 = cljs.core.vec.call(null,inst_20164);var state_20200__$1 = state_20200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20200__$1,(11),out,inst_20178);
} else
{if((state_val_20201 === (5)))
{var inst_20173 = (state_20200[(11)]);var inst_20168 = (state_20200[(9)]);var inst_20164 = (state_20200[(7)]);var inst_20165 = (state_20200[(8)]);var inst_20172 = (inst_20164[inst_20165] = inst_20168);var inst_20173__$1 = (inst_20165 + (1));var inst_20174 = (inst_20173__$1 < n);var state_20200__$1 = (function (){var statearr_20214 = state_20200;(statearr_20214[(11)] = inst_20173__$1);
(statearr_20214[(12)] = inst_20172);
return statearr_20214;
})();if(cljs.core.truth_(inst_20174))
{var statearr_20215_20240 = state_20200__$1;(statearr_20215_20240[(1)] = (8));
} else
{var statearr_20216_20241 = state_20200__$1;(statearr_20216_20241[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (14)))
{var inst_20193 = (state_20200[(2)]);var inst_20194 = cljs.core.async.close_BANG_.call(null,out);var state_20200__$1 = (function (){var statearr_20218 = state_20200;(statearr_20218[(13)] = inst_20193);
return statearr_20218;
})();var statearr_20219_20242 = state_20200__$1;(statearr_20219_20242[(2)] = inst_20194);
(statearr_20219_20242[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (10)))
{var inst_20184 = (state_20200[(2)]);var state_20200__$1 = state_20200;var statearr_20220_20243 = state_20200__$1;(statearr_20220_20243[(2)] = inst_20184);
(statearr_20220_20243[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20201 === (8)))
{var inst_20173 = (state_20200[(11)]);var inst_20164 = (state_20200[(7)]);var tmp20217 = inst_20164;var inst_20164__$1 = tmp20217;var inst_20165 = inst_20173;var state_20200__$1 = (function (){var statearr_20221 = state_20200;(statearr_20221[(7)] = inst_20164__$1);
(statearr_20221[(8)] = inst_20165);
return statearr_20221;
})();var statearr_20222_20244 = state_20200__$1;(statearr_20222_20244[(2)] = null);
(statearr_20222_20244[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__9029__auto___20230,out))
;return ((function (switch__9014__auto__,c__9029__auto___20230,out){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_20226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20226[(0)] = state_machine__9015__auto__);
(statearr_20226[(1)] = (1));
return statearr_20226;
});
var state_machine__9015__auto____1 = (function (state_20200){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_20200);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e20227){if((e20227 instanceof Object))
{var ex__9018__auto__ = e20227;var statearr_20228_20245 = state_20200;(statearr_20228_20245[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20200);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20227;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20246 = state_20200;
state_20200 = G__20246;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_20200){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_20200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___20230,out))
})();var state__9031__auto__ = (function (){var statearr_20229 = f__9030__auto__.call(null);(statearr_20229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___20230);
return statearr_20229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___20230,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9029__auto___20389 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9029__auto___20389,out){
return (function (){var f__9030__auto__ = (function (){var switch__9014__auto__ = ((function (c__9029__auto___20389,out){
return (function (state_20359){var state_val_20360 = (state_20359[(1)]);if((state_val_20360 === (7)))
{var inst_20355 = (state_20359[(2)]);var state_20359__$1 = state_20359;var statearr_20361_20390 = state_20359__$1;(statearr_20361_20390[(2)] = inst_20355);
(statearr_20361_20390[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (1)))
{var inst_20318 = [];var inst_20319 = inst_20318;var inst_20320 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_20359__$1 = (function (){var statearr_20362 = state_20359;(statearr_20362[(7)] = inst_20320);
(statearr_20362[(8)] = inst_20319);
return statearr_20362;
})();var statearr_20363_20391 = state_20359__$1;(statearr_20363_20391[(2)] = null);
(statearr_20363_20391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (4)))
{var inst_20323 = (state_20359[(9)]);var inst_20323__$1 = (state_20359[(2)]);var inst_20324 = (inst_20323__$1 == null);var inst_20325 = cljs.core.not.call(null,inst_20324);var state_20359__$1 = (function (){var statearr_20364 = state_20359;(statearr_20364[(9)] = inst_20323__$1);
return statearr_20364;
})();if(inst_20325)
{var statearr_20365_20392 = state_20359__$1;(statearr_20365_20392[(1)] = (5));
} else
{var statearr_20366_20393 = state_20359__$1;(statearr_20366_20393[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (15)))
{var inst_20349 = (state_20359[(2)]);var state_20359__$1 = state_20359;var statearr_20367_20394 = state_20359__$1;(statearr_20367_20394[(2)] = inst_20349);
(statearr_20367_20394[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (13)))
{var state_20359__$1 = state_20359;var statearr_20368_20395 = state_20359__$1;(statearr_20368_20395[(2)] = null);
(statearr_20368_20395[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (6)))
{var inst_20319 = (state_20359[(8)]);var inst_20344 = inst_20319.length;var inst_20345 = (inst_20344 > (0));var state_20359__$1 = state_20359;if(cljs.core.truth_(inst_20345))
{var statearr_20369_20396 = state_20359__$1;(statearr_20369_20396[(1)] = (12));
} else
{var statearr_20370_20397 = state_20359__$1;(statearr_20370_20397[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (3)))
{var inst_20357 = (state_20359[(2)]);var state_20359__$1 = state_20359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20359__$1,inst_20357);
} else
{if((state_val_20360 === (12)))
{var inst_20319 = (state_20359[(8)]);var inst_20347 = cljs.core.vec.call(null,inst_20319);var state_20359__$1 = state_20359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20359__$1,(15),out,inst_20347);
} else
{if((state_val_20360 === (2)))
{var state_20359__$1 = state_20359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20359__$1,(4),ch);
} else
{if((state_val_20360 === (11)))
{var inst_20323 = (state_20359[(9)]);var inst_20327 = (state_20359[(10)]);var inst_20337 = (state_20359[(2)]);var inst_20338 = [];var inst_20339 = inst_20338.push(inst_20323);var inst_20319 = inst_20338;var inst_20320 = inst_20327;var state_20359__$1 = (function (){var statearr_20371 = state_20359;(statearr_20371[(7)] = inst_20320);
(statearr_20371[(8)] = inst_20319);
(statearr_20371[(11)] = inst_20339);
(statearr_20371[(12)] = inst_20337);
return statearr_20371;
})();var statearr_20372_20398 = state_20359__$1;(statearr_20372_20398[(2)] = null);
(statearr_20372_20398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (9)))
{var inst_20319 = (state_20359[(8)]);var inst_20335 = cljs.core.vec.call(null,inst_20319);var state_20359__$1 = state_20359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20359__$1,(11),out,inst_20335);
} else
{if((state_val_20360 === (5)))
{var inst_20320 = (state_20359[(7)]);var inst_20323 = (state_20359[(9)]);var inst_20327 = (state_20359[(10)]);var inst_20327__$1 = f.call(null,inst_20323);var inst_20328 = cljs.core._EQ_.call(null,inst_20327__$1,inst_20320);var inst_20329 = cljs.core.keyword_identical_QMARK_.call(null,inst_20320,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_20330 = (inst_20328) || (inst_20329);var state_20359__$1 = (function (){var statearr_20373 = state_20359;(statearr_20373[(10)] = inst_20327__$1);
return statearr_20373;
})();if(cljs.core.truth_(inst_20330))
{var statearr_20374_20399 = state_20359__$1;(statearr_20374_20399[(1)] = (8));
} else
{var statearr_20375_20400 = state_20359__$1;(statearr_20375_20400[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (14)))
{var inst_20352 = (state_20359[(2)]);var inst_20353 = cljs.core.async.close_BANG_.call(null,out);var state_20359__$1 = (function (){var statearr_20377 = state_20359;(statearr_20377[(13)] = inst_20352);
return statearr_20377;
})();var statearr_20378_20401 = state_20359__$1;(statearr_20378_20401[(2)] = inst_20353);
(statearr_20378_20401[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (10)))
{var inst_20342 = (state_20359[(2)]);var state_20359__$1 = state_20359;var statearr_20379_20402 = state_20359__$1;(statearr_20379_20402[(2)] = inst_20342);
(statearr_20379_20402[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (8)))
{var inst_20319 = (state_20359[(8)]);var inst_20323 = (state_20359[(9)]);var inst_20327 = (state_20359[(10)]);var inst_20332 = inst_20319.push(inst_20323);var tmp20376 = inst_20319;var inst_20319__$1 = tmp20376;var inst_20320 = inst_20327;var state_20359__$1 = (function (){var statearr_20380 = state_20359;(statearr_20380[(7)] = inst_20320);
(statearr_20380[(8)] = inst_20319__$1);
(statearr_20380[(14)] = inst_20332);
return statearr_20380;
})();var statearr_20381_20403 = state_20359__$1;(statearr_20381_20403[(2)] = null);
(statearr_20381_20403[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__9029__auto___20389,out))
;return ((function (switch__9014__auto__,c__9029__auto___20389,out){
return (function() {
var state_machine__9015__auto__ = null;
var state_machine__9015__auto____0 = (function (){var statearr_20385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20385[(0)] = state_machine__9015__auto__);
(statearr_20385[(1)] = (1));
return statearr_20385;
});
var state_machine__9015__auto____1 = (function (state_20359){while(true){
var ret_value__9016__auto__ = (function (){try{while(true){
var result__9017__auto__ = switch__9014__auto__.call(null,state_20359);if(cljs.core.keyword_identical_QMARK_.call(null,result__9017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9017__auto__;
}
break;
}
}catch (e20386){if((e20386 instanceof Object))
{var ex__9018__auto__ = e20386;var statearr_20387_20404 = state_20359;(statearr_20387_20404[(5)] = ex__9018__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20386;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20405 = state_20359;
state_20359 = G__20405;
continue;
}
} else
{return ret_value__9016__auto__;
}
break;
}
});
state_machine__9015__auto__ = function(state_20359){
switch(arguments.length){
case 0:
return state_machine__9015__auto____0.call(this);
case 1:
return state_machine__9015__auto____1.call(this,state_20359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9015__auto____0;
state_machine__9015__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9015__auto____1;
return state_machine__9015__auto__;
})()
;})(switch__9014__auto__,c__9029__auto___20389,out))
})();var state__9031__auto__ = (function (){var statearr_20388 = f__9030__auto__.call(null);(statearr_20388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9029__auto___20389);
return statearr_20388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9031__auto__);
});})(c__9029__auto___20389,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
