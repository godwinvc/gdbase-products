if (location.origin == "https://www.gdbase.be") {
    // production
    window.baseURL = "https://www.gdbase.be/products-list/";
    window.$ = jQuery;
} else {
    // development
    window.jQuery = require('jquery');
    window.$ = jQuery;
    window.baseURL = "";
}

window.angular = require('angular');
window.customScroll = require('../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min');
require('../node_modules/angular-sanitize');
require('../node_modules/angular-ui-router');
require('../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min');

//********************// CSS - Libs
require('../css/bootgodwin.css');
require('../css/font-awesome.css');
require('../css/ionicons.css');


// mukesh css
require('../css/ecommerce.css');


//Godwin Scripts
require('../scripts/config');