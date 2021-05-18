var aname = document.getElementById("aname");
var books = document.getElementById("books");
var description = document.getElementById("desc");

function validate(){
    let regexp = /^[A-Za-z0-9\s\-_,\.;:()]+$/;
    
    if(aname.value.trim() == "" || books.value.trim() == "" || description.value.trim() == ""){
        alert("Fields cannot be empty!");
        return false;
    }
    else if(regexp.test(aname.value) && regexp.test(books.value) && regexp.test(description.value)){
        return true;
    }
    else{
        alert("Details filled not proper!");
        return false;
    }
}
function valid_aname(){
    let regexp = /^[a-zA-Z\s]*$/;
    if(regexp.test(aname.value)){
       aname.style.border= "3px solid green";
        p1.innerHTML = "Valid!";
        p1.style.color = "green";
    }
    else{
       aname.style.border= "3px solid red";
        p1.innerHTML = "Invalid!";
        p1.style.color = "red";
    }
}
function valid_books(){
    let regexp = /^[a-zA-Z\s]*$/;
    if(regexp.test(books.value)){
        books.style.border= "3px solid green";
        p2.innerHTML = "Valid!";
        p2.style.color = "green";
    }
    else{
        books.style.border= "3px solid red";
        p2.innerHTML = "Invalid!";
        p2.style.color = "red";
    }
}

function valid_desc()
{
    let regexp = /^[A-Za-z0-9\s\-_,\.;:()]+$/;
    if(regexp.test(desc.value)){
        description.style.border= "3px solid green";
        p4.innerHTML = "Valid!";
        p4.style.color = "green";
    }
 else{
         desc.style.border= "3px solid red";
        p4.innerHTML = "Invalid!";
       p4.style.color = "red";
    }
}