let imgBox = document.querySelector(".imgBox"); 
let qrImage = document.getElementById("qrImage");
let urlInput = document.getElementById("urlInput");

function generateQR(){
qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
                              + encodeURIComponent(urlInput.value);
}
