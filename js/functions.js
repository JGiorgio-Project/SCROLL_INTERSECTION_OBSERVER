const ratio = .5;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if ( entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target)
        }
    });
};

const observer = new IntersectionObserver(handleIntersect, options);

observer.observe(document.getElementById('box1'));
observer.observe(document.getElementById('box2'));
observer.observe(document.getElementById('box3'));
observer.observe(document.getElementById('box4'));
observer.observe(document.getElementById('box5'));
observer.observe(document.getElementById('box6'));
