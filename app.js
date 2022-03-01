let canvas = document.querySelector("canvas");

//making canvas of window size
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//tool will help in accessing/working on canvas
let tool = canvas.getContext("2d");

//Since fillRect's default colour is black so to change the colour
tool.fillStyle = "red";

//filled rectangle
let filledRect = tool.fillRect(0, 0, 200, 200);

//changing the stroke rect's colour from default i.e. black
tool.strokeStyle = "red";

//stroked rectangle
let strokedRect = tool.strokeRect(200, 0, 500, 500);


