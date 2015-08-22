//the app.js for 2 variables Venn diagram
//for exercises

var selectedElements = [];			//temporary array for adding the ID's for answer areas clicked
var answer = new Answer();			//calling the function Answer from the controller.js file, creating an instance

var w = 700,
    h = 400;

//creating the SVG element with the above given height and width
var svg = d3.select("#venn").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

//creating the rectangular Universal set
var uni = svg.append("g").append("rect")
			.attr("width", 490)
			.attr("height", 380)
			.attr("x", 110)
			.attr("y", 10)
			.attr("id","uni")
			.attr("fill","none")
			.attr("stroke","#260126")
			.attr("stroke-width",150);

//creating a gradient to fill when the 'click' event is triggered	
var gradient = svg.append("svg:defs")
  .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");
gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#443266")
    .attr("stop-opacity", 1);
gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#fff")
    .attr("stop-opacity", 1);

//defining the Venn diagram circles using the clipPath element of SVG	
var defs = svg.append("svg:defs");	

defs.append("svg:clipPath")
    .attr("id", "circle1")
  .append("svg:circle")
    .attr("cx", 250)
    .attr("cy", 200)
    .attr("r", 180);

defs.append("svg:clipPath")
    .attr("id", "circle2")
  .append("svg:circle")
    .attr("cx", 450)
    .attr("cy", 200)
    .attr("r", 180);

//clipping the circles using a rectangular bounding box, for all 3 areas	
svg.append("svg:g").append("svg:rect")
    .attr("clip-path", "url(#circle1)")
    .attr("width", w)
    .attr("height", h)
	.attr("id","c1")
    .style("fill", "#443266")
	.on('mouseover', function(d) {
		d3.select(this)
			.style("fill", "Green ");
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#443266");
	})
	.on('click',function(d){
		d3.select(this)
			   .style("fill", "url(#gradient)");
		if(answer.checkAnswer("c1") === true){						//calling checkAnswer() function from helper.js
		   answer.compareAnswer("c1", selectedElements);			//calling compareAnswer() function from helper.js
		}
	});

svg.append("svg:g").append("svg:rect")
    .attr("clip-path", "url(#circle2)")
    .attr("width", w)
    .attr("height", h)
	.attr("id","c2")
    .style("fill", "#443266")
	.on('mouseover', function(d) {
	   d3.select(this)
	     .style("fill", "Green ");
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#443266");
	})
	.on('click',function(d){
		d3.select(this)
			   .style("fill", "url(#gradient)");
		if(answer.checkAnswer("c2") == true){
		   answer.compareAnswer("c2", selectedElements);
		}
	});
	
svg.append("svg:g")
    .attr("clip-path", "url(#circle2)")
  .append("svg:rect")
    .attr("clip-path", "url(#circle1)")
    .attr("width", w)
    .attr("height", h)
	.attr("id","inter")
    .style("fill", "#C3C3E5")
	.on('mouseover', function(d) {
	   d3.select(this)
	     .style("fill", "Green ");
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#C3C3E5");
	})
	.on('click',function(d){
		d3.select(this)
			   .style("fill", "url(#gradient)");
		if(answer.checkAnswer("inter") == true){
		   answer.compareAnswer("inter", selectedElements);
		}
	});


svg.select("rect")
	.on("mouseover", function(d){
		d3.select("rect")
			.style("stroke", "Green ");
	})
	.on("mouseout", function(d){
		d3.select("rect")
			.style("stroke", "#260126");
	})
	.on("click",function(d){
		d3.select(this)
			   .style("stroke", "url(#gradient)");
		if(answer.checkAnswer("uni") == true){
		   answer.compareAnswer("uni", selectedElements);
		}
	});
	
svg.append("g").append("text")
	.text("UNIVERSAL")
	.attr("x",38)
	.attr("y",20)
	.attr("fill","white")
	.attr("font-size",20);
	
svg.append("g").append("text")
	.text("A")
	.attr("x",225)
	.attr("y",190)
	.attr("fill","white")
	.attr("font-size",20);
	
svg.append("g").append("text")
	.text("B")
	.attr("x",468)
	.attr("y",190)
	.attr("fill","white")
	.attr("font-size",20);

//creating another SVG to contain the feedback and score incrementation, i.e. '+1'	
var svg2 = d3.select("#vennfb").append("svg:svg")
    .attr("width", 700)
    .attr("height",100);
	
var fmsg = svg2.append("g").append("text")
			.text("+1")
			.attr('x',520)
			.attr('y',70)
			.attr('fill','red')
			.attr('font-size',40)
			.style('opacity',0); 

var bmsg = svg2.append("g").append("text")
			.text("Bravo!")
			.attr('x',320)
			.attr('y',70)
			.attr('fill','black')
			.attr('font-size',30)
			.style('opacity',0); 
			
var gmsg = svg2.append("g").append("text")
			.text("Great!")
			.attr('x',320)
			.attr('y',70)
			.attr('fill','black')
			.attr('font-size',30)
			.style('opacity',0); 

//functions to display the feedback messages above			
function displayfb(fmsg){
	  fmsg.style("opacity", 1)
			.transition()
			.delay(1000)
			.duration(1000)
			.style("opacity",0)
			.attr('x',920)
			.attr('y',-150)
			.transition()
			.attr('x',520)
			.attr('y',70);
}
function displayfbb(bmsg){
	  bmsg.style("opacity", 1)
			.transition()
			.delay(1000)
			.duration(1000)
			.style("opacity",0);
}
function displayfbg(gmsg){
	  gmsg.style("opacity", 1)
			.transition()
			.delay(1000)
			.duration(1000)
			.style("opacity",0);
}
