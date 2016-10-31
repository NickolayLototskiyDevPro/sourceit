$(document).ready(function(){
    $("#header").append("<h1 id ='someText'></h1>");
    someText.innerText = "Hello!";
    //let sum12 = sum(1,2);
    //main.innerHTML = `<h2>${sum12}</h2>`;
    $("#footer").append("<h1 id = 'fText'>Copyright</h1>");
    fText.innerText = "Copyright123";
});
const changeColor = () => {
    if ($("#header h1").css("background","red")) {
    $("#header h1").css("background","blue");
    } else {
        $("#header h1").css("background","red");
    }
}
action.addEventListener( "click", changeColor); 