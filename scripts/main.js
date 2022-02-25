let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

let foxpng = document.querySelector('img');
foxpng.onclick = function () {
    let foxsrc = foxpng.getAttribute('srcset');
    if (foxsrc === './images/firefox-icon.png') {
        foxpng.setAttribute('srcset', './images/firefox.jpg');
    } else {
        foxpng.setAttribute('srcset', './images/firefox-icon.png');
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

function setUserName() {
    let myName = prompt("请输入你的姓名：");
    if (!myName) {
        myName = 'Mozilla';
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

let myButton = document.querySelector('button');
myButton.onclick = function () {
    setUserName();
}