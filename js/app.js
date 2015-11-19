/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var isMouseDown = false;

    var canvas = document.getElementById('drawing-canvas');
    var context = canvas.getContext('2d');

    var colorSelector = document.getElementById('line-color-inp');

    var lineWidthSelector = document.getElementById('line-width-inp');

    var endCapSelector = document.getElementById('line-end-cap');

    var eraser = document.getElementById('eraser');


    colorSelector.addEventListener('change', function() {
        var newColor = colorSelector.value;
        //console.log(newColor);
        context.strokeStyle = newColor;
    });

    lineWidthSelector.addEventListener('change', function() {
        var newWidth = lineWidthSelector.value;
        console.log(newWidth);
        context.lineWidth = newWidth;
    });

    endCapSelector.addEventListener('change', function() {
        var newEndCap = endCapSelector.value;
        context.lineCap = newEndCap;
    })

    eraser.addEventListener('click', function() { //make this toggle

    });


    canvas.addEventListener('mousedown', function(event) {
        isMouseDown = true;

        //begin path
        context.beginPath();

        //move the drawing pen
        context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);

    });

    canvas.addEventListener('mouseup', function(event) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.stroke();
        isMouseDown = false;
    });

    canvas.addEventListener('mousemove', function(event) {
        if (isMouseDown) {
            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            context.stroke();

        }
    });


}); //DOMContentLoaded
