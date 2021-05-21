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
// set row color for pas present and future. 
let row = $('.container');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);
if (time <= $('#Oclock')){
    console.log("ok");
    // row.style.backgroundColor = "red";
}

for(let i = 9; i < 12; i++){
    $("#table").append(` 
        <div id="${i}-Oclock">
        <div class="container">
        <div class="row align-items-end">
         <div class="time">
${i}AM   
         </div>
        <div class="event">
        <div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg"></span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>
        </div>
        <div class="submit">
        <button type="button" class="btn btn-secondary btn-lg">Add Event</button>
        </div>
      </div>
     </div>
    `)    
  }
  for(let i = 12; i < 13; i++){
    $("#table").append(` 
        <div id="${i}-Oclock">
        <div class="container">
        <div class="row align-items-end">
         <div class="time">
${i}PM 
         </div>
        <div class="event">
        <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg"></span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
      </div>
        </div>
        <div class="submit">
        <button type="button" class="btn btn-secondary btn-lg">Add Event</button>
        </div>
      </div>
     </div>
    `)    
  }
  // generate 1PM
  for(let i = 1; i < 6; i++){
    $("#table").append(`
        <div id="${i}-Oclock">
        <div class="container">
        <div class="row align-items-end">
         <div class="time">
${i}PM    
         </div>
        <div class="event">
        <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg"></span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
      </div>
        </div>
        <div class="submit">
        <button type="button" class="btn btn-secondary btn-lg">Add Event</button>
                </div>
      </div>
     </div>
    `)   
  
          
  // save text input to local storage

  let eventAdd = $('.form-control');
    let text = $('.text');
    let button = $('button');
  
      eventAdd.on('input', letter => {
          console.log(letter.target.value);
          text.textContent = letter.target.value
      })
      const saveToLocalStorage = () => {
          localStorage.setItem('textinput',text.textContent)
      }

      button.click(saveToLocalStorage).localStorage
      //getItem('textinput',text.textContent) // this takes my 2PM to 5PM away
    }
