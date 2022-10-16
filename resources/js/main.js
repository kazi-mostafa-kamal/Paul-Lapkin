$(document).ready(function() {
    var mixer = mixitup('#sk');
    $(function() {
        $.scrollify({
            section: ".sagor",
            scrollbars: true,
            overflowScroll: false,
            setHeights: false,
        });
    });
    $(".menu a ,.down-button a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, );
        }
        return true
    });
})
$(document).ready(function(){
   function openMenu() {
    document.getElementById('navbar').style.display = 'block'
}

function cloceMenu() {
    document.getElementById('navbar').style.display = 'none'
} 
})

