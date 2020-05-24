
function checkCommissionerprofile() {
    if (JSON.parse(localStorage.getItem("profiles")).commissioner == true) {
        window.location.href = 'Commissioner.html';
    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'You are not a commissioner!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
}
function checkFanprofile() {
    if (JSON.parse(localStorage.getItem("profiles")).fan == true) {
        window.location.href = 'Fan.html';
    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'You are not a fan!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
}

function checkRefereeprofile() {
    if (JSON.parse(localStorage.getItem("profiles")).referee == true) {
        window.location.href = 'Referee.html';
    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'You are not a referee!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
}

function checkTeamManagerprofile() {
    if (JSON.parse(localStorage.getItem("profiles")).teamanager == true) {
        window.location.href = 'TeamManager.html';
    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'You are not a team manager!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
}

function checkTeamOwnerprofile() {
    if (JSON.parse(localStorage.getItem("profiles")).teamowner == true) {
        window.location.href = 'TeamOwner.html';
    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'You are not a team owner!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
}

