
document.querySelector("#image-0").addEventListener("click", function() {
    //  document.querySelector("#image-0").style.display = "none";
    document.querySelector("#image-1").style.visibility = "visible";
    alert("bark bark bark");
})
document.querySelector("#image-1").addEventListener("click", function() {
    document.querySelector("#image-2").style.visibility = "visible";
})
document.querySelector("#image-2").addEventListener("click", function() {
    document.querySelector("#image-2").style.visibility = "visible";
})