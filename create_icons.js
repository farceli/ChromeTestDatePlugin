const fs = require('fs');
const { createCanvas } = require('canvas');

function generateIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // 设置背景
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(0, 0, size, size);

    // 绘制圆形
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * 0.4, 0, Math.PI * 2);
    ctx.fill();

    // 绘制手机形状
    ctx.fillStyle = '#4CAF50';
    const phoneWidth = size * 0.25;
    const phoneHeight = size * 0.45;
    ctx.fillRect(size / 2 - phoneWidth / 2, size / 2 - phoneHeight / 2, phoneWidth, phoneHeight);

    // 绘制数字
    ctx.fillStyle = 'white';
    ctx.font = `bold ${size * 0.12}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('1', size / 2, size / 2);

    return canvas.toBuffer();
}

// 生成不同尺寸的图标
[16, 48, 128].forEach(size => {
    const iconData = generateIcon(size);
    fs.writeFileSync(`images/icon${size}.png`, iconData);
    console.log(`已生成 ${size}x${size} 图标`);
}); 