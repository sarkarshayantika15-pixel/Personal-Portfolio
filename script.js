//Dark Mode
const btn =
document.getElementById("theme-btn");
btn.onclick = function(){
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")){
    btn.innerHTML = "☀️ Light Mode";
    }else{
    btn.innerHTML="🌙Dark Mode";
}

};
