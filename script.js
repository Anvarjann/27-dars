var elOpenBtn = document.querySelector(".article-login");
var elModal = document.querySelector(".modal-box");
var elCloseModalBtn = document.querySelector(".modal-box");


elOpenBtn.addEventListener("click" , function(){
    elModal.classList.add("modal-open");

});
elCloseModalBtn.addEventListener("click" , function(){
    elModal.classList.remove("modal-open");

});