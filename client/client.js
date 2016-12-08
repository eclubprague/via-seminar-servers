// Hello World
document.getElementById('helloWorldBtn').addEventListener('click', function () {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                document.getElementById('helloWorldText').innerHTML = httpRequest.responseText;
            } else {
                console.log('[Error][HelloWorld]: ' + httpRequest.status);
            }
        }
    };
    httpRequest.open('GET', 'http://localhost:8088/', true);
    httpRequest.send();
});


// Exercise 1
// TODO: Implemented in xmlhttpexample.js


// Exercise 2
document.getElementById('echoBtn').addEventListener('click', function () {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                document.getElementById('echoText').innerHTML = httpRequest.responseText;
            } else {
                console.log('[Error][Echo]: ' + httpRequest.status);
            }
        }
    };
    httpRequest.open('POST', 'http://localhost:8088/echo', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.setRequestHeader('Origin', 'http://www.example.com');
    httpRequest.send(JSON.stringify({
        message: 'Hello World!',
        author: 'You'
    }));
});
