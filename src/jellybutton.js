var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
    TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
    TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

var $button2 = document.querySelector('.button2');
$button2.addEventListener('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button2, duration, {scaleY: 1.6, ease: Expo.easeOut});
    TweenMax.to($button2, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
    TweenMax.to($button2, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

var $message = document.querySelector('.message');
$message.addEventListener('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($message, duration, {scaleY: 1.6, ease: Expo.easeOut});
    TweenMax.to($message, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
    TweenMax.to($message, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

var $jellyimg = document.querySelectorAll('.jellyimg');
for(var i=0;i<$jellyimg.length;i++) {
    $jellyimg[i].addEventListener('click', function() {
        var duration = 0.3,
            delay = 0.08;
        TweenMax.to(this, duration, {scaleY: 1.6, ease: Expo.easeOut});
        TweenMax.to(this, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
        TweenMax.to(this, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
    });
}
