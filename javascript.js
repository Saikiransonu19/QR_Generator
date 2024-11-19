let inputText = document.getElementById('text-feild');
let qrBox = document.getElementById('qrBox');
let qrCode = document.getElementById('qrCode');


function GenerateQR(){
   
    if(inputText.value.length > 0){
    qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
    document.getElementById("qrBox").style.display = "block";
}
    else{
        inputText.classList.add('error');
        setTimeout(() => {
        inputText.classList.remove('error');
        },1000);
        document.getElementById("qrBox").style.display = "none";

    }
}