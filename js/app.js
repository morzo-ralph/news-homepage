'use strict';

const app = (() => {
    let mobile, close;

    const init = () => {
        mobile = document.querySelector('.mobile');
        close = document.querySelector('#close');
        applyListener();
    }

    const applyListener = () => {
        mobile.addEventListener("click", () => {
            console.log(mobile);
            document.getElementById("mySidenav").style.width = "70%";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        });
        close.addEventListener("click", () => {
            document.getElementById("mySidenav").style.width = "0";
            document.body.style.backgroundColor ="var(--off-white)";
        });
    }

    init();
})();