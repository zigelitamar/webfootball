var url ="http://localhost:8700/footballapp/referee";
var refUsername = JSON.parse(localStorage.getItem("profiles")).username;
function submitReferee(){
    event.preventDefault();
    if((document.getElementById("addEvent").checked == true)){
        gameTochoose();
        switchdivs("addEventPage");
    }
    else if((document.getElementById("createReport").checked == true)){
        switchdivs("createReportPage");
    }

}
 function gamehaschoosen () {
     $('#playerselect').prop('disabled', false);
        playertochoose($('#gameselect').val());

};
function playertochoose(gameid){
    let dropdown = document.getElementById('playerselect');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose player';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    let myurl = url +'/games/{'+gameid+"}";

    const request = new XMLHttpRequest();
    request.open('GET', myurl, true);
    request.onload = function() {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            let option;
            for (const argumentsKey in data) {
                option = document.createElement('option');
                option.text = data[argumentsKey];
                option.value = argumentsKey;
                dropdown.add(option);
            }
        }
    }
    request.send();

}
function gameTochoose(){
    let dropdown = document.getElementById('gameselect');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose game';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    let myurl = url +'/games';

    const request = new XMLHttpRequest();
    request.open('GET', myurl, true);

    request.onload = function() {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            let option;
            for (const argumentsKey in data) {
                option = document.createElement('option');
                option.text = data[argumentsKey];
                option.value = argumentsKey;
                dropdown.add(option);

            }
        }
    }
    request.send();
}
function addEvent(){
    const request = {
        username: "goz",
        eventtype: $('#selectType').val(),
        minute: $('#minute').val(),
        gameID: $('#gameselect').val(),
        playerID: $('#playerselect').val()
    };
    let json = JSON.stringify(request);
    let xhr = new XMLHttpRequest();

    xhr.open("POST",
        url+"/addEvent", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if ( xhr.status == "200") {

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
function switchdivs(newdiv) {
    var RefereePage= document.getElementById("RefereePage");
    var mainFrameTwo = document.getElementById(newdiv);

    if(newdiv== "addEventPage"){
        mainFrameTwo.style.display = 'block';
        RefereePage.style.display='none';
    }

    if(newdiv== "createReportPage"){
        mainFrameTwo.style.display = 'block';
        RefereePage.style.display='none';
    }

    if(newdiv== "defineBudgetControlPage") {
        mainFrameTwo.style.display = 'block';
        RefereePage.style.display = 'none';
    }
    if (newdiv == "addToFinanceAssociationActivityPage") {
        mainFrameTwo.style.display = 'block';
        RefereePage.style.display='none';
    }


    if (newdiv == "CommissionerPage") {
        mainFrameTwo.style.display = 'block';
        RefereePage.style.display='none';
    }

}