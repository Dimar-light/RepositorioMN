/*
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("nombreCompleto").readOnly = true;
    document.getElementById("nombreCompleto").style.backgroundColor = "#6a849e60";

});
*/

$(function() {

    $("#nombreCompleto").prop("readOnly", true);
    $("#nombreCompleto").css("backgroundColor", "#6a849e60");
    
});