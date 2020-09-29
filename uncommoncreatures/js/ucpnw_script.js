
function toggleImage(id, img1, img2) {
    var imgElement = document.getElementById(id);
    imgElement.src = (imgElement.src === img1) ? img2 : img1;
}

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "pnw_images/img_2.jpg") {
        document.getElementById("imgClickAndChange").src = "images/sasquatch_in_nature.png";
    } else {
        document.getElementById("imgClickAndChange").src = "pnw_images/img_2.jpg";
    }
}

function changeImage2() {
    if (document.getElementById("imgClickAndChange2").src == "images/octo_trees.jpg") {
        document.getElementById("imgClickAndChange2").src = "images/octopus.png";
    } else {
        document.getElementById("imgClickAndChange2").src = "images/octo_trees.jpg";
    }
}

function changeImage3() {
    if (document.getElementById("imgClickAndChange3").src == "images/boat_water.jpg") {
        document.getElementById("imgClickAndChange3").src = "images/beav_ness.png";
    } else {
        document.getElementById("imgClickAndChange3").src = "images/boat_water.jpg";
    }
}