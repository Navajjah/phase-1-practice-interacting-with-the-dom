let counter = 0;
const counterDisplay = document.getElementById('counter'); // Assuming you have an element to display the counter

setInterval(() => {
  counter++;
  counterDisplay.innerText = counter;
}, 1000);


const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

plusButton.addEventListener('click', () => {
  counter++;
  counterDisplay.innerText = counter;
});

minusButton.addEventListener('click', () => {
  counter--;
  counterDisplay.innerText = counter;
});


const likeButton = document.getElementById('like');
const likeDisplay = document.getElementById('likes'); // Assuming there's a place to show likes
let likes = {};

likeButton.addEventListener('click', () => {
  likes[counter] = (likes[counter] || 0) + 1; // Increment like count for this counter value
  likeDisplay.innerText = `Likes for ${counter}: ${likes[counter]}`;
});


let isPaused = false;
const pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', () => {
  if (isPaused) {
    // Resume functionality
    isPaused = false;
    pauseButton.innerText = 'Pause';
    // Re-enable buttons
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
  } else {
    // Pause functionality
    isPaused = true;
    pauseButton.innerText = 'Resume';
    // Disable buttons
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
  }
});

const commentForm = document.getElementById('comment-form'); 
const commentInput = document.getElementById('comment-input'); 
const commentDisplay = document.querySelector('.comments'); 

commentForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const comment = commentInput.value;
  const newComment = document.createElement('p');
  newComment.innerText = comment;
  commentDisplay.appendChild(newComment);
  commentInput.value = ''; 
});
