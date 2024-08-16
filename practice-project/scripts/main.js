const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/firefox-icon2.png");
    }else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt('あなたの名前を入力してください．');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`; 
    }
}

if (!localStorage.getItem('name')){
    setUserName();
}else{
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};