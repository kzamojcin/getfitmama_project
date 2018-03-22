import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
	constructor(){
		this.goTopArrow = $('.go-top-arrow');
		this.goTop = $('#go-top-link');
		this.headerTrigger = $('.go-top-arrow-trigger');
		this.headerLinks = $('.primary-nav a');
		this.categoryLink = $('#go-category-link');
		this.siteHeader = $('.site-header__menu-content');
		this.menuIcon = $(".site-header__menu-icon");
		this.mobileSvgBg = $('.large-hero__mobile-svg-bg');
		this.mobileSvgTxt = $('.large-hero__CTA');

		this.hideMobileMenuTrigger = $('.main-content__personal-note');

		this.pageSections = $('.page-section');
		this.createGoTopArrowWaypoint();
		this.createPageSectionWaypoints();
		this.createHideMobileMenuOutOfSight();
		this.addSmoothScrolling();		
		if ( document.title === "Get Fit Mama"){
			this.createGoCategoryWaypoint();
		}else{
			console.log('x');
		}		
	}
	addSmoothScrolling(){
		this.headerLinks.smoothScroll();
		this.goTop.smoothScroll();
		this.categoryLink.smoothScroll();
	}

	createGoTopArrowWaypoint(){
		var that = this;
		new Waypoint({
			element: this.headerTrigger[0],
			handler: function(direction){
				if(direction == "down"){
					that.goTopArrow.addClass("arrow--visible");
					that.goTopArrow.removeClass("go-top-arrow--transition-outside");
				}else{
					that.goTopArrow.addClass("go-top-arrow--transition-outside");
					that.goTopArrow.removeClass("arrow--visible");
				}
			}
		});
	}
	createGoCategoryWaypoint(){
		var that = this;
		new Waypoint({
			element: this.categoryLink[0],
			handler: function(direction){
				if(direction == "down"){
					that.goTopArrow.addClass("arrow--visiblede");
				}else{
					that.goTopArrow.removeClass("arrow--visiblede");
				}
			}
		});
	}
	createHideMobileMenuOutOfSight(){
		var that = this;
		new Waypoint({
			element: this.hideMobileMenuTrigger[0],
			handler: function(direction){
				if(direction == "down"){
					that.menuIcon.removeClass("site-header__menu-icon--close-x");
					that.siteHeader.removeClass("site-header__menu-content--is-visible site-header__menu-content--to-fade-out-first");					
					that.mobileSvgBg.removeClass("large-hero__mobile-svg-bg--is-hidden");
					that.mobileSvgTxt.removeClass("large-hero__CTA__top--is-hidden");
				}
			}
		});
	}
	createPageSectionWaypoints(){
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if( direction == "down"){
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}else{

					}
				},
				offset: '18%'
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if( direction == "up"){
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}else{
						
					}
				},
				offset: '-41%'
,			});
		})
	}
}

export default StickyHeader;