var url ="http://localhost:8080/footballapp/teamowner";
var teamOwnerUN = JSON.parse(localStorage.getItem("profiles")).username;

$(document).ready(function() {
    leaguehaschoosen();
    checknotes(teamOwnerUN);
    interval = setInterval(function (){checknotes(teamOwnerUN);}
    ,60*1000)

});

function switchdivs(newdiv) {
    var TeamOwnerPage= document.getElementById("TeamOwnerPage");
    var notific= document.getElementById("notify");
    var newteam= document.getElementById("CreatenewteamPage");
    var mainFrameTwo = document.getElementById(newdiv);

    if(newdiv== "CreatenewteamPage"){
        mainFrameTwo.style.display = 'block';
        TeamOwnerPage.style.display='none';
        notific.style.display='none';
    }

    if (newdiv == "TeamOwnerPage") {
        mainFrameTwo.style.display = 'block';
        notific.style.display='none';
        newteam.style.display='none';
    }
    if (newdiv == "notify") {
        mainFrameTwo.style.display = 'block';
        TeamOwnerPage.style.display='none';
        newteam.style.display='none';
    }

}
function leaguehaschoosen(){
    let dropdown = document.getElementById('leagueselect');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose league';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    let myurl = url +'/leagues';

    const request = new XMLHttpRequest();
    request.open('GET', myurl, true);

    request.onload = function() {
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
function addNewTeam(){
    const request = {
        username:teamOwnerUN,
        leagueID: $('#leagueselect').val(),
        year: $('#year').val(),
        team_name: $('#teamName').val(),
    };
    let json = JSON.stringify(request);
    let xhr = new XMLHttpRequest();

    xhr.open("POST",
        url+"/signteam", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if ( xhr.status == "200") {
            Swal.fire({
                title: 'Great!',
                text: 'Team Request Sent To commissioner',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
        else{
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