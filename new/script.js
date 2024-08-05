function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value,

    }
    emailjs.send("service_ztlr4j3","template_4px992a",params).then(function(res){
        alert("Email sent Successfully");

    })

}