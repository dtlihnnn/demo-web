let slideIndex = 0;
auto(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
function auto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(auto, 2000);
}
function login() {
    username = document.getElementById('user').value;
    password = document.getElementById('pass').value;

    var user = 'admin';
    var pass = 'admin';
    if (username == user && password == pass) {
        alert("Đăng nhập thành công");
        window.location.href = 'trangbanhang.html';
    } else {
        alert("Đăng nhập thất bại");
    }
}

function register() {
    let ho = document.getElementById("ho").value;
    let ten = document.getElementById("ten").value;
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let newPass = document.getElementById('new_password').value;
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;

    
    let tuoi = currentYear - year;
    let ktra = true;
    if(tuoi <= 17){
        ktra = false;
    }
    else if(tuoi == 18){
        if(month == currentMonth){
            if(day > currentDate){
                ktra = false;
            }
            else if(day == currentDate){
                ktra =  true;
            }
            else if(day < currentDate){
                ktra = true;
            }
        }
        else if(month < currentMonth){
            ktra = true;
        }
        else {
            ktra = false;
        }
    }
    else {
        ktra = true;
    }

    if (ho == '' || ten == '' || username == '' || pass == '') {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
    else if(pass.length < 8){
        alert("Mật khẩu yếu");
    }
    else if(newPass != pass){
        alert("Mật khẩu không trùng khớp")
    }
    else if (ktra == false){
        alert("Bạn chưa đủ tuổi để đăng kí tài khoản");
    }
    else {
        alert("Đăng kí thành công");
        document.getElementById("ho").innerText = '';
    }
}

function checkPass(){
    let pass = document.getElementById('password').value;
    if(pass.length < 8){
        document.getElementById('weak').style.display = 'block'
    }
    else {
        document.getElementById('weak').style.display = 'none'
    }

    let newPass = document.getElementById('new_password').value;
    if(newPass != pass){
        document.getElementById('kiemtra').style.display = 'block'
    }
    else if(newPass == pass) {
        document.getElementById('kiemtra').style.display = 'none'
    }
}
var x = false;
function showHide() {
    if (x) {
        document.getElementById("pass").type = 'password';
        document.getElementById("hide").style.display = 'block';
        document.getElementById("show").style.display = 'none';
        document.getElementById("show").style.display = 'none';
        x = false;
    } else {
        document.getElementById("pass").type = 'text';
        document.getElementById("hide").style.display = 'none';
        document.getElementById("show").style.display = 'block';
        x = true;
    }
}

var x2;
function showHide2() {
    if (x2) {
        document.getElementById("new_password").type = 'password';
        document.getElementById("hide2").style.display = 'block';
        document.getElementById("show2").style.display = 'none';
        x2 = false;
    } else {
        document.getElementById("new_password").type = 'text';
        document.getElementById("hide2").style.display = 'none';
        document.getElementById("show2").style.display = 'block';
        x2 = true;
    }
}
var x3;
function showHide3() {
    if (x3) {
        document.getElementById("password").type = 'password';
        document.getElementById("hide").style.display = 'block';
        document.getElementById("show").style.display = 'none';
        x3 = false;
    } else {
        document.getElementById("password").type = 'text';
        document.getElementById("hide").style.display = 'none';
        document.getElementById("show").style.display = 'block';
        x3 = true;
    }
}

function buyClick() {
    alert('Thêm vào giỏ hàng thành công');
}

function submitClick() {
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var phone = document.querySelector('.phone').value;
    var title = document.querySelector('.title').value;
    var textarea = document.querySelector('#noidung').value;

    if (name == '' || email == '' || phone == '' || title == '' || textarea == '') {
        alert('Vui lòng nhập đầy đủ thông tin');
    } else {
        alert('Gửi thông tin thành công');
    }
}


function search() {
    var input = document.getElementById('search').value;
    if (input == '') {
        window.location.href = 'khongtimthay.html';
    }
    else {
        window.location.href = 'search.html';
    }
}
