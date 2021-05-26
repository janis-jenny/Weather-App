(()=>{"use strict";var e={540:(e,t,n)=>{e.exports=n.p+"images/Error404.gif"},201:(e,t,n)=>{e.exports=n.p+"images/background.jpg"},183:(e,t,n)=>{e.exports=n.p+"images/clear_sky.gif"},11:(e,t,n)=>{e.exports=n.p+"images/clouds.gif"},933:(e,t,n)=>{e.exports=n.p+"images/mist.gif"},517:(e,t,n)=>{e.exports=n.p+"images/rain.gif"},412:(e,t,n)=>{e.exports=n.p+"images/snow.gif"},812:(e,t,n)=>{e.exports=n.p+"images/thunder.gif"}},t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.p="",(()=>{var e=n(540);class t{constructor(e){this.apiKey="25a7b4863d6268c053b2a605c77f8dac",this.city=e}static convertKtoC(e){return{temp:"".concat(Math.floor(e-273.15)," °"),type:"C"}}convertDataToObj(e){return{type:t.convertKtoC(e.main.temp).type,city:this.city,country:e.sys.country,temperature:t.convertKtoC(e.main.temp).temp,humidity:e.main.humidity,climate:e.weather[0]?e.weather[0].description:"",windSpeed:e.wind.speed,icon:e.weather[0].icon,weather:e.weather[0].main}}static showImgError(){document.getElementById("type").innerHTML="";const t=document.getElementById("content");t.innerHTML="";const n=document.createElement("img");n.src=e,t.append(n)}async getApiData(){try{const e=await fetch("".concat("https://api.openweathermap.org/data/2.5/weather?","q=").concat(this.city,"&appid=").concat(this.apiKey),{mode:"cors"}),t=await e.json();return this.convertDataToObj(t)}catch(e){return setTimeout(t.showImgError,0)}}}const r=t;class c{constructor(e){this.data=e,this.content=document.getElementById("content")}renderTemp(){this.content.innerHTML="";const e=document.createElement("h1");e.className="city-name";const t=document.createElement("p");e.innerHTML=this.data.city,t.innerHTML="Temp: ".concat(this.data.temperature),t.id="temp",t.className="temp-container",this.content.append(e),this.content.append(t)}static tempF(e){return"".concat(Math.round(1.8*Number(e)+32)," °")}static tempC(e){return"".concat(Math.round((Number(e)-32)*(5/9))," °")}static callTemps(e){const t=document.getElementById("temp"),n=t.innerHTML.split(" ")[1];return t.innerHTML="Temp: ".concat(e(n)),t}static convertToF(){return c.callTemps(c.tempF)}static convertToC(){return c.callTemps(c.tempC)}static checkDegrees(){"C"===this.innerHTML?(c.convertToF(),this.innerHTML="F"):(c.convertToC(),this.innerHTML="C")}renderDegrees(){const e=document.getElementById("type");e.className="d-flex";const t=document.createElement("button");t.id="degrees",t.innerHTML=this.data.type,t.addEventListener("click",c.checkDegrees),console.log("HERE!"),console.log(c.checkDegrees),e.innerHTML="",e.append(t)}renderHumidity(){const e=document.createElement("p");e.innerHTML="Humidity: ".concat(this.data.humidity),e.className="temp-container",this.content.append(e)}renderClimate(){const e=document.createElement("p");e.innerHTML="Climate: ".concat(this.data.climate),e.className="temp-container",this.content.append(e)}renderWind(){const e=document.createElement("p");e.innerHTML="WindSpeed: ".concat(this.data.windSpeed),e.className="temp-container",this.content.append(e)}renderCountry(){const e=document.createElement("p");e.innerHTML="Country: ".concat(this.data.country),e.className="temp-container",this.content.append(e)}}const a=c;var o=n(201),s=n(11),i=n(183),m=n(517),d=n(812),p=n(412),u=n(933);const l=e=>{const t=e.weather.toLowerCase();document.body.style.backgroundImage="url(".concat(o,")"),document.body.style.backgroundImage="url(".concat("rain"===t||"light rain"===t||"shower rain"===t?m:"scattered clouds"===t||"broken clouds"===t||"clouds"===t||"few clouds"===t?s:"clear sky"===t||"clear"===t?i:"thunderstorm"===t?d:"snow"===t?p:"mist"===t?u:o,")")};class h{constructor(){this.container=document.getElementById("container")}static renderData(e){const t=new a(e);t.renderDegrees(),t.renderTemp(),t.renderHumidity(),t.renderClimate(),t.renderWind(),t.renderCountry(),l(e)}static weather(e){new r(e.value).getApiData().then((e=>{h.renderData(e)}))}createForm(){const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("button");return this.container.classList.add("form-container","d-flex"),e.action="/home",e.id="from-city",t.type="text",t.name="city",t.placeholder="Type a city",n.className="submit-btn",n.innerHTML='<i class="fas fa-search"></i>',n.type="submit",e.append(t),e.append(n),this.container.append(e),e}submitForm(){const e=document.getElementById("from-city");e.addEventListener("submit",(t=>{t.preventDefault();const n=e.elements.city;h.weather(n),n.value=""}))}}const y=new h;y.createForm(),y.submitForm(),document.addEventListener("click",(e=>{"degrees"===e.target.id&&console.log("HERE")}))})()})();
//# sourceMappingURL=app.acc428c2faeaec484c83.js.map