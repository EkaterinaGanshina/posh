const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const date = new Date();

// Preload background image
$(window).on('load', () => { $('.page-header .background').css('opacity', '1') });

$(document).ready(function () {
    const $services = $('.services');
    const $today = $('.today-post .date');
    
    // Set date for "Today Post" section
    $today.find('.month').text(months[date.getMonth()]);
    $today.find('.day').text(date.getDate());
    
    // Scroll to top
    $('.page-footer .go-top').on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    });
    
    // Switch the articles (section "Our Services")
    $services.find('.services-list li').on('click', (e) => {
        const article = $(e.target).data('article');
        const $visible = $services.find('.articles-list .article-wrapper:visible');
        
        $services.find('.services-list li.active').removeClass('active');
        $(e.target).addClass('active');
        $visible.fadeOut(300, () => {
            $services.find('.articles-list [data-title="' + article + '"]').fadeIn(300);
        });
    });
});