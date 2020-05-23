


function checkprofile() {
    if (JSON.parse(localStorage.getItem("profiles")).fan == true) {
        window.location.href = 'Commissioner.html';
    }

}