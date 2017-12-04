import $ from 'jquery';

class ObjectFitWorkaround{
	constructor(){		
        this.injectJsIfWindowsBrowser();
	}
    injectJsIfWindowsBrowser(){
        if ( ! Modernizr.objectfit ) {
            console.log('this one does not support object-fit this one is Edgy xD');
            $('.large-hero').each(function () {
              var $container = $(this),
                  imgUrl = $container.find('img').prop('src');
              if (imgUrl) {
                $container
                  .css('backgroundImage', 'url(' + imgUrl + ')')
                  .addClass('compat-object-fit');
              }  
            });
        }
    }
}

export default ObjectFitWorkaround;