var tb=document.getElementsByClassName("view-table-second")[0];    //获取table对像
var rows=tb.rows;
var arr = []
for(var i=0;i<rows.length;i++){    //--循环所有的行
  var cells=rows[i].cells;
  for(var j=0;j<cells.length;j++){   //--循环所有的列
      arr.push(cells[j].innerText);
  }
}
console.log(rows)
console.log(arr)