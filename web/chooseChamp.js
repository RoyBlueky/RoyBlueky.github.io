function champIconHover(x) {
    x.style.border = "2px solid #d1c0a5";
}

function champIconClick(x) {
    x.style.border = "2px solid #d1c0a5";
    document.getElementById('lockin').src = "lockinBtnEnabled.png";
    x.clicked = true;
}

function champIcon(x) {
    if (x.clicked != true){
        x.style.border = "0px";
    }
}

function lockinBtnHover(x) {
    if(x.src == "lockinBtnEnabled.png"){
        alert("1");
        x.src="lockinBtnHover.png";
    }
}

function lockinBtnClick(x) {
    if(x.src === "lockinBtnHover.png"){
        x.src="lockinBtnClick.png";
    }
}

function lockinBtn(x) {
    if(x.src === "lockinBtnHover.png"){
        x.src="lockinBtnEnabled.png";
    }
       
}