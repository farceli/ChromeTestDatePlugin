// 监听来自background.js的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    try {
        // 收到填充手机号的请求
        if (request.action === "fillPhoneNumber" && request.phoneNumber) {
            // 查找当前焦点元素
            var activeElement = document.activeElement;

            // 如果没有焦点元素，尝试查找所有可编辑元素
            if (!activeElement ||
                !(activeElement.tagName === 'INPUT' ||
                    activeElement.tagName === 'TEXTAREA' ||
                    activeElement.isContentEditable)) {

                // 查找所有输入框
                var inputs = document.querySelectorAll('input[type="text"], input[type="tel"], input:not([type]), textarea');
                if (inputs.length > 0) {
                    activeElement = inputs[0];
                }
            }

            // 填充手机号
            if (activeElement) {
                if (activeElement.isContentEditable) {
                    activeElement.textContent = request.phoneNumber;
                } else {
                    activeElement.value = request.phoneNumber;
                    // 触发change事件
                    var event = new Event('change', { bubbles: true });
                    activeElement.dispatchEvent(event);
                    // 触发input事件
                    var inputEvent = new Event('input', { bubbles: true });
                    activeElement.dispatchEvent(inputEvent);
                }
            }
        }
        // 发送响应
        sendResponse({ success: true });
    } catch (e) {
        console.error('填充手机号失败:', e);
        sendResponse({ success: false, error: e.message });
    }
    return true; // 保持消息通道开放
}); 