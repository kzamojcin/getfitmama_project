import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
	constructor(){
		this.goTopArrow = $('.go-top-arrow');
		this.siteHeader = $('.site-header__menu-content');
		this.menuIcon = $(".site-header__menu-icon");
		this.goTop = $('#go-top-link');
		this.headerTrigger = $('.large-hero__learn-more-btn');
		this.pageSections = $('.page-section');
		this.headerLinks = $('.primary-nav a');
		this.categoryLink = $('#go-category-link');
		// this.createGoTopArrowWaypoint();
		this.createHideMobileMenuOutOfSight();
		this.createPageSectionWaypoints();
		this.createGoCategoryWaypoint();
		this.addSmoothScrolling();		
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
				}else{
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
			element: this.headerTrigger[0],
			handler: function(direction){
				if(direction == "down"){
					that.menuIcon.removeClass("site-header__menu-icon--close-x");
					that.siteHeader.removeClass("site-header__menu-content--is-visible");
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