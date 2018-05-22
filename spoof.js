var counter = 0;
var email
var password;

function next() {
    enter();
}

window.onload=function() {
    var input = document.getElementById("input1");
    
    if(screen.width <= 450) {
        var box = document.getElementById('box');
        var grid = document.getElementById('grid-container');
        var email = document.getElementById('email');
        var logo = document.getElementById('logo');
        var input1 = document.getElementById('input1');
        var input2 = document.getElementById('input2');
        var input = document.getElementById('input');
        var header1 = document.getElementById('header1');
        var header2 = document.getElementById('header2');
        var forgot = document.getElementById('forgot');
        var guest = document.getElementById('guest-mode');
        var learn = document.getElementById('learn-more');
        var create = document.getElementById('create-account');
        var next = document.getElementById('next');
        var button = document.getElementById('button');
        document.body.style.background = "#ffffff";
        box.style.setProperty("width", "100%");
        var height = screen.height;
        box.style.setProperty("height", "100%");
        box.style.setProperty("vertical-align", "top");
        grid.style.setProperty("width", "100%");
        grid.style.setProperty("height", "100%");
        logo.style.setProperty("grid-column-end", "10");
        logo.style.setProperty("grid-row-start", "1");
        logo.style.setProperty("grid-row-end", "3");
        logo.style.setProperty("padding-top", "23px");
        logo.style.setProperty("padding-left", "2px");
        logo.style.setProperty("padding-bottom", "0px");
        header1.style.setProperty("grid-row-start", "3");
        header1.style.setProperty("grid-reow-end", "5");
        header1.style.setProperty("padding-top", "10px");
        header1.style.setProperty("padding-left", "3px");
        header2.style.setProperty("grid-row-start", "4");
        header2.style.setProperty("grid-column-end", "16");
        header2.style.setProperty("padding-left", "3px");
        header2.style.setProperty("padding-top", "15px");
        email.style.setProperty("grid-row-start", "6");
        email.style.setProperty("grid-row-end", "15");
        email.style.setProperty("padding-top", "35px");
        email.style.setProperty("padding-left", "2px");
        forgot.style.setProperty("grid-row-start", "11");
        forgot.style.setProperty("padding-left", "2px");
        guest.style.setProperty("grid-row-start", "14");
        guest.style.setProperty("grid-column-end", "19");
        guest.style.setProperty("padding-left", "0px");
        learn.style.setProperty("grid-row-start", "15");
        learn.style.setProperty("grid-column-start", "2");
        learn.style.setProperty("padding-left", "2px");
        create.style.setProperty("grid-row-start", "17");
        create.style.setProperty("padding-left", "2px");
        next.style.setProperty("grid-row-start", "17");
    }
    
    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            enter();
        }
    });
    
    input.focus();
}

function enter() {
    if (counter == 0) {
        console.log(document.getElementById('input1').value);
        email = document.getElementById('input1').value;
        counter++;
        change();
    }
    if (counter == 1) {
        console.log(document.getElementById('input1').value);
        password = document.getElementById('input1').value;
        counter++;
    }
}

function change2() {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var header1 = document.getElementById('header1');
    var header2 = document.getElementById('header2');
    var forgot = document.getElementById('forgot-text');
    var guest = document.getElementById('guest-mode');
    var learn = document.getElementById('learn-more');
    var create = document.getElementById('create-account');
    var next = document.getElementById('next');
    input1.value = "";
    input1.type = "password";
    input1.disabled = true;
    input2.innerHTML = "Enter your password";
    header1.innerHTML = "This was not real";
    header1.style.paddingLeft -= 10;
    header1.style.setProperty("grid-column-end", "11");
    header2.innerHTML = "Check to make sure that sites are the real thing before putting in any personal information";
    header2.style.paddingLeft += 15;
    header2.style.setProperty("grid-column-end", "18");
    forgot.innerHTML = "Forgot password?";
    guest.innerHTML = "";
    learn.innerHTML = "";
    create.innerHTML = "";
    next.style.setProperty("grid-row-start", "14");
    next.style.setProperty("grid-row-end", "15");
}

function change() {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var header1 = document.getElementById('header1');
    var header2 = document.getElementById('header2');
    var forgot = document.getElementById('forgot-text');
    var guest = document.getElementById('guest-mode');
    var learn = document.getElementById('learn-more');
    var create = document.getElementById('create-account');
    var next = document.getElementById('next');
    input1.value = "";
    input1.type = "password";
    input2.innerHTML = "Enter your password";
    header1.innerHTML = "Welcome";
    header2.innerHTML = email;
    header2.style.paddingLeft += 15;
    forgot.innerHTML = "Forgot password?";
    guest.innerHTML = "";
    learn.innerHTML = "";
    create.innerHTML = "";
    next.style.setProperty("grid-row-start", "14");
    next.style.setProperty("grid-row-end", "15");
}