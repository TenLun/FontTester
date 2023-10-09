let text = document.querySelector('#text-input');
let num = document.querySelector('#size-num');
let fileInput = document.getElementById("fontinput");

function changeV(value, style){
    if (style=="size"){
        num.innerHTML = value.value + " px";
        text.style['font-size'] = value.value + 'px';
    }else{
        text.style['letter-spacing'] = value.value + 'px';
    }
}

fileInput.addEventListener("change", function () {
    var reader = new FileReader();
    var file = fileInput.files[0];
    reader.onload=function(){
        var myFonts = new FontFace('YourFont', 'url("./TenlunLight-Reg.otf")',{});
        myFonts.load().then(function(loadFace){
            document.fonts.add(loadFace);
        });
    };
    reader.readAsText(file);
});
