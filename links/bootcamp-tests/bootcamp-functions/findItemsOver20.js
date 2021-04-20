function findItemsOver20(_list){
  var _maxqty =[];
  for(var i = 0;i<_list.length;i++){
 	var list = _list[i];
     
    if(list.qty > 20){
      _maxqty.push(list);
       }
  }
   return _maxqty;
}