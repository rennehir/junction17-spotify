webpackJsonp([1],{0:function(t,e){},NHnr:function(t,e,a){"use strict";function s(t){a("hSb/")}function n(t){a("WTF7")}function r(t){a("l6oB")}function o(t){a("YiIa")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),c={name:"app"},l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 col-lg-4",attrs:{id:"left"}},[a("router-link",{attrs:{id:"home",to:"/"}},[t._v("Home")])],1),t._v(" "),t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 col-lg-4",attrs:{id:"right"}},[a("router-link",{attrs:{id:"dj",to:"/dj"}},[t._v("DJ")])],1),t._v(" "),a("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 col-lg-4",attrs:{id:""}},[a("router-link",{attrs:{id:"playlist",to:"/playlist"}},[t._v("Playlist")])],1)]),t._v(" "),a("router-view")],1)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},[a("img",{attrs:{id:"logo",src:"src/assets/logo-spotify.png"}})])}],m={render:l,staticRenderFns:u},d=m,v=a("VU/8"),_=s,p=v(c,d,!1,_,null,null),f=p.exports,h=a("/ocq"),g=a("mtWM"),b=a.n(g),y=a("Sazm"),S=a.n(y),k={API_KEY:"AIzaSyAJ3Xjh_ieIKqeEvP7nEXxtJy7-RiDrz_Q",AUTH_DOMAIN:"junction17-spotify-user.firebaseapp.com",DB_URL:"https://junction17-spotify-user.firebaseio.com",PROJECT_ID:"junction17-spotify-user",STORAGE_BUCKET:"junction17-spotify-user.appspot.com",MSG_SENDER_ID:"9333696788"},C={apiKey:k.API_KEY,authDomain:k.AUTH_DOMAIN,databaseURL:k.DB_URL,projectId:k.PROJECT_ID,storageBucket:k.STORAGE_BUCKET,messagingSenderId:k.MSG_SENDER_ID};S.a.initializeApp(C);var E={database:S.a.database()},P=a("vQJi"),R=a.n(P),q={name:"Request",data:function(){return{msg:"Add your music to party list! WOOPWOOP!",searchTerm:"",songs:[]}},methods:{search:function(){var t=[];b.a.get("https://junction17-spotify-proxy.herokuapp.com/api/search?q="+this.searchTerm+"&type=track").then(function(e){for(var a=e.data.tracks.items,s=0;s<a.length;s++)t.push(a[s])}).catch(function(t){console.log(t)}),this.songs=t},samba:function(){this.searchTerm="";var t=[];b.a.get("https://junction17-spotify-proxy.herokuapp.com/api/search?q=samba%20de%20janeiro&type=track").then(function(e){for(var a=e.data.tracks.items,s=0;s<a.length;s++)t.push(a[s])}).catch(function(t){console.log(t)}),this.songs=t},requestSong:function(t){E.database.ref("requested").push(t),R.a.success("Well done! You have successfully requested a song. Keep up the good samba! ;-)")}}},A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("form",{attrs:{id:"search"},on:{submit:function(e){e.preventDefault(),t.search(e)}}},[a("label",{attrs:{for:"search"}},[t._v("Search by song name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{title:"search",type:"text"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._v(" "),a("input",{staticClass:"btn btn-secodary",attrs:{type:"submit",value:"Search"}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:t.samba}},[t._v("Give me samba!")]),t._v(" "),a("div",{staticClass:"panel-body"},[a("table",{staticClass:"table table-dark"},[t._m(0,!1,!1),t._v(" "),a("tbody",t._l(t.songs,function(e){return a("tr",[a("td",[t._v(t._s(e.artists[0].name))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[a("button",{attrs:{id:"request"},on:{click:function(a){t.requestSong(e)}}},[t._v("Request")])])])}))])])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Artist")]),t._v(" "),a("th",[t._v("Song name")]),t._v(" "),a("th")])])}],D={render:A,staticRenderFns:T},j=D,x=a("VU/8"),I=n,O=x(q,j,!1,I,"data-v-21c7abae",null),U=O.exports,w={name:"PlaylistManager",firebase:{songs:E.database.ref("requested")},data:function(){return{msg:"Manage your Party Playlist here!"}},methods:{confirmSong:function(t){R.a.info("Not yet implemented. You will hopefully hear the samba very soon! :)")},declineSong:function(t){E.database.ref("requested").child(t[".key"]).remove(),R.a.warning("Song successfully removed from requests")}}},M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playlist-manager"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("button",[t._v("Give me samba!")]),t._v(" "),a("div",{staticClass:"panel-body"},[a("table",{staticClass:"table table-striped"},[t._m(0,!1,!1),t._v(" "),a("tbody",t._l(t.songs,function(e){return a("tr",[a("td",[t._v(t._s(e.artists[0].name))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[a("button",{on:{click:function(a){t.confirmSong(e)}}},[t._v("Confirm")])]),t._v(" "),a("td",[a("button",{on:{click:function(a){t.declineSong(e)}}},[t._v("Decline")])])])}))])])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Artist")]),t._v(" "),a("th",[t._v("Song name")]),t._v(" "),a("th"),t._v(" "),a("th")])])}],N={render:M,staticRenderFns:J},$=N,B=a("VU/8"),F=r,K=B(w,$,!1,F,"data-v-f78901a4",null),W=K.exports,Y={name:"Playlist",data:function(){return{msg:"Your Party Playlist is here!",songs:[]}},created:function(){var t=[];b.a.get("https://junction17-spotify-proxy.herokuapp.com/api/users/mi_ba/playlists/7Em91nUmHmjFAePCZ1wwJu/tracks").then(function(e){for(var a=e.data.items,s=0;s<a.length;s++)t.push(a[s])}).catch(function(t){console.log(t)}),this.songs=t}},G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playlist"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("div",{staticClass:"panel-body"},[a("table",{staticClass:"table table-dark"},[t._m(0,!1,!1),t._v(" "),a("tbody",t._l(t.songs,function(e){return a("tr",[a("td",[t._v(t._s(e.track.artists[0].name))]),t._v(" "),a("td",[t._v(t._s(e.track.name))]),t._v(" "),a("td",[a("button",{attrs:{id:"dec"},on:{click:function(a){t.removeSong(e)}}},[t._v("Remove")])])])}))])])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Artist")]),t._v(" "),a("th",[t._v("Song name")]),t._v(" "),a("th")])])}],z={render:G,staticRenderFns:H},V=z,L=a("VU/8"),Q=o,X=L(Y,V,!1,Q,"data-v-02f8c304",null),Z=X.exports;i.a.use(h.a);var tt=new h.a({mode:"history",routes:[{path:"/",name:"Request",component:U},{path:"/dj",name:"PlaylistManager",component:W},{path:"/playlist",name:"Playlist",component:Z}]}),et=a("1mcD"),at=a.n(et),st=a("ORbq");i.a.use(at.a),i.a.use(st.a),i.a.config.productionTip=!1,new i.a({el:"#app",firebase:{requested:E.database.ref("requested")},router:tt,template:"<App/>",components:{App:f}})},WTF7:function(t,e){},YiIa:function(t,e){},"hSb/":function(t,e){},l6oB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9923eda2db602d1ece66.js.map