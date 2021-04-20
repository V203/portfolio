function findItemsOver(_list,_20){

   var _arr = []; 
  
  for(var i = 0;i < _list.length;i++){
    var list = _list[i];
    if(list.qty > _20 ){
     _arr.push(list);      
    }
  }
  return _arr;
}