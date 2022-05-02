// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
})

document.addEventListener("DOMContentLoaded", function(e) {
    let p = document.querySelector('#text');
    p.textContent = 'This is really cool!';
})

