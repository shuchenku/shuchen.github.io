angular.module('githubpage',['ngRoute'])
.controller('MainCtrl',['$scope','resume_items','skills','contact',
	function($scope,resume_items,skills,contact){

		$scope.resume_items = resume_items;
		$scope.skills = skills;
		$scope.contact = contact;

		$scope.expand = function(list_items){
			if (list_items.show==true) {
				list_items.show=false;
			} else {
				list_items.show=true
			}
		}
	}
])
.controller('MsgCtrl',[
	'$scope',
	function($scope){}
])
.config(function ($routeProvider) {

		$routeProvider
		.when('/profile', {
			templateUrl: 'profile.html',
   			controller: 'MainCtrl'
		})
		.when('/message', {
			templateUrl: 'message.html',
			controller: 'MsgCtrl'
		})
		.when('/skills', {
			templateUrl: 'skills.html',
			controller: 'MainCtrl'
		})
		.when('/contact', {
			templateUrl: 'contact.html',
			controller: 'MainCtrl'
		})
		.otherwise({
   			redirectTo: '/profile'
 		});
	})
.constant('skills',["Java","JavaScript","MIT Scheme","C++","Fortran","Python","Ruby on Rails",
	"Sinatra","Angular.js","HTML","CSS","Bootstrap","Ionic Framework","Oracle","PostgreSQL",
	"Matlab","Weka","ArcGIS 10","Web application development","Mobile application development",
	"RESTful webservice design","Machine learning","Data mining", "text mining (Apache Solr) ",
	"Atmospheric Modeling","Atmospheric Physics","Glaciology","SPSS","Surfer","Grads",
	"OriginLab","Kingdom Suite"])
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
 		loc:"Project DressCode, Award winner of the Brandeis University SPARK Program, May 2015 – present", 
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
 		content:"– Participated in research projects including:\n\t• Fog Damage Monitoring and Early Warning for Yangtze River Delta and Damage Assessment research (the Special Funds for Public Welfare of China);\n\t• Extended Research of the Mechanism Model and Forecasting for Mesoscale Severe Weather Process Based on the Information Fidelity (Natural Science Foundation of China (NSFC));\n\t• Observation and analysis of Summer Aerosol Characteristics in Various Functional Areas of Nanjing, supported by: National Basic Research Program (973 Program); Special Funds for Public Welfare of China; National College Students Innovation Program"}]},
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
 		}]}])
.constant('contact',[{title:"Address:",content:"60 Hope Ave, Apt 101,"+"\n"+"Waltham, Massachusetts, 02453"},
		{title:"Tel:",content:"(785)424-0893"}])

