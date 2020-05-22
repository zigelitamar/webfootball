
function submitCommissioner(){
    event.preventDefault();
    if((document.getElementById("setNewScorePolicy").checked == true)){
        switchdivs("setNewScorePolicyPage");
    }
    else if((document.getElementById("defineBudgetControl").checked == true)){
        switchdivs("defineBudgetControlPage");
    }
    else if((document.getElementById("runPlacingAlgo").checked == true)){
        switchdivs("runPlacingAlgoPage");
    }

}
function switchdivs(newdiv) {
    var CommissionerPage= document.getElementById("CommissionerPage");
    var CommissionerOp4 = document.getElementById("setNewScorePolicyPage");
    var CommissionerOp5 = document.getElementById("runPlacingAlgoPage");
    var CommissionerOp6 = document.getElementById("defineBudgetControlPage");

    var mainFrameTwo = document.getElementById(newdiv);

    if(newdiv== "runPlacingAlgoPage"){
        mainFrameTwo.style.display = 'block';
        CommissionerPage.style.display='none';
    }

    if(newdiv== "setNewScorePolicyPage"){
        mainFrameTwo.style.display = 'block';
        CommissionerPage.style.display='none';
    }

    if(newdiv== "defineBudgetControlPage") {
        mainFrameTwo.style.display = 'block';
        CommissionerPage.style.display = 'none';
    }
    if (newdiv == "addToFinanceAssociationActivityPage") {
            mainFrameTwo.style.display = 'block';
            CommissionerPage.style.display='none';
    }


    if (newdiv == "CommissionerPage") {
            mainFrameTwo.style.display = 'block';
            CommissionerPage.style.display='none';
    }

}