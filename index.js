// create by Liem mặt L :0
// first load the html home in the container
$(function () {
    $(".container").load("home.html");
})
function handleHome() {
    $(".container").load("home.html");
}
function handleLogin() {
    $(".container").load("login.html");
}
function handleCart() {
    $(".container").load("cart.html");
}

const userInfor = {
    username: "LiemPth@gmail.com.vn",
    password: "liemdeptrai"
}

// function login in login.html and validation form
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.length === 0 || password.length === 0) {
        alert("Not filled in enough information")
    } else {
        if ( username.length < 6 || password.length < 6) {
            alert("Username or Passworld must be more than 6 ")
        } else {
            if (username !== userInfor.username || password !== userInfor.password) {
                alert("username or password is worrong")
            } else {
                alert("hello Liêm đẹp trai khoai to nhất hệ mặt trời =)")
            }
        }
    }
}

// function load page and validation form registration
function registration() {
    $(".container").load("registrater.html");
}

function handleregistration() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var numberphone = document.getElementById("numberphone").value;
    var respassword = document.getElementById("respassword").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var checkbox = document.getElementById("checkbox").checked;

    if (checkbox === null) {
        console.log(checkbox);
        alert("Please accept the terms of registration");
    } else {
        if (firstname.length === 0 || lastname.length === 0 ||
            numberphone.length === 0 || respassword.length === 0 ) {
           alert("Not filled in enough information")
       } else {
           if(respassword.length < 6  ) {
                alert("Passworld must be more than 6 ");
           } else {
                const information = {firstname ,lastname ,numberphone,respassword,day, month, year}
                console.log(information);
                alert("hello" + firstname + lastname );
           }
       }
    }
}