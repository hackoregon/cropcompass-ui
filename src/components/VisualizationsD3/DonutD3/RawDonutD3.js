
	.arc text {
		font: 10px sans-serif;
		text-anchor: middle;
	}
	.arc path {
		stroke: #fff;
	}
</style>

<body>
	<script src="//d3js.org/d3.v3.min.js"></script>
	<script>
		var width = 960,
			height = 500,
			radius = Math.min(width, height) / 2;
		var color = d3.scale.ordinal()
			// will need to change dataset to receive values and display them dynamically
			.range(["rgb(82,59,3)", "rgb(222,222,206)"]);
		var arc = d3.svg.arc()
			.outerRadius(radius - 10)
			.innerRadius(radius - 70);
		var pie = d3.layout.pie()
			.sort(null)
			.value(function(d) {
				return d.population;
			});
		var svg = d3.select("body").append("svg")
			.attr("width", width)
			.attr("height", height)
			.append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
		d3.csv("data.csv", type, function(error, data) {
			if (error) throw error;
			var g = svg.selectAll(".arc")
				.data(pie(data))
				.enter().append("g")
				.attr("class", "arc");
			g.append("path")
				.attr("d", arc)
				.style("fill", function(d) {
					return color(d.data.age);
				});
			// g.append("text")
			// 	.attr("transform", function(d) {
			// 		return "translate(" + arc.centroid(d) + ")";
			// 	})
			// 	.attr("dy", ".35em")
			// 	.text(function(d) {
			// 		return d.data.age;
			// 	});
			// DANNY!!! THIS IS DIFFERENT!!!
			g.append("svg:image")
				.attr("xlink:href", "leaf-brown3x.png")
				.attr("width", "220")
				.attr("height", "220")
				.attr("x", "-100")
				.attr("y", "-110");
				// .attr("x", width/2)
				// .attr("y", height/2);
		});
		function type(d) {
			d.population = +d.population;
			return d;
		}
	</script>
