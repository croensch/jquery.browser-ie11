/**
 * @author croensch
 * @license Simplified BSD License
 * @version 1.0.0 
 */
(function () {
    if (jQuery && jQuery.browser && (/Trident\/7\./).test(navigator.userAgent)) {
        delete(jQuery.browser.mozilla);
        jQuery.browser.msie = true;
    }
}());
