function isvalidcolor(value){
   const s = new Option().style;
   s.color=value;
   return s.color !=="";
}
function changebg(){
const bgcolor = document.getElementById("colorName").value;
switch(1){
case 1:    
  if(bgcolor==""){
   alert("Enter  the color");
   break;
  } 
case 2:
   if(!isvalidcolor(bgcolor)){
      alert(bgcolor+" is not color , enter vaild color");
    break;
   }
case 3:{
  document.body.style.backgroundColor=bgcolor;
}
}
}