function openFile () {
window.location.href = "page/content.html"
}
function backToHome () {
    window.location.href = "../index.html"
}


var closes = document.getElementsByClassName("close");
var btns = document.getElementsByClassName("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        openModal(i);
    };
}

for (let i = 0; i < closes.length; i++) {
    closes[i].onclick = function() {
        closeModal(i);
    };
}

var modals = document.getElementsByClassName("modal");

function openModal(num) {
    modals[num].style.display = "block";
    console.log(num);
}

function closeModal(num) {
    modals[num].style.display = "none";
}
window.onclick = function(event) {
   for(let i = 0 ; i < modals.length ; i++) {
    if (event.target == modals[i]) {
        modals[i].style.display = "none";
      }
   }
  }