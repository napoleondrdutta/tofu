
function fun1() {
    
    var var1 = document.getElementById("button-contact-1").innerHTML;
    if (var1 == 'Send Message') {
        document.getElementById("button-contact-1").innerHTML = "Message Sent";
    }
    else {
        document.getElementById("button-contact-1").innerHTML = "Send Message";
    }
}

