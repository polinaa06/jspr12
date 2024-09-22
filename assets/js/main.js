"use strict"

document.querySelector('.faq').addEventListener('click', function (event) {
    let target = event.target.closest('.faq_item');
    if (!target) return;

    target.classList.toggle('active');
    let p = target.querySelector('p');
    let h4 = target.querySelector('.faq_h4');
    if (target.classList.contains('active')) {
        p.style.height = p.scrollHeight + 'px';
        h4.style.transform = 'rotate(45deg)';
    } else {
        p.style.height = '';
        h4.style.transform = 'rotate(0deg)';
    }
})