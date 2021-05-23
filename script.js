const theDay = moment().format("dddd, MMMM, Do");
$("#currentDay").text(theDay);

const theHour = moment().format("H");
$("#currentDay").text(theDay);

let timeTextArray = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];
for (let i = 0; i < 9; i++) {
  let stringTop = `
    <div class="row" id="${i + 9}-Oclock">
        <p class="col-1 time">
        ${timeTextArray[i]}   
        </p>
    `;
  let stringBottom = "";
  if (i + 9 < theHour) {
    stringBottom = `
        <textarea class="col-10 past" id="${i + 9}-Oclock-text"> </textarea>
        <button class="col-1 saveBtn"> Save </button>
    </div>
        `;
  } else if (i + 9 == theHour) {
    stringBottom = `
        <textarea class="col-10 present" id="${i + 9}-Oclock-text"> </textarea>
        <button class="col-1 saveBtn"> Save </button>
    </div>
        `;
  } else {
    stringBottom = `
        <textarea class="col-10 future" id="${i + 9}-Oclock-text"> </textarea>
        <button class="col-1 saveBtn"> Save </button>
    </div>
        `;
  }
  $("#table").append(stringTop + stringBottom);
}

//   save text input to local storage

let eventAdd = $(".col-10");
let text = {};
let button = $("button");

eventAdd.on("input", (eventText) => {
  console.log(eventText.target.value);
  text.textContent = eventText.target.value;
  text.id = eventText.target.id;
});
const saveToLocalStorage = () => {
  localStorage.setItem(text.id, text.textContent);
};

function init() {
  $(document).ready(function () {
    for (let i = 0; i < 9; i++) {
      console.log(localStorage.getItem(`${i + 9}-Oclock-text`));
      $(`#${i + 9}-Oclock-text`).val(localStorage.getItem(
        `${i + 9}-Oclock-text`
      ));
    }
  });
}
init();

button.click(saveToLocalStorage);
