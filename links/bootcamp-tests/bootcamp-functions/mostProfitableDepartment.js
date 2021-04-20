function mostProfitableDepartment(__list){
  var _newMap ={};
 
 for(var i in __list){

   var _list = __list[i]; 
   _newMap[_list.department] = 0;
}//eof 1st for

  for(var i =0;i<__list.length;i++){   
    var _list = __list[i];
    var currTot = _newMap[_list.department];
  	 currTot += _list.sales;
     _newMap[_list.department] = currTot;
  }// EOF 2nd for
  
 var curr_sales = 0;
 var curr_dept = "";
  
  for(var dept in _newMap){
   var deptSales = _newMap[dept];
    if(deptSales > curr_sales){
      curr_sales = deptSales;
      curr_dept = dept;   
       }   
  }
  return  curr_dept;
}