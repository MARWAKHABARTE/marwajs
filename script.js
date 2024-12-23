function upDate(previewPic) {
    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerHTML = previewPic.alt;

    console.log(`Image mise à jour : ${previewPic.alt}, ${previewPic.src}`);
}

function unDo() {
    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";

    console.log("Image réinitialisée à l'état d'origine");
}
