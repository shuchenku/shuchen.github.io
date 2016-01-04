angular.module('githubpage',['ui.router','d3'])
.controller('basicController',['$rootScope','$scope','resume_items','contact',
	function($rootScope,$scope,resume_items,contact){

		$scope.resume_items = resume_items;
		$scope.contact = contact;
		$scope.skills = false;

		$scope.expand = function(list_items){

			if (list_items.show==true) {
				list_items.show=false;
			} else {
				list_items.show=true;
			}

			if ((list_items.section!="SKILLS" && $scope.skills) || (list_items.section==="SKILLS" && list_items.show)) {
				$scope.skills = true;
				$rootScope.$broadcast("show it!");
			} else {
				$scope.skills = false;
			}
		}
	}	
])
.controller('MsgCtrl',[
	'$scope',
	function($scope){}
	])
.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/profil");

	$stateProvider
	.state('profile', {
		url: '/profile',
		templateUrl: 'partials/profile.html',
		controller: 'basicController'
	})
	.state('message', {
		url: '/message',
		templateUrl: 'partials/message.html',
		controller: 'MsgCtrl'
	})
	.state('skills', {
		url: '/skills',
		templateUrl: 'partials/skills.html',
		controller: 'basicController'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'partials/contact.html',
		controller: 'basicController'
	})
	.state('projects', {
		url: '/projects',
		templateUrl: 'partials/temp.html',
		controller: 'basicController'
	})
	.state('temp', {
		url: '/temp',
		templateUrl: 'partials/temp.html',
		controller: 'basicController'
	})
})
.directive('d3Bars',['d3Service', function(d3Service) {
	return {
		restrict: 'EA',
		scope: {
		  data: "=",
          label: "@",
          onClick: "&",
		},
		link: function(scope, element, attrs) {
			d3Service.d3().then(function(d3) {

	          // hard-code data
	        scope.data = [
	          {name:"PostgreSQL",score:88},
	          {name:"Ruby on Rails",score:87},
	          {name:"Matlab",score:86},
	          {name:"Java",score:85},
	          {name:"Web application development",score:85},
	          {name:"RESTful webservice design",score:84},
	          {name:"Sinatra",score:83},
	          {name:"HTML",score:82},
	          {name:"Bootstrap",score:80},
	          {name:"Weka",score:80},
	          {name:"Angular.js",score:78},
	          {name:"JavaScript",score:75},
	          {name:"Oracle",score:72},
	          {name:"Mobile application development",score:70},
	          {name:"MIT Scheme",score:70},
	          {name:"Machine learning",score:60},
	          {name:"Data mining",score:58},
	          {name:"CSS",score:56},
	          {name:"ArcGIS 10",score:52},
	          {name:"C++",score:50},
	          {name:"Ionic Framework",score:50},
	          {name:"Python",score:40},
	          {name:"Fortran",score:30},
	          {name:"Text mining",score:30},
	          {name:"Atmospheric Modeling",score:80},
	          {name:"Atmospheric Physics",score:75},
	          {name:"OriginLab",score:70},
	          {name:"Glaciology",score:50},
	          {name:"Surfer",score:50},
	          {name:"SPSS",score:45},
	          {name:"Kingdom Suite",score:40},
	          {name:"Grads",score:30},
	        ];

			var margin = parseInt(attrs.margin) || 20,
			barHeight = parseInt(attrs.barHeight) || 20,
			barPadding = parseInt(attrs.barPadding) || 5;

			var svg = d3.select(element[0])
			.append('svg')
			.data(scope.data)
			.style('width', '100%');

	        // Browser onresize event
	        window.onresize = function() {
	          scope.$apply();
	        };

	        scope.$on("show it!", function() {
	          console.log(d3.select(element[0]));
			  scope.render(scope.data);
	        })

	        // Watch for resize event
	        scope.$watch(function() {
	          	return angular.element(window)[0].innerWidth;
	          }, function() {
	          	scope.render(scope.data);
	          }
	        );

	        scope.render = function(data) {
	          // our custom d3 code
	          svg.selectAll('*').remove();

	          if (!scope.data) return;
	          // setup variables
	          var width = (d3.select(element[0]).node().parentNode.parentNode.offsetWidth - margin)*0.8,
	          // calculate the height
	          height = scope.data.length * (barHeight + barPadding),
	    	  // Use the category20() scale function for multicolor support
	    	  color = d3.scale.category20(),
	    	  // our xScale
	    	  xScale = d3.scale.linear()
	    	  .domain([0, d3.max(data, function(d) {
	    	  	return d.score;
	    	  })])
	    	  .range([0, width]);

	    	 // set the height based on the calculations above
	    	 svg.attr('height', height);

	    	 //create the rectangles for the bar chart
	    	 svg.selectAll('rect')
	    	 .data(scope.data).enter()
	    	 .append('rect')
	    	 .attr('height', barHeight)
	    	 .attr('width', 140)
	    	 .attr('x', Math.round(margin/2))
	    	 .attr('y', function(d,i) {
	    	 	return i * (barHeight + barPadding);
	    	 })
	    	 .attr('fill', function(d) { return color(d.score); })
	    	 .transition()
	    	 .duration(1000)
	    	 .attr('width', function(d) {
	    	 	return xScale(d.score);
	    	 });

	    	 svg.selectAll('text')
              .data(scope.data)
              .enter()
                .append("text")
                .attr("fill", "#fff")
                .attr("y", function(d, i){return i * 35 + 22;})
                .attr("x", 15)
                .text(function(d){return d[scope.label]+ ": "+ d.score;})
              .style('font-weight', 'bold','font','Arial')
              .style('font-size','16px')
    	}
    });
}};
}])
.constant('resume_items',
	[{section: "EDUCATION", 
	items: [{title: "Brandeis University", 
	loc:"Waltham, MA", 
	content:"Post Baccalaureate/Master of Arts, Computer Science, August 2014 ~ present (Expected to graduate in May 2016), GPA 3.77"
},
{title: "University of Missouri, Kansas City", 
loc:"Kansas City, Mo", 
content:"Master of Science, Computer Science, January 2014 ~ May 2014, Transferred out, GPA 3.9"
},
{title: "University of Kansas", 
loc:"Lawrence, KS", 
content:"Master of Science, Atmospheric Science, Graduated May 2013, GPA 3.68"
},
{title: "Nanjing University of Information Science and Technology", 
loc:"Nanjing, China", 
content:"Bachelor of Science, Atmospheric Science (Atmospheric Physics), Graduated May 2010"+"\n"+"Major GPA 83/100 Overall GPA 79/100"
}]},
{section: "EXPERIENCE",
items: [{title: "Teaching Assistant (Operating Systems)", 
loc:"Brandeis University, August 2015 – present", 
content:"– Grade assignments; hold office hours and answer students’ questions"+"\n"+"– Programming assignment design, hosting tutorial sessions, and provide sample solutions"
},
{title: "Contributor (Application Developer)", 
loc:"FashionSnapp, Award winner of the Brandeis University SPARK Program, May 2015 – present", 
content:"– Rails API Backend development; database design and RESTful API design"+"\n"+"– Frontend development using Angular.js"
},
{title: "Data Mining Engineer, Focus Technology Co., Ltd.", 
loc:"Nanjing, China, July 2013 – January 2014", 
content:"– Managing business data using Oracle Database."+"\n"+"– Studied and improved a hybrid recommender system that meets Made-in-China.com’s (a B2B E-Commerce platform operated by Focus Technology Co.) needs. Presented at The International Conference on Advanced Cloud and Big Data (CBD)."+"\n"+"– Text mining using Apache Solr; Assisted coworkers set up Solr Server and optimized the Chinese tokenizer."
},
{title: "Graduate Research Assistant, Center for Remote Sensing Of Ice Sheets (CReSIS)", 
loc:"Lawrence, Kansas, United States, August 2010 – December 2012 ", 
content:"– Presented at International Symposium on Glaciers and Ice Sheets in a Warming Climate, IGS (International Glaciological Society), Fairbanks, Alaska, June 25 – 29, 2012"+"\n"+"– Processed CReSIS geolocated radar data using MATLAB and ArcGIS"+"\n"+"– Employed Self-Organizing Maps (SOM) to identify synoptic scale weather patterns impacting Greenland Ice Sheet’ accumulation"+"\n"+"– Guided an undergraduate student with his project and presentation as a Graduate Student Advisor during Research Experience for Undergraduates (REU) program by CReSIS, June 2011 – July 2011"
},
{title: "Research Assistant", 
loc:"Nanjing University of Information Science and Technology, May 2008 – June 2010", 
content:"– Participated in research projects including:\n  • Fog Damage Monitoring and Early Warning for Yangtze River Delta and Damage Assessment research (the Special Funds for Public Welfare of China);\n  • Extended Research of the Mechanism Model and Forecasting for Mesoscale Severe Weather Process Based on the Information Fidelity (Natural Science Foundation of China (NSFC));\n  • Observation and analysis of Summer Aerosol Characteristics in Various Functional Areas of Nanjing, supported by: National Basic Research Program (973 Program); Special Funds for Public Welfare of China; National College Students Innovation Program"}]},
{section:"PUBLICATIONS/PRESENTATIONS",
items: [{title: "Synoptic Scale Weather Patterns Associated with Annual Snow Accumulation Variability in North-Central Greenland (Presentation)", 
loc:"Program IGS (International Glaciological Society) Symposium, Fairbanks, Alaska, 25 - 29 June 2012", 
content:"Presenter: S. Chen"
},
{title: "Analysis of Summer Aerosol Characteristics in Various Functional Areas of Nanjing", 
loc:"Journal of Nanjing University of Information Science and Technology (natural science edition), 2010 Volume 2 (No.1)", 
content:"Authors: H. Wang, B. Zhu, L Ma, S. Chen, C. Chen, P. Wang"
},
{title: "An Application of Recommender System with Mingle-TopN Algorithm on B2B Platform", 
loc:"The International Conference on Advanced Cloud and Big Data (CBD), Southeast University, Nanjing, China, 13 - 15, December 2013", 
content:"Authors: P. Xia, J. Xiao, S. Chen"
}]},
{section:"SKILLS"}])
.constant('contact',[{title:"Address:",content:"60 Hope Ave, Apt 101,"+"\n"+"Waltham, Massachusetts, 02453"},
	{title:"Tel:",content:"(785)424-0893"}])

