document.addEventListener("DOMContentLoaded",function(){
    const actionButton = document.getElementById("actionButton");
    const nameBox = document.getElementById("nameBox");
    const closeButton = document.getElementById("closeButton");
    
    actionButton.addEventListener("click", function(){
        nameBox.style.display = "block";
    });
    closeButton.addEventListener("click", function(){
        nameBox.style.display = "none";
    });
});