(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{2281:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ligging",function(){return n(9845)}])},139:function(e,i,n){"use strict";n.d(i,{Z:function(){return o}});var t=n(5893),s=n(7294),l=n(3997),r=n(9008),a=n.n(r);n(581);class o extends s.Component{render(){let{children:e,activePath:i="home",title:n="Welkom",description:s="Kevin Bal is een kinesitherapeut met een praktijk in Kontich (Reepkenslei). Zijn specialisaties zijn manuele kinesitherapie en orthopedische revalidatie."}=this.props;return(0,t.jsxs)("div",{children:[(0,t.jsxs)(a(),{children:[(0,t.jsxs)("title",{children:[n," | Kevin Bal Kinesitherapeut Kontich"]}),(0,t.jsx)("meta",{name:"description",content:s}),(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,t.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:(0,l.tU)("/static/favicon.ico")})]}),(0,t.jsx)("header",{className:"border-t-8 border-kevin-green",children:(0,t.jsxs)("nav",{className:"pt-8 flex flex-wrap justify-center",children:[(0,t.jsx)("h1",{className:"hidden",children:"Kevin Bal Kinesitherapie"}),(0,t.jsx)("div",{className:"w-full flex justify-center",children:(0,t.jsx)("img",{src:(0,l.tU)("/static/img/full_logo.svg"),className:"h-32 md:h-48",alt:"Kevin Bal Kinesitherapie"})}),(0,t.jsxs)("div",{className:"w-5/6 flex justify-center pt-8 flex-wrap text-xl",children:[(0,t.jsx)(l.rU,{href:"/",children:(0,t.jsx)("a",{title:"Home",className:("home"==i?"underline ":"no-underline ")+"block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12",children:"Home"})}),(0,t.jsx)(l.rU,{href:"/over-kevin/",children:(0,t.jsx)("a",{title:"Over Kevin",className:("over-kevin"==i?"underline ":"no-underline ")+"block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12",children:"Over Kevin"})}),(0,t.jsx)(l.rU,{href:"/visie/",children:(0,t.jsx)("a",{title:"visie",className:("visie"==i?"underline ":"no-underline ")+"block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12",children:"Visie"})}),(0,t.jsx)(l.rU,{href:"/ligging/",children:(0,t.jsx)("a",{title:"ligging",className:("ligging"==i?"underline ":"no-underline ")+"block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12",children:"Ligging"})}),(0,t.jsx)(l.rU,{href:"/contact/",children:(0,t.jsx)("a",{title:"contact",className:("contact"==i?"underline ":"no-underline ")+"block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4",children:"Contact"})})]})]})}),(0,t.jsx)("div",{className:"flex-1",children:e}),(0,t.jsx)("footer",{className:"font-sans bg-grey-lighter text-white py-5 px-4 pin-b",children:(0,t.jsxs)("div",{className:"mx-auto max-w-xl overflow-hidden flex justify-between items-center",children:[(0,t.jsxs)("ul",{className:"text-sm text-grey-dark list-reset flex items-center",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/",className:"block mr-4",children:(0,t.jsx)("img",{src:(0,l.tU)("/static/img/logo.svg"),className:"w-8",alt:"logo"})})}),(0,t.jsx)("li",{children:"Reepkenslei 45 - 2550 Kontich - 0468 47 31 90"})]}),(0,t.jsxs)("p",{className:"inline-block py-2 px-3 text-grey-darker text-xs",children:[" ","\xa92019 Kevin Bal Kinesitherapie."]})]})})]})}}},9845:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return x}});var t=n(5893),s=n(7294),l=n(139),r=n(5642);let a={width:"100%",height:"100%"};class o extends s.Component{render(){return(0,t.jsxs)(r.Map,{google:this.props.google,zoom:16,style:a,initialCenter:{lat:51.120003,lng:4.444552},children:[(0,t.jsx)(r.Marker,{onClick:this.onMarkerClick,name:"Kevin Bal Kinesitherapie (Kontich)"}),(0,t.jsx)(r.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:(0,t.jsx)("div",{children:(0,t.jsx)("h4",{children:this.state.selectedPlace.name})})})]})}constructor(...e){super(...e),this.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},this.onMarkerClick=(e,i,n)=>this.setState({selectedPlace:e,activeMarker:i,showingInfoWindow:!0}),this.onClose=e=>{this.state.showingInfoWindow&&this.setState({showingInfoWindow:!1,activeMarker:null})}}}var c=(0,r.GoogleApiWrapper)({apiKey:"AIzaSyArBTpVYXljd8W6YUJJjMnvDpDBV9S468s"})(o),d=n(9008),m=n.n(d);let h={height:"450px"};var x=()=>(0,t.jsxs)(l.Z,{activePath:"ligging",title:"Ligging",description:"Kinesitherapeut Kevin Bal heeft zijn praktijk in Kontich (2550), Reepkenslei 45",children:[(0,t.jsx)(m(),{children:(0,t.jsx)("link",{rel:"canonical",href:"http://kinebal.be/ligging/"})}),(0,t.jsx)("section",{className:"container m-auto flex flex-col py-10 max-w-xl text-center px-6",children:(0,t.jsxs)("div",{className:"w-full flex flex-col justify-center items-start items-center",children:[(0,t.jsx)("label",{htmlFor:"tagline",className:"uppercase tracking-wide text-grey-dark font-bold",children:"Kontich"}),(0,t.jsx)("h1",{className:"my-4 font-normal",children:"Waar ligt de praktijk?"}),(0,t.jsx)("hr",{className:"border-b w-8 m-auto my-6"}),(0,t.jsx)("p",{className:"text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto",children:"De praktijk is gelegen in het midden van de zeer rustige Reepkenslei. Zowel met de wagen, met de fiets als met het openbaar vervoer is de praktijk zeer vlot bereikbaar. Er is ruime parkeergelegenheid in de straat."}),(0,t.jsx)("p",{className:"text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto",children:"Het openbaar vervoer heeft een bushalte in de straat (bus 91 – 92 - 191). Meer info hieromtrent vindt u op www.delijn.be/reisinfo. Uiteraard kan u ook te voet, met de fiets of met de bromfiets komen."})]})}),(0,t.jsx)("section",{className:"font-sans text-center py-12 px-4 lg:px-0 bg-kevin-green",children:(0,t.jsx)("div",{className:"container flex flex-col md:flex-row bg-white max-w-xl m-auto shadow-md",children:(0,t.jsx)("div",{style:h,className:"w-full max-w-xl relative overflow-hidden container max-w-xl m-auto",children:(0,t.jsx)(c,{})})})})]})}},function(e){e.O(0,[774,532,904,642,888,179],function(){return e(e.s=2281)}),_N_E=e.O()}]);