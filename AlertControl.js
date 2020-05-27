

function checknotes() {

    let myurl = 'http://localhost:8700/footballapp/commissioner/Notifications';
    const request = new XMLHttpRequest();
    request.open('GET', myurl, true);
    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            let news = data.num;

            $('#note').text(news);
            let option;
            for (let i = 0; i < parseInt(news) ; i++) {
                var node = document.createElement("P");
                let x = data.notedata[i];
                var textnode = document.createTextNode(x);
                node.style.color='red';
                node.appendChild(textnode);
                document.getElementById("notify").insertBefore(node,  document.getElementById("notify").firstChild);

            }
        }
    }
    request.send();
}
function removealertsSign() {
    $('#note').text('empty');

}