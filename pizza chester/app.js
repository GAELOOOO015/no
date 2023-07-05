var tam=document.querySelector("#tamaño");
let cant=document.querySelector("#cantidad");
var refresco=document.querySelector("#refresco");
var papas=document.querySelector("#papas");
var alitas=document.querySelector("#alitas");
var valor=document.querySelector("#valor");
var res=document.querySelector("#res");

tam.onchangue=()=>{calcular()}
cant.onchangue=()=>{calcular()}
refresco.onchangue=()=>{calcular()}
papas.onchangue=()=>{calcular()}
alitas.onchangue=()=>{calcular()}

const calcular=()=>{ n=parseInt(cant.value);
    valor.innerHTML=cant.value;
    let costoPizza=0; let total=0; let extras=0;
    switch(tam.value){
        case "individual":costo=100;break;
        case "grande":costo=120;break;
        case "familiar":costo=150;break;
        case "jumbo":costo=180;break;

    }
    if(refresco.checked){
        extras+=40;
    }
    if(papas.checked){
        extras+=50;
    }
    if(alitas.checked){
        extras+=75;
    }
 total=(costoPizza*n)+extras;
 res.innerHTML=total.toFixed(2);
}