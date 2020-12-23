(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__dkCte",Loader:"ImageGallery_Loader__1EreS"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1l_Yc",Modal:"Modal_Modal__2B0PP"}},17:function(e,t,a){e.exports={Button:"Button_Button__1P92e"}},24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),o=a(5),s=a.n(o),i=(a(23),a(24),a(3)),u=a(4),l=a(7),m=a.n(l);var b=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(r.jsx)("header",{className:m.a.Searchbar,children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):u.b.error("Enter image query")},className:m.a.SearchForm,children:[Object(r.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(r.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:m.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){s(e.currentTarget.value.toLowerCase())}})]})})},j=a(6),h=a.n(j),g=a(15),d=a(11),p=a(16),f=a.n(p),O=a(13),y=a.n(O),S=a(9),I=a.n(S);var _=function(e){return e.images.map((function(e){return Object(r.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(r.jsx)("img",{id:e.id,src:e.webformatURL,srclarge:e.largeImageURL,alt:"",className:I.a.ImageGalleryItemImage})},e.id)}))};function x(){return(x=Object(d.a)(h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(t,"&page=").concat(a,"&per_page=12&key=3749534-832657ce2c7737c7c4ba585dd"));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v={fetchPixabayImages:function(e,t){return x.apply(this,arguments)}};var w=function(e){var t=e.query,a=e.isNewQuery,c=e.page,o=e.setLastPage,s=e.setVisibilityLoadMore,l=e.resetState,m=e.openImage,b=Object(n.useState)([]),j=Object(i.a)(b,2),p=j[0],O=j[1],S=Object(n.useState)(!1),x=Object(i.a)(S,2),w=x[0],L=x[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(h.a.mark((function e(){var r,n,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){r.hits.length||(u.b.error("\u0417\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0456\u043d\u0448\u0438\u0439 \u0437\u0430\u043f\u0438\u0442!"),l())},a&&O([]),L(!0),e.next=5,v.fetchPixabayImages(t,c);case 5:r=e.sent,O((function(e){return[].concat(Object(g.a)(e),Object(g.a)(r.hits))})),L(!1),i(),F(),n=Math.ceil(r.total/12),o(n),c<n&&s(!0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t,c]);var F=function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return p&&Object(r.jsxs)("div",{children:[Object(r.jsx)("ul",{onClick:function(e){m(e.target.closest(".".concat(I.a.ImageGalleryItem)).querySelector("img").getAttribute("srclarge"))},className:y.a.ImageGallery,children:Object(r.jsx)(_,{images:p,openImage:m})}),w&&Object(r.jsx)("div",{className:y.a.Loader,children:Object(r.jsx)(f.a,{type:"Circles",color:"#3f51b5",height:40,width:40})})]})},L=a(17),F=a.n(L);var k=function(e){var t=e.onClick;return Object(r.jsx)("button",{autoFocus:!0,onClick:t,type:"button",className:F.a.Button,children:"Load more"})},B=a(14),C=a.n(B);var G=function(e){var t=e.imageURL,a=e.closeImage;return window.addEventListener("keydown",a),Object(r.jsx)("div",{onClick:a,className:C.a.Overlay,children:Object(r.jsx)("div",{className:C.a.Modal,children:Object(r.jsx)("img",{src:t,alt:""})})})};var N=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),s=Object(i.a)(o,2),l=s[0],m=s[1],j=Object(n.useState)(0),h=Object(i.a)(j,2),g=h[0],d=h[1],p=Object(n.useState)(1),f=Object(i.a)(p,2),O=f[0],y=f[1],S=Object(n.useState)(!1),I=Object(i.a)(S,2),_=I[0],x=I[1],v=Object(n.useState)(""),L=Object(i.a)(v,2),F=L[0],B=L[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(b,{onSubmit:function(e){m(!0),c(e),d(1)}}),a&&Object(r.jsx)(w,{query:a,isNewQuery:l,page:g,setLastPage:y,setVisibilityLoadMore:x,resetState:function(){c(""),m(!0),d(0),y(1),x(!1),B("")},openImage:function(e){B(e)}}),_&&Object(r.jsx)(k,{onClick:function(){m(!1),d((function(e){return e+1})),g===O-1&&(x(!1),u.b.info("\u0417\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043d\u0456 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"))}}),F&&Object(r.jsx)(G,{imageURL:F,closeImage:function e(t){t.target!==t.currentTarget&&"Escape"!==t.code||(B(""),window.removeEventListener("keydown",e))}}),Object(r.jsx)(u.a,{autoClose:4e3})]})},P=(a(47),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))});s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),P()},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1bDOu",SearchForm:"Searchbar_SearchForm__2B87a",SearchFormButton:"Searchbar_SearchFormButton__3P7St",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__mBzmV",SearchFormInput:"Searchbar_SearchFormInput__347JP"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1e-w2",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3WF3u"}}},[[48,1,2]]]);
//# sourceMappingURL=main.5f786959.chunk.js.map