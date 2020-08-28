var myapplication = (function() {

    if (window.Worker) {
        console.log('Web Worker supported');
        const worker = new Worker("/public/javascripts/worker.js")
        worker.onmessage = function(event) {
            const messages = document.getElementById('messages');
            messages.textContent = messages.textContent + event.data + '\n';
            console.log(event.data);
        }
    } else {
        console.log('Web Worker does not supported');
    }
    var bodyOnLoad = function() {
        console.log("Body Loaded");
    }
    return {
        bodyOnLoad: bodyOnLoad
    };
})();
