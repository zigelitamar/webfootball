
function submitReferee(){
    event.preventDefault();
    if((document.getElementById("addEvent").checked == true)){
        switchdivs("addEventPage");
    }
    else if((document.getElementById("createReport").checked == true)){
        switchdivs("createReportPage");
    }

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