const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const numberSpan = document.querySelector('.number');
const form = document.querySelector('.form');
const dataDiv = document.querySelector('.data');
let currentNum = 0;
let firstName = "";
let job = "";
let age = "";
let dataArr = [];

function setNumDiv() {
    numberSpan.innerHTML = currentNum;
}

function addOne() {
    currentNum += 1;
    setNumDiv();
}

function subOne() {
    currentNum -= 1;
    console.log('click')
    setNumDiv();
}

function submitForm(e) {
    e.preventDefault();

    firstName = document.querySelector('.name-input').value;
    job = document.querySelector('.job-title').value;
    age = document.querySelector('.age').value;

    let dataObj = {
        firstName: firstName,
        job: job,
        age: age
    };

    dataArr.push(dataObj);

    displayData();
}

function displayData() {
    while(dataDiv.firstChild) {
        dataDiv.removeChild(dataDiv.firstChild)
    }
    dataArr.forEach(element => {
        const nameElement = document.createElement("h2");
        const jobElement = document.createElement("h2");
        const ageElement = document.createElement("h2");
        const div = document.createElement('div');
        div.className = "data-container";

        nameElement.innerHTML = `Name: ${element.firstName}`;
        jobElement.innerHTML = `Phone: ${element.job}`;
        ageElement.innerHTML = `Age: ${element.age}`;

        div.append(nameElement);
        div.append(jobElement);
        div.append(ageElement);

        dataDiv.append(div);
    })
}

addBtn.addEventListener('click', addOne);
subtractBtn.addEventListener('click', subOne);
form.addEventListener('submit', submitForm);