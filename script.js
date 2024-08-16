const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll  = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

function blogAlert() {
    alert("Chatify social media Community - Coming Soon! We're building a vibrant community for social enthusiasts, developers, and innovators. Stay tuned for our launch! Please check back soon.");
}
  // Loader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
    }, 5000); // 5000ms = 5 seconds
});

//A progress bar functionality

window.addEventListener('load', function() {
    const progress = document.getElementById('progress');
    const percentage = document.getElementById('percentage');
    let count = 0;
    const interval = setInterval(() => {
        if (count <= 100) {
            progress.style.width = count + '%';
            percentage.textContent = count + '%';
            count++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                document.querySelector('.preloader').style.display = 'none';
            }, 500); // wait 0.5s before hiding the preloader
        }
    }, 40); // update progress every 40ms
});
