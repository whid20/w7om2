// إضافة CSS خارجي لتحسين التصميم
$(`<link rel="stylesheet" href="https://raw.githack.com/whid20/emad/main/Apps.css">`).appendTo("head");

// إضافة تأثيرات تفاعلية باستخدام JavaScript
$(document).ready(function() {
    // تغيير لون الخلفية عند تمرير الماوس على زر معين
    $('#myButton').hover(function() {
        $(this).css('background-color', '#1cc88a');
    }, function() {
        $(this).css('background-color', '#333');
    });

    // فتح نافذة منبثقة عند الضغط على زر معين
    $('#openPopup').click(function() {
        $('#popup').show();
    });

    // إغلاق النافذة المنبثقة
    $('#closePopup').click(function() {
        $('#popup').hide();
    });

    // تأثير التمرير الناعم عند الانتقال إلى الروابط الداخلية
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
});
