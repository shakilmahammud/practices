// // Asynchronous Programming
// // AJAX = Asynchronous JavaScript And XML
// // Get data without loading the page

// document.getElementById('get_data').addEventListener('click', loadData);

// function loadData() {
//     // Create XHR Object (Xml Http Request)
//     let xhr = new XMLHttpRequest();
//     console.log(xhr)
//     // Open
//     xhr.open('GET', './data.txt', true);

//     xhr.onprogress = function() {
//         console.log(xhr.readyState);
//     }

//     xhr.onload = function () {
//         // HTTP statuses
//         // 200: "OK"
//         // 403: "Forbidden"
//         // 404: "Not Found"
//         if (this.status === 200) {
//             document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4?`
//         }
//     }

//     //xhr.onreadystatechange = function () {
//     //     // readyState Values
//     //     // 0: request not initialized
//     //     // 1: server connection established
//     //     // 2: request received
//     //     // 3: processing request
//     //     // 4: request finished and response is ready
//     //     //console.log(this.readyState);
//     //     if (this.status === 200 && this.readyState === 4) {
//     //         console.log(this.responseText);
//     //     }
//     // }

//     xhr.send();

//     //console.log(xhr);
// }
// http://www.icndb.com/api/
// API
// RESTful API

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes(e) {
    let number = document.getElementById('numberJokes').value;
    //console.log(number);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let jokes = data.value;
            let output = "<ol>";

            jokes.forEach(function (item) {
                //console.log(item.joke);
                output += `<li>${item.joke}</li>`;
            });
            output += "</ol>";

            document.getElementById('output').innerHTML = output;
            //console.log(jokes);
            //console.log(data);
        }
    }

    xhr.send();
}

// Callback Function 

// setTimeout(function(){
//     console.log("Hello World!");
// }, 5000);

// let persons = [
//     {firstName: "Simanta", lastName: "Paul"},
//     {firstName: "Fazle", lastName: "Rahat"}
// ]

// function createPerson(person) {
//    setTimeout(function() {
//        persons.push(person);
//    }, 4000); 
// }

// function getPerson() {
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         }); 
//         document.getElementById('output').innerHTML = output;
//     }, 1000);
// }

let persons = [
    {firstName: "Simanta", lastName: "Paul"},
    {firstName: "Fazle", lastName: "Rahat"}
]

function createPerson(person, callback) {
   setTimeout(function() {
       persons.push(person);
       callback();
   }, 2000); 
}

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output1').innerHTML = output;
    }, 500);
}

createPerson({firstName:"Rony", lastName: "Chy"}, getPerson);
