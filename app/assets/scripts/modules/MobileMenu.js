import $ from 'jquery';

class MobileMenu{
	constructor(){
		this.menuIconBorder = $('.site-header__menu-icon__border');
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.largeHeroCtaTop = $('.large-hero__CTA__top');
		this.trapeze = $('.large-hero__mobile-svg-bg');
		this.siteHeader = $('.site-header');

		this.blinking_arrow = $('.blinking_arrow')

		this.events();
		this.blinkblink();
	}
	events(){
		// this.menuIcon.click(this.toggleTheMenu.bind(this));
		// this.menuIcon.click(this.menuBurger.bind(this));
		// this.menuIcon.click(this.	.bind(this));
		this.menuIconBorder.click(this.timedFunctions.bind(this));
		this.menuIconBorder.click(this.menuBurger.bind(this));
		
	}

	menuBurger(){
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
		this.menuIconBorder.toggleClass('site-header__menu-icon__border--enlarge')
	}
	timedFunctions(){
		if( document.title === "Get Fit Mama"){
			if( this.menuContent.hasClass('site-header__menu-content--to-fade-out-first')){
				this.toggleTheMenu();	
				this.menuContent.removeClass('site-header__menu-content--to-fade-out-first');
				setTimeout(this.hideTrapeze.bind(this),300);
			}else{
				this.hideTrapeze();
				setTimeout(this.toggleTheMenu.bind(this),300);	
			}
		}else{
			this.toggleTheMenu();
		}		
		
		
	}
	hideTrapeze(){
		this.trapeze.toggleClass('large-hero__mobile-svg-bg--is-hidden');
		this.largeHeroCtaTop.toggleClass('large-hero__CTA__top--is-hidden');
	}
	toggleTheMenu(){
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.menuContent.addClass('site-header__menu-content--to-fade-out-first');
	}	
	blinkblink(){
		setInterval(function(){
			document.body.style.backgroundColor = document.body.style.backgroundColor == "#fafafa" ? "pink" : "#fafafa";
		}, 1000);
	}	
}

export default MobileMenu;