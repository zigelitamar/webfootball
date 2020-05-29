var url = "http://localhost:8700/footballapp/commissioner";
var commUserName = JSON.parse(localStorage.getItem("profiles")).username;
var interval;
var first = true;
$('#wellcomecomm').text("Welcome back " + commUserName + " to your Commissioner page ")

function submitCommissioner() {
    event.preventDefault();
    if ((document.getElementById("setNewScorePolicy").checked == true)) {
        switchdivs("setNewScorePolicyPage");
    } else if ((document.getElementById("defineBudgetControl").checked == true)) {
        switchdivs("defineBudgetControlPage");
    } else if ((document.getElementById("runPlacingAlgo").checked == true)) {
        switchdivs("runPlacingAlgoPage");
    }

}

$(document).ready(function() {
    checknotes();
    interval = setInterval(checknotes,80*1000)

});





function getleagues(eleid) {
    let dropdown = document.getElementById(eleid);
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose game';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    let myurl = url + '/leagues';

    const request = new XMLHttpRequest();
    request.open('GET', myurl, true);

    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            let option;
            for (const argumentsKey in data) {
                option = document.createElement('option');
                option.text = data[argumentsKey];
                option.value = data[argumentsKey];
                dropdown.add(option);

            }
        }
    }
    request.send();
}

function addScorePolicy() {
    const request = {
        username: commUserName,
        leagueID: $('#leagueID').val(),
        year: $('#year').val(),
        winval: $('#winval').val(),
        drawval: $('#drawval').val(),
        loseval: $('#loseval').val()
    };
    let json = JSON.stringify(request);
    let xhr = new XMLHttpRequest();

    xhr.open("POST",
        url + "/addScorePolicy", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.status == "200") {
            Swal.fire({
                title: 'Great!',
                text: 'Score Policy Added',
                icon: 'success',
                confirmButtonText: 'OK'
            })

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'some thing went wrong',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }
    xhr.send(json);

}

function defineBudget() {

    const request = {
        username: commUserName,
        description: $('#descri').val(),
        ruleAmount: $('#payment').val()
    };
    let json = JSON.stringify(request);
    let xhr = new XMLHttpRequest();

    xhr.open("POST",
        url + "/addCommissionerRule", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.status == "200") {
            Swal.fire({
                title: 'Great!',
                text: 'Budget Policy Added',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'some thing went wrong',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }
    xhr.send(json);
}

function addTeamPolicy() {
    const request = {
        username: commUserName,
        leagueID: $('#leagueID2').val(),
        year: $('#year2').val(),
        numgames: $('#number').val()
    };
    let json = JSON.stringify(request);
    let xhr = new XMLHttpRequest();

    xhr.open("POST",
        url + "/addTeamsPolicy", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.status == "200") {
            Swal.fire({
                title: 'Great!',
                text: 'Team Policy Added',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'some thing went wrong',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }
    xhr.send(json);

}

function switchdivs(newdiv) {
    var CommissionerPage = document.getElementById("CommissionerPage");
    var setscore = document.getElementById("setNewScorePolicyPage");
    var runplacing = document.getElementById("runPlacingAlgoPage");
    var definebudget = document.getElementById("defineBudgetControlPage");
    var notifications = document.getElementById("notify");

    var mainFrameTwo = document.getElementById(newdiv);

    if (newdiv == "runPlacingAlgoPage") {
        getleagues('leagueID2');
        mainFrameTwo.style.display = 'block';
        setscore.style.display = 'none';
        CommissionerPage.style.display = 'none';
        definebudget.style.display = 'none';
        notifications.style.display = 'none';

    }

    if (newdiv == "setNewScorePolicyPage") {
        getleagues('leagueID')
        mainFrameTwo.style.display = 'block';
        CommissionerPage.style.display = 'none';
        runplacing.style.display = 'none';
        definebudget.style.display = 'none';
        notifications.style.display = 'none';

    }

    if (newdiv == "defineBudgetControlPage") {
        mainFrameTwo.style.display = 'block';
        CommissionerPage.style.display = 'none';
        setscore.style.display = 'none';
        runplacing.style.display = 'none';
        notifications.style.display = 'none';

    }

    if (newdiv == "CommissionerPage") {
        mainFrameTwo.style.display = 'block';
        setscore.style.display = 'none';
        runplacing.style.display = 'none';
        definebudget.style.display = 'none';
        notifications.style.display = 'none';
    }
    if (newdiv == "notify") {
        removealertsSign();
        mainFrameTwo.style.display = 'block';
        setscore.style.display = 'none';
        CommissionerPage.style.display = 'none';
        runplacing.style.display = 'none';
        definebudget.style.display = 'none';
    }

}