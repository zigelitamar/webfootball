var fanName = JSON.parse(localStorage.getItem("profiles")).username;

$(document).ready(function() {
    checknotes(fanName);
    interval = setInterval(function (){
            checknotes(fanName);}
        ,80*1000)

});

function switchdivs(newdiv) {
    var mainFrameTwo = document.getElementById(newdiv);
    var notifypage = document.getElementById("notify");
    var repage = document.getElementById("FanHomePage");
    var contact = document.getElementById("contactus");


    if (newdiv == 'FanHomePage') {
        mainFrameTwo.style.display = 'block';
        notifypage.style.display = 'none';
        contact.style.display = 'none';

    }

    if (newdiv == "notify") {
        mainFrameTwo.style.display = 'block';
        repage.style.display = 'none';
        contact.style.display = 'none';
    }
    if (newdiv == "contactus") {
        mainFrameTwo.style.display = 'block';
        repage.style.display = 'none';
        notifypage.style.display = 'none';
    }
}