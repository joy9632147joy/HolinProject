
// 監聽網頁滾動事件
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 200) { // 如果滾動超過 50px
        navbar.classList.add('scrolled'); // 加上變色 class
    } else {
        navbar.classList.remove('scrolled'); // 變回透明
    }
});


// GoogleSheet:https://docs.google.com/spreadsheets/d/1dsH6dm14FNQr_Zunbb4hzCurRJinKivTUIWZjyyvI6Q/edit?gid=0#gid=0

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxX8_UoeL2xF_PmQ9NhMe9MnztmWInTl3KPzaPSZHJUFHdEbUP9xms_fMhqFBffgO-3ZA/exec';
// 取得按鈕並監聽點擊事件
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    // 1. 抓取欄位資料
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // 2. 簡單驗證 (可選)
    if (name === '' || phone === '' || message === '') {
        alert('請填寫姓名、手機與內容！');
        return;
    }


    // 3. 建立一個物件 (Object)
    const formData = {
        timestampTW: new Date().toLocaleString(),
        name: name,
        phone: phone,
        email: email,
        message: message,
    };


    // 4. 模擬資料庫操作
    // 先從 LocalStorage 拿出舊資料 (如果沒有就是空陣列)
    // let database = JSON.parse(localStorage.getItem('contact_db')) || [];

    // 把新資料推進去
    // database.push(formData);

    // 把更新後的資料轉成 JSON 字串，存回去
    // localStorage.setItem('contact_db', JSON.stringify(database));


    submitBtn.disabled = true;
    submitBtn.value = '送出中...';

    try {
        // 5. 發送到 Google Sheets
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // 重要：Google Apps Script 需要用 no-cors
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // 5. 成功回饋
        console.log("目前的 JSON 資料庫內容：", formData);
        alert('填寫成功！後續將由專人為您服務~');

        // 清空欄位
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

    } catch (error) {
        console.error('送出失敗:', error);
        alert('送出失敗，請稍後再試或直接撥打電話聯絡我們！');
    } finally {
        // 7. 恢復按鈕狀態
        submitBtn.disabled = false;
        submitBtn.value = '送出表單';
        submitBtn.style.opacity = '1';
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