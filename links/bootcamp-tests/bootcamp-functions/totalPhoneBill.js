function totalPhoneBill(pb){
  console.log(pb);
 var _pb = pb.split(", ");
	console.log("Arr pb:"+_pb);
  var sign = "R";
  var per_call = 2.75;
  var per_sms = 0.65;
  var total=0;
  for(var i = 0;i < _pb.length;i++){
   if(_pb[i].startsWith("c")){
      total += per_call;
     console.log(per_call);
      }
    else if(_pb[i].startsWith("s")){
     total += per_sms;
      console.log(per_sms);
    }
   
  }
	 return (sign +total.toFixed(2));// = per_sms + per_call;
   console.log(sign+total);
}
