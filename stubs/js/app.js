'use strict';

window.onload = function() {
    var p = Raphael("main");

    var newCircle = p.circle(800, 190, 40)
        .attr({fill: 'red'})

    p.circle(320, 240, 60)
        .animate({fill: 'purple', stroke: 'gold', 'stroke-width': 80, 'stroke-opacity': .5}, 2000)
        .hover(function() {
            this.animate({fill: 'red', stroke: 'green', 'stroke-width': 15, 'stroke-opacity': 0.75}, 1000, 'elastic');
        }, function() {
            this.animate({fill: 'cyan', stroke: 'blue', 'stroke-width': 95, 'stroke-opacity': 0.25}, 2500)
        });

    var newRect = p.rect(450, 210, 200, 100);

    newRect.animate({transform: 'T 100 0, r 90'}, 2000);

    newCircle.mouseover(function() {
        newRect.animate({fill: 'darkbrown', stroke: 'lightblue', 'stroke-width': 15, 'stroke-opacity': 0.33}, 2000)
    })
        .click(function() {
            this.animate({fill: 'pink', stroke: 'white', 'stroke-width': 65, 'stroke-opacity':.50}, 1000)
        });
}