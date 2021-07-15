const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {};

const imgObserver = new IntersectionObserver((entries,
    imgObserver) => {
        entries.forEach(enty => {
            if (!entry.Intersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);

    imgObserver.forEach(image => {
        imgObserver.observe(image);
    });