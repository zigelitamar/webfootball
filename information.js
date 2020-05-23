

var urlip = "http://localhost:8700/";
function submitRegistration() {
    $('#first_form').validate({
        rules: {
            userName: {
                pattern: '^[a-zA-Z]*$',
                required: true
            },
            password: {
                pattern: '^(?=.*\\d)(?=.*[a-zA-Z]).{6,200}$',
                required: true,

            },
            name: {
                pattern: '^[a-zA-Z]*$',
                required: true

            },
            name: {
                pattern: '^[a-zA-Z]*$',
                required: true

            },
            id:{
                required: true
            }
        },

    });

    event.preventDefault();
    const form = $("#first_form");
    if (form.valid()) {
        var user_name = $('#userName').val();
        var password = $('#password').val();
        window.alert("registered ")
        localStorage.setItem(user_name, password);
        switchdivs("WelcomePage");
    }

}

function logingGame() {
    const request = {
        username: $('#userlog-in').val(),
        password: $('#passlog-in').val()
    };
    var profiles ={
        fan : false,
        commissioner : false ,
        teamowner : false ,
        teamanager : false ,
        referee : false,
    };
    let json = JSON.stringify(request);
    let xhr = new XMLHttpRequest();
    xhr.open("POST",
        urlip+"footballapp/guest/login", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            let jsonans = JSON.parse(this.responseText);
            if(jsonans.Player == "true"){
                profiles.fan = true;


            }
            if(jsonans[1] == "true"){
                profiles.commissioner = true;

            }
            localStorage.setItem("profiles",JSON.stringify(profiles));
            window.location.href = 'chooseprofile.html';

        }
    }
    xhr.send(json);





}


function switchdivs(newdiv) {
    var mainFrameTwo = document.getElementById(newdiv);
    var oldframe1 = document.getElementById('WelcomePage');
    var oldframe2 = document.getElementById('log-in');
    var oldframe5 = document.getElementById('registerpage');

    if (newdiv == "WelcomePage") {
        mainFrameTwo.style.display = 'block';
        oldframe5.style.display = 'none';
        oldframe2.style.display = 'none';

    }
    if (newdiv == "log-in") {
        mainFrameTwo.style.display = 'block';
        oldframe1.style.display = 'none';
        oldframe5.style.display = 'none';


    }
    if (newdiv == "registerpage") {
        mainFrameTwo.style.display = 'block';
        oldframe1.style.display = 'none';
        oldframe2.style.display = 'none';

    }

}

