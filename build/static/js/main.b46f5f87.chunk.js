(this["webpackJsonpdaniel-hott"]=this["webpackJsonpdaniel-hott"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(11),c=n.n(a),o=(n(19),n(2)),s=n(3),l=n(5),u=n(4),d=(n(20),n(1)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:"Daniel Hott"}),Object(d.jsx)("h3",{children:"Desenvolvedor Front-End"}),Object(d.jsx)("img",{src:"https://reactjs.org/logo-og.png",alt:"react",id:"img-react"}),Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",alt:"Js",id:"img-js"})]})})}}]),n}(r.a.Component),b=h,j=n(6),m=n.p+"static/media/danielHott.a37e2c36.png",p=n(10),v=n.n(p),O=n(14),f=n(12),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={category:"",question:"",correct:"",incorrectAnswers:[],time:30,isDisabled:!1,assertions:0,questionNumber:0,isButtonVisible:!1},e.fetchApi=e.fetchApi.bind(Object(j.a)(e)),e.changeColor=e.changeColor.bind(Object(j.a)(e)),e.timer=e.timer.bind(Object(j.a)(e)),e.score=e.score.bind(Object(j.a)(e)),e.next=e.next.bind(Object(j.a)(e)),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchApi(),this.timer()}},{key:"fetchApi",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n,i,r,a,c,o,s,l,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){return e.token}));case 2:return t=e.sent,n=this.state.questionNumber,e.next=6,fetch("https://opentdb.com/api.php?amount=5&token=".concat(t));case 6:return i=e.sent,e.next=9,i.json();case 9:r=e.sent,a=r.results[n].correct_answer,(c=r.results[n].incorrect_answers).push(a),c.sort(),o=r.results[n],s=o.category,l=o.question,u=o.difficulty,this.setState({category:s,question:l,correct:a,difficulty:u,incorrectAnswers:Object(O.a)(c),renderGame:!1});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeColor",value:function(){var e=document.querySelectorAll(".wrong"),t=document.querySelector(".correct");e.forEach((function(e){e.style.border="1px solid rgb(255, 0, 0)"})),t.style.border="2px solid rgb(6, 240, 15)",this.setState({isButtonVisible:!0})}},{key:"timer",value:function(){var e=this;0!==this.state.time&&setInterval((function(){e.setState((function(e){if(e.time>0)return{time:e.time-1}}))}),1e3)}},{key:"score",value:function(){var e=this.state.assertions+1;this.setState({assertions:e})}},{key:"next",value:function(){var e=this.state,t=e.questionNumber,n=e.assertions;if(t<4){var i=t+1;this.setState({questionNumber:i,isButtonVisible:!1,time:30,renderGame:!0}),this.fetchApi()}else if(4===t)return alert("Sua pontua\xe7\xe3o foi:".concat(n))}},{key:"render",value:function(){var e=this,t=this.state,n=t.incorrectAnswers,i=t.correct,r=t.question,a=t.category,c=t.time,o=t.isDisabled,s=t.isButtonVisible,l=function(e){return{__html:e}};return n.length>0?Object(d.jsx)("div",{children:Object(d.jsxs)("section",{id:"game",children:[Object(d.jsxs)("h4",{"data-testid":"question-category",children:[a,": "]}),Object(d.jsx)("h4",{"data-testid":"question-text",dangerouslySetInnerHTML:l(r)}),n.map((function(t,n){return function(){return t===i?Object(d.jsx)("button",{type:"button",disabled:o,id:"correct-answer",onClick:function(){e.changeColor(),e.score()},className:"correct",dangerouslySetInnerHTML:l(i)},i):t!==i?Object(d.jsx)("button",{type:"button",disabled:o,"data-testid":"wrong-answer-".concat(n),onClick:e.changeColor,className:"wrong",dangerouslySetInnerHTML:l(t)},t):void 0}})),s&&Object(d.jsx)("button",{"data-testid":"btn-next",type:"button",onClick:this.next,children:"Pr\xf3xima"}),c]})}):Object(d.jsx)("p",{id:"load",children:"Loading"})}}]),n}(r.a.Component),x=g,y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={isPlaying:!1},e.willPlay=e.willPlay.bind(Object(j.a)(e)),e}return Object(s.a)(n,[{key:"willPlay",value:function(){this.setState({isPlaying:!0})}},{key:"render",value:function(){var e=this.state.isPlaying;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{id:"main",children:[Object(d.jsx)("section",{children:Object(d.jsx)("img",{src:m,alt:"react",id:"img-daniel"})}),Object(d.jsxs)("section",{id:"main-text",children:[Object(d.jsx)("h3",{id:"about-me",children:"Sobre mim: "}),Object(d.jsx)("p",{children:"Ol\xe1! Me chamo Daniel, tenho 22 anos, moro no Brasil na cidade de Volta Redonda/RJ. Sou apaixonado por m\xfasica, esportes e tecnologia. Espere de mim muita dedica\xe7\xe3o, empatia e bom humor. Sempre pronto para aprender e desenvolver um bom trabalho. Fique a vontade para conhecer meus reposit\xf3rios com as tecnologias que venho testando e aprendendo a cada dia! Todos os reposit\xf3rios possuem um site no Readme para que conhe\xe7a meu trabalho."}),Object(d.jsx)("h3",{children:"Minha trajet\xf3ria na programa\xe7\xe3o:"}),Object(d.jsx)("p",{children:"Apaixonado por programa\xe7\xe3o, tive meu primeiro contato programando servers de jogos em 2012. Iniciei Licenciatura em F\xedsica em 2017 e nesse per\xedodo tive mais certeza de que gostaria de trabalhar com Desenvolvimento Web. E ent\xe3o iniciei o curso de Desenvolvimento Web Full-Stack na Trybe."}),Object(d.jsx)("h3",{children:"Minhas redes sociais:"}),Object(d.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/in/danielhott",children:Object(d.jsx)("svg",{width:"3em",height:"3em",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",fill:"currentColor"})})}),Object(d.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/DanielHott",children:Object(d.jsx)("svg",{width:"3em",height:"3em",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",fill:"currentColor"})})}),Object(d.jsxs)("h4",{children:["Acabou de ler a p\xe1gina e quer jogar Trivia? Clique em ",Object(d.jsx)("button",{onClick:this.willPlay,children:"Jogar"})]})]})]}),e&&Object(d.jsx)(x,{})]})}}]),n}(r.a.Component),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("footer",{id:"footer_text",children:Object(d.jsx)("p",{children:"Hard Skills: Domino componentes React, estado global com Redux, requisi\xe7\xf5es API, bibliotecas e Javascript Vanilla. "})})}}]),n}(r.a.Component),w=k,q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(y,{}),Object(d.jsx)(w,{})]})}}]),n}(r.a.Component),C=q,S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))},_=n(13);c.a.render(Object(d.jsx)(_.a,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),S()}},[[23,1,2]]]);
//# sourceMappingURL=main.b46f5f87.chunk.js.map