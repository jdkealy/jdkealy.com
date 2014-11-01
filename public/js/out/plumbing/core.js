// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__15597__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__15597 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__15597__delegate.call(this,m,k,f,x1,x2,xs);};
G__15597.cljs$lang$maxFixedArity = 5;
G__15597.cljs$lang$applyTo = (function (arglist__15598){
var m = cljs.core.first(arglist__15598);
arglist__15598 = cljs.core.next(arglist__15598);
var k = cljs.core.first(arglist__15598);
arglist__15598 = cljs.core.next(arglist__15598);
var f = cljs.core.first(arglist__15598);
arglist__15598 = cljs.core.next(arglist__15598);
var x1 = cljs.core.first(arglist__15598);
arglist__15598 = cljs.core.next(arglist__15598);
var x2 = cljs.core.first(arglist__15598);
var xs = cljs.core.rest(arglist__15598);
return G__15597__delegate(m,k,f,x1,x2,xs);
});
G__15597.cljs$core$IFn$_invoke$arity$variadic = G__15597__delegate;
return G__15597;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__7496__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15607_15613 = cljs.core.seq.call(null,m);var chunk__15608_15614 = null;var count__15609_15615 = (0);var i__15610_15616 = (0);while(true){
if((i__15610_15616 < count__15609_15615))
{var vec__15611_15617 = cljs.core._nth.call(null,chunk__15608_15614,i__15610_15616);var k_15618 = cljs.core.nth.call(null,vec__15611_15617,(0),null);var v_15619 = cljs.core.nth.call(null,vec__15611_15617,(1),null);var m15606_15620 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15606_15620,k_15618,f.call(null,v_15619)));
{
var G__15621 = seq__15607_15613;
var G__15622 = chunk__15608_15614;
var G__15623 = count__15609_15615;
var G__15624 = (i__15610_15616 + (1));
seq__15607_15613 = G__15621;
chunk__15608_15614 = G__15622;
count__15609_15615 = G__15623;
i__15610_15616 = G__15624;
continue;
}
} else
{var temp__4126__auto___15625 = cljs.core.seq.call(null,seq__15607_15613);if(temp__4126__auto___15625)
{var seq__15607_15626__$1 = temp__4126__auto___15625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15607_15626__$1))
{var c__4331__auto___15627 = cljs.core.chunk_first.call(null,seq__15607_15626__$1);{
var G__15628 = cljs.core.chunk_rest.call(null,seq__15607_15626__$1);
var G__15629 = c__4331__auto___15627;
var G__15630 = cljs.core.count.call(null,c__4331__auto___15627);
var G__15631 = (0);
seq__15607_15613 = G__15628;
chunk__15608_15614 = G__15629;
count__15609_15615 = G__15630;
i__15610_15616 = G__15631;
continue;
}
} else
{var vec__15612_15632 = cljs.core.first.call(null,seq__15607_15626__$1);var k_15633 = cljs.core.nth.call(null,vec__15612_15632,(0),null);var v_15634 = cljs.core.nth.call(null,vec__15612_15632,(1),null);var m15606_15635 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15606_15635,k_15633,f.call(null,v_15634)));
{
var G__15636 = cljs.core.next.call(null,seq__15607_15626__$1);
var G__15637 = null;
var G__15638 = (0);
var G__15639 = (0);
seq__15607_15613 = G__15636;
chunk__15608_15614 = G__15637;
count__15609_15615 = G__15638;
i__15610_15616 = G__15639;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7496__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__7496__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15648_15654 = cljs.core.seq.call(null,m);var chunk__15649_15655 = null;var count__15650_15656 = (0);var i__15651_15657 = (0);while(true){
if((i__15651_15657 < count__15650_15656))
{var vec__15652_15658 = cljs.core._nth.call(null,chunk__15649_15655,i__15651_15657);var k_15659 = cljs.core.nth.call(null,vec__15652_15658,(0),null);var v_15660 = cljs.core.nth.call(null,vec__15652_15658,(1),null);var m15647_15661 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15647_15661,f.call(null,k_15659),v_15660));
{
var G__15662 = seq__15648_15654;
var G__15663 = chunk__15649_15655;
var G__15664 = count__15650_15656;
var G__15665 = (i__15651_15657 + (1));
seq__15648_15654 = G__15662;
chunk__15649_15655 = G__15663;
count__15650_15656 = G__15664;
i__15651_15657 = G__15665;
continue;
}
} else
{var temp__4126__auto___15666 = cljs.core.seq.call(null,seq__15648_15654);if(temp__4126__auto___15666)
{var seq__15648_15667__$1 = temp__4126__auto___15666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15648_15667__$1))
{var c__4331__auto___15668 = cljs.core.chunk_first.call(null,seq__15648_15667__$1);{
var G__15669 = cljs.core.chunk_rest.call(null,seq__15648_15667__$1);
var G__15670 = c__4331__auto___15668;
var G__15671 = cljs.core.count.call(null,c__4331__auto___15668);
var G__15672 = (0);
seq__15648_15654 = G__15669;
chunk__15649_15655 = G__15670;
count__15650_15656 = G__15671;
i__15651_15657 = G__15672;
continue;
}
} else
{var vec__15653_15673 = cljs.core.first.call(null,seq__15648_15667__$1);var k_15674 = cljs.core.nth.call(null,vec__15653_15673,(0),null);var v_15675 = cljs.core.nth.call(null,vec__15653_15673,(1),null);var m15647_15676 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15647_15676,f.call(null,k_15674),v_15675));
{
var G__15677 = cljs.core.next.call(null,seq__15648_15667__$1);
var G__15678 = null;
var G__15679 = (0);
var G__15680 = (0);
seq__15648_15654 = G__15677;
chunk__15649_15655 = G__15678;
count__15650_15656 = G__15679;
i__15651_15657 = G__15680;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7496__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7496__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15687_15691 = cljs.core.seq.call(null,ks);var chunk__15688_15692 = null;var count__15689_15693 = (0);var i__15690_15694 = (0);while(true){
if((i__15690_15694 < count__15689_15693))
{var k_15695 = cljs.core._nth.call(null,chunk__15688_15692,i__15690_15694);var m15686_15696 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15686_15696,k_15695,f.call(null,k_15695)));
{
var G__15697 = seq__15687_15691;
var G__15698 = chunk__15688_15692;
var G__15699 = count__15689_15693;
var G__15700 = (i__15690_15694 + (1));
seq__15687_15691 = G__15697;
chunk__15688_15692 = G__15698;
count__15689_15693 = G__15699;
i__15690_15694 = G__15700;
continue;
}
} else
{var temp__4126__auto___15701 = cljs.core.seq.call(null,seq__15687_15691);if(temp__4126__auto___15701)
{var seq__15687_15702__$1 = temp__4126__auto___15701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15687_15702__$1))
{var c__4331__auto___15703 = cljs.core.chunk_first.call(null,seq__15687_15702__$1);{
var G__15704 = cljs.core.chunk_rest.call(null,seq__15687_15702__$1);
var G__15705 = c__4331__auto___15703;
var G__15706 = cljs.core.count.call(null,c__4331__auto___15703);
var G__15707 = (0);
seq__15687_15691 = G__15704;
chunk__15688_15692 = G__15705;
count__15689_15693 = G__15706;
i__15690_15694 = G__15707;
continue;
}
} else
{var k_15708 = cljs.core.first.call(null,seq__15687_15702__$1);var m15686_15709 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15686_15709,k_15708,f.call(null,k_15708)));
{
var G__15710 = cljs.core.next.call(null,seq__15687_15702__$1);
var G__15711 = null;
var G__15712 = (0);
var G__15713 = (0);
seq__15687_15691 = G__15710;
chunk__15688_15692 = G__15711;
count__15689_15693 = G__15712;
i__15690_15694 = G__15713;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7496__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7496__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15720_15724 = cljs.core.seq.call(null,vs);var chunk__15721_15725 = null;var count__15722_15726 = (0);var i__15723_15727 = (0);while(true){
if((i__15723_15727 < count__15722_15726))
{var v_15728 = cljs.core._nth.call(null,chunk__15721_15725,i__15723_15727);var m15719_15729 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15719_15729,f.call(null,v_15728),v_15728));
{
var G__15730 = seq__15720_15724;
var G__15731 = chunk__15721_15725;
var G__15732 = count__15722_15726;
var G__15733 = (i__15723_15727 + (1));
seq__15720_15724 = G__15730;
chunk__15721_15725 = G__15731;
count__15722_15726 = G__15732;
i__15723_15727 = G__15733;
continue;
}
} else
{var temp__4126__auto___15734 = cljs.core.seq.call(null,seq__15720_15724);if(temp__4126__auto___15734)
{var seq__15720_15735__$1 = temp__4126__auto___15734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15720_15735__$1))
{var c__4331__auto___15736 = cljs.core.chunk_first.call(null,seq__15720_15735__$1);{
var G__15737 = cljs.core.chunk_rest.call(null,seq__15720_15735__$1);
var G__15738 = c__4331__auto___15736;
var G__15739 = cljs.core.count.call(null,c__4331__auto___15736);
var G__15740 = (0);
seq__15720_15724 = G__15737;
chunk__15721_15725 = G__15738;
count__15722_15726 = G__15739;
i__15723_15727 = G__15740;
continue;
}
} else
{var v_15741 = cljs.core.first.call(null,seq__15720_15735__$1);var m15719_15742 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15719_15742,f.call(null,v_15741),v_15741));
{
var G__15743 = cljs.core.next.call(null,seq__15720_15735__$1);
var G__15744 = null;
var G__15745 = (0);
var G__15746 = (0);
seq__15720_15724 = G__15743;
chunk__15721_15725 = G__15744;
count__15722_15726 = G__15745;
i__15723_15727 = G__15746;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7496__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__15747){var vec__15749 = p__15747;var k = cljs.core.nth.call(null,vec__15749,(0),null);var ks = cljs.core.nthnext.call(null,vec__15749,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3563__auto__ = ks;if(and__3563__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3563__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__7496__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15758_15764 = cljs.core.seq.call(null,x);var chunk__15759_15765 = null;var count__15760_15766 = (0);var i__15761_15767 = (0);while(true){
if((i__15761_15767 < count__15760_15766))
{var vec__15762_15768 = cljs.core._nth.call(null,chunk__15759_15765,i__15761_15767);var k_15769 = cljs.core.nth.call(null,vec__15762_15768,(0),null);var v_15770 = cljs.core.nth.call(null,vec__15762_15768,(1),null);var m15757_15771 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15757_15771,((typeof k_15769 === 'string')?cljs.core.keyword.call(null,k_15769):k_15769),keywordize_map.call(null,v_15770)));
{
var G__15772 = seq__15758_15764;
var G__15773 = chunk__15759_15765;
var G__15774 = count__15760_15766;
var G__15775 = (i__15761_15767 + (1));
seq__15758_15764 = G__15772;
chunk__15759_15765 = G__15773;
count__15760_15766 = G__15774;
i__15761_15767 = G__15775;
continue;
}
} else
{var temp__4126__auto___15776 = cljs.core.seq.call(null,seq__15758_15764);if(temp__4126__auto___15776)
{var seq__15758_15777__$1 = temp__4126__auto___15776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15758_15777__$1))
{var c__4331__auto___15778 = cljs.core.chunk_first.call(null,seq__15758_15777__$1);{
var G__15779 = cljs.core.chunk_rest.call(null,seq__15758_15777__$1);
var G__15780 = c__4331__auto___15778;
var G__15781 = cljs.core.count.call(null,c__4331__auto___15778);
var G__15782 = (0);
seq__15758_15764 = G__15779;
chunk__15759_15765 = G__15780;
count__15760_15766 = G__15781;
i__15761_15767 = G__15782;
continue;
}
} else
{var vec__15763_15783 = cljs.core.first.call(null,seq__15758_15777__$1);var k_15784 = cljs.core.nth.call(null,vec__15763_15783,(0),null);var v_15785 = cljs.core.nth.call(null,vec__15763_15783,(1),null);var m15757_15786 = cljs.core.deref.call(null,m_atom__7496__auto__);cljs.core.reset_BANG_.call(null,m_atom__7496__auto__,cljs.core.assoc_BANG_.call(null,m15757_15786,((typeof k_15784 === 'string')?cljs.core.keyword.call(null,k_15784):k_15784),keywordize_map.call(null,v_15785)));
{
var G__15787 = cljs.core.next.call(null,seq__15758_15777__$1);
var G__15788 = null;
var G__15789 = (0);
var G__15790 = (0);
seq__15758_15764 = G__15787;
chunk__15759_15765 = G__15788;
count__15760_15766 = G__15789;
i__15761_15767 = G__15790;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7496__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__7565__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__7565__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__15791 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__15792 = cljs.core.next.call(null,ks);
m = G__15791;
ks = G__15792;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3575__auto__ = m;if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4300__auto__ = (function iter__15801(s__15802){return (new cljs.core.LazySeq(null,(function (){var s__15802__$1 = s__15802;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15802__$1);if(temp__4126__auto__)
{var s__15802__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15802__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__15802__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__15804 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__15803 = (0);while(true){
if((i__15803 < size__4299__auto__))
{var vec__15807 = cljs.core._nth.call(null,c__4298__auto__,i__15803);var k = cljs.core.nth.call(null,vec__15807,(0),null);var v = cljs.core.nth.call(null,vec__15807,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__15804,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__15809 = (i__15803 + (1));
i__15803 = G__15809;
continue;
}
} else
{{
var G__15810 = (i__15803 + (1));
i__15803 = G__15810;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15804),iter__15801.call(null,cljs.core.chunk_rest.call(null,s__15802__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15804),null);
}
} else
{var vec__15808 = cljs.core.first.call(null,s__15802__$2);var k = cljs.core.nth.call(null,vec__15808,(0),null);var v = cljs.core.nth.call(null,vec__15808,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__15801.call(null,cljs.core.rest.call(null,s__15802__$2)));
} else
{{
var G__15811 = cljs.core.rest.call(null,s__15802__$2);
s__15802__$1 = G__15811;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4300__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__15812){
var m = cljs.core.first(arglist__15812);
var kvs = cljs.core.rest(arglist__15812);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__15813){
var m = cljs.core.first(arglist__15813);
arglist__15813 = cljs.core.next(arglist__15813);
var key_seq = cljs.core.first(arglist__15813);
arglist__15813 = cljs.core.next(arglist__15813);
var f = cljs.core.first(arglist__15813);
var args = cljs.core.rest(arglist__15813);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4300__auto__ = ((function (s){
return (function iter__15818(s__15819){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__15819__$1 = s__15819;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15819__$1);if(temp__4126__auto__)
{var s__15819__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15819__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__15819__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__15821 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__15820 = (0);while(true){
if((i__15820 < size__4299__auto__))
{var x = cljs.core._nth.call(null,c__4298__auto__,i__15820);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__15821,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__15822 = (i__15820 + (1));
i__15820 = G__15822;
continue;
}
} else
{{
var G__15823 = (i__15820 + (1));
i__15820 = G__15823;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15821),iter__15818.call(null,cljs.core.chunk_rest.call(null,s__15819__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15821),null);
}
} else
{var x = cljs.core.first.call(null,s__15819__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__15818.call(null,cljs.core.rest.call(null,s__15819__$2)));
} else
{{
var G__15824 = cljs.core.rest.call(null,s__15819__$2);
s__15819__$1 = G__15824;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4300__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__15825){
var colls = cljs.core.seq(arglist__15825);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__15826__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__15827 = conj_when.call(null,coll,x);
var G__15828 = cljs.core.first.call(null,xs);
var G__15829 = cljs.core.next.call(null,xs);
coll = G__15827;
x = G__15828;
xs = G__15829;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__15826 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15826__delegate.call(this,coll,x,xs);};
G__15826.cljs$lang$maxFixedArity = 2;
G__15826.cljs$lang$applyTo = (function (arglist__15830){
var coll = cljs.core.first(arglist__15830);
arglist__15830 = cljs.core.next(arglist__15830);
var x = cljs.core.first(arglist__15830);
var xs = cljs.core.rest(arglist__15830);
return G__15826__delegate(coll,x,xs);
});
G__15826.cljs$core$IFn$_invoke$arity$variadic = G__15826__delegate;
return G__15826;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__15832__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__15831_SHARP_){return cljs.core.apply.call(null,f,p1__15831_SHARP_,args);
}));
};
var G__15832 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15832__delegate.call(this,a,f,args);};
G__15832.cljs$lang$maxFixedArity = 2;
G__15832.cljs$lang$applyTo = (function (arglist__15833){
var a = cljs.core.first(arglist__15833);
arglist__15833 = cljs.core.next(arglist__15833);
var f = cljs.core.first(arglist__15833);
var args = cljs.core.rest(arglist__15833);
return G__15832__delegate(a,f,args);
});
G__15832.cljs$core$IFn$_invoke$arity$variadic = G__15832__delegate;
return G__15832;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__15834__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__15834 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15834__delegate.call(this,f,arg,args);};
G__15834.cljs$lang$maxFixedArity = 2;
G__15834.cljs$lang$applyTo = (function (arglist__15835){
var f = cljs.core.first(arglist__15835);
arglist__15835 = cljs.core.next(arglist__15835);
var arg = cljs.core.first(arglist__15835);
var args = cljs.core.rest(arglist__15835);
return G__15834__delegate(f,arg,args);
});
G__15834.cljs$core$IFn$_invoke$arity$variadic = G__15834__delegate;
return G__15834;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
