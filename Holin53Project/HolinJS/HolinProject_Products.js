const category = [
    { type: "national", label: "進口精釀啤酒" },
    { type: "domestic", label: "國產精釀啤酒" },
    { type: "rice", label: "小米氣泡酒" },
    { type: "japan", label: "日系啤酒" },
    { type: "grapewine", label: "紅白酒" },
    { type: "special", label: "隱藏版調酒" }

]

const products = [
    // --- 進口精釀啤酒 (對應 id="national") ---
    {
        id: "n-1",
        name: "女皇爵黑啤",
        category: "national", // 對應您的 section id
        volume: "330ml",
        abv: "6.2%",
        price: 180,
        image: "./productsImg/IMG_4645.JPG"
    },
    {
        id: "n-2",
        name: "迷迷麻麻大波啾",
        category: "national",
        volume: "568ml",
        abv: "9%",
        price: 300,
        image: "./productsImg/IMG_4609.JPG"
    },
    {
        id: " n-3",
        name: "泡泡-雪酪酸啤酒",
        category: "national",
        volume: "440ml",
        abv: "6.1%",
        price: 380,
        image: "./productsImg/IMG_4611.JPG"
    },
    {
        id: "n-4",
        name: "小白兔-白巧克力酸啤酒",
        category: "national",
        volume: "440ml",
        abv: "6.8%",
        price: 380,
        image: "./productsImg/IMG_4610.JPG"
    },
    {
        id: "n-5",
        name: "極致混濁IPA",
        category: "national",
        volume: "355ml",
        abv: "6.5%",
        price: 280,
        image: ".//productsImg//IMG_4617.JPG"
    },
    {
        id: "n-6",
        name: "KAIJU拉格",
        category: "national",
        volume: "375ml",
        abv: "4.4%",
        price: 220,
        image: "./productsImg/IMG_4619.JPG"
    },
    {
        id: "n-7",
        name: "克蘇魯",
        category: "national",
        volume: "375ml",
        abv: "6.5%",
        price: 300,
        image: "./productsImg/IMG_4639.JPG"
    },
    {
        id: " n-8",
        name: "金斧頭-蘋果",
        category: "national",
        volume: "375ml",
        abv: "5%",
        price: 220,
        image: "./productsImg/IMG_4640.JPG"
    },
    {
        id: "n-9",
        name: "周末震盪IPA",
        category: "national",
        volume: "473ml",
        abv: "6.8%",
        price: 300,
        image: "./productsImg/IMG_4634.JPG"
    },
    {
        id: "n-10",
        name: "白日夢遊IPA",
        category: "national",
        volume: "440ml",
        abv: "9%",
        price: 380,
        image: "./productsImg/IMG_4632.JPG"
    },
    {
        id: "n-11",
        name: "高帽肥貓",
        category: "national",
        volume: "440ml",
        abv: "6.8%",
        price: 380,
        image: ".//productsImg//IMG_4633.JPG"
    },
    {
        id: "n-12",
        name: "起司你好派",
        category: "national",
        volume: "330ml",
        abv: "5.5%",
        price: 250,
        image: "./productsImg/IMG_4641.JPG"
    },
    {
        id: "n-13",
        name: "快樂海茲淡艾爾",
        category: "national",
        volume: "330ml",
        abv: "5%",
        price: 180,
        image: "./productsImg/001.jpg"
    },
    {
        id: "n-14",
        name: "鹽漬白桃酸啤酒",
        category: "national",
        volume: "330ml",
        abv: "2.9%",
        price: 180,
        image: "./productsImg/002.jpg"
    },
    {
        id: "n-15",
        name: "酸黃瓜酸啤酒",
        category: "national",
        volume: "330ml",
        abv: "4.3%",
        price: 180,
        image: "./productsImg/003.jpg"
    },
    {
        id: "n-16",
        name: "液體補給紐西蘭IPA",
        category: "national",
        volume: "330ml",
        abv: "5.6%",
        price: 180,
        image: "./productsImg/004.jpg"
    },

    // --- 國產精釀啤酒 (對應 id="domestic") ---

   {
        id: "d-1",
        name: "紅心芭樂（野原廣志限定款）",
        category: "domestic",
        volume: "330ml",
        abv: "3.5%",
        price: 180,
        image: "./productsImg/廣智.png"
    },
    {
        id: "d-2",
        name: "清甜蜜桃（野原美冴限定款）",
        category: "domestic",
        volume: "330ml",
        abv: "3.5%",
        price: 180,
        image: "./productsImg/美芽.png"
    },
    {
        id: "d-3",
        name: "乳酸多多（高倉文太限定款）",
        category: "domestic",
        volume: "330ml",
        abv: "3.5%",
        price: 180,
        image: "./productsImg/園長.png"
    },
    {
        id: "d-4",
        name: "醜啤-拉格",
        category: "domestic",
        volume: "330ml",
        abv: "4.5%",
        price: 160,
        image: "./productsImg/醜啤.jpg"
    },
    {
        id: "d-5",
        name: "撥雲霧見蓬萊仙島",
        category: "domestic",
        volume: "330ml",
        abv: "6.5%",
        price: 200,
        image: "./productsImg/撥雲見日.jpg"
    },
    {
        id: "d-6",
        name: "怠惰社交型IPA",
        category: "domestic",
        volume: "330ml",
        abv: "5%",
        price: 250,
        image: "./productsImg/lazy.jpg"
    },
    {
        id: "d-7",
        name: "雙喜雙倍IPA啤酒",
        category: "domestic",
        volume: "330ml",
        abv: "8.8%",
        price: 210,
        image: "./productsImg/雙喜.jpg"
    },
    {
        id: "d-8",
        name: "傲慢檸檬海鹽拉格",
        category: "domestic",
        volume: "330ml",
        abv: "5%",
        price: 250,
        image: "./productsImg/檸檬.jpg"
    },
    {
        id: "d-9",
        name: "芭樂鹽小麥啤酒",
        category: "domestic",
        volume: "330ml",
        abv: "5.2%",
        price: 180,
        image: "./productsImg/芭樂.jpg"
    },
    {
        id: "d-10",
        name: "海灘貓貓",
        category: "domestic",
        volume: "330ml",
        abv: "6.9%",
        price: 200,
        image: "./productsImg/IMG_4510.JPG"
    },
    {
        id: "d-11",
        name: "琥珀拉格",
        category: "domestic",
        volume: "330ml",
        abv: "5.5%",
        price: 200,
        image: "./productsImg/IMG_4503.JPG"
    },
    {
        id: "d-12",
        name: "金荒烈愛爾",
        category: "domestic",
        volume: "330ml",
        abv: "5%",
        price: 200,
        image: "./productsImg/IMG_4502.JPG"
    },
    {
        id: "d-13",
        name: "蜜桃紅茶蘋果酒",
        category: "domestic",
        volume: "330ml",
        abv: "3.5%",
        price: 200,
        image: "./productsImg/蜜桃.png"
    },
    {
        id: "d-14",
        name: "紅茶艾爾",
        category: "domestic",
        volume: "330ml",
        abv: "5%",
        price: 200,
        image: "./productsImg/紅茶艾爾.jpg"
    },



    // --- 小米氣泡酒 (對應 id="rice") ---
    {
        id: "r-1",
        name: "小米水蜜桃氣泡酒",
        category: "rice",
        volume: "330ml",
        abv: "8%",
        price: 250,
        image: "./productsImg/1.jpg"
    },
    {
        id: "r-2",
        name: "小米青梅氣泡酒",
        category: "rice",
        volume: "330ml",
        abv: "6.9%",
        price: 250,
        image: "./productsImg/3.JPG"
    },
    {
        id: "r-3",
        name: "小米椪柑氣泡酒",
        category: "rice",
        volume: "330ml",
        abv: "8%",
        price: 250,
        image: "./productsImg/2.JPG"
    },
    {
        id: "r-4",
        name: "小米紅烏龍氣泡酒",
        category: "rice",
        volume: "330ml",
        abv: "8%",
        price: 250,
        image: "./productsImg/4.JPG"
    },
    {
        id: "r-5",
        name: "小米柚子氣泡酒",
        category: "rice",
        volume: "330ml",
        abv: "8%",
        price: 250,
        image: "./productsImg/5.jpg"
    },

    // --- 日系啤酒 (對應 id="japan") ---
    {
        id: "j-1",
        name: "吟香清酒啤酒",
        category: "japan",
        volume: "330ml",
        abv: "4%",
        price: 230,
        image: "./productsImg/6.JPG"
    },
    {
        id: "j-2",
        name: "白柚艾爾啤酒",
        category: "japan",
        volume: "330ml",
        abv: "5%",
        price: 230,
        image: "./productsImg/7.JPG"
    },
    {
        id: "j-3",
        name: "阿爾特啤酒",
        category: "japan",
        volume: "330ml",
        abv: "5%",
        price: 230,
        image: "./productsImg/8.JPG"
    },
    {
        id: "j-4",
        name: "Asahi朝日啤酒",
        category: "japan",
        volume: "633ml",
        abv: "5%",
        price: 160,
        image: "./productsImg/IMG_4622.JPG"
    },
    {
        id: "j-5",
        name: "SAPPRORO黑標",
        category: "japan",
        volume: "633ml",
        abv: "5%",
        price: 200,
        image: "./productsImg/IMG_4620.JPG"
    },

    // --- 紅白酒 (對應 id="grapewine") ---
    {
        id: "g-1",
        name: "阿莫酒莊 蚱蜢紅酒 2022",
        category: "grapewine",
        volume: "750ml",
        abv: "12.5%",
        price: 1150,
        image: "./productsImg/蚱蜢.jpg"
    },
    {
        id: "g-2",
        name: "蝌蚪陶甕白酒 2022",
        category: "grapewine",
        volume: "750ml",
        abv: "12.5%",
        price: 1150,
        image: "./productsImg/蝌蚪.jpg"
    },
     {
        id: "g-3",
        name: "勃根地-阿里哥蝶",
        category: "grapewine",
        volume: "750ml",
        abv: "12.5%",
        price: 1350,
        image: "./productsImg/小蝴蝶.jpg"
    },
    {
        id: "g-4",
        name: "勃根地-咕嚕咕嚕",
        category: "grapewine",
        volume: "750ml",
        abv: "12.5%",
        price: 1500,
        image: "./productsImg/咕嚕咕嚕.jpg"
    },

    // ---隱藏版 (對應 id="special") ---
    {
        id: "s-1",
        name: "梅酒來一杯",
        category: "special",
        volume: "120ml",
        abv: "15%",
        price: 250,
        image: "./productsImg/row-1-column-1.jpg",
    },
    {
        id: "s-2",
        name: "Ho闆娘特調Highball",
        category: "special",
        volume: "350ml",
        abv: "7%",
        price: 350,
        image: "./productsImg/row-1-column-2.jpg",
    },
    {
        id: "s-3",
        name: "奔瑞喜歡自由古巴",
        category: "special",
        volume: "300ml",
        abv: "10%",
        price: 350,
        image: "./productsImg/row-1-column-3.jpg",
    },
    {
        id: "s-4",
        name: "Hey Gin Tonic",
        category: "special",
        volume: "300ml",
        abv: "12%",
        price: 350,
        image: "./productsImg/row-1-column-4.jpg",
    },
    {
        id: "s-5",
        name: "威士忌單杯",
        category: "special",
        volume: "60ml",
        abv: "40%",
        price: 350,
        image: "./productsImg/row-2-column-1.jpg",
    },
    {
        id: "s-6",
        name: "妹子最愛蘋果琴人",
        category: "special",
        volume: "250ml",
        abv: "8%",
        price: 350,
        image: "./productsImg/row-2-column-2.jpg",
    },
    {
        id: "s-7",
        name: "哈密瓜特調",
        category: "special",
        volume: "250ml",
        abv: "12%",
        price: 350,
        image: "./productsImg/row-2-column-3.jpg",
    },
    {
        id: "s-8",
        name: "想帶你環遊世界",
        category: "special",
        volume: "300ml",
        abv: "25%",
        price: 420,
        image: "./productsImg/row-2-column-4.jpg",
    }

];

// 取得網頁上的容器
const container = document.getElementById('product-container');
// const titleElement = document.getElementById('display-title');

function renderProducts(data) {
    let htmlContent = '';

    data.forEach(product => {
        htmlContent +=/*html*/ `
      <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="product-card">
              <div class="beer-box">
                  <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="text-box">
                  <h3 class="product-name">${product.name}</h3>
                  <div class="product-specs">
                      <span>${product.volume}</span> | <span>ABV ${product.abv}</span>
                  </div>
                  <p class="price">$ ${product.price}</p>
                </div>
          </div>
      </div>
    `;
    });

    // 把生成的 HTML 塞進容器裡
    container.innerHTML = htmlContent;
}

// 2. 定義過濾函式 (修改後)
function filterProducts(category, btnElement) {

    if (btnElement) {
        // 1. 找到所有按鈕，移除 active
        const buttons = document.querySelectorAll('.btn-custom');
        buttons.forEach(btn => btn.classList.remove('active'));

        // 2. 幫被點擊的按鈕加上 active
        btnElement.classList.add('active');
    }

    // 篩選資料

    const filtered = products.filter(item => item.category === category);
    renderProducts(filtered);

}
filterProducts("national");





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

