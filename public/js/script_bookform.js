var title = document.getElementById("title");
var author = document.getElementById("author");
var genre = document.getElementById("genre");
var desc = document.getElementById("desc");

function validate()
{
    let regexp = /^[A-Za-z0-9\s\-_,\.;:()]+$/;
    
    if(title.value.trim() == "" || author.value.trim() == "" || genre.value.trim() == "" || desc.value.trim() == ""){
        alert("Fields cannot be empty!");
        return false;
    }
    else if(regexp.test(title.value) && regexp.test(author.value) && regexp.test(genre.value) && regexp.test(desc.value)){
        return true;
    }
    else{
        alert("Details filled not proper!");
        return false;
    }
}
function valid_title()
{
    let regexp = /^[a-zA-Z\s]*$/;
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
function valid_author()
{
    let regexp = /^[a-zA-Z\s]*$/;
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
    let regexp = /^[a-zA-Z\s]*$/;
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
function valid_desc()
{
    let regexp = /^[A-Za-z0-9\s\-_,\.;:()]+$/;
    if(regexp.test(desc.value)){
        desc.style.border= "3px solid green";
        p4.innerHTML = "Valid!";
        p4.style.color = "green";
    }
 else{
         desc.style.border= "3px solid red";
        p4.innerHTML = "Invalid!";
       p4.style.color = "red";
    }
}