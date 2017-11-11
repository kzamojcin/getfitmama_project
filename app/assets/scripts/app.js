import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import VideoFrame from './modules/VideoFrame';


var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '60%');
new RevealOnScroll($('.revealOnScroll-85'), '85%');
new RevealOnScroll($('.revealOnScroll-90'), '20%');
var stickyHeader = new StickyHeader();
var modal = new Modal();
var videoFrame = new VideoFrame();