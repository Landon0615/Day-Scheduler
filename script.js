

const theDay = (moment().format("dddd, MMMM, Do"));
$("#currentDay").text(theDay);

 const theHour = ((moment().format("H")))
 $("#currentDay").text(theDay);
 
let timeTextArray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
for(let i = 0; i < 9; i++){
    let stringTop = `
    <div class="row" id="${i+9}-Oclock">
        <p class="col-1 time">
        ${timeTextArray[i]}   
        </p>
    `
    let stringBottom =''
    if(i+9< theHour){
        stringBottom = `
        <textarea class="col-10 past"> </textarea>
        <button class="col-1 saveBtn"> Save </button>
    </div>
        `
    }else if(i+9 == theHour){
        stringBottom = `
        <textarea class="col-10 present"> </textarea>
        <button class="col-1 saveBtn"> Save </button>
    </div>
        `
    }else {
        stringBottom = `
        <textarea class="col-10 future"> </textarea>
        <button class="col-1 saveBtn"> Save </button>
    </div>
        `
    }
    $("#table").append(stringTop+stringBottom)    
  }
          
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
      getItem('textinput',text.textContent) // this takes my 2PM to 5PM away
    console.log(localStorage)
