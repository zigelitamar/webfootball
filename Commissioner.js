var url = "http://localhost:8080/footballapp/commissioner";
var commUserName = JSON.parse(localStorage.getItem("profiles")).username;;
var interval;

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
    checknotes(commUserName);
    interval = setInterval(function (){
        checknotes(commUserName);},
        6*1000)

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

function acceptTeam(node) {
    const request = {
        username: commUserName,
        teamname: node.childNodes[1].innerText,
        apply: true
    };
    let json = JSON.stringify(request);
    let xhr = new XMLHttpRequest();

    xhr.open("POST",
        url + "/applyRequest", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.status == "200") {
            Swal.fire({
                title: 'Great!',
                text: 'You approved the new team!!',
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


    node.remove();
}

function declineTeam(node) {
    const request = {
        username: commUserName,
        teamname: node.childNodes[1].innerText,
        apply: false
    };
    let json = JSON.stringify(request);
    let xhr = new XMLHttpRequest();

    xhr.open("POST",
        url + "/applyRequest", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.status == "200") {
            Swal.fire({
                title: 'Great!',
                text: 'You didnt approved the new team!!',
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
    node.remove();
}

function getTeamReq() {
    let myurl = url + '/proveTeam/{'+commUserName+'}';

    const request = new XMLHttpRequest();
    request.open('GET', myurl, true);
    var node = document.createElement("tr");
    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
                let td1 = document.createElement("td");
                td1.innerHTML = data.username;
                node.appendChild(td1);
                let td2 = document.createElement("td");
                td2.innerHTML = data.teamname;
                node.appendChild(td2);

                let td3 = document.createElement("td");
                let buttom = document.createElement("button");
                buttom.innerHTML = "Accept"
                buttom.onclick =(function() {
                    return function() {
                        acceptTeam(node);
                    }
                })();
                td3.appendChild(buttom);
                node.appendChild(td3);

               let td4 = document.createElement("td");
               let buttomDec = document.createElement("button");
               buttomDec.innerHTML = "Decline"
               buttomDec.onclick  =(function() {
                   return function() {
                       declineTeam(node);
                   }
               })();
               td4.appendChild(buttomDec);
               node.appendChild(td4);
               $("#teamTable").append(node);
        }
    }
    request.send();

}
function proveTeamReq() {
    const request = {
        username: commUserName,
    };
    let json = JSON.stringify(request);
    let xhr = new XMLHttpRequest();

    xhr.open("POST",
        url + "/proveReq", true);
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
    var proveTeam = document.getElementById("proveTeams");

    var mainFrameTwo = document.getElementById(newdiv);

    if (newdiv == "runPlacingAlgoPage") {
        getleagues('leagueID2');
        mainFrameTwo.style.display = 'block';
        setscore.style.display = 'none';
        CommissionerPage.style.display = 'none';
        definebudget.style.display = 'none';
        notifications.style.display = 'none';
        proveTeam.style.display = 'none';

    }

    if(newdiv == "proveTeams"){
        getTeamReq();
        mainFrameTwo.style.display = 'block';
        CommissionerPage.style.display = 'none';
        runplacing.style.display = 'none';
        definebudget.style.display = 'none';
        notifications.style.display = 'none';
        setscore.style.display = 'none';
    }

    if (newdiv == "setNewScorePolicyPage") {
        getleagues('leagueID')
        mainFrameTwo.style.display = 'block';
        CommissionerPage.style.display = 'none';
        runplacing.style.display = 'none';
        definebudget.style.display = 'none';
        notifications.style.display = 'none';
        proveTeam.style.display = 'none';

    }

    if (newdiv == "defineBudgetControlPage") {
        mainFrameTwo.style.display = 'block';
        CommissionerPage.style.display = 'none';
        setscore.style.display = 'none';
        runplacing.style.display = 'none';
        notifications.style.display = 'none';
        proveTeam.style.display = 'none';

    }

    if (newdiv == "CommissionerPage") {
        mainFrameTwo.style.display = 'block';
        setscore.style.display = 'none';
        runplacing.style.display = 'none';
        definebudget.style.display = 'none';
        notifications.style.display = 'none';
        proveTeam.style.display = 'none';
    }
    if (newdiv == "notify") {
        removealertsSign();
        mainFrameTwo.style.display = 'block';
        setscore.style.display = 'none';
        CommissionerPage.style.display = 'none';
        runplacing.style.display = 'none';
        definebudget.style.display = 'none';
        proveTeam.style.display = 'none';
    }

}