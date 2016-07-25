function main() {

	(function () {
		'use strict';




		/*====================================
    Portfolio Isotope Filter
    ======================================*/
		$(window).load(function () {
			var $container = $('.portfolio-items');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			$('.cat a').click(function () {
				$('.cat .active').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});

		});

		/*====================================
    WOW JS
    ======================================*/

		new WOW().init();


		//Links: see more expand-contract
		$("#moreLinks").hide();
		$("#seeMore").click(function () {
			if ($("#moreLinks").is(":hidden")) {
				$("#moreLinks").slideDown("slow");
				$("#linksButtons").html("SEE LESS <br><span class='glyphicon glyphicon-menu-up' aria-hidden='true'></span>");
			} else {
				$("#moreLinks").slideUp("slow");
				$("#linksButtons").html("SEE MORE <br><span class='glyphicon glyphicon-menu-down' aria-hidden='true'></span>");
			}
		});

		//Nav bar design and functionality on scroll
		$("li").hover(
			function () {
				$(this).find("span").stop().animate({
					width: "100%",
					opacity: "1",
				}, 400, function () {})
			},
			function () {
				$(this).find("span").stop().animate({
					width: "0%",
					opacity: "0",
				}, 400, function () {})
			}
		);

		//Formatting graph area in About section when screen is less than 550px
		function checkWidth() {
			if ($(window).width() < 550) {
				$('#large-graph .graphPart ').removeClass('col-xs-4');

			} else {
				$('#large-graph .graphPart ').addClass('col-xs-4');

			}
		}

		$(document).ready(checkWidth);

		$(window).resize(checkWidth);





		//Mobile views
		function mobileViewUpdate() {
			var viewportWidth = $(window).width();
			if (viewportWidth < 500) {
				$("header").removeClass("container");
			}
			if (viewportWidth > 500) {
				$("header").addClass("container");
			}
		}

		$(window).load(mobileViewUpdate);
		$(window).resize(mobileViewUpdate);

		$(window).on('load, resize', mobileViewUpdate);

		$(window).on('load, resize', function mobileViewUpdate() {
			var viewportWidth = $(window).width();
			if (viewportWidth < 500) {
				$("header").removeClass("container");
			}

			if (viewportWidth > 500) {
				$("header").addClass("container");
			}
		});

		//Download JS on load
		function downloadJSAtOnload() {
			var element = document.createElement("script");
			element.src = "js/defer.js";
			document.body.appendChild(element);
		}
		if (window.addEventListener)
			window.addEventListener("load", downloadJSAtOnload, false);
		else if (window.attachEvent)
			window.attachEvent("onload", downloadJSAtOnload);
		else window.onload = downloadJSAtOnload;








		var items = [{
				'title': 'Belmont Food Shop Website',
				'tag': 'web',
				'largeUrl': '/images/portfolio/large/belmont.jpg',
				'thumbUrl': '/images/portfolio/small/belmont.jpg',
				'caption': 'SITE IN PROGRESS!This website was build uses a theme I build from scratch using Underscores. I made sure the site was easily maintainable for the small business owner/chef by customizing the admin areas using custom fields, custom post types, and manipulating the WYSIWYG editor using TinyMCE Custom Styles. I used a small plugin for the gallery area, but the rest was hand coded by moi!',
				'info_list': [{
					'title': 'TOOLS',
					'list': 'Wordpress, Php, Javascript, JQuery, HTML, CSS3, Adobe Photoshop'
  }, {
					'title': 'DELIVERABLES',
					'list': 'Design Mockups, Custom Wordpress Theme, Style guide, Content Population, Website Launch'
  }],
				'link_list': []
}, {
				'title': 'Indiana Breweries Poster',
				'tag': 'design',
				'largeUrl': '/images/portfolio/large/inbreweries.jpg',
				'thumbUrl': '/images/portfolio/small/inbreweries.jpg',
				'caption': 'A poster charting the many breweries around the state of Indiana using the latest data from BeerMe.com',
				'info_list': [{
					'title': 'TOOLS',
					'list': 'Adobe Illustrator'
  }, {
					'title': 'DELIVERABLES',
					'list': 'Design, Printed product'
  }],
				'link_list': []
}, {
				'title': 'Lindsey Reading',
				'tag': 'art',
				'largeUrl': '/images/portfolio/large/lindsey.jpg',
				'thumbUrl': '/images/portfolio/small/lindsey.jpg',
				'caption': 'Oil on board, 2010',
				'info_list': [],
				'link_list': []
}, {
				'title': 'No BS Brass Band Website',
				'tag': 'web',
				'largeUrl': '/images/portfolio/large/nobs.jpg',
				'thumbUrl': '/images/portfolio/small/nobs.jpg',
				'caption': 'A re-design on No BS! Brass Band\'s official site on Squarespace. I designed all graphics and made layout customizations to a chosen theme through advanced CSS techniques.',
				'info_list': [{
					'title': 'TOOLS',
					'list': 'Squarespace, HTML, CSS3, Adobe Photoshop'
  }, {
					'title': 'DELIVERABLES',
					'list': 'Design Mockups, Content Population, Website Launch'
  }],
				'link_list': [{
					'title': 'VIEW SITE',
					'url': 'http://www.nobsbrass.com/'
  }]
}, {
				'title': 'Coffee Writer',
				'tag': 'art',
				'largeUrl': '/images/portfolio/large/writing.jpg',
				'thumbUrl': '/images/portfolio/small/writing.jpg',
				'caption': 'Oil paint on canvas, 2011',
				'info_list': [],
				'link_list': []
}, {
				'title': 'Sacred Valley Project: Flyers',
				'tag': 'design',
				'largeUrl': '/images/portfolio/large/svflyers.jpg',
				'thumbUrl': '/images/portfolio/small/svflyers.jpg',
				'caption': 'A full page and half page information hand-out for the Sacred Valley Project, a non-profit that provides indigenous girls from the rural highlands of Peru resources to complete secondary education and become community leaders.',
				'info_list': [{
					'title': 'TOOLS',
					'list': 'Adobe Illustrator and Photoshop'
  }, {
					'title': 'DELIVERABLES',
					'list': 'Mockups, Final PDF files'
  }],
				'link_list': []
}, {
				'title': 'Sacred Valley Project: Annual Report',
				'tag': 'design',
				'largeUrl': '/images/portfolio/large/svreport.jpg',
				'thumbUrl': '/images/portfolio/small/svreport.jpg',
				'caption': 'The 2015 Annual Report for the Sacred Valley Project, a non-profit that provides indigenous girls from the rural highlands of Peru resources to complete secondary education and become community leaders.',
				'info_list': [{
					'title': 'TOOLS',
					'list': 'Adobe Illustrator and Photoshop'
  }, {
					'title': 'DELIVERABLES',
					'list': 'Mockups, Content Population, Final PDF files'
  }],
				'link_list': []
}, {
				'title': 'Tucker Harris Portfolio Website',
				'tag': 'web',
				'largeUrl': '/images/portfolio/large/etuckerharris.jpg',
				'thumbUrl': '/images/portfolio/small/etharris.jpg',
				'caption': 'This website was created from scratch by me! I only implemented two plugins: Isotope by Metafizzy (for the portfolio\'s filtering animation) and WOW.js (for the small bar rotations below each title). I used Bootstrap framework for layout, but otherwise I developed all of my own icons, images, JSON/javascript functionality, and additional coding to perfect the responsive design.',
				'info_list': [{
					'title': 'TOOLS',
					'list': 'Javascript, JQuery, HTML5, CSS3, Bootstrap'
  }, {
					'title': 'DELIVERABLES',
					'list': 'Design Mockups, Content Population, Code development, Website Launch'
  }],
				'link_list': [{
					'title': 'VIEW CODE',
					'url': ''
  }]
}, {
				'title': 'Yellow Chair',
				'tag': 'art',
				'largeUrl': '/images/portfolio/large/yellowchair.jpg',
				'thumbUrl': '/images/portfolio/small/yellowchair.jpg',
				'caption': 'Oil paint on canvas, 2012',
				'info_list': [],
				'link_list': []
}, {
				'title': 'Indesign Gradient Script',
				'tag': 'code',
				'largeUrl': '/images/portfolio/large/ingradient.jpg',
				'thumbUrl': '/images/portfolio/small/ingradient.jpg',
				'caption': 'This script calculates intervals between two RGB colors, creates swatches for those colors, and builds a table gradient on an Adobe Indesign document.',
				'info_list': [{
					'title': 'TOOLS',
					'list': 'Javascript, Indesign'
  }, {
					'title': 'DELIVERABLES',
					'list': 'Indesign script plugin'
  }],
				'link_list': [{
					'title': 'VIEW CODE',
					'url': 'https://github.com/tuckabelle/IndesignScripts-GradientTable'
  }]
},

			{
				'title': 'Book Awards App',
				'tag': 'code',
				'largeUrl': '/images/portfolio/large/bookapp.jpg',
				'thumbUrl': '/images/portfolio/small/bookapp.jpg',
				'caption': 'This is an experimental used to practice combining JSON data into a webpage. The data is automatically sorted and displayed in alphabetical order by title. As the user hovers over a book, the area expands to include an image of the book cover and a description. If no image data was entered in the JSON file, a placeholder of my own design is used. When clicking the magnifying glass icon, a search bar expands, allowing the user to search for matching titles, authors, or keywords. Book titles disappear as each letter is typed if they do not match the search criteria. If there are no matches at all, a short statement appears to communicate this to the user. All of the results reappear in order if the text in the search bar is deleted or the user clicks outside of the search bar.',
				'info_list': [{
					'title': 'TOOLS',
					'list': 'Javascript, JSON/AJAX, CSS, HTML'
  }],
				'link_list': [{
					'title': 'VIEW CODE',
					'url': 'https://rawgit.com/tuckabelle/Book-Awards-Application/master/index.html'
  }]
},

			{
				'title': 'Coffee in the Park',
				'tag': 'art',
				'largeUrl': '/images/portfolio/large/park.jpg',
				'thumbUrl': '/images/portfolio/small/park.jpg',
				'caption': 'Oil Paint on canvas, 2011',
				'info_list': [],
				'link_list': []
}];



		$(document).ready(function () {
			for (var i = 0; i < items.length; i++) {
				var item = items[i];

				var $title = ('<h3 class="">' + item.title + '</h3>');
				var $caption = ('<p>' + item.caption + '</p>');
				var $thumbUrl = item.thumbUrl;
				var $tags = item.tag;
				var $largeUrl = ('<img src="' + item.largeUrl + '">')


				var urlList = item.link_list;

				var outputLinks = '';
				for (var j = 0; j < urlList.length; j++) {

					var link = urlList[j];
					var url = ('<a href="' + link.url + '">' + link.title + '</a>');
					outputLinks += url;
				}
				var $link_list = (outputLinks);


				var infoList = item.info_list;
				var outputInfo = '';
				for (var t = 0; t < infoList.length; t++) {
					var info = infoList[t];
					var details = ('<span class="portfolio-infoTitle">' + info.title + ': </span>' + info.list + '<br>');
					outputInfo += details;
				}
				var $info_list = (outputInfo);



				$('.portfolio-items').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 ' + $tags + '"><div class="portfolioItem" data-category="' + $tags + '"><img src="' + $thumbUrl + '" class="img-responsive" ><div class="title hide">' + $title + '</div><div class="caption hide">' + $caption + '</div><div class="links hide">' + $link_list + '</div><div class="info hide">' + $info_list + '</div><div class="largeUrl hide">' + $largeUrl + '</div></div></div>');
			}



			var infoModal = $('#myModal');
			$('.portfolioItem').on('click', function () {
				var htmlCaption = $(this).find('.caption').html();
				var htmlTitle = $(this).find('.title').html();
				var htmlLargeImage = $(this).find('.largeUrl').html();
				var htmlLinks = $(this).find('.links').html();
				var htmlInfo = $(this).find('.info').html()
				infoModal.find('.modal-title').html(htmlTitle);
				infoModal.find('.modal-caption').html(htmlCaption);
				infoModal.find('.modal-largeImage').html(htmlLargeImage);
				infoModal.find('.modal-links').html(htmlLinks);
				infoModal.find('.modal-info').html(htmlInfo);
				$('.modal-largeImage img').addClass('img-responsive');
				infoModal.modal('show');
				$('.modal-title').addClass('rotateIn');
				return false;

			});



		});
	}());
}
main();
