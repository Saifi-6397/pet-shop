$(function() {
        $(".nav-btn").click(function() {
            $("header nav li").slideToggle();
        });

        //scroll up to top 
        $(window).on("scroll", function() {
            if ($(window).scrollTop()) {
                $("header").addClass('scroll')
            } else {
                $('header').removeClass('scroll');
            }
        });

        //scroll fix login form
        $(window).on("scroll", function() {
            if ($(window).scrollTop()) {
                $(".login-form").addClass('scroll-login-form-fix')
            } else {
                $('.login-form').removeClass('sscroll-login-form-fix');
            }
        });

        //aos animation
        AOS.init({
            duration: 1000,
            delay: 400,

        });

    })
    //login form open and close
function open_login() {
    document.getElementById("login-form").style.right = "10px"

}

function close_login() {
    document.getElementById("login-form").style.right = "-300px"

}

//validation
var user_name = document.getElementById("name");
var user_email = document.getElementById("email");
var user_phone = document.getElementById("phone");
var return_val = 1;

function Validation() {
    if (user_name.value == "") {
        document.getElementById("name_error").innerHTML = "Please Enter Your Name";
        return_val = 0;
    } else {
        document.getElementById("name_error").innerHTML = "";
        return_val = 1;
    }
    if (user_email.value == "") {
        document.getElementById("email_error").innerHTML = "Please Enter Your Email";
        return_val = 0;
    } else {
        document.getElementById("email_error").innerHTML = "";
        return_val = 1;
    }
    if (user_phone.value == "") {
        document.getElementById("phone_error").innerHTML = "Please Enter Your Phone No";
        return_val = 0;
    } else {
        document.getElementById("phone_error").innerHTML = "";
        return_val = 1;
    }

    if (return_val) {
        return true;
    } else {
        return false;
    }
}