canvas = document.getElementById("user_canvas");
ctx = canvas.getContext("2d");

var car_1_2_width = 160;
var car_1_2_height = 79;

var x1 = 40;
var x2 = 40;

var y1 = 130;
var y2 = 270;

var background_image = "Bg.jpg";

var car_1_img = "Red.png";
var car_2_img = "Blue.png";

function img_to_canvas() {
    background_img_tag = new Image();
    background_img_tag.onload = upload_background;
    background_img_tag.src = background_image;

    car_1_img_tag = new Image();
    car_1_img_tag.onload = upload_car_1;
    car_1_img_tag.src = car_1_img;

    car_2_img_tag = new Image();
    car_2_img_tag.onload = upload_car_2;
    car_2_img_tag.src = car_2_img;
}

function upload_background() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function upload_car_1() {
    ctx.drawImage(car_1_img_tag, x1, y1, car_1_2_width, car_1_2_height);
}

function upload_car_2() {
    ctx.drawImage(car_2_img_tag, x2, y2, car_1_2_width, car_1_2_height);
}
window.addEventListener("keydown", user_keydown);

function user_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (key_pressed == '37') {
        console.log(
            "Left is pressed"
        );
        left();
    }

    if (key_pressed == '38') {
        console.log(
            "Up is pressed"
        );
        up();
    }

    if (key_pressed == '39') {
        console.log(
            "Right is pressed"
        );
        right();
    }

    if (key_pressed == '40') {
        console.log(
            "Down is pressed"
        );
        down();
    }
}

function left() {

}

function up() {

}

function right() {

}

function down() {

}