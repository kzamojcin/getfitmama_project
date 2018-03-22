import $ from 'jquery';
class Modal {
	constructor(){
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');

		this.moreButtonContainerFirst = $('.page-section__more-btn-1');
		this.moreButtonContainerSecond = $('.page-section__more-btn-2');
		this.moreButtonContainerThird = $('.page-section__more-btn-3');
		this.moreButtonContainerFourth = $('.page-section__more-btn-4');
		this.moreButtonContainerFifth = $('.page-section__more-btn-5');
		
		this.moreButtonFirst = $('.c-t-a__more__btn-1');		//temporary for certs
		this.moreButtonSecond = $('.c-t-a__more__btn-2');		//temporary for certs
		this.moreButtonThird = $('.c-t-a__more__btn-3');		//temporary for certs
		this.moreButtonFourth = $('.c-t-a__more__btn-4');		//temporary for certs
		
		this.certsGroup1 = $('.certificates-group-1');  //temporary for certs
		this.certsGroup2 = $('.certificates-group-2');  //temporary for certs
		this.certsGroup3 = $('.certificates-group-3');  //temporary for certs
		this.certsGroup4 = $('.certificates-group-4');  //temporary for certs

		this.events();
	}

	events(){
		// open modal click
		this.openModalButton.click(this.openModal.bind(this));
		// x close click
		this.closeModalButton.click(this.closeModal.bind(this));
		//escape key
		$(document).keyup(this.keyPressHandler.bind(this));

		//temp for certs
		this.moreButtonFirst.click(this.showMoreCertsGroup1.bind(this));
		this.moreButtonSecond.click(this.showMoreCertsGroup2.bind(this));
		this.moreButtonThird.click(this.showMoreCertsGroup3.bind(this));
		this.moreButtonFourth.click(this.showMoreCertsGroup4.bind(this));

	}
	openModal(){
		this.modal.addClass('modal--is-visible');
		return false;
	}

	closeModal(){
		this.modal.removeClass('modal--is-visible');		
	}
	keyPressHandler(e){
		if (e.keyCode == 27){
			this.closeModal();
		}
	}
	showMoreCertsGroup1(){
		this.certsGroup1.toggleClass('exercise-icons--group-hidden');
		this.moreButtonContainerFirst.toggleClass('more-btn--hidden');
		this.moreButtonContainerSecond.toggleClass('more-btn--hidden');
	}
	showMoreCertsGroup2(){
		this.certsGroup2.toggleClass('exercise-icons--group-hidden');
		this.moreButtonContainerSecond.toggleClass('more-btn--hidden');
		this.moreButtonContainerThird.toggleClass('more-btn--hidden');
	}
	showMoreCertsGroup3(){
		this.certsGroup3.toggleClass('exercise-icons--group-hidden');
		this.moreButtonContainerThird.toggleClass('more-btn--hidden');
		this.moreButtonContainerFourth.toggleClass('more-btn--hidden');
	}
	showMoreCertsGroup4(){
		this.certsGroup4.toggleClass('exercise-icons--group-hidden');
		// this.moreButtonContainerThird.toggleClass('more-btn--hidden');
		this.moreButtonContainerFourth.toggleClass('more-btn--hidden');
		this.moreButtonContainerFifth.toggleClass('more-btn--hidden');
	}
}







export default Modal;