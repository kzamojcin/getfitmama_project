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
              imgUrl = $container.find('img').prop('src'),
              $picture = $('.large-hero picture img');
              // $pictureElement = $('.large-hero picture');
              
              $picture.attr({
                              'src':'',
                              'alt':''
                            });
              // $picture.attr('alt','');
              console.log($picture);
              console.log($picture[0]);
              console.log($picture[1]);
              console.log(imgUrl);
              console.log($container);
              if (imgUrl) {
                $picture
                  .css('backgroundImage', 'url(' + imgUrl + ')')
                  .addClass('compat-object-fit');
              }  
            });
            $('.modal').each(function () {
              var $container = $(this),
              imgUrl = $container.find('img').prop('src'),
              $picture = $('.modal picture img');
              $picture.attr({
                              'src':'',
                              'alt':''
                            });
              if (imgUrl) {
                $picture
                  .css('backgroundImage', 'url(' + imgUrl + ')')
                  .addClass('compat-object-fit');
              }              
            });
            $(".site-header__language__container").css('width','180px');
        }
    }
}

export default ObjectFitWorkaround;