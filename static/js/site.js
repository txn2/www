/* txn2 — small bits of motion + a working clock */

(function () {
    'use strict';

    /* ── live UTC clock for the rails ─────────────────────────── */
    const clocks = document.querySelectorAll('[data-clock]');
    if (clocks.length) {
        const tick = () => {
            const now = new Date();
            const hh = String(now.getUTCHours()).padStart(2, '0');
            const mm = String(now.getUTCMinutes()).padStart(2, '0');
            const ss = String(now.getUTCSeconds()).padStart(2, '0');
            const txt = `${hh}:${mm}:${ss} UTC`;
            clocks.forEach(el => { el.textContent = txt; });
        };
        tick();
        setInterval(tick, 1000);
    }

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

    /* ── tiny parallax on the hero stamp on mouse move ───────── */
    const stamp = document.querySelector('.hero__stamp');
    if (stamp && window.matchMedia('(pointer:fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 8;
            const y = (e.clientY / window.innerHeight - 0.5) * 8;
            stamp.style.transform = `translate(${-x}px, ${-y}px)`;
        }, { passive: true });
    }
})();
