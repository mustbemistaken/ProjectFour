var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{checkForName:()=>n,handleSubmit:()=>o});const n=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("Error",e)}};async function o(e){e.preventDefault();let t=document.getElementById("name").value;if(console.log(t),/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(t)){const e=await n("/readForm",{formtext:t});document.getElementById("results").innerHTML=`URL entered was: ${e.sentence_list[0].text} <br>Text is: ${e.subjectivity} <br> Completed with a confidence score of ${e.confidence}`,document.getElementById("results").style.border="2px solid black "}else alert("invalid URL")}Client=t})();