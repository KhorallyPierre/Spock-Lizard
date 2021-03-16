
let buttonsArray = document.querySelectorAll("button");
//[button, button, button, button, button] looks like this

//uncomment this to see what's in buttons
//console.log(buttons)

//in buttonsArray, we're gonna call each item "button" and
//add an event listener to it.
for (let button of buttonsArray) {
  button.addEventListener("click", buttonEventListener);
}
// current target is what you hust clikcked on
function buttonEventListener(event) {
  let pickID = event.currentTarget.id;

  // url describes the information you want and fetch sends url
  // to server server returns data to fetch, fetch gives us that data
  fetch(`/api?pick=${pickID}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      //do more stuff to data here
    document.querySelector('.results').innerText = data.response
    document.querySelector('.compResults').innerText = data.computerPick
      //
    });
}
