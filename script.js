function changeLang(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', () => {
    const mq = document.querySelector('marquee');
    if(mq) {
        mq.addEventListener('mouseover', () => mq.stop());
        mq.addEventListener('mouseout', () => mq.start());
    }
});