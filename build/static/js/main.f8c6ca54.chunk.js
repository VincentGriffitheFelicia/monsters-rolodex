(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),s=(t(12),t(3)),i=t(4),l=t(5),m=t(6),u=(t(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"Monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set3&size=180x180")}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),h=(t(14),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(u,{key:e.id,monster:e})})))}),d=(t(15),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=(t(16),function(e){Object(m.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[{id:1,name:"Miya"},{id:2,name:"Layla"},{id:3,name:"Bruno"},{id:4,name:"Moskov"},{id:5,name:"Clint"}],searchField:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"App",style:{marginBottom:20}},r.a.createElement("h1",null,"MONSTERS ROLODEX"),r.a.createElement(d,{placeholder:"Search monsters",handleChange:this.handleChange}),r.a.createElement(h,{monsters:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f8c6ca54.chunk.js.map