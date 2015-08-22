var w = 700,
    h = 570;

var svg = d3.select("#venn").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

var uni = svg.append("g").append("rect")
			.attr("width", 490)
			.attr("height", 480)
			.attr("x", 110)
			.attr("y", 10)
			.attr("id","uni")
			.attr("fill","none")
			.attr("stroke","#260126")
			.attr("stroke-width",150);
			
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

defs.append("svg:clipPath")
    .attr("id", "circle3")
  .append("svg:circle")
    .attr("cx", 350)
    .attr("cy", 370)
    .attr("r", 180);

svg.append("g").append("svg:rect")
    .attr("clip-path", "url(#circle1)")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "#443266")
	.on('mouseover', function(d) {
		d3.select(this)
			.style("fill", "Green ");
		d3.select("#venn svg g#A.chart rect")
			.style("fill", "Green ")
			.style("stroke","#443266")
			.style("stroke-width", 5);
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#443266");
			d3.select("#venn svg g#A.chart rect")
				.style("fill", "#260126")
				.style("stroke-width", 0);
	});

svg.append("g").append("svg:rect")
    .attr("clip-path", "url(#circle2)")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "#443266")
	.on('mouseover', function(d) {
	   d3.select(this)
	     .style("fill", "Green ");
			d3.select("#venn svg g#B.chart rect")
				.style("fill", "Green ")
				.style("stroke","#443266")
				.style("stroke-width", 5);
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#443266");
			d3.select("#venn svg g#B.chart rect")
				.style("fill", "#260126")
				.style("stroke-width", 0);
	});

svg.append("g").append("svg:rect")
    .attr("clip-path", "url(#circle3)")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "#443266")
	.on('mouseover', function(d) {
	   d3.select(this)
	     .style("fill", "Green ");
			d3.select("#venn svg g#C.chart rect")
				.style("fill", "Green ")
				.style("stroke","#443266")
				.style("stroke-width", 5);
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#443266");
			d3.select("#venn svg g#C.chart rect")
				.style("fill", "#260126")
				.style("stroke-width", 0);
	});

svg.append("g").append("svg:g")
    .attr("clip-path", "url(#circle1)")
  .append("svg:rect")
    .attr("clip-path", "url(#circle2)")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "#C3C3E5")
	.on('mouseover', function(d) {
	   d3.select(this)
	     .style("fill", "Green ");
			d3.select("#venn svg g#A_B.chart rect")
				.style("fill", "Green ")
				.style("stroke","#443266")
				.style("stroke-width", 5);
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#C3C3E5");
			d3.select("#venn svg g#A_B.chart rect")
				.style("fill", "#260126")
				.style("stroke-width", 0);
	});

svg.append("g").append("svg:g")
    .attr("clip-path", "url(#circle2)")
  .append("svg:rect")
    .attr("clip-path", "url(#circle3)")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "#C3C3E5")
	.on('mouseover', function(d) {
	   d3.select(this)
	     .style("fill", "Green ");
			d3.select("#venn svg g#B_C.chart rect")
				.style("fill", "Green ")
				.style("stroke","#443266")
				.style("stroke-width", 5);
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#C3C3E5");
			d3.select("#venn svg g#B_C.chart rect")
				.style("fill", "#260126")
				.style("stroke-width", 0);
	});

svg.append("g").append("svg:g")
    .attr("clip-path", "url(#circle3)")
  .append("svg:rect")
    .attr("clip-path", "url(#circle1)")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "#C3C3E5")
	.on('mouseover', function(d) {
	   d3.select(this)
	     .style("fill", "Green ");
			d3.select("#venn svg g#A_C.chart rect")
				.style("fill", "Green ")
				.style("stroke","#443266")
				.style("stroke-width", 5);
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#C3C3E5");
			d3.select("#venn svg g#A_C.chart rect")
				.style("fill", "#260126")
				.style("stroke-width", 0);
	});

svg.append("g").append("svg:g")
    .attr("clip-path", "url(#circle3)")
  .append("svg:g")
    .attr("clip-path", "url(#circle2)")
  .append("svg:rect")
    .attr("clip-path", "url(#circle1)")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "#F1F0FF")
	.on('mouseover', function(d) {
	   d3.select(this)
	     .style("fill", "Green ");
			d3.select("#venn svg g#I.chart rect")
				.style("fill", "Green ")
				.style("stroke","#443266")
				.style("stroke-width", 5);
	})
	.on('mouseout', function(d) {
		d3.select(this)
	     .style("fill", "#F1F0FF");
			d3.select("#venn svg g#I.chart rect")
				.style("fill", "#260126")
				.style("stroke-width", 0);
	});

svg.select("rect")
	.on("mouseover", function(d){
		d3.select("rect")
			.style("stroke", "Green ");
		d3.select("#venn svg g#U.chart rect")
				.style("fill", "Green ")
				.style("stroke","#443266")
				.style("stroke-width", 5);
	}
	)
	.on("mouseout", function(d){
		d3.select("rect")
			.style("stroke", "#260126");
		d3.select("#venn svg g#U.chart rect")
				.style("fill", "#260126")
				.style("stroke-width", 0);
	});
	
var svg2 = d3.select("#venn").append("svg")
    .attr("width", 110)
    .attr("height", 100);
	
var width = 110,
    barHeight = 30;

var x = d3.scale.linear()
		.range([0, width]);

d3.json("data1.json", function(error, data) {

	svg2.attr("height", barHeight * data.length);
	
	var bar = svg2.selectAll("g")
		.data(data)
		.enter().append("g")
			.attr("class", "chart")
			.attr("id", function(d){ return d.id; })
			.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

	bar.append("rect")
		.attr("width", 110)
		.attr("height", barHeight - 1);

	bar.append("text")
		.attr("x", function(d) { return 90; })
		.attr("y", barHeight / 2)
		.attr("dy", ".35em")
		.text(function(d) { return d.name; });
});

svg.append("g").append("text")
	.text("UNIVERSAL")
	.attr("x",38)
	.attr("y",20)
	.attr("fill","white")
	.attr("font-size",15);
	
svg.append("g").append("text")
	.text("A")
	.attr("x",225)
	.attr("y",190)
	.attr("fill","white")
	.attr("font-size",15);
	
svg.append("g").append("text")
	.text("B")
	.attr("x",465)
	.attr("y",190)
	.attr("fill","white")
	.attr("font-size",15);
	
svg.append("g").append("text")
	.text("C")
	.attr("x",345)
	.attr("y",390)
	.attr("fill","white")
	.attr("font-size",15);
