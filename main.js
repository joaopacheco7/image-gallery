const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(var i = 1; i <= 5; i++){

  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);

  // assign a click event to every thumbnail
  newImage.addEventListener('click', setImage);
}

function setImage(e){
  // get the file path of the thumbnail picture
  let imgPath = e.target.getAttribute('src');

  // set thumbnail as the picture displayed
  displayedImage.setAttribute('src', imgPath);
}

/* Wiring up the Darken/Lighten button */

// assign a click event to our button element
btn.addEventListener('click', switchBrightness);

function switchBrightness(){
  // get the state (class) of the button
  let btnState = btn.getAttribute('class');

  if(btnState === 'dark'){
    // switch to lite state
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
  }else{
    // switch to dark state
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  }
}