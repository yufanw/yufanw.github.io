(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(14),a(1)),l=a(2),i=a(4),m=a(3),d=a(5),u=(a(16),a(18),a(6)),p=a.n(u),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={momentString:p()().format("dddd, MMM Do YYYYY, h:mm:ss a")},a.startTimer=function(){a.setState({momentString:p()().format("dddd, MMM Do YYYY, h:mm:ss a")}),setTimeout(a.startTimer,500)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.startTimer()}},{key:"render",value:function(){return r.a.createElement("div",{className:"date"},this.state.momentString)}}]),t}(n.Component),f=(a(21),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={on:a.props.on},a.onToggle=function(){a.setState(function(e){return{on:!e.on}},a.props.onToggle)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"switch-comp"},r.a.createElement("div",{className:"switch-wrapper"},r.a.createElement("label",{className:this.state.on?"switch":"switch off",htmlFor:"switch"},r.a.createElement("input",{type:"checkbox",name:"switch",id:"switch",onChange:this.onToggle,checked:this.state.on}),r.a.createElement("div",{className:this.state.on?"slider":"slider off"}))))}}]),t}(n.Component));f.defaultProps={on:!1};var v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onToggle,a=e.on;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"location"},"Irvine, CA"),r.a.createElement(h,null),r.a.createElement(f,{onToggle:t,on:a}))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={darkMode:!1},a.toggleDarkMode=function(){a.setState({darkMode:!a.state.darkMode})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.darkMode;return r.a.createElement("div",{className:e?"app dark":"app"},r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"title"},"YUFAN"),r.a.createElement("div",{className:"app-header"},r.a.createElement(v,{on:this.state.darkMode,onToggle:this.toggleDarkMode})),r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"articles"},r.a.createElement("div",{className:"image-box"},r.a.createElement("h4",null,"Image of the day"),r.a.createElement("img",{src:"https://source.unsplash.com/400x400/daily",className:"responsive-image",alt:"Daily unsplash"}),r.a.createElement("div",{className:"caption"},r.a.createElement("a",{href:"https://source.unsplash.com/"},"Image updated daily by ",r.a.createElement("span",{className:"link"},"unsplash"))))),r.a.createElement("div",{className:"social-media-box"},r.a.createElement("div",{className:"box"},r.a.createElement("h4",null,"Contact me:"),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/yufan-wang-web"},"LinkedIn")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/yufanw"},"Github"))))))),r.a.createElement("div",{className:"app-footer"},"Copyright 2018 Yufan Wang"))}}]),t}(n.Component);s.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.12d44961.chunk.js.map