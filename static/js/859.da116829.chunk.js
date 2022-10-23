"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[859],{634:function(n,e,t){t.d(e,{Z:function(){return P}});t(791);var r,o,i,a,c,u,s,d,l=t(168),p=t(731),h=t(444),f=t(978),m=(0,h.ZP)(f.JNb)(r||(r=(0,l.Z)(["\n  margin-right: ","px; ;\n"])),(function(n){return n.theme.space[2]})),x=h.ZP.div(o||(o=(0,l.Z)(["\n  max-width: 1300px;\n\n  margin-left: auto;\n  margin-right: auto;\n"]))),g=h.ZP.ul(i||(i=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: ","px;\n"])),(function(n){return n.theme.space[4]})),b=(0,h.ZP)(p.OL)(a||(a=(0,l.Z)(["\n  position: relative;\n  display: block;\n  height: 100%;\n  border-radius: ",";\n  overflow: hidden;\n  background-color: ",";\n  color: ",";\n  box-shadow: 5px 5px 5px ",";\n  transition: all 0.25s;\n  &:hover {\n    z-index: 2;\n    transform: scale(1.05);\n    box-shadow: 5px 5px 5px ",";\n  }\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.secondaryBackGroundColor}),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.backGroundColor}),(function(n){return n.theme.colors.backGroundColor})),v=h.ZP.img(c||(c=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),Z=h.ZP.div(u||(u=(0,l.Z)(["\n  display: block;\n  height: 350px;\n"]))),j=h.ZP.div(s||(s=(0,l.Z)(["\n  padding: ","px;\n"])),(function(n){return n.theme.space[4]})),y=h.ZP.span(d||(d=(0,l.Z)(["\n  display: flex;\n\n  position: absolute;\n  top: 1%;\n  right: 2%;\n  padding: ","px;\n  font-weight: 500;\n  box-shadow: 5px 5px 5px ",";\n  background-color: ",";\n  border-radius: ",";\n\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.backGroundColor}),(function(n){var e=n.movieRating;return e>6?"#55ff00":e>=4&&e<=6?"#ffcb2f":"#f00"}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.backGroundColor})),k=t(739),w=t(184),P=function(n){var e=n.movies,t=(0,k.TH)();return(0,w.jsx)(x,{children:(0,w.jsx)(g,{children:e.map((function(n){var e=n.id,r=n.poster,o=n.title,i=n.vote_average;return(0,w.jsx)("li",{children:(0,w.jsxs)(b,{to:"/movies/".concat(e),state:{from:t},children:[(0,w.jsx)(Z,{children:(0,w.jsx)(v,{src:r,alt:o})}),(0,w.jsxs)(j,{children:[(0,w.jsx)("h1",{children:o}),(0,w.jsxs)(y,{movieRating:Math.round(i),children:[(0,w.jsx)(m,{size:22})," ",Math.round(i)]})]})]})},e)}))})})}},419:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,o,i,a,c,u=t(885),s=t(791),d=t(165),l=t(861),p=t(257),h=t(168),f=t(444),m=t.p+"static/media/bg.45e2575d16d4ef8a92ad.jpg",x=(f.ZP.img(r||(r=(0,h.Z)(["\n  max-width: 200px;\n"]))),f.ZP.div(o||(o=(0,h.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  height: 322px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(\n      to right,\n      rgba(47, 48, 58, 0.4),\n      rgba(47, 48, 58, 0.4)\n    ),\n    url(",");\n  content: '';\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: ",";\n"])),m,(function(n){return n.theme.radii.normal}))),g=f.ZP.form(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),b=f.ZP.input(a||(a=(0,h.Z)(["\n  height: 36px;\n  width: 280px;\n  border: none;\n\n  border-top-left-radius: ","px;\n  border-bottom-left-radius: ",";\n  padding: ",";\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[4]})),v=f.ZP.button(c||(c=(0,h.Z)(["\n  height: 36px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  padding: ","px;\n\n  background-color: ",";\n  border: none;\n  border-radius: 0 4px 4px 0;\n  cursor: pointer;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.primaryText})),Z=t(373),j=t(731),y=t(184);var k=function(n){var e,t=n.setSearchMovies,r=(0,j.lr)(),o=(0,u.Z)(r,2),i=o[0],a=o[1],c=null!==(e=i.get("query"))&&void 0!==e?e:"";return(0,s.useEffect)((function(){if(c)try{!function(){n.apply(this,arguments)}()}catch(e){console.log(e,"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")}function n(){return(n=(0,l.Z)((0,d.Z)().mark((function n(){var e,r,o;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.bI)(c);case 2:e=n.sent,r=e.data.results,o=r.map((function(n){return{id:n.id,title:n.title,poster:"https://image.tmdb.org/t/p/w500"+n.poster_path,vote_average:n.vote_average}})),t(o);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}),[c,t]),(0,y.jsx)(x,{children:(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.searchQuery.value;a({query:t}),e.reset()},children:[(0,y.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,name:"searchQuery",placeholder:"Search movies"}),(0,y.jsx)(v,{type:"submit",children:(0,y.jsx)(Z.FKI,{size:18,fill:"#444444"})})]})})},w=t(634),P=function(){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{setSearchMovies:r}),t&&(0,y.jsx)(w.Z,{movies:t})]})}}}]);
//# sourceMappingURL=859.da116829.chunk.js.map