"use strict";

const url = "http://localhost:3000/articles";

window.addEventListener('DOMContentLoaded', function () {

    getArticles();

});

function getArticles() {

    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readystate == XMLHttpRequest.DONE) {
            if (req.status == 200) {
                var data = req.responseText;
                var articles = JSON.parse(data);
               fillTable(articles);
            } else {
                alert('error getting dishes list!');
            }
        }       
    };
    
    req.open('GET', url);
    req.send();
}


function fillTable (articles) {
   
   var tableBody = document.getElementsByTagName('tbody')[0];
    document.getElementsByTagName('tr').remove();
    for (let article of articles) {
        var tr = document.createElement('tr');

        var id = document.createElement('td');
        id.textContent = article.id;
        tr.appendChild(id);

        var name = document.createElement('td');
        name.textContent = article.id;
        tr.appendChild(name);

         tr.onclick =  function(e){
            alert('click');

        tableBody.appenChild(tr);
         }
    }

// //
// function retriever() {
//     var d = document.getElementById("response");
//     var p = document.createElement("p");
//     p.setAttribute("id", "presponse");
//     p.innerHTML = (temp + " °C");
//     // var pRemove = document.getElementById('presponse').remove();
//     d.appendChild(p);
// }


// document.getElementById("button").addEventListener('click', function (event) {
//     var ville = document.getElementById("ville").value;
//     var url = "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=e120e9651af4e47ba6c9ca62e0d5d311";
//     getMeteo(url, ville);
// });

// function retriever(temp) {
//     var d = document.getElementById("response");
//     var p = document.createElement("p");
//     p.setAttribute("id", "presponse");
//     p.innerHTML = (temp + " °C");
//     // var pRemove = document.getElementById('presponse').remove();
//     d.appendChild(p);
// }

// function getMeteo(url, ville) {
//     var xhr = new XMLHttpRequest();
//     if (xhr) {
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     var data = JSON.parse(xhr.responseText);
//                     var temp = (Math.round((data.main.temp - 273) * 100))/100;
//                     retriever(temp);
//                 }
//                 else {
//                     alert('Une erreur s’est produite.');
//                 }
//             }
//         }
//         xhr.open("GET", url, false);
//         xhr.send();
//     }
// });