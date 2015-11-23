'use strict';

window.onload = function() {
	var p = Raphael("main");

	var newCircle = p.circle(800, 190, 40)
	.attr({fill: 'red'})

	p.circle(320, 240, 60)
		.animate({fill: '#f0f', stroke: 'red', 'stroke-width': 80, 'stroke-opacity': 0.5}, 2000)
		.hover(function(){
			this.animate({fill: 'darkcyan', stroke: 'green', 'stroke-width': 30, 'stroke-opacity': 0.75}, 1000, 'elastic');
		}, function(){
			this.animate({fill: "#00a", stroke: "gray", "stroke-width": 70, "stroke-opacity": 0.5}, 2500)
		})

	var newRect = p.rect(450, 210, 200, 100);

	newRect.animate({transform: "T 100 0, r 90"}, 2000);

	newCircle.mouseover(function(){
		newRect.animate({fill: "#0ff", stroke: "blue", "stroke-width": 50, "stroke-opacity": 0.33}, 2000)
	})
	.click(function(){
		this.animate({fill: "#0f0", stroke: "crimson", "stroke-width": 50, "stroke-opacity": 0.33}, 1500);
	});









}