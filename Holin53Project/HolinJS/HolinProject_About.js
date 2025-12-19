
// 監聽網頁滾動事件
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 200) {
        navbar.classList.add('scrolled'); // 加上變數 class
    } else {
        navbar.classList.remove('scrolled'); // 變回透明
    }
});



// 1. 抓取按鈕元素
let mybutton = document.getElementById("myBtn");

// 2. 監聽網頁捲動事件 (當網頁捲動時執行 scrollFunction)
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    // 如果捲動超過 100px (document.body 是給 Safari 看的，documentElement 是給 Chrome/Firefox 看的)
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block"; // 顯示按鈕
    } else {
        mybutton.style.display = "none";  // 隱藏按鈕
    }
}

// 3. 監聽點擊事件 (點下去後回到頂端)
mybutton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



