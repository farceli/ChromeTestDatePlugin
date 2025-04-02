// 手机号前缀
var prefixList = [
    "130", "131", "132", "133", "134", "135", "136", "137", "138", "139",
    "150", "151", "152", "153", "155", "156", "157", "158", "159",
    "170", "171", "172", "173", "175", "176", "177", "178",
    "180", "181", "182", "183", "184", "185", "186", "187", "188", "189",
    "191", "198", "199"
];

// 生成随机手机号
function generatePhone() {
    var prefix = prefixList[Math.floor(Math.random() * prefixList.length)];
    var number = "";
    for (var i = 0; i < 8; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return prefix + number;
}

// 页面加载后执行
document.addEventListener('DOMContentLoaded', function () {
    // 获取DOM元素
    var phoneInput = document.getElementById('phoneNumber');
    var generateBtn = document.getElementById('generateBtn');
    var copyBtn = document.getElementById('copyBtn');

    // 页面加载时生成一个随机手机号
    phoneInput.value = generatePhone();

    // 点击生成按钮时生成新的手机号
    generateBtn.addEventListener('click', function () {
        phoneInput.value = generatePhone();
    });

    // 点击复制按钮时复制手机号
    copyBtn.addEventListener('click', function () {
        phoneInput.select();
        document.execCommand('copy');

        // 显示复制成功提示
        var oldText = copyBtn.textContent;
        copyBtn.textContent = '已复制!';
        setTimeout(function () {
            copyBtn.textContent = oldText;
        }, 1500);
    });
}); 