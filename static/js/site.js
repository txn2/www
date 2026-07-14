/* txn2 / small bits of motion + a working clock */

(function () {
    'use strict';

    /* ── on-scroll reveal (cheap IntersectionObserver) ────────── */
    const reveal = document.querySelectorAll('.section, .flagship__card, .mcp__card, .stack__row');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.style.opacity = 1;
                    e.target.style.transform = 'translateY(0)';
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        reveal.forEach((el, i) => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(24px)';
            el.style.transition = `opacity .8s cubic-bezier(.2,.8,.2,1) ${(i % 4) * 60}ms, transform .8s cubic-bezier(.2,.8,.2,1) ${(i % 4) * 60}ms`;
            io.observe(el);
        });
    }
})();
