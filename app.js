let options = ['rock', 'scissors', 'paper'];

let myButton = document.getElementById('myButton');
let images = document.getElementById('first');
let result = document.getElementById('result');
let winner = document.getElementById('winner');
let imagePath1;
let imagePath2;

function getRandom() { // get random value from the array
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function whosWinner(user1, user2) { // decided whos the winner

  if (user1 === 'rock') {
    imagePath1 = 'rock.gif';

    if (user2 !== 'paper') {

      imagePath2 = 'scissors.gif';
      return 'computer win';

    } else {

      imagePath2 = 'paper.gif';
      return 'you win';

    }
  } else if (user1 === 'paper') {
    imagePath1 = 'paper.gif';

    if (user2 !== 'scissors') {

      imagePath2 = 'rock.gif'
      return 'computer win';

    } else {
      imagePath2 = 'scissors.gif'
      return 'you win';
    }
  } else {

    imagePath1 = 'scissors.gif';

    if (user2 !== 'rock') {

      imagePath2 = 'paper.gif';
      return 'computer win';

    } else {

      imagePath2 = 'rock.gif';
      return 'you win';
    }
  }
}

myButton.addEventListener('click', function (e) { // maken an event for the button
  let valueOfCpu = getRandom();
  let valueOfUser = getRandom();
  while (images.firstChild) {
    images.removeChild(images.firstChild);
  }

  while (valueOfCpu === valueOfUser){ // no evevn values

    valueOfCpu = getRandom();
    valueOfUser = getRandom();
  }

  result.textContent = `computer have ${valueOfCpu}\t and you have ${valueOfUser}`;
  winner.textContent = whosWinner(valueOfCpu, valueOfUser);
  let image1 = document.createElement('img');
  let image2 =  document.createElement('img');
  image1.src = imagePath1;
  image2.src = imagePath2;
  
  image1.setAttribute('class','image');
  image2.setAttribute('class','image');
  
  image1.style.height = '300px';
  image1.style.width = '300px';
  image2.style.width = '300px';
  image2.style.height = '300px';
  
  images.appendChild(image1);
  images.appendChild(image2);
})
