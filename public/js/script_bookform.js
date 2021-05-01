var title = document.getElementById("title");
var author = document.getElementById("author");
var genre = document.getElementById("genre");

function validate(){
    let regexp = /^([a-zA-Z])+$/;
    
    if(title.value.trim() == "" || author.value.trim() == "" || genre.value.trim() == ""){
        alert("Fields cannot be empty!");
        return false;
    }
    else if(regexp.test(title.value) && regexp.test(author.value) && regexp.test(genre.value)){
        return true;
    }
    else{
        alert("Details filled not proper!");
        return false;
    }
}
function valid_title(){
    let regexp = /^([a-z A-Z])+$/;
    if(regexp.test(title.value)){
        title.style.border= "3px solid green";
        p1.innerHTML = "Valid!";
        p1.style.color = "green";
    }
    else{
        title.style.border= "3px solid red";
        p1.innerHTML = "Invalid!";
        p1.style.color = "red";
    }
}
function valid_author(){
    let regexp = /^([a-z A-Z])+$/;
    if(regexp.test(author.value)){
        author.style.border= "3px solid green";
        p2.innerHTML = "Valid!";
        p2.style.color = "green";
    }
    else{
        author.style.border= "3px solid red";
        p2.innerHTML = "Invalid!";
        p2.style.color = "red";
    }
}
function valid_genre(){
    let regexp = /^([a-z A-Z])+$/;
    if(regexp.test(genre.value)){
        genre.style.border= "3px solid green";
        p3.innerHTML = "Valid!";
        p3.style.color = "green";
    }
    else{
        genre.style.border= "3px solid red";
        p3.innerHTML = "Invalid!";
        p3.style.color = "red";
    }
}