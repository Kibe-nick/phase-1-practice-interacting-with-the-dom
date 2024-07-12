let counter = 0;
let isPaused = false;
let interval;

const counterDisplay = document.getElementById('counter');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const likeBtn = document.getElementById('like');
const pauseBtn = document.getElementById('pause');
const likesList = document.getElementById('likes');
const commentInput = document.getElementById('comment-input');
const submitCommentBtn = document.getElementById('submit-comment');
const commentList = document.getElementById('comment-list');

// Function to start the counter
function startCounter() {
    interval = setInterval(() => {
        if (!isPaused) {
            counter++;
            updateCounterDisplay();
        }
    }, 1000);
}

// Function to handle the minus button click
function updateCounterDisplay() {
    counterDisplay.textContent = counter;
}
// Function to handle the plus button click
minusBtn.addEventListener('click', () => {
    counter--;
    updateCounterDisplay();
});

// Function to handle the like button click
likeBtn.addEventListener('click', () => {
    const likedItem = document.createElement('li');
    likedItem.textContent = `Number ${counter} has been liked!`;
    likesList.appendChild(likedItem);
});

// Function to handle the pause button click
pauseBtn.addEventListener('click', () => {
    if (!isPaused) {
        isPaused = true;
        clearInterval(interval);
        pauseBtn.textContent = 'Resume';
        disableButtons(true);
    } else {
        isPaused = false;
        startCounter();
        pauseBtn.textContent = 'Pause';
        disableButtons(false);
    }
});

// Function to disable buttons
function disableButtons(disable) {
    minusBtn.disabled = disable;
    plusBtn.disabled = disable;
    likeBtn.disabled = disable;
    submitCommentBtn.disabled = disable;
}

// Function to handle the submit comment button click
submitCommentBtn.addEventListener('click', () => {
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
    }
});

// Initialize the counter when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startCounter();
});