var popupbox=document.querySelector(".popup-box");
var popupoverlay=document.querySelector(".popup-overlay");
var addpopupbutton=document.getElementById("add-popup-button");
 
addpopupbutton.addEventListener("click",function(){

    popupoverlay.style.display="block"
    popupbox.style.display="block" 
}
)
 
var cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
      popupoverlay.style.display="none"
      popupbox.style.display="none" 
})
var bookcontainer=document.querySelector(".container");
var addbutton=document.getElementById("add-book");
var booktitle=document.getElementById("book-title-input");
var bookauthor=document.getElementById("book-author-input");
var description=document.getElementById("short-description-input");

var popupbox=document.querySelector(".popup-box");
var popupoverlay=document.querySelector(".popup-overlay");

addbutton.addEventListener("click",function(event){
    event.preventDefault()

    var div=document.createElement("div")
    div.setAttribute("class","bookContainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${description.value}</p>
     <button onclick="deletebook(event)">Delete</button>`
    bookcontainer.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"


})
    function deletebook(event)
    {
    event.target.parentElement.remove()
}

