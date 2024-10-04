let form=document.querySelector("form")
let input=document.querySelector("input")
let select=document.querySelector("select")
let img=document.querySelector("img");
let download=document.querySelector("#download");
let QRurl='';
// functions which generate  QR
const getQR = async (e)=>{
    e.preventDefault();
    const response= await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`);
    img.setAttribute("src", response.url)
    const blob= await response.blob();
    QRurl=URL.createObjectURL(blob);
    
}

// code for dounload qr
const downloadQr=()=>{
    if(!QRurl) return;
    const link=document.createElement("a");
    link.href=QRurl;
    link.download="QRImg.png";
    link.click();
}
form.addEventListener('submit', getQR);
download.addEventListener("click",downloadQr)
