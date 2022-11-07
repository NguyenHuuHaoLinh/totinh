let btnYes = $("#btnYes");
btnYes.on("click", function () {
window.alert("ok nhớ")
});
let btnNo = $("#btnNo");
function noHover() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
  }