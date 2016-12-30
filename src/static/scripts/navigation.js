var $html = $('html');
var $toggle = $('#toggle');
var $about = $('#about');

(function() {
    $toggle.on('click', function(event) {
        $toggle.hasClass('i') ? showDetails() : hideDetails();
    });
})();


function showDetails() {
    $toggle.css('display', 'block');
    $about.removeClass('hide');
    $toggle.removeClass('i');
    $('.toggle-contact').css('display', 'none');
    $about.css('display', 'table');
    slideout.close();

}

function hideDetails() {
    $about.addClass('hide');
    $toggle.css('display', 'none');
    setTimeout(function() {
        $about.css('display', 'none');
    }, 500);
    $toggle.addClass('i');
    setTimeout(function() {
        $('.toggle-contact').fadeIn().css('display', 'block');
    }, 200);
    history.pushState(localeBaseUrl, null, localeBaseUrl);
}

function toggleDetails(type) {
    showPage(type);
    $toggle.hasClass('i') ? showDetails() : hideDetails();
}

function openPage(type) {
    showPage(type);
    showDetails();
}

var urlHelper = {
    getPageUrl: function(pageName) {
        var pagePath = pageName.replace('-', '/');
        return localeBaseUrl + pagePath + '/';
    },

    getAltPageUrl: function(pageName, lang) {
        var pagePath = '';
        if (pageName) {
            pagePath = pageName.replace('-', '/') + '/';
        }
        return baseUrl + lang + '/' + pagePath;
    },

    getPageName: function(pageUrl) {
        return pageUrl.split('?')[0].split('#')[0].replace(localeBaseUrl, '').replace(/\/+$/, '');
    }
};

function showPage(type) {
    var newUrl = urlHelper.getPageUrl(type);
    loadContent(newUrl, $(".content-holder"));
    history.pushState(newUrl, null, newUrl);
    slideout.close();
}
