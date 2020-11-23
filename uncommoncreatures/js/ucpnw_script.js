
function toggleImage(id, img1, img2) {
    var imgElement = document.getElementById(id);
    imgElement.src = (imgElement.src === img1) ? img2 : img1;
}
