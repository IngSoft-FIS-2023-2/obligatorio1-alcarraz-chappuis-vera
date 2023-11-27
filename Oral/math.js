const Math={};
function add(x1,x2){
    return x1+x2;
}

function subs(x1,x2){
    return x2-x1;
}

function mult(x1,x2){
    return x1*x2;
}

function div(x1,x2){
    if(x2==0){
        console.log("No se puede hacer")
    }else{
        return x1/x2;
    }
    
}


function hola (name){console.log("Hola ",name);}
/*
exports.sumar=add;
exports.restar=subs;
exports.mult=mult;
exports.div=div;*/

Math.sumar=add;
Math.restar=subs;
Math.mult=mult;
Math.div=div;
Math.hola=hola;
module.exports=Math;