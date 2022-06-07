function createCalendar(elem, year, month) {

    let mon = month - 1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>SA</th><th>SU</th><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
  }

  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }

 


  createCalendar(calendar, 2012, 9);

  function Color() {
    var x = document.getElementsByTagName("th");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "grey";
      
    }
  }
  
  Color();
