//Code for generic functionality...
//Specific control functionality MUST be kept inside the .ascx
//Ensure code inside doc.ready is SHORT.
//If it needs to be long (>5 lines) split it out into a function and put the function at the bottom of this script file



var _accordion;

$(document).ready(function () {
    //var siteNav = $(".navigation--site-products"), //need this as a global var for moving the seach on resive or window.load
    var siteNav = $(".header .navigation"),
    deviceWidth = $(window).width();

    

	//Initiate magiczoom
	//MagicZoomPlus.start('zoomer');

	//Set home page background to white
	if ($("#body").hasClass("pageID-ed5c814e-511e-4bf3-9c63-6f9a1158b89a")) {
		$("html").addClass("noBackground");
	}

	//Prevent search if no text
	$('.sfsearchBox input[type="submit"]').on('click', function () {
		var val = $(this).prev().val();
		return val !== '' && val !== 'search our collection';
	});

	//All images with no ALT tag, need an empty ALT tag
	$('html img').each(function () {
		if (!$(this).attr('alt')) {
			$(this).attr('alt', '');
		}
	});

	//Show error panel on form submit
	$('div.sfFormsEditor div.sfFormSubmit input').click(function () {
		showFormErrors(this);
	});

	//Skips INSIDE forms also need to work
	$('div.sfFormsEditor a[href^="#"]').live("click", function () {
		var id = $(this).attr('href');
		$(id).focus();
		return false;
	});

	// <ie9 in content imgs, also cannot use the *="" in jQ.
	if ($('html').hasClass("lt-ie9")) {
		applyImageFloatStyle();
	}

	//Performs accessibility fixes for forums & Comments
	fixRadEditorAccessibility();
  
	//setup flex slider(s) if they are the same
	$('.tile-list .flexslider').flexslider({
		animation: "fade",
		prevText: "",
    nextText: "", 
		directionNav: true
  });

	//init !nav
	createNavicon(siteNav);

	$("button.navigation__navicon").on("click", function (event) {
		event.preventDefault();
	});

    //$("button#toggleSiteNavigation").on("click", function () {
	$("a#toggleSiteNavigation").on("click", function () {
	    //if ($(window).width() < 960) {
	        siteNav.toggleClass("navigation--site-products--active");
	    //}
  });

    //$("button#toggleSiteNavigation").mouseenter(function () {
	$("a#toggleSiteNavigation").mouseenter(function () {
	    if ($(window).width() > 960) {
	        siteNav.addClass("navigation--site-products--active");
	    }
	});

	//$(".navigation--site-products--active").mouseover(function () {
	//    siteNav.addClass("navigation--site-products--active");
	//});

	$(".nav-horizontal-dropdown").mouseleave(function () {
	    if ($(window).width() > 960) {
	        siteNav.removeClass("navigation--site-products--active");
	    }
	});



	$("input.sfsearchTxt").attr("placeholder", "search our collection");

	//-----------------------------------

	//breadcrumb init
	$("li.sfNoBreadcrumbNavigation a").removeAttr("href");

  mobileBreadcrumb();

	//todo: needs to be passed a selector
	//wsAccordion.init();
	$(".productFilter").wsAccordion({ ajax: true });


	productShare.init();

	//if (deviceWidth > 960) {
	homeTile.init();
	//}

	//responsiveTab.init(deviceWidth);
	$("div.productSpecs").productSpecs({multipleOpen : false});

	//needed to to the end of the stack as IE was reporting incorrect width
	setTimeout(function () {
		selectColor.init();
  }, 1000);


	//search placeholder
	if ($.browser.msie) {
		searchPlaceholder($(".sfsearchBox .sfsearchTxt"));
	}

	//$(".sfsearchBox .sfsearchTxt").wsPlaceholder();


	//update footer to current year
	updateYear.init();

	//Handle MagicZoom manual mode, and also change the "Download High Res"
	handleMagicZoomManual();

    //Handle colour thumb clicks
  handleColourThumbClick();
  
	if ($('#backgroundImageField').length) {
	    $('body').css("background-image", "url('" + $('#backgroundImageField').val() + "')");
  }


  if ($('.search-box-toggle').length) {
    $('.search-box-toggle').on('click',
      function() {
        $(this).parent('.search-box').addClass('active');

      });
  }

  if ($('.navigation-xs').length) {
    $('.navigation-xs')
      .prepend(
        '<div class="navigation-toggle-container"><button type= "button" class="navigation-toggle"><i class="fa fa-bars"></i></button></div>')
      .find('.sf_colsIn')
      .prepend(
        '<div class="navigation-toggle-container"><button type= "button" class="navigation-toggle"><i class="fa fa-times"></i></button></div>');
  }
  
  $(document).on('click', '.navigation-toggle',
    function () {
      $(this).parents('.navigation-xs').toggleClass('active');
    });

  
  if ($("li[data-initial=collapsed").length > 0) {
    $("li[data-initial=collapsed").children("button").click();
  }
});
//end !doc ready

function handleMagicZoomManual() {
    
    $('.fauxNav .imgWrap').on('click', function () {

		var item = $(this);

        //Change the magic zoom (manually so as to enable "lazy loading")
        MagicZoomPlus.update('zoomer', item.data('original'), item.data('large'));

		//When you click DOWNLOAD it should always use the image in the Hero Holder
		$('.downloadHighRes').prop('href', item.data('original'));
	});    
}
function handleColourThumbClick() {
    $('.select-color__button').on('click', function () {
        var item = $(this);

        //Change the magic zoom (manually so as to enable "lazy loading")
        MagicZoomPlus.update('zoomer', item.data('original'), item.data('large'));

        //When you click DOWNLOAD it should always use the image in the Hero Holder
        $('.downloadHighRes').prop('href', item.data('original'));

        $('#hdnIdProductColourImage').val($(this).data('pcid'));
        GetColourThumbs($(this).data('pcid'), $(this).data('pid'));
    });
}
function highlightProductColour(obj) {
    $(".clsSelectedImg").removeClass("clsSelectedImg");
    $(obj).addClass("clsSelectedImg");
}

//Creates an ERROR div above the form, then a JS alert and links back to the error fields
//All for accessibility
function showFormErrors(inputClicked) {
	//Get the form
	var form = $(inputClicked).closest('div.sfFormsEditor')

	//On submit, get all the (any) errors found (must use :visible as they exist, but are display:none if you fail, then fix some fields)
	var errors = form.find('div.sfError:visible');

	//Find the error panel
	var errorPanel = form.find('div#errorWrapDiv');

	//If it doesn't exist, create it
	if (errorPanel.length == 0) {
		form.prepend('<div id="errorWrapDiv" tabindex="-1" />');
		errorPanel = form.find('div#errorWrapDiv');
	}

	//If no errors, do stuff
	if (errors.length == 0) {
		//Hide it!
		errorPanel.hide();
	} else {
		//Show error panel
		errorPanel.show();
		
		//Build up the error HTML
		var errorHtml = '<h2>Errors found, please correct the following errors:</h2><ul>';

		errors.each(function () {
			//The error text
			var errorText = $(this).text();

			//Field name, to use as an error description
			var fieldName = "";

			//The control to hyperlink to
			var linkToId = null;

			//Handle checkboxes a little differently
			if ($(this).parent().hasClass('sfFormCheckboxlist')) {
				//Use the overall checkbox group label as the field name
				fieldName = $(this).parent().children('div.sfTxtLbl').text();

				//Use the 1st checkbox control in the group as the link to
				linkToId = $(this).parent().find('input').first().attr('id');
			} else {
				//Use the label as the field name
				fieldName = $(this).parent().children('label').text();

				//Link to the label 'for' thing
				linkToId = $(this).parent().children('label').attr('for');
			}

			//OK, turbo made me remove (mandatory) from any labels
			fieldName = fieldName.replace(' (mandatory)', '');

			//Build up the error message <LI>s
			//Changed to put <a href="#errorLabel"> so you can click the error text and go straight to the field!
			errorHtml += '<li><a href=#' + linkToId + '>';
			errorHtml += '<strong>' + fieldName + '</strong></a><span class="sfError"> - ' + errorText + '</span></li>';
		});

		//Close the UL
		errorHtml += '</ul>';

		//Display the errors!                
		errorPanel.html(errorHtml);

		//They need an alert to know that there were errors - also set focus
		alert('Errors found, please refer to listing at the top of the form.');
		$('#errorWrapDiv').focus();
	}
}

//Images in content block don't float nicely, especially in <IE9
function applyImageFloatStyle() {
	$('.sfContentBlock img').each(function () {
		if ($(this).css("float") == "left") {
			$(this).addClass("css-left");
		} else if ($(this).css("float") == "right") {
			$(this).addClass("css-right");
		} else if ($(this).css("vertical-align") == "middle") {
			$(this).addClass("css-v-align");
		}
	});
}

//Make a non-async call to a webservice, to get the pageIDs that use basic RadEditor, then performs accessibility fixes
function fixRadEditorAccessibility() {
	//Forums are hardcore
	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		url: '/Websilk/Services/SitefinityServices.asmx/GetForumRadEditorPageIDs',
		success: function (data, textStatus, jqXHR) {
			if (data.d) {
				//Loop the array, check if the body has a class of one the IDs
				$(data.d).each(function () {
					//If the body has this ID, then we're good to go
					if ($('body').hasClass('pageID-' + this)) {
						//NOTE: The magic "DIV" doesn't necessarily exist when document.ready() is called, so we need a timeout delay going on
						findMagicDivId = window.setInterval(findMagicDiv, 100);
					}
				});
			}
		}
	});

	//Comments (e.g., news/blogs) are simple, just need the label fixed
	if ($('.RadEditorTextArea textarea:visible').length > 0) {
		$('.sfcommentEditor label').attr('for', $('.RadEditorTextArea textarea').attr('id'));
	}
}

var findMagicDivId;
var findMagicDivCalled = 0;

function findMagicDiv() {
	//Stop trying after a few seconds
	findMagicDivCalled++;
	findMagicDivCalled == 10 ? window.clearInterval(findMagicDivId) : 0;

	//If the magic Div exists...
	if ($('.sfEditorWrp .reWrapper .reContentCell .reContentArea').length) {
		//Stop recurively searching!
		window.clearInterval(findMagicDivId);

		//Control refs
		var magicDiv = $('.sfEditorWrp .reWrapper .reContentCell .reContentArea');
		var beforeCtl = $('.sfforumNewThreadWrp .sfforumNewThreadName input.sfTxt');
		var afterCtl = $('.sfforumNewThreadWrp .sfSubmitBtnWrp input.sfSubmitBtn');
		
		//Different control refs for Post Reply page
		var newThreadPage = beforeCtl.length;

		if (!newThreadPage) {
			afterCtl = $('.sfforumPostReplyForm .sfSubmitBtnWrp input.sfSubmitBtn');
			beforeCtl = $('.sfforumPostReplyForm .sfforumReplyThreadContent a.sfQuote');

			//The "Cancel" button on Reply post page, when hit with a keyboard ENTER, actually postbacks the page, and THEN SHOWS THE REPLY POST box again!!!
			//Super bad - do removing manually
			$('.sfforumPostReplyForm .sfSubmitBtnWrp a.sfCancel').keydown(function (e) {
				var code = (e.keyCode ? e.keyCode : e.which);

				if (code == 13) {
					//Stop the postback!
					e.preventDefault();

					//Remove reply post box
					$('div.sfforumPostReplyContainer').remove();

					//Set focus to the LAST post reply button
					$('.sfforumReplyPostWrp input.sfforumReplyBtn').focus();
				}
			});
		}

		//Make TAB take you to the "Post this thread" button
		magicDiv.keydown(function (e) {
			var code = (e.keyCode ? e.keyCode : e.which);

			if (e.shiftKey && code == 9) {
				//Shift-Tab to the previous 
				beforeCtl.focus();
			} else if (code == 9) {
				//Tab to the Submit Btn
				afterCtl.focus();
			}
		});

		//Prevent the tools from being tabbed to
		$('.reToolbarWrapper').find('a').attr('tabindex', '-1');
		$('.sfforumPostReplyForm a.sfClose').attr('tabindex', '-1');

		//Set focus to the right control (new thread vs post reply)
		//IE failed to focus without a timeout function?? FUUuuuUUuu
		if (newThreadPage) {
			//The title field
			setTimeout(function () {
				beforeCtl.focus();
			}, 1);
		} else {
			//The reply div
			setTimeout(function () {
				magicDiv.focus();
			}, 1);
		}
	}
}


//create navicon button
//create a button to toggle the nav
function createNavicon(siteNav) {
	
  $('.last-link').after(
		//$("<button>", {
        $("<a>", {
			id: "toggleSiteNavigation",
		    //"class": "navigation__navicon removeText sprite-b",
			"class": "navigation__navicon link",
			text: "Products"
		})
	)//.toggleClass("navigation--site-products--closed");
}

function mobileBreadcrumb() {
	var parentLink = $("li.sfNoBreadcrumbNavigation").prev(),
		backToElement = $("<span>", {
			"class": "mobileBackTo",
			"text": "\u2190 back to "
		});

	parentLink.addClass("parent-page").find(".rsmLink").prepend(backToElement);
}


//------------------------------------------------------------


var homeTile = {
	init: function () {
		var _self = this;

		//cache mah imgs
		_self.$homeImages = $(".tile-list__image");

		//Prevent IE8 from derping
		if ($.browser.msie && $.browser.version < 9) {
			_self.showFullImg();
		} else {
			//Add enquire listeners for rotation to toggle full/small layout
			enquire.register(grids(0.5), {
				match: function () {
					_self.showMobileImg();
				}
			}).register(grids(3), {
				match: function () {
					_self.showFullImg();
				},
				unmatch: function () {
					_self.showMobileImg();
				}
			}).listen();
		}
	},

	setImage: function (imageElement, src) {
		imageElement.prop("src", src);
	},

	showFullImg: function () {
		var _self = this;

		_self.$homeImages.each(function () {
			var imageElement = $(this),
				highRes = imageElement.data("high-res");

			//on init, swap imgs if we are over the bp
			if (highRes) {
				homeTile.setImage(imageElement, highRes);
			}
		});
	},

	showMobileImg: function () {
		var _self = this;

		_self.$homeImages.each(function (index) {
			var imageElement = $(this),
				standardRes = imageElement.data("low-res") || imageElement.attr("src");
			
			//on init, swap imgs if we are over the bp
			homeTile.setImage(imageElement, standardRes);
		});
	}
}



//------------------------------------------------------------





//------------------------------------------------------------------------------------------
var productShare = {
	init : function() {
		var pageURL = window.location,
			pageTitle = document.title,
			leSubject = "JB's wear - " + pageTitle;

		$("#emailPage").attr("href", "mailto:?subject=" + leSubject + "&body=" + pageURL).removeAttr("onclick");
	}

};


//------------------------------------------------------------------------------------------



var responsiveTab = {

	init: function (deviceWidth) {
		var tabContainer = $(".tab-container");

		if (deviceWidth > 1025) {
			this.createNav(tabContainer);
		} else {
			this.setupAccordion(tabContainer);
		}
	},

	createNav: function (tabContainer) {
		//find each tab__heading and create a nav from it
		var tabNavigation = $("<ul>", {
			"class": "tab__nav list--horizontal"
		}),
			tabs = $(".tab__content"); // array of my tabs
		//hide all, setup my nav in loop
		tabs.each(function (index) {

			var currentTab = $(this),
				tabHeading = currentTab.find(".tab__heading"),
				tabNavLink = $("<button>", {
					"html": tabHeading.text(),
					"class": "tab__nav__button",
					"onclick": "return false",
					"data-tab-target": index
				}).on("click", function () {
					responsiveTab.toggleActiveTab(index);
				}),
				tabNavLi = $("<li>", {
					"class": "list__item"
				});

			//dont need heading
			tabHeading.hide();

			//what if its promoted?
			if (currentTab.hasClass("promoted")) {
				tabNavLink.addClass("tab__nav__button--promoted");
			}

			//button has been created, wrap in <li>
			tabNavLi.append(tabNavLink);

			// all <li> are done, place them into the <ul>
			tabNavigation.append(tabNavLi);

			currentTab.attr("data-tab-count", index);

		});

		//loop is done, add the nav
		tabContainer.prepend(tabNavigation);

		//make the first visible
		responsiveTab.toggleActiveTab(0);

	},

	toggleActiveTab: function (index) {
		var tabs = $(".tab__content"),
			buttons = $(".tab__nav__button"),
			currentTab = tabs.eq(index),
			currentNav = buttons.eq(index);

		// don't do anything if i am active
		if (currentNav.hasClass("tab__nav__button--active")) {
			return;
		}

		buttons.removeClass("tab__nav__button--active");
		tabs.hide().removeClass("tab__content--active");

		//change only current
		currentTab.fadeIn().addClass("tab__content--active");
		currentNav.addClass("tab__nav__button--active");
	},


	setupAccordion: function (tabContainer) {
		var accordionItems = tabContainer.find(".tab__content");

		accordionItems.each(function () {
			var currentAccordion = $(this),
				headingElement = currentAccordion.find(".tab__heading"),
				headingText = headingElement.text(),
				icon = $("<em>", {
					"class": "icon-angle-down"
				}),
				button = $("<button>", {
					"class": "accordion__toggle",
					html: headingText,
					"onclick": "return false"
				}),
				accordionItemWrap = $("<div>", {
					"class": "accordion__item"
				});


			headingElement.hide();//needed in print

			button.prepend(icon);

			//what if its promoted?
			if (currentAccordion.hasClass("promoted")) {
				button.addClass("accordion__toggle--promoted");
			}

			//need to alter class and markup
			currentAccordion.removeClass("tab__content").addClass("accordion__content").wrap(accordionItemWrap);

			//need to updated what the current accordion is as its cached so we can then insert the button
			currentAccordion.parent().prepend(button);


		});

		//out of loop, change the classes of the tabs
		tabContainer.addClass("accordion");

		$(".productSpecs").wsAccordion({
			breakpoint: 1025,
			multipleOpen: false
		});
	}
};




//------------------------------------------------------------------

var selectColor = {
	init: function (deviceWidth) {
		var _self = this;

		//incase we want to extend
		_self.options = {
			"breakpoint" : "1280px", //needs to be string for enq mQ
			"amountVisible" : 6
		};
		
		//globals
		_self.$container = $(".select-color");

		_self.$viewport = _self.$container.find(".select-color__viewport");
		_self.$ul = _self.$container.find(" ul.list--horizontal");
		_self.$li = _self.$ul.find(".list__item"); //agnostic across views
		_self.$colorButton = _self.$li.find("a.select-color__button"); //used in dropdown
		
		//for slider math
		_self.itemCount = parseInt(_self.$li.length, 10);
		_self.currentSlide = 0; //needs to start at one so we cannot go below
		_self.endSlide = _self.itemCount - _self.options.amountVisible;
		
	    //setup fn()

	    // disable slider for PDF
		if ($('.hdnDisableSlider').length == 1) {
		    return;
		}		
		
		_self.setupEnquire();

		//happens regardless of view
		_self.createDropDownButton();
		_self.attachColorClick();
		
		_self.createSlideNav();
	},

	setupEnquire : function() {
		var _self = this,
			screenSize = $(window).width();
			intBreakpoint = parseInt(_self.options.breakpoint, 10) //what if its in ems?

			// console.log(intBreakpoint);

		//ie8 || no enquire support
		if (!window.enquire || $.browser.msie && $.browser.version < 9) {
			console.warn("enquire.js is needed. Only detects on .ready() now");

			if (screenSize < intBreakpoint) {
				_self.setViewMode("dropdown");
			}
			else {
				_self.setViewMode("slider");
			}

			//lazy way of stopping enquire if its not there
			return;
		}

		enquire.register("screen and (min-width: " + _self.options.breakpoint + ")",{ //960px
			setup: function() {
				_self.setViewMode("dropdown");
			},

			match: function () {
				_self.setViewMode("slider");
			},
			unmatch : function(){
				_self.setViewMode("dropdown");
			}

		}).listen();
	},

	setViewMode : function(mode){
		var _self = this;

		_self.viewMode = mode;
		_self.$container.attr("data-mode", mode);

		if (mode == "slider") {
			_self.calcViewport();
		} else {
			//needs to be added on first go or if there isn't one active
			if (!_self.$li.hasClass("active")) {
				_self.$li.eq(0).addClass("shown");
			}
		}
	},

	//is run when changing to slider mode
	calcViewport : function () {
		var _self = this;

		//dont make controls if there are needed
		//if ( _self.itemCount > _self.options.amountVisible) {
			_self.itemWidth = ($("html").hasClass("lt-ie9")) ? 111 : _self.$li.outerWidth(true); //use from css so we can update. IE8 getting it wrong ><
			
			_self.$ul.width(_self.itemWidth * _self.itemCount); //trumped by css when data-mode=dropdown
		//}
	},

	createDropDownButton : function() {
		var _self = this;

		//needs to be global
		_self.$dropDownIcon = $("<i>", {
			"class": "icon-angle-down"
		});

		var $dropDownButton = $("<button>", {
			"class": "dropdown__button-toggle"
		}).append(_self.$dropDownIcon) .prependTo(_self.$viewport);

		// //add button
		$dropDownButton.on("click", function (event) {
			event.preventDefault();
			_self.toggleDropDown(_self.$dropDownIcon);
		});
	},

	//needs to be called on click of dropdown or when selected a color
	toggleDropDown : function() {
		var _self = this,
			activeClass = "active";


		//check im not already open
		if (_self.$viewport.hasClass(activeClass)) {
			_self.$viewport.removeClass(activeClass);
			_self.$dropDownIcon.attr("class", "icon-angle-down");
		} else {
			_self.$viewport.addClass(activeClass);
			_self.$dropDownIcon.attr("class", "icon-angle-up");
		}
	},

	attachColorClick : function() {
		var _self = this;

		_self.$colorButton.each(function (index) {
			$(this).on("click", function(){
				_self.toggleActiveColor(index);

				//need to bring hero into "focus"
				if (_self.viewMode == "dropdown") {
					$(document).scrollTop(0);
				}
			});
		});
	},

	toggleActiveColor : function(index) {
		var _self = this,
			activeClass = "active";
		
		if (_self.$viewport.hasClass(activeClass)){
			//clean slate for dropdown
			_self.$li.removeClass(activeClass).eq(0).removeClass("shown");

			//set my li to active
			_self.$li.eq(index).addClass(activeClass);

			//close dropdown
			_self.toggleDropDown();
		}
	},

	createSlideNav : function() {
		//create elems
		var _self = this,
			slideBtnBaseClass = "slide__controls__button",
			$slideNav = $("<div>", {
				"class": "slide__controls"
			}),
			$slidePrevButton = $("<button>", {
				"class": slideBtnBaseClass + "--prev",
				"data-direction": "prev",
				"disabled" : "true"
			}).appendTo($slideNav),
			$slideNextButton = $("<button>", {
				"class": slideBtnBaseClass + "--next",
				"data-direction": "next"
			}).appendTo($slideNav),
			prevIcon = $("<i>", {
				"class": "fa fa-angle-left"
			}).appendTo($slidePrevButton),

			nextIcon = $("<i>", {
				"class": "fa fa-angle-right"
			}).appendTo($slideNextButton);


		//clickers
		_self.$navButtons = $slideNav.find("button").on("click", function(event){
			_self.attachDirClick($(this), event)
		});

			//place the nav after 
		_self.$viewport.after($slideNav);
	},

	attachDirClick : function($button, event){
		var _self = this,
			dir = $button.data("direction");

		event.preventDefault();

		//am i at start or end? need to disable btns
		if ((_self.currentSlide == 0 && dir != "next") || (_self.currentSlide == _self.endSlide && dir == "next") ) {
			$button.prop("disabled", true);

		} else {
			//move current index
			(dir === "next") ? ++_self.currentSlide : --_self.currentSlide;
			
			//make both btns active
			_self.$navButtons.prop("disabled", false);

			_self.moveSlide(dir);
		}
	},

	moveSlide : function(dir){
		var _self = this;
		// console.log(dir, _self.itemWidth, _self.currentSlide);
		_self.$ul.css("margin-left", -(_self.itemWidth * _self.currentSlide));
	}
};


//-------------------------------------------
//grids ala sass

function grids(unit, query) {
	if (typeof unit === "number") {
		var baseGrid = 320,
			query = (typeof query === "undefined") ? "min" : query;

		//console.log(baseGrid * unit);
		return "screen and (" + query + "-width: " + (baseGrid * unit) + "px)";
	}
}

//mc: i think this isn't used anymoar
if ($.browser.msie && $.browser.version < 9) {
	enquire.register(grids(2), {
		match: function () {
			$(".productFilterResults__item:nth-child(2n+1)").addClass("rowStart");
		}
	}, true).register(grids(3), {
		match: function () {
			$(".productFilterResults__item:nth-child(2n+1)").removeClass("rowStart");
			$(".productFilterResults__item:nth-child(4n+1)").addClass("rowStart");
		}
	}, true).register(grids(4), {
		match: function () {
			$(".searchResults .productFilterResults__item:nth-child(4n+1)").removeClass("rowStart");
			$(".searchResults .productFilterResults__item:nth-child(5n+1)").addClass("rowStart");
		}
	}, true).listen();
}

//-------------------------------------------------
function searchPlaceholder($input) {
	var placeholderText = "search our collection";

	//init state
	$input.val(placeholderText);


	$input.on("focus", function () {
		//if its placeholder text, remove it so they can type
		if ($input.val() === placeholderText) {
			$input.val("");
		}
	});


	$input.on("blur", function () {
		//if its blank, add text back
		if (!$input.val()) {
			$input.val(placeholderText);
		}
	});
	
}


//get the year and update the footer copyright date
var updateYear = {
	init : function() {
		var _self = this;
		_self.theYear = new Date().getFullYear();

		_self.$date = $("#currentYear");

		_self.updateYear()
	},

	updateYear : function() {
	var _self = this;

		_self.$date.html(_self.theYear);
	}
};

// get thumbnail images specific to a product colur
function GetColourThumbs(id, idProduct) {
    
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: '/Websilk/Services/SitefinityServices.asmx/GetThumbnailsForColour',
        data: "{'id': '" + id + "', 'idProduct': '" + idProduct + "'}",
        success: function (data, textStatus, jqXHR) {
            
            $('.fauxNav').html(data.d);
            handleMagicZoomManual();
            
        }
    });
}
