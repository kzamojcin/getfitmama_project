import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import ObjectFitWorkaround from './modules/ObjectFitWorkaround';



var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.revealOnScroll-85'), '85%');
new RevealOnScroll($('.revealOnScroll-90'), '20%');
var StickyHeaderer = new StickyHeader();
var modal = new Modal();
// var objectFitWorkaround = new ObjectFitWorkaround();

