
var regNum=["CY 000 343","CJ 768 989","CA 757 987"]

var fromWhere = function(regNum){
  console.log(regNum);
 switch(regNum){
   case ("CY 000 343"):
     return "Bellville";
     break;
   case ("CJ 768 989"):
     return "Paarl";
     break;
   case ("CA 757 987"):
     return "Cape Town";
     break;
   default:
    //  return "Some other place!";
     
              }
}
