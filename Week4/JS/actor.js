/*console.log("HELLO! I AM JAVASCRIPT");*/
var Myarray=["Erick", "justin", "koJho", "Boerk",  "James", "manhuJ", "Yaakov", "jonas", "Obedi"];
var i=0;
while(i<Myarray.length){

    if(Myarray[i].charAt(0)===("J")||Myarray[i].charAt(0)===("j")){
    console.log("Goodbye "+Myarray[i]+" !"); 
    i++;
}
else if(Myarray[i].charAt(0)!==("J") || Myarray[i].charAt(0)!== ("j")){
console.log("Hello "+Myarray[i]+" !");

i++;
}
}
console.log("------------------------------------");
