$(document).ready(function() {
    let modalBtn = document.getElementById("modal-btn")
    let modal = document.querySelector(".modal")
    let closeBtn = document.querySelector(".close-btn")
    modalBtn.onclick = function(){
    modal.style.display = "block"
    }
    closeBtn.onclick = function(){
    modal.style.display = "none"
    }
    window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none"
    }
    }
})

$(document).ready(function() {
    $("form#contactForm").submit(function(event) {
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();


        if (name && email) {
            alert(name + ", your message has been received. We will process it and provide feedback.");
        } else {
            alert("Please enter your name and email!");
        }
    })


})

