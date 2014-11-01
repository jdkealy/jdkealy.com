// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6019__6020__auto__){var G__15007 = p1__6019__6020__auto__;if(G__15007)
{var bit__4225__auto__ = null;if(cljs.core.truth_((function (){var or__3575__auto__ = bit__4225__auto__;if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return G__15007.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__15007.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__15007);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__15007);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__15008_SHARP_){return (cljs.core.val.call(null,p1__15008_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__15010 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__15010,(0),null);var v = cljs.core.nth.call(null,vec__15010,(1),null);var p = vec__15010;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___15016 = schema.utils.use_fn_validation;var output_schema15011_15017 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema15012_15018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker15013_15019 = schema.core.checker.call(null,input_schema15012_15018);var output_checker15014_15020 = schema.core.checker.call(null,output_schema15011_15017);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___15016,output_schema15011_15017,input_schema15012_15018,input_checker15013_15019,output_checker15014_15020){
return (function unwrap_schema_form_key(G__15015){var validate__5989__auto__ = ufv___15016.get_cell();if(cljs.core.truth_(validate__5989__auto__))
{var args__5990__auto___15021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15015], null);var temp__4126__auto___15022 = input_checker15013_15019.call(null,args__5990__auto___15021);if(cljs.core.truth_(temp__4126__auto___15022))
{var error__5991__auto___15023 = temp__4126__auto___15022;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5991__auto___15023)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15012_15018,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___15021,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15023], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var k = G__15015;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__5989__auto__))
{var temp__4126__auto___15024 = output_checker15014_15020.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___15024))
{var error__5991__auto___15025 = temp__4126__auto___15024;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5991__auto___15025)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15011_15017,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15025], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv___15016,output_schema15011_15017,input_schema15012_15018,input_checker15013_15019,output_checker15014_15020))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema15011_15017,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15012_15018], null)));
var ufv___15031 = schema.utils.use_fn_validation;var output_schema15026_15032 = schema.core.Any;var input_schema15027_15033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker15028_15034 = schema.core.checker.call(null,input_schema15027_15033);var output_checker15029_15035 = schema.core.checker.call(null,output_schema15026_15032);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___15031,output_schema15026_15032,input_schema15027_15033,input_checker15028_15034,output_checker15029_15035){
return (function explicit_schema_key_map(G__15030){var validate__5989__auto__ = ufv___15031.get_cell();if(cljs.core.truth_(validate__5989__auto__))
{var args__5990__auto___15036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15030], null);var temp__4126__auto___15037 = input_checker15028_15034.call(null,args__5990__auto___15036);if(cljs.core.truth_(temp__4126__auto___15037))
{var error__5991__auto___15038 = temp__4126__auto___15037;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5991__auto___15038)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15027_15033,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___15036,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15038], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var s = G__15030;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__5989__auto__))
{var temp__4126__auto___15039 = output_checker15029_15035.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___15039))
{var error__5991__auto___15040 = temp__4126__auto___15039;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5991__auto___15040)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15026_15032,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15040], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv___15031,output_schema15026_15032,input_schema15027_15033,input_checker15028_15034,output_checker15029_15035))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema15026_15032,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15027_15033], null)));
var ufv___15046 = schema.utils.use_fn_validation;var output_schema15041_15047 = schema.core.Any;var input_schema15042_15048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker15043_15049 = schema.core.checker.call(null,input_schema15042_15048);var output_checker15044_15050 = schema.core.checker.call(null,output_schema15041_15047);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___15046,output_schema15041_15047,input_schema15042_15048,input_checker15043_15049,output_checker15044_15050){
return (function split_schema_keys(G__15045){var validate__5989__auto__ = ufv___15046.get_cell();if(cljs.core.truth_(validate__5989__auto__))
{var args__5990__auto___15051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15045], null);var temp__4126__auto___15052 = input_checker15043_15049.call(null,args__5990__auto___15051);if(cljs.core.truth_(temp__4126__auto___15052))
{var error__5991__auto___15053 = temp__4126__auto___15052;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5991__auto___15053)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15042_15048,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___15051,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15053], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var s = G__15045;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__5989__auto__))
{var temp__4126__auto___15054 = output_checker15044_15050.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___15054))
{var error__5991__auto___15055 = temp__4126__auto___15054;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5991__auto___15055)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15041_15047,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15055], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv___15046,output_schema15041_15047,input_schema15042_15048,input_checker15043_15049,output_checker15044_15050))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema15041_15047,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15042_15048], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__15059){var vec__15060 = p__15059;var k = cljs.core.nth.call(null,vec__15060,(0),null);var v = cljs.core.nth.call(null,vec__15060,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__15061 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__15061,(0),null);var ov = cljs.core.nth.call(null,vec__15061,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__15062){
var key_project = cljs.core.first(arglist__15062);
arglist__15062 = cljs.core.next(arglist__15062);
var key_combine = cljs.core.first(arglist__15062);
arglist__15062 = cljs.core.next(arglist__15062);
var val_combine = cljs.core.first(arglist__15062);
var maps = cljs.core.rest(arglist__15062);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___15070 = schema.utils.use_fn_validation;var output_schema15064_15071 = plumbing.fnk.schema.InputSchema;var input_schema15065_15072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker15066_15073 = schema.core.checker.call(null,input_schema15065_15072);var output_checker15067_15074 = schema.core.checker.call(null,output_schema15064_15071);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___15070,output_schema15064_15071,input_schema15065_15072,input_checker15066_15073,output_checker15067_15074){
return (function union_input_schemata(G__15068,G__15069){var validate__5989__auto__ = ufv___15070.get_cell();if(cljs.core.truth_(validate__5989__auto__))
{var args__5990__auto___15075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15068,G__15069], null);var temp__4126__auto___15076 = input_checker15066_15073.call(null,args__5990__auto___15075);if(cljs.core.truth_(temp__4126__auto___15076))
{var error__5991__auto___15077 = temp__4126__auto___15076;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5991__auto___15077)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15065_15072,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___15075,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15077], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var i1 = G__15068;var i2 = G__15069;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__5989__auto__,ufv___15070,output_schema15064_15071,input_schema15065_15072,input_checker15066_15073,output_checker15067_15074){
return (function (p1__15063_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__15063_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__15063_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__5989__auto__,ufv___15070,output_schema15064_15071,input_schema15065_15072,input_checker15066_15073,output_checker15067_15074))
,((function (validate__5989__auto__,ufv___15070,output_schema15064_15071,input_schema15065_15072,input_checker15066_15073,output_checker15067_15074){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__5989__auto__,ufv___15070,output_schema15064_15071,input_schema15065_15072,input_checker15066_15073,output_checker15067_15074))
,((function (validate__5989__auto__,ufv___15070,output_schema15064_15071,input_schema15065_15072,input_checker15066_15073,output_checker15067_15074){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__5989__auto__,ufv___15070,output_schema15064_15071,input_schema15065_15072,input_checker15066_15073,output_checker15067_15074))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__5989__auto__))
{var temp__4126__auto___15078 = output_checker15067_15074.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___15078))
{var error__5991__auto___15079 = temp__4126__auto___15078;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5991__auto___15079)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15064_15071,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15079], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv___15070,output_schema15064_15071,input_schema15065_15072,input_checker15066_15073,output_checker15067_15074))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema15064_15071,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15065_15072], null)));
var ufv___15085 = schema.utils.use_fn_validation;var output_schema15080_15086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema15081_15087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker15082_15088 = schema.core.checker.call(null,input_schema15081_15087);var output_checker15083_15089 = schema.core.checker.call(null,output_schema15080_15086);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___15085,output_schema15080_15086,input_schema15081_15087,input_checker15082_15088,output_checker15083_15089){
return (function required_toplevel_keys(G__15084){var validate__5989__auto__ = ufv___15085.get_cell();if(cljs.core.truth_(validate__5989__auto__))
{var args__5990__auto___15090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15084], null);var temp__4126__auto___15091 = input_checker15082_15088.call(null,args__5990__auto___15090);if(cljs.core.truth_(temp__4126__auto___15091))
{var error__5991__auto___15092 = temp__4126__auto___15091;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5991__auto___15092)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15081_15087,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___15090,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15092], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var input_schema = G__15084;while(true){
return cljs.core.keep.call(null,((function (validate__5989__auto__,ufv___15085,output_schema15080_15086,input_schema15081_15087,input_checker15082_15088,output_checker15083_15089){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__5989__auto__,ufv___15085,output_schema15080_15086,input_schema15081_15087,input_checker15082_15088,output_checker15083_15089))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__5989__auto__))
{var temp__4126__auto___15093 = output_checker15083_15089.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___15093))
{var error__5991__auto___15094 = temp__4126__auto___15093;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5991__auto___15094)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15080_15086,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15094], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv___15085,output_schema15080_15086,input_schema15081_15087,input_checker15082_15088,output_checker15083_15089))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema15080_15086,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15081_15087], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4300__auto__ = (function iter__15103(s__15104){return (new cljs.core.LazySeq(null,(function (){var s__15104__$1 = s__15104;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15104__$1);if(temp__4126__auto__)
{var s__15104__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15104__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__15104__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__15106 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__15105 = (0);while(true){
if((i__15105 < size__4299__auto__))
{var vec__15109 = cljs.core._nth.call(null,c__4298__auto__,i__15105);var k = cljs.core.nth.call(null,vec__15109,(0),null);var v = cljs.core.nth.call(null,vec__15109,(1),null);cljs.core.chunk_append.call(null,b__15106,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__15111 = (i__15105 + (1));
i__15105 = G__15111;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15106),iter__15103.call(null,cljs.core.chunk_rest.call(null,s__15104__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15106),null);
}
} else
{var vec__15110 = cljs.core.first.call(null,s__15104__$2);var k = cljs.core.nth.call(null,vec__15110,(0),null);var v = cljs.core.nth.call(null,vec__15110,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__15103.call(null,cljs.core.rest.call(null,s__15104__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4300__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4300__auto__ = (function iter__15120(s__15121){return (new cljs.core.LazySeq(null,(function (){var s__15121__$1 = s__15121;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15121__$1);if(temp__4126__auto__)
{var s__15121__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15121__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__15121__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__15123 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__15122 = (0);while(true){
if((i__15122 < size__4299__auto__))
{var vec__15126 = cljs.core._nth.call(null,c__4298__auto__,i__15122);var k = cljs.core.nth.call(null,vec__15126,(0),null);var v = cljs.core.nth.call(null,vec__15126,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__15123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__15128 = (i__15122 + (1));
i__15122 = G__15128;
continue;
}
} else
{{
var G__15129 = (i__15122 + (1));
i__15122 = G__15129;
continue;
}
}
} else
{{
var G__15130 = (i__15122 + (1));
i__15122 = G__15130;
continue;
}
}
} else
{{
var G__15131 = (i__15122 + (1));
i__15122 = G__15131;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15123),iter__15120.call(null,cljs.core.chunk_rest.call(null,s__15121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15123),null);
}
} else
{var vec__15127 = cljs.core.first.call(null,s__15121__$2);var k = cljs.core.nth.call(null,vec__15127,(0),null);var v = cljs.core.nth.call(null,vec__15127,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__15120.call(null,cljs.core.rest.call(null,s__15121__$2)));
} else
{{
var G__15132 = cljs.core.rest.call(null,s__15121__$2);
s__15121__$1 = G__15132;
continue;
}
}
} else
{{
var G__15133 = cljs.core.rest.call(null,s__15121__$2);
s__15121__$1 = G__15133;
continue;
}
}
} else
{{
var G__15134 = cljs.core.rest.call(null,s__15121__$2);
s__15121__$1 = G__15134;
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
});return iter__4300__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___15157 = schema.utils.use_fn_validation;var output_schema15135_15158 = schema.core.Any;var input_schema15136_15159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker15137_15160 = schema.core.checker.call(null,input_schema15136_15159);var output_checker15138_15161 = schema.core.checker.call(null,output_schema15135_15158);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___15157,output_schema15135_15158,input_schema15136_15159,input_checker15137_15160,output_checker15138_15161){
return (function compose_schemata(G__15139,G__15140){var validate__5989__auto__ = true;if(validate__5989__auto__)
{var args__5990__auto___15162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15139,G__15140], null);var temp__4126__auto___15163 = input_checker15137_15160.call(null,args__5990__auto___15162);if(cljs.core.truth_(temp__4126__auto___15163))
{var error__5991__auto___15164 = temp__4126__auto___15163;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5991__auto___15164)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15136_15159,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___15162,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15164], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var G__15151 = G__15139;var vec__15153 = G__15151;var i2 = cljs.core.nth.call(null,vec__15153,(0),null);var o2 = cljs.core.nth.call(null,vec__15153,(1),null);var G__15152 = G__15140;var vec__15154 = G__15152;var i1 = cljs.core.nth.call(null,vec__15154,(0),null);var o1 = cljs.core.nth.call(null,vec__15154,(1),null);var G__15151__$1 = G__15151;var G__15152__$1 = G__15152;while(true){
var vec__15155 = G__15151__$1;var i2__$1 = cljs.core.nth.call(null,vec__15155,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__15155,(1),null);var vec__15156 = G__15152__$1;var i1__$1 = cljs.core.nth.call(null,vec__15156,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__15156,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__5989__auto__)
{var temp__4126__auto___15165 = output_checker15138_15161.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___15165))
{var error__5991__auto___15166 = temp__4126__auto___15165;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5991__auto___15166)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15135_15158,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15166], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv___15157,output_schema15135_15158,input_schema15136_15159,input_checker15137_15160,output_checker15138_15161))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema15135_15158,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15136_15159], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___15245 = schema.utils.use_fn_validation;var output_schema15167_15246 = schema.core.Any;var input_schema15168_15247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker15169_15248 = schema.core.checker.call(null,input_schema15168_15247);var output_checker15170_15249 = schema.core.checker.call(null,output_schema15167_15246);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249){
return (function split_schema(G__15171,G__15172){var validate__5989__auto__ = ufv___15245.get_cell();if(cljs.core.truth_(validate__5989__auto__))
{var args__5990__auto___15250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15171,G__15172], null);var temp__4126__auto___15251 = input_checker15169_15248.call(null,args__5990__auto___15250);if(cljs.core.truth_(temp__4126__auto___15251))
{var error__5991__auto___15252 = temp__4126__auto___15251;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5991__auto___15252)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15168_15247,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___15250,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15252], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var s = G__15171;var ks = G__15172;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4300__auto__ = ((function (ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249){
return (function iter__15209(s__15210){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249){
return (function (){var s__15210__$1 = s__15210;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15210__$1);if(temp__4126__auto__)
{var s__15210__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15210__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__15210__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__15212 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__15211 = (0);while(true){
if((i__15211 < size__4299__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4298__auto__,i__15211);cljs.core.chunk_append.call(null,b__15212,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4300__auto__ = ((function (i__15211,in_QMARK_,c__4298__auto__,size__4299__auto__,b__15212,s__15210__$2,temp__4126__auto__,ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249){
return (function iter__15229(s__15230){return (new cljs.core.LazySeq(null,((function (i__15211,in_QMARK_,c__4298__auto__,size__4299__auto__,b__15212,s__15210__$2,temp__4126__auto__,ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249){
return (function (){var s__15230__$1 = s__15230;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15230__$1);if(temp__4126__auto____$1)
{var s__15230__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15230__$2))
{var c__4298__auto____$1 = cljs.core.chunk_first.call(null,s__15230__$2);var size__4299__auto____$1 = cljs.core.count.call(null,c__4298__auto____$1);var b__15232 = cljs.core.chunk_buffer.call(null,size__4299__auto____$1);if((function (){var i__15231 = (0);while(true){
if((i__15231 < size__4299__auto____$1))
{var vec__15235 = cljs.core._nth.call(null,c__4298__auto____$1,i__15231);var k = cljs.core.nth.call(null,vec__15235,(0),null);var v = cljs.core.nth.call(null,vec__15235,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__15232,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__15253 = (i__15231 + (1));
i__15231 = G__15253;
continue;
}
} else
{{
var G__15254 = (i__15231 + (1));
i__15231 = G__15254;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15232),iter__15229.call(null,cljs.core.chunk_rest.call(null,s__15230__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15232),null);
}
} else
{var vec__15236 = cljs.core.first.call(null,s__15230__$2);var k = cljs.core.nth.call(null,vec__15236,(0),null);var v = cljs.core.nth.call(null,vec__15236,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__15229.call(null,cljs.core.rest.call(null,s__15230__$2)));
} else
{{
var G__15255 = cljs.core.rest.call(null,s__15230__$2);
s__15230__$1 = G__15255;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__15211,in_QMARK_,c__4298__auto__,size__4299__auto__,b__15212,s__15210__$2,temp__4126__auto__,ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249))
,null,null));
});})(i__15211,in_QMARK_,c__4298__auto__,size__4299__auto__,b__15212,s__15210__$2,temp__4126__auto__,ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249))
;return iter__4300__auto__.call(null,s);
})()));
{
var G__15256 = (i__15211 + (1));
i__15211 = G__15256;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15212),iter__15209.call(null,cljs.core.chunk_rest.call(null,s__15210__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15212),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__15210__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4300__auto__ = ((function (in_QMARK_,s__15210__$2,temp__4126__auto__,ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249){
return (function iter__15237(s__15238){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__15210__$2,temp__4126__auto__,ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249){
return (function (){var s__15238__$1 = s__15238;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15238__$1);if(temp__4126__auto____$1)
{var s__15238__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15238__$2))
{var c__4298__auto__ = cljs.core.chunk_first.call(null,s__15238__$2);var size__4299__auto__ = cljs.core.count.call(null,c__4298__auto__);var b__15240 = cljs.core.chunk_buffer.call(null,size__4299__auto__);if((function (){var i__15239 = (0);while(true){
if((i__15239 < size__4299__auto__))
{var vec__15243 = cljs.core._nth.call(null,c__4298__auto__,i__15239);var k = cljs.core.nth.call(null,vec__15243,(0),null);var v = cljs.core.nth.call(null,vec__15243,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__15240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__15257 = (i__15239 + (1));
i__15239 = G__15257;
continue;
}
} else
{{
var G__15258 = (i__15239 + (1));
i__15239 = G__15258;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15240),iter__15237.call(null,cljs.core.chunk_rest.call(null,s__15238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15240),null);
}
} else
{var vec__15244 = cljs.core.first.call(null,s__15238__$2);var k = cljs.core.nth.call(null,vec__15244,(0),null);var v = cljs.core.nth.call(null,vec__15244,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__15237.call(null,cljs.core.rest.call(null,s__15238__$2)));
} else
{{
var G__15259 = cljs.core.rest.call(null,s__15238__$2);
s__15238__$1 = G__15259;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__15210__$2,temp__4126__auto__,ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249))
,null,null));
});})(in_QMARK_,s__15210__$2,temp__4126__auto__,ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249))
;return iter__4300__auto__.call(null,s);
})()),iter__15209.call(null,cljs.core.rest.call(null,s__15210__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249))
,null,null));
});})(ks__$1,validate__5989__auto__,ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249))
;return iter__4300__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__5989__auto__))
{var temp__4126__auto___15260 = output_checker15170_15249.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___15260))
{var error__5991__auto___15261 = temp__4126__auto___15260;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5991__auto___15261)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15167_15246,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15261], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv___15245,output_schema15167_15246,input_schema15168_15247,input_checker15169_15248,output_checker15170_15249))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema15167_15246,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15168_15247], null)));
var ufv___15292 = schema.utils.use_fn_validation;var output_schema15262_15293 = plumbing.fnk.schema.GraphIOSchemata;var input_schema15263_15294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker15264_15295 = schema.core.checker.call(null,input_schema15263_15294);var output_checker15265_15296 = schema.core.checker.call(null,output_schema15262_15293);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___15292,output_schema15262_15293,input_schema15263_15294,input_checker15264_15295,output_checker15265_15296){
return (function sequence_schemata(G__15266,G__15267){var validate__5989__auto__ = ufv___15292.get_cell();if(cljs.core.truth_(validate__5989__auto__))
{var args__5990__auto___15297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15266,G__15267], null);var temp__4126__auto___15298 = input_checker15264_15295.call(null,args__5990__auto___15297);if(cljs.core.truth_(temp__4126__auto___15298))
{var error__5991__auto___15299 = temp__4126__auto___15298;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5991__auto___15299)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15263_15294,new cljs.core.Keyword(null,"value","value",305978217),args__5990__auto___15297,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15299], null));
} else
{}
} else
{}
var o__5992__auto__ = (function (){var G__15283 = G__15266;var vec__15285 = G__15283;var i1 = cljs.core.nth.call(null,vec__15285,(0),null);var o1 = cljs.core.nth.call(null,vec__15285,(1),null);var G__15284 = G__15267;var vec__15286 = G__15284;var k = cljs.core.nth.call(null,vec__15286,(0),null);var vec__15287 = cljs.core.nth.call(null,vec__15286,(1),null);var i2 = cljs.core.nth.call(null,vec__15287,(0),null);var o2 = cljs.core.nth.call(null,vec__15287,(1),null);var G__15283__$1 = G__15283;var G__15284__$1 = G__15284;while(true){
var vec__15288 = G__15283__$1;var i1__$1 = cljs.core.nth.call(null,vec__15288,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__15288,(1),null);var vec__15289 = G__15284__$1;var k__$1 = cljs.core.nth.call(null,vec__15289,(0),null);var vec__15290 = cljs.core.nth.call(null,vec__15289,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__15290,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__15290,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__15291 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__15291,(0),null);var unused = cljs.core.nth.call(null,vec__15291,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__5989__auto__))
{var temp__4126__auto___15300 = output_checker15265_15296.call(null,o__5992__auto__);if(cljs.core.truth_(temp__4126__auto___15300))
{var error__5991__auto___15301 = temp__4126__auto___15300;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5991__auto___15301)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15262_15293,new cljs.core.Keyword(null,"value","value",305978217),o__5992__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5991__auto___15301], null));
} else
{}
} else
{}
return o__5992__auto__;
});})(ufv___15292,output_schema15262_15293,input_schema15263_15294,input_checker15264_15295,output_checker15265_15296))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema15262_15293,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15263_15294], null)));
