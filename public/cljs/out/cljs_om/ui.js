// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_om.ui');
goog.require('cljs.core');
goog.require('cljs_om.util');
goog.require('cljs_om.util');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_om.ui.count_view = (function count_view(app,owner){if(typeof cljs_om.ui.t9496 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t9496 = (function (owner,app,count_view,meta9497){
this.owner = owner;
this.app = app;
this.count_view = count_view;
this.meta9497 = meta9497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t9496.cljs$lang$type = true;
cljs_om.ui.t9496.cljs$lang$ctorStr = "cljs-om.ui/t9496";
cljs_om.ui.t9496.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs-om.ui/t9496");
});
cljs_om.ui.t9496.prototype.om$core$IRender$ = true;
cljs_om.ui.t9496.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.span(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.app));
});
cljs_om.ui.t9496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9498){var self__ = this;
var _9498__$1 = this;return self__.meta9497;
});
cljs_om.ui.t9496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9498,meta9497__$1){var self__ = this;
var _9498__$1 = this;return (new cljs_om.ui.t9496(self__.owner,self__.app,self__.count_view,meta9497__$1));
});
cljs_om.ui.__GT_t9496 = (function __GT_t9496(owner__$1,app__$1,count_view__$1,meta9497){return (new cljs_om.ui.t9496(owner__$1,app__$1,count_view__$1,meta9497));
});
}
return (new cljs_om.ui.t9496(owner,app,count_view,null));
});
cljs_om.ui.tweets_by_order = (function tweets_by_order(order){return (function (app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,order.call(null,app))));
});
});
cljs_om.ui.tweets_by_id = (function tweets_by_id(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,m).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-id","by-id",1108060611).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.find_tweets = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"by-id","by-id",1108060611),cljs_om.ui.tweets_by_id,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),cljs_om.ui.tweets_by_order.call(null,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425)),new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs_om.ui.tweets_by_order.call(null,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677)),new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs_om.ui.tweets_by_order.call(null,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683)),new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),cljs_om.ui.tweets_by_order.call(null,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183))], null);
cljs_om.ui.sort_button_js = (function sort_button_js(app,key){return {"className": [cljs.core.str("btn "),cljs.core.str(((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"sorted","sorted",4412278319).cljs$core$IFn$_invoke$arity$1(app)))?"btn-primary":null))].join(''), "onClick": (function (e){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sorted","sorted",4412278319)], null),key);
})};
});
cljs_om.ui.sort_buttons_view = (function sort_buttons_view(app,owner){if(typeof cljs_om.ui.t9502 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t9502 = (function (owner,app,sort_buttons_view,meta9503){
this.owner = owner;
this.app = app;
this.sort_buttons_view = sort_buttons_view;
this.meta9503 = meta9503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t9502.cljs$lang$type = true;
cljs_om.ui.t9502.cljs$lang$ctorStr = "cljs-om.ui/t9502";
cljs_om.ui.t9502.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs-om.ui/t9502");
});
cljs_om.ui.t9502.prototype.om$core$IRender$ = true;
cljs_om.ui.t9502.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "btn-group"},React.DOM.button({"className": "btn"},"Sort by"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-id","by-id",1108060611)),"latest"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425)),"followers"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677)),"retweets"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183)),"retweets2"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683)),"favorites"));
});
cljs_om.ui.t9502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9504){var self__ = this;
var _9504__$1 = this;return self__.meta9503;
});
cljs_om.ui.t9502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9504,meta9503__$1){var self__ = this;
var _9504__$1 = this;return (new cljs_om.ui.t9502(self__.owner,self__.app,self__.sort_buttons_view,meta9503__$1));
});
cljs_om.ui.__GT_t9502 = (function __GT_t9502(owner__$1,app__$1,sort_buttons_view__$1,meta9503){return (new cljs_om.ui.t9502(owner__$1,app__$1,sort_buttons_view__$1,meta9503));
});
}
return (new cljs_om.ui.t9502(owner,app,sort_buttons_view,null));
});
cljs_om.ui.handle_change = (function handle_change(e,owner,p__9505){var map__9507 = p__9505;var map__9507__$1 = ((cljs.core.seq_QMARK_.call(null,map__9507))?cljs.core.apply.call(null,cljs.core.hash_map,map__9507):map__9507);var text = cljs.core.get.call(null,map__9507__$1,new cljs.core.Keyword(null,"text","text",1017460895));return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),e.target.value);
});
cljs_om.ui.trigger_search = (function trigger_search(owner){cljs_om.core.start_search.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895)));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),"");
});
cljs_om.ui.search_view = (function search_view(app,owner){if(typeof cljs_om.ui.t9513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t9513 = (function (owner,app,search_view,meta9514){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta9514 = meta9514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t9513.cljs$lang$type = true;
cljs_om.ui.t9513.cljs$lang$ctorStr = "cljs-om.ui/t9513";
cljs_om.ui.t9513.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs-om.ui/t9513");
});
cljs_om.ui.t9513.prototype.om$core$IRender$ = true;
cljs_om.ui.t9513.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "input-group"},om.dom.input.call(null,{"onChange": ((function (this$__$1){
return (function (p1__9509_SHARP_){return cljs_om.ui.handle_change.call(null,p1__9509_SHARP_,self__.owner);
});})(this$__$1))
, "onKeyPress": ((function (this$__$1){
return (function (p1__9508_SHARP_){if((p1__9508_SHARP_.keyCode === 13))
{return cljs_om.ui.trigger_search.call(null,self__.owner);
} else
{return null;
}
});})(this$__$1))
, "placeholder": "Example search: java (job OR jobs OR hiring)", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",1017460895)), "ref": "new-contact", "type": "text", "className": "form-control"}),React.DOM.span({"className": "input-group-btn"},React.DOM.button({"onClick": ((function (this$__$1){
return (function (){return cljs_om.ui.trigger_search.call(null,self__.owner);
});})(this$__$1))
, "className": "btn btn-primary"},React.DOM.span({"className": "glyphicon glyphicon-search"}))));
});
cljs_om.ui.t9513.prototype.om$core$IInitState$ = true;
cljs_om.ui.t9513.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),""], null);
});
cljs_om.ui.t9513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9515){var self__ = this;
var _9515__$1 = this;return self__.meta9514;
});
cljs_om.ui.t9513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9515,meta9514__$1){var self__ = this;
var _9515__$1 = this;return (new cljs_om.ui.t9513(self__.owner,self__.app,self__.search_view,meta9514__$1));
});
cljs_om.ui.__GT_t9513 = (function __GT_t9513(owner__$1,app__$1,search_view__$1,meta9514){return (new cljs_om.ui.t9513(owner__$1,app__$1,search_view__$1,meta9514));
});
}
return (new cljs_om.ui.t9513(owner,app,search_view,null));
});
cljs_om.ui.tweet_view = (function tweet_view(tweet,owner){if(typeof cljs_om.ui.t9519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t9519 = (function (owner,tweet,tweet_view,meta9520){
this.owner = owner;
this.tweet = tweet;
this.tweet_view = tweet_view;
this.meta9520 = meta9520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t9519.cljs$lang$type = true;
cljs_om.ui.t9519.cljs$lang$ctorStr = "cljs-om.ui/t9519";
cljs_om.ui.t9519.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs-om.ui/t9519");
});
cljs_om.ui.t9519.prototype.om$core$IRender$ = true;
cljs_om.ui.t9519.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var user = new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(self__.tweet);var screen_name = new cljs.core.Keyword(null,"screen_name","screen_name",970639856).cljs$core$IFn$_invoke$arity$1(user);var href = [cljs.core.str("http://www.twitter.com/"),cljs.core.str(screen_name)].join('');return React.DOM.div({"className": "tweet"},React.DOM.span(null,React.DOM.a({"target": "_blank", "href": href},React.DOM.img({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "thumbnail"}))),React.DOM.a({"target": "_blank", "href": href},React.DOM.span({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "username"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(user))),React.DOM.span({"className": "username_screen"},[cljs.core.str(" @"),cljs.core.str(screen_name)].join('')),React.DOM.div({"className": "pull-right timeInterval"},cljs_om.util.from_now.call(null,new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(self__.tweet))),React.DOM.div({"className": "tweettext"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"html-text","html-text",3410453889).cljs$core$IFn$_invoke$arity$1(self__.tweet)}}),React.DOM.div({"className": "pull-left timeInterval"},[cljs.core.str(cljs_om.util.number_format.call(null,new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(user))),cljs.core.str(" followers")].join('')),React.DOM.div({"className": "pull-right timeInterval"},[cljs.core.str(cljs_om.util.rt_count_since_startup.call(null,self__.tweet)),cljs.core.str(cljs_om.util.rt_count.call(null,self__.tweet)),cljs.core.str(cljs_om.util.fav_count.call(null,self__.tweet))].join(''))));
});
cljs_om.ui.t9519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9521){var self__ = this;
var _9521__$1 = this;return self__.meta9520;
});
cljs_om.ui.t9519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9521,meta9520__$1){var self__ = this;
var _9521__$1 = this;return (new cljs_om.ui.t9519(self__.owner,self__.tweet,self__.tweet_view,meta9520__$1));
});
cljs_om.ui.__GT_t9519 = (function __GT_t9519(owner__$1,tweet__$1,tweet_view__$1,meta9520){return (new cljs_om.ui.t9519(owner__$1,tweet__$1,tweet_view__$1,meta9520));
});
}
return (new cljs_om.ui.t9519(owner,tweet,tweet_view,null));
});
cljs_om.ui.tweets_view = (function tweets_view(app,owner){if(typeof cljs_om.ui.t9525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t9525 = (function (owner,app,tweets_view,meta9526){
this.owner = owner;
this.app = app;
this.tweets_view = tweets_view;
this.meta9526 = meta9526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t9525.cljs$lang$type = true;
cljs_om.ui.t9525.cljs$lang$ctorStr = "cljs-om.ui/t9525";
cljs_om.ui.t9525.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs-om.ui/t9525");
});
cljs_om.ui.t9525.prototype.om$core$IRender$ = true;
cljs_om.ui.t9525.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,cljs_om.ui.tweet_view,new cljs.core.Keyword(null,"sorted","sorted",4412278319).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,cljs_om.ui.find_tweets).call(null,self__.app,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});
cljs_om.ui.t9525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9527){var self__ = this;
var _9527__$1 = this;return self__.meta9526;
});
cljs_om.ui.t9525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9527,meta9526__$1){var self__ = this;
var _9527__$1 = this;return (new cljs_om.ui.t9525(self__.owner,self__.app,self__.tweets_view,meta9526__$1));
});
cljs_om.ui.__GT_t9525 = (function __GT_t9525(owner__$1,app__$1,tweets_view__$1,meta9526){return (new cljs_om.ui.t9525(owner__$1,app__$1,tweets_view__$1,meta9526));
});
}
return (new cljs_om.ui.t9525(owner,app,tweets_view,null));
});

//# sourceMappingURL=ui.js.map