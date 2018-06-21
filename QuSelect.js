function mySelect(){
    var q = document.querySelector("#selecteurJS span");
    var r = document.querySelector("#selecteurJS span:last-child")
    console.log(r);
    q.style.color = "red";
    q.style.font = "italic bold 15px/0 Georgia, serif";
    r.style.color = "gray";
    r.style.font = "italic bold 15px/0 Georgia, serif";
}
mySelect();