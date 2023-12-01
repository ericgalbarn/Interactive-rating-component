const form = document.querySelector("[data-js-form]");
const wrapper = document.querySelector("[data-js-wrapper]");
const template = document.querySelector("[data-js-template]");

let clickSubmit = (event) => {
  event.preventDefault() ;

  const rating = new FormData(event.target).get("rating");

  if(rating){
     wrapper.innerHTML = template.innerHTML.replace(/{ { rating } }/, rating);
  }
  soundEffect();
  console.log(rating);
}

let soundEffect = () => {
  const audio = new Audio("./audio/siu.mp3");
  audio.volume = 0.2;
  audio.play();
}

form.addEventListener("submit", clickSubmit);
