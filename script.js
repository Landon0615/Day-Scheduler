$( document ).ready(theDay()); {
    console.log( "ready!" );
};
function theDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
    document.getElementById("currentDay").innerHTML = n;
  }


  function frame(){
      let table = $('h3')
for (let i = 12; i < table.length; i++) {
    const element = array[i];
    }
}
var table = '';
var rows = 12;
for (let r = 0; r < rows.length; r++)
 {
    table  += '<h3>'
for (let c = 0; c < array.length; c++) 
{
    table += '<td>' + c + '</td>';
    
}
    table += '</h3>'     
}
document.write('<table>' + table + '</table>')

//todo need to learn how to append 