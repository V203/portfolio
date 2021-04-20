var regNum1 = "";

function countAllPaarl(regNum1){	
  var rgNum = regNum1.split(", ");

  var temp =[];
  
 for(var i = 0;i < rgNum.length;i++){
     if(rgNum[i].startsWith("CJ")){
     temp.push(rgNum[i]);
     
         }
     }
  
  	return temp.length; 
}
