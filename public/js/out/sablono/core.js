// Compiled by ClojureScript 0.0-2322
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__20532__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__20531 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__20531,(0),null);var body = cljs.core.nthnext.call(null,vec__20531,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__20532 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20532__delegate.call(this,args);};
G__20532.cljs$lang$maxFixedArity = 0;
G__20532.cljs$lang$applyTo = (function (arglist__20533){
var args = cljs.core.seq(arglist__20533);
return G__20532__delegate(args);
});
G__20532.cljs$core$IFn$_invoke$arity$variadic = G__20532__delegate;
return G__20532;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4300__auto__ = (function iter__20538(s__20539){return (new cljs.core.LazySeq(null,(function (){var s__20539__$1 = s__20539;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20539__$1);if(temp__4126__auto__)
{var s__20539__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20539__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__20539__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__20541 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__20540 = (0);while(true){
if((i__20540 < size__4299__auto__))
{var args = cljs.core._nth.call(null,c__4298__auto__,i__20540);cljs.core.chunk_append.call(null,b__20541,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__20542 = (i__20540 + (1));
i__20540 = G__20542;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20541),iter__20538.call(null,cljs.core.chunk_rest.call(null,s__20539__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20541),null);
}
} else
{var args = cljs.core.first.call(null,s__20539__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__20538.call(null,cljs.core.rest.call(null,s__20539__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4300__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4300__auto__ = (function iter__20547(s__20548){return (new cljs.core.LazySeq(null,(function (){var s__20548__$1 = s__20548;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20548__$1);if(temp__4126__auto__)
{var s__20548__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20548__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__20548__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__20550 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__20549 = (0);while(true){
if((i__20549 < size__4299__auto__))
{var style = cljs.core._nth.call(null,c__4298__auto__,i__20549);cljs.core.chunk_append.call(null,b__20550,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__20551 = (i__20549 + (1));
i__20549 = G__20551;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20550),iter__20547.call(null,cljs.core.chunk_rest.call(null,s__20548__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20550),null);
}
} else
{var style = cljs.core.first.call(null,s__20548__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__20547.call(null,cljs.core.rest.call(null,s__20548__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4300__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__20552){
var styles = cljs.core.seq(arglist__20552);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to20553 = (function() { 
var link_to20553__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to20553 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to20553__delegate.call(this,url,content);};
link_to20553.cljs$lang$maxFixedArity = 1;
link_to20553.cljs$lang$applyTo = (function (arglist__20554){
var url = cljs.core.first(arglist__20554);
var content = cljs.core.rest(arglist__20554);
return link_to20553__delegate(url,content);
});
link_to20553.cljs$core$IFn$_invoke$arity$variadic = link_to20553__delegate;
return link_to20553;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20553);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to20555 = (function() { 
var mail_to20555__delegate = function (e_mail,p__20556){var vec__20558 = p__20556;var content = cljs.core.nth.call(null,vec__20558,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3575__auto__ = content;if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to20555 = function (e_mail,var_args){
var p__20556 = null;if (arguments.length > 1) {
  p__20556 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to20555__delegate.call(this,e_mail,p__20556);};
mail_to20555.cljs$lang$maxFixedArity = 1;
mail_to20555.cljs$lang$applyTo = (function (arglist__20559){
var e_mail = cljs.core.first(arglist__20559);
var p__20556 = cljs.core.rest(arglist__20559);
return mail_to20555__delegate(e_mail,p__20556);
});
mail_to20555.cljs$core$IFn$_invoke$arity$variadic = mail_to20555__delegate;
return mail_to20555;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20555);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list20560 = (function unordered_list20560(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4300__auto__ = (function iter__20565(s__20566){return (new cljs.core.LazySeq(null,(function (){var s__20566__$1 = s__20566;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20566__$1);if(temp__4126__auto__)
{var s__20566__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20566__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__20566__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__20568 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__20567 = (0);while(true){
if((i__20567 < size__4299__auto__))
{var x = cljs.core._nth.call(null,c__4298__auto__,i__20567);cljs.core.chunk_append.call(null,b__20568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__20569 = (i__20567 + (1));
i__20567 = G__20569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20568),iter__20565.call(null,cljs.core.chunk_rest.call(null,s__20566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20568),null);
}
} else
{var x = cljs.core.first.call(null,s__20566__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__20565.call(null,cljs.core.rest.call(null,s__20566__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4300__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20560);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list20570 = (function ordered_list20570(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4300__auto__ = (function iter__20575(s__20576){return (new cljs.core.LazySeq(null,(function (){var s__20576__$1 = s__20576;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20576__$1);if(temp__4126__auto__)
{var s__20576__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20576__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__20576__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__20578 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__20577 = (0);while(true){
if((i__20577 < size__4299__auto__))
{var x = cljs.core._nth.call(null,c__4298__auto__,i__20577);cljs.core.chunk_append.call(null,b__20578,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__20579 = (i__20577 + (1));
i__20577 = G__20579;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20578),iter__20575.call(null,cljs.core.chunk_rest.call(null,s__20576__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20578),null);
}
} else
{var x = cljs.core.first.call(null,s__20576__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__20575.call(null,cljs.core.rest.call(null,s__20576__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4300__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20570);
/**
* Create an image element.
*/
sablono.core.image20580 = (function() {
var image20580 = null;
var image20580__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image20580__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image20580 = function(src,alt){
switch(arguments.length){
case 1:
return image20580__1.call(this,src);
case 2:
return image20580__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image20580.cljs$core$IFn$_invoke$arity$1 = image20580__1;
image20580.cljs$core$IFn$_invoke$arity$2 = image20580__2;
return image20580;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20580);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__20581_SHARP_,p2__20582_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20581_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20582_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__20583_SHARP_,p2__20584_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20583_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20584_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field20585 = (function() {
var color_field20585 = null;
var color_field20585__1 = (function (name__5045__auto__){return color_field20585.call(null,name__5045__auto__,null);
});
var color_field20585__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5045__auto__,value__5046__auto__);
});
color_field20585 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return color_field20585__1.call(this,name__5045__auto__);
case 2:
return color_field20585__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field20585.cljs$core$IFn$_invoke$arity$1 = color_field20585__1;
color_field20585.cljs$core$IFn$_invoke$arity$2 = color_field20585__2;
return color_field20585;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20585);
/**
* Creates a date input field.
*/
sablono.core.date_field20586 = (function() {
var date_field20586 = null;
var date_field20586__1 = (function (name__5045__auto__){return date_field20586.call(null,name__5045__auto__,null);
});
var date_field20586__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5045__auto__,value__5046__auto__);
});
date_field20586 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return date_field20586__1.call(this,name__5045__auto__);
case 2:
return date_field20586__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field20586.cljs$core$IFn$_invoke$arity$1 = date_field20586__1;
date_field20586.cljs$core$IFn$_invoke$arity$2 = date_field20586__2;
return date_field20586;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20586);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field20587 = (function() {
var datetime_field20587 = null;
var datetime_field20587__1 = (function (name__5045__auto__){return datetime_field20587.call(null,name__5045__auto__,null);
});
var datetime_field20587__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5045__auto__,value__5046__auto__);
});
datetime_field20587 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return datetime_field20587__1.call(this,name__5045__auto__);
case 2:
return datetime_field20587__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field20587.cljs$core$IFn$_invoke$arity$1 = datetime_field20587__1;
datetime_field20587.cljs$core$IFn$_invoke$arity$2 = datetime_field20587__2;
return datetime_field20587;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20587);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field20588 = (function() {
var datetime_local_field20588 = null;
var datetime_local_field20588__1 = (function (name__5045__auto__){return datetime_local_field20588.call(null,name__5045__auto__,null);
});
var datetime_local_field20588__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5045__auto__,value__5046__auto__);
});
datetime_local_field20588 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return datetime_local_field20588__1.call(this,name__5045__auto__);
case 2:
return datetime_local_field20588__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field20588.cljs$core$IFn$_invoke$arity$1 = datetime_local_field20588__1;
datetime_local_field20588.cljs$core$IFn$_invoke$arity$2 = datetime_local_field20588__2;
return datetime_local_field20588;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20588);
/**
* Creates a email input field.
*/
sablono.core.email_field20589 = (function() {
var email_field20589 = null;
var email_field20589__1 = (function (name__5045__auto__){return email_field20589.call(null,name__5045__auto__,null);
});
var email_field20589__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5045__auto__,value__5046__auto__);
});
email_field20589 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return email_field20589__1.call(this,name__5045__auto__);
case 2:
return email_field20589__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field20589.cljs$core$IFn$_invoke$arity$1 = email_field20589__1;
email_field20589.cljs$core$IFn$_invoke$arity$2 = email_field20589__2;
return email_field20589;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20589);
/**
* Creates a file input field.
*/
sablono.core.file_field20590 = (function() {
var file_field20590 = null;
var file_field20590__1 = (function (name__5045__auto__){return file_field20590.call(null,name__5045__auto__,null);
});
var file_field20590__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5045__auto__,value__5046__auto__);
});
file_field20590 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return file_field20590__1.call(this,name__5045__auto__);
case 2:
return file_field20590__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field20590.cljs$core$IFn$_invoke$arity$1 = file_field20590__1;
file_field20590.cljs$core$IFn$_invoke$arity$2 = file_field20590__2;
return file_field20590;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20590);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field20591 = (function() {
var hidden_field20591 = null;
var hidden_field20591__1 = (function (name__5045__auto__){return hidden_field20591.call(null,name__5045__auto__,null);
});
var hidden_field20591__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5045__auto__,value__5046__auto__);
});
hidden_field20591 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return hidden_field20591__1.call(this,name__5045__auto__);
case 2:
return hidden_field20591__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field20591.cljs$core$IFn$_invoke$arity$1 = hidden_field20591__1;
hidden_field20591.cljs$core$IFn$_invoke$arity$2 = hidden_field20591__2;
return hidden_field20591;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20591);
/**
* Creates a month input field.
*/
sablono.core.month_field20592 = (function() {
var month_field20592 = null;
var month_field20592__1 = (function (name__5045__auto__){return month_field20592.call(null,name__5045__auto__,null);
});
var month_field20592__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5045__auto__,value__5046__auto__);
});
month_field20592 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return month_field20592__1.call(this,name__5045__auto__);
case 2:
return month_field20592__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field20592.cljs$core$IFn$_invoke$arity$1 = month_field20592__1;
month_field20592.cljs$core$IFn$_invoke$arity$2 = month_field20592__2;
return month_field20592;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20592);
/**
* Creates a number input field.
*/
sablono.core.number_field20593 = (function() {
var number_field20593 = null;
var number_field20593__1 = (function (name__5045__auto__){return number_field20593.call(null,name__5045__auto__,null);
});
var number_field20593__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5045__auto__,value__5046__auto__);
});
number_field20593 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return number_field20593__1.call(this,name__5045__auto__);
case 2:
return number_field20593__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field20593.cljs$core$IFn$_invoke$arity$1 = number_field20593__1;
number_field20593.cljs$core$IFn$_invoke$arity$2 = number_field20593__2;
return number_field20593;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20593);
/**
* Creates a password input field.
*/
sablono.core.password_field20594 = (function() {
var password_field20594 = null;
var password_field20594__1 = (function (name__5045__auto__){return password_field20594.call(null,name__5045__auto__,null);
});
var password_field20594__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5045__auto__,value__5046__auto__);
});
password_field20594 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return password_field20594__1.call(this,name__5045__auto__);
case 2:
return password_field20594__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field20594.cljs$core$IFn$_invoke$arity$1 = password_field20594__1;
password_field20594.cljs$core$IFn$_invoke$arity$2 = password_field20594__2;
return password_field20594;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20594);
/**
* Creates a range input field.
*/
sablono.core.range_field20595 = (function() {
var range_field20595 = null;
var range_field20595__1 = (function (name__5045__auto__){return range_field20595.call(null,name__5045__auto__,null);
});
var range_field20595__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5045__auto__,value__5046__auto__);
});
range_field20595 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return range_field20595__1.call(this,name__5045__auto__);
case 2:
return range_field20595__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field20595.cljs$core$IFn$_invoke$arity$1 = range_field20595__1;
range_field20595.cljs$core$IFn$_invoke$arity$2 = range_field20595__2;
return range_field20595;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20595);
/**
* Creates a search input field.
*/
sablono.core.search_field20596 = (function() {
var search_field20596 = null;
var search_field20596__1 = (function (name__5045__auto__){return search_field20596.call(null,name__5045__auto__,null);
});
var search_field20596__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5045__auto__,value__5046__auto__);
});
search_field20596 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return search_field20596__1.call(this,name__5045__auto__);
case 2:
return search_field20596__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field20596.cljs$core$IFn$_invoke$arity$1 = search_field20596__1;
search_field20596.cljs$core$IFn$_invoke$arity$2 = search_field20596__2;
return search_field20596;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20596);
/**
* Creates a tel input field.
*/
sablono.core.tel_field20597 = (function() {
var tel_field20597 = null;
var tel_field20597__1 = (function (name__5045__auto__){return tel_field20597.call(null,name__5045__auto__,null);
});
var tel_field20597__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5045__auto__,value__5046__auto__);
});
tel_field20597 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return tel_field20597__1.call(this,name__5045__auto__);
case 2:
return tel_field20597__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field20597.cljs$core$IFn$_invoke$arity$1 = tel_field20597__1;
tel_field20597.cljs$core$IFn$_invoke$arity$2 = tel_field20597__2;
return tel_field20597;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20597);
/**
* Creates a text input field.
*/
sablono.core.text_field20598 = (function() {
var text_field20598 = null;
var text_field20598__1 = (function (name__5045__auto__){return text_field20598.call(null,name__5045__auto__,null);
});
var text_field20598__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5045__auto__,value__5046__auto__);
});
text_field20598 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return text_field20598__1.call(this,name__5045__auto__);
case 2:
return text_field20598__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field20598.cljs$core$IFn$_invoke$arity$1 = text_field20598__1;
text_field20598.cljs$core$IFn$_invoke$arity$2 = text_field20598__2;
return text_field20598;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20598);
/**
* Creates a time input field.
*/
sablono.core.time_field20599 = (function() {
var time_field20599 = null;
var time_field20599__1 = (function (name__5045__auto__){return time_field20599.call(null,name__5045__auto__,null);
});
var time_field20599__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5045__auto__,value__5046__auto__);
});
time_field20599 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return time_field20599__1.call(this,name__5045__auto__);
case 2:
return time_field20599__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field20599.cljs$core$IFn$_invoke$arity$1 = time_field20599__1;
time_field20599.cljs$core$IFn$_invoke$arity$2 = time_field20599__2;
return time_field20599;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20599);
/**
* Creates a url input field.
*/
sablono.core.url_field20600 = (function() {
var url_field20600 = null;
var url_field20600__1 = (function (name__5045__auto__){return url_field20600.call(null,name__5045__auto__,null);
});
var url_field20600__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5045__auto__,value__5046__auto__);
});
url_field20600 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return url_field20600__1.call(this,name__5045__auto__);
case 2:
return url_field20600__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field20600.cljs$core$IFn$_invoke$arity$1 = url_field20600__1;
url_field20600.cljs$core$IFn$_invoke$arity$2 = url_field20600__2;
return url_field20600;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20600);
/**
* Creates a week input field.
*/
sablono.core.week_field20601 = (function() {
var week_field20601 = null;
var week_field20601__1 = (function (name__5045__auto__){return week_field20601.call(null,name__5045__auto__,null);
});
var week_field20601__2 = (function (name__5045__auto__,value__5046__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5045__auto__,value__5046__auto__);
});
week_field20601 = function(name__5045__auto__,value__5046__auto__){
switch(arguments.length){
case 1:
return week_field20601__1.call(this,name__5045__auto__);
case 2:
return week_field20601__2.call(this,name__5045__auto__,value__5046__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field20601.cljs$core$IFn$_invoke$arity$1 = week_field20601__1;
week_field20601.cljs$core$IFn$_invoke$arity$2 = week_field20601__2;
return week_field20601;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20601);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box20602 = (function() {
var check_box20602 = null;
var check_box20602__1 = (function (name){return check_box20602.call(null,name,null);
});
var check_box20602__2 = (function (name,checked_QMARK_){return check_box20602.call(null,name,checked_QMARK_,"true");
});
var check_box20602__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box20602 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box20602__1.call(this,name);
case 2:
return check_box20602__2.call(this,name,checked_QMARK_);
case 3:
return check_box20602__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box20602.cljs$core$IFn$_invoke$arity$1 = check_box20602__1;
check_box20602.cljs$core$IFn$_invoke$arity$2 = check_box20602__2;
check_box20602.cljs$core$IFn$_invoke$arity$3 = check_box20602__3;
return check_box20602;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20602);
/**
* Creates a radio button.
*/
sablono.core.radio_button20603 = (function() {
var radio_button20603 = null;
var radio_button20603__1 = (function (group){return radio_button20603.call(null,group,null);
});
var radio_button20603__2 = (function (group,checked_QMARK_){return radio_button20603.call(null,group,checked_QMARK_,"true");
});
var radio_button20603__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button20603 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button20603__1.call(this,group);
case 2:
return radio_button20603__2.call(this,group,checked_QMARK_);
case 3:
return radio_button20603__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button20603.cljs$core$IFn$_invoke$arity$1 = radio_button20603__1;
radio_button20603.cljs$core$IFn$_invoke$arity$2 = radio_button20603__2;
radio_button20603.cljs$core$IFn$_invoke$arity$3 = radio_button20603__3;
return radio_button20603;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20603);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options20604 = (function() {
var select_options20604 = null;
var select_options20604__1 = (function (coll){return select_options20604.call(null,coll,null);
});
var select_options20604__2 = (function (coll,selected){var iter__4300__auto__ = (function iter__20613(s__20614){return (new cljs.core.LazySeq(null,(function (){var s__20614__$1 = s__20614;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20614__$1);if(temp__4126__auto__)
{var s__20614__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20614__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__20614__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__20616 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__20615 = (0);while(true){
if((i__20615 < size__4299__auto__))
{var x = cljs.core._nth.call(null,c__4298__auto__,i__20615);cljs.core.chunk_append.call(null,b__20616,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20619 = x;var text = cljs.core.nth.call(null,vec__20619,(0),null);var val = cljs.core.nth.call(null,vec__20619,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__20619,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options20604.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__20621 = (i__20615 + (1));
i__20615 = G__20621;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20616),iter__20613.call(null,cljs.core.chunk_rest.call(null,s__20614__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20616),null);
}
} else
{var x = cljs.core.first.call(null,s__20614__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20620 = x;var text = cljs.core.nth.call(null,vec__20620,(0),null);var val = cljs.core.nth.call(null,vec__20620,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__20620,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options20604.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__20613.call(null,cljs.core.rest.call(null,s__20614__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4300__auto__.call(null,coll);
});
select_options20604 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options20604__1.call(this,coll);
case 2:
return select_options20604__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options20604.cljs$core$IFn$_invoke$arity$1 = select_options20604__1;
select_options20604.cljs$core$IFn$_invoke$arity$2 = select_options20604__2;
return select_options20604;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20604);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down20622 = (function() {
var drop_down20622 = null;
var drop_down20622__2 = (function (name,options){return drop_down20622.call(null,name,options,null);
});
var drop_down20622__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down20622 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down20622__2.call(this,name,options);
case 3:
return drop_down20622__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down20622.cljs$core$IFn$_invoke$arity$2 = drop_down20622__2;
drop_down20622.cljs$core$IFn$_invoke$arity$3 = drop_down20622__3;
return drop_down20622;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20622);
/**
* Creates a text area element.
*/
sablono.core.text_area20623 = (function() {
var text_area20623 = null;
var text_area20623__1 = (function (name){return text_area20623.call(null,name,null);
});
var text_area20623__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area20623 = function(name,value){
switch(arguments.length){
case 1:
return text_area20623__1.call(this,name);
case 2:
return text_area20623__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area20623.cljs$core$IFn$_invoke$arity$1 = text_area20623__1;
text_area20623.cljs$core$IFn$_invoke$arity$2 = text_area20623__2;
return text_area20623;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20623);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label20624 = (function label20624(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20624);
/**
* Creates a submit button.
*/
sablono.core.submit_button20625 = (function submit_button20625(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20625);
/**
* Creates a form reset button.
*/
sablono.core.reset_button20626 = (function reset_button20626(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20626);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to20627 = (function() { 
var form_to20627__delegate = function (p__20628,body){var vec__20630 = p__20628;var method = cljs.core.nth.call(null,vec__20630,(0),null);var action = cljs.core.nth.call(null,vec__20630,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to20627 = function (p__20628,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to20627__delegate.call(this,p__20628,body);};
form_to20627.cljs$lang$maxFixedArity = 1;
form_to20627.cljs$lang$applyTo = (function (arglist__20631){
var p__20628 = cljs.core.first(arglist__20631);
var body = cljs.core.rest(arglist__20631);
return form_to20627__delegate(p__20628,body);
});
form_to20627.cljs$core$IFn$_invoke$arity$variadic = form_to20627__delegate;
return form_to20627;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20627);
