let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
}

document.querySelector('#close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
};

document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});



// form validation 
function validData(){
    email = document.getElementById("email").value
    password = document.getElementById("password").value

    if (email == "" || password == ""){

        alert("email and password field most not be empty!")
        return false;
    }
    else{
        return true;
    }
}

function register_validData(){
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    name = document.getElementById("name").value

    if (email == "" || password == "" || name ==""){
        alert("email, password and name  field most not be empty!")
        return false;
    }
    else{
        return true;
    }
     
}