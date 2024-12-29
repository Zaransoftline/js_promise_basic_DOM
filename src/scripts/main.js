'use strict';

// write your code here
function success() {
  const message = document.createElement('div');
  message.textContent = 'Promise was resolved!';
  document.querySelector('body').appendChild(message);
}

function error() {
  const message = document.createElement('div');
  message.textContent = 'Promise was rejected!';
  document.querySelector('body').appendChild(message);
}

const promise1 = new Promise((resolve, reject) => {
  const button = document.querySelector('h1');

  button.addEventListener('click', () => {
    if (button) {
      resolve('success');
    } else {
      reject(new Error('Promise rejected'));
    }
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected'));
    error();
  }, 3000);
});

Promise.race([promise1, promise2])
  .then(() => {
    success();
  })
  .catch(() => {
    error();
  });
