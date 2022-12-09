//select and declare variables for elements from HTML

let imgcycleEl = document.querySelector("#trial");

let current = 0;
let id = 5;

const timer = setTimeout(changeImage(), 5000);

let changeImage = function() {
  current++;
  if (current >= id) {

  }
  else {
    document.getElementById("trial").src=`./assets/icons/${current}.png`
  }
  timer();
};

changeImage();
