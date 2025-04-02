// 手机号前缀
var prefixList = [
    "130", "131", "132", "133", "134", "135", "136", "137", "138", "139",
    "150", "151", "152", "153", "155", "156", "157", "158", "159",
    "170", "171", "172", "173", "175", "176", "177", "178",
    "180", "181", "182", "183", "184", "185", "186", "187", "188", "189",
    "191", "198", "199"
];

// 随机生成数据的工具函数
var utils = {
    // 生成随机手机号
    generatePhone: function () {
        var prefix = prefixList[Math.floor(Math.random() * prefixList.length)];
        var number = "";
        for (var i = 0; i < 8; i++) {
            number += Math.floor(Math.random() * 10);
        }
        return prefix + number;
    },

    // 生成随机中文姓名
    generateName: function () {
        var surnames = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻水云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董粱杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄曲家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭历戎祖武符刘景詹束龙叶幸司韶郜黎蓟溥印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阳郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍却璩桑桂濮牛寿通边扈燕冀浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇广禄阙东欧殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后荆红游竺权逯盖益桓公万俟司马上官欧阳夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于单于太叔申屠公孙仲孙轩辕令狐钟离宇文长孙慕容司徒司空召有舜叶赫那拉";
        var names = "世永书林天景玉昌盛海瑞忠良朝夕凡梦琪忆之桃慕青问兰尔岚元香初夏沛菡傲珊曼文乐菱痴珊恨玉惜文香寒新柔语蓉海安夜蓉涵柏水桃醉蓝春儿语琴从彤傲晴语兰又菱碧彤元霜怜梦紫寒妙彤曼易南莲紫翠雨寒易烟如萱若南寻真晓亦向珊慕灵以蕊寻雁映易雪柳孤岚笑霜海云凝天沛珊寒云冰旋宛儿绿真盼儿晓霜碧凡夏菡曼香若烟半梦雅绿冰蓝灵槐平安书翠翠风香巧代云梦曼幼翠友巧听寒梦柏醉易访旋亦玉凌萱访卉怀亦笑蓝春翠靖儿妙松青梅笑天笑萍之山逸彤沛白易烟惜山雪瑶从寒忆香觅波静曼凡旋以亦念露芷蕾千兰新波代真新蕾雁玉冷卉紫山千琴恨天傲芙盼山觅珍代双幼珍诗霜听芹妙之炎大光明永丽";
        var surname = surnames[Math.floor(Math.random() * surnames.length)];
        var nameLength = Math.random() < 0.5 ? 1 : 2;  // 50%概率是单字名
        var name = "";
        for (var i = 0; i < nameLength; i++) {
            name += names[Math.floor(Math.random() * names.length)];
        }
        return surname + name;
    },

    // 生成随机身份证号
    generateIdCard: function () {
        // 省份代码列表
        var provinceCode = ['11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43', '44', '45', '46', '50', '51', '52', '53', '54', '61', '62', '63', '64', '65'];
        // 生成出生日期
        var now = new Date();
        var year = now.getFullYear() - Math.floor(Math.random() * 60) - 18; // 18-78岁
        var month = ('0' + (Math.floor(Math.random() * 12) + 1)).slice(-2);
        var day = ('0' + (Math.floor(Math.random() * 28) + 1)).slice(-2); // 简化处理，统一用28天

        // 随机生成前17位
        var prefix = provinceCode[Math.floor(Math.random() * provinceCode.length)]; // 省份代码
        var cityCode = ('0' + (Math.floor(Math.random() * 99) + 1)).slice(-2); // 城市代码
        var areaCode = ('0' + (Math.floor(Math.random() * 99) + 1)).slice(-2); // 区域代码
        var sequence = ('00' + (Math.floor(Math.random() * 999) + 1)).slice(-3); // 顺序码，3位数

        var id17 = prefix + cityCode + areaCode + year + month + day + sequence;

        // 计算校验码
        var factors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var checksums = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
        var sum = 0;
        for (var i = 0; i < 17; i++) {
            sum += parseInt(id17[i]) * factors[i];
        }
        var checksum = checksums[sum % 11];

        return id17 + checksum;
    },

    // 生成随机邮箱
    generateEmail: function () {
        var domains = ['qq.com', '163.com', 'gmail.com', 'outlook.com', 'hotmail.com', '126.com', 'yeah.net'];
        var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var name = '';
        var length = Math.floor(Math.random() * 8) + 6; // 6-14位
        for (var i = 0; i < length; i++) {
            name += chars[Math.floor(Math.random() * chars.length)];
        }
        return name + '@' + domains[Math.floor(Math.random() * domains.length)];
    },

    // 生成指定长度的随机中文
    generateChineseText: function (length) {
        var commonChars = "的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞";
        var result = '';
        for (var i = 0; i < length; i++) {
            result += commonChars[Math.floor(Math.random() * commonChars.length)];
        }
        return result;
    },

    // 生成指定长度的随机英文
    generateEnglishText: function (length) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
        var result = '';
        var lastChar = '';

        for (var i = 0; i < length; i++) {
            // 避免连续空格
            do {
                var randomChar = chars[Math.floor(Math.random() * chars.length)];
            } while (randomChar === ' ' && lastChar === ' ');

            result += randomChar;
            lastChar = randomChar;
        }

        // 确保首尾不是空格
        if (result[0] === ' ') {
            result = 'A' + result.slice(1);
        }
        if (result[result.length - 1] === ' ') {
            result = result.slice(0, -1) + 'z';
        }

        return result;
    }
};

// 创建右键菜单
function createContextMenu() {
    try {
        chrome.contextMenus.removeAll(function () {
            // 创建父菜单
            chrome.contextMenus.create({
                id: "testDataGenerator",
                title: "测试数据",
                contexts: ["editable"]
            });

            // 创建子菜单
            chrome.contextMenus.create({
                id: "fillPhone",
                parentId: "testDataGenerator",
                title: "📱 手机号",
                contexts: ["editable"]
            });

            chrome.contextMenus.create({
                id: "fillName",
                parentId: "testDataGenerator",
                title: "👤 中文姓名",
                contexts: ["editable"]
            });

            chrome.contextMenus.create({
                id: "fillIdCard",
                parentId: "testDataGenerator",
                title: "🎫 身份证号",
                contexts: ["editable"]
            });

            chrome.contextMenus.create({
                id: "fillEmail",
                parentId: "testDataGenerator",
                title: "📧 邮箱",
                contexts: ["editable"]
            });

            // 添加自定义长度随机中文菜单
            chrome.contextMenus.create({
                id: "fillCustomChineseText",
                parentId: "testDataGenerator",
                title: "🈺 自定义长度中文",
                contexts: ["editable"]
            });

            // 添加自定义长度随机英文菜单
            chrome.contextMenus.create({
                id: "fillCustomEnglishText",
                parentId: "testDataGenerator",
                title: "🔤 自定义长度英文",
                contexts: ["editable"]
            });
        });
    } catch (e) {
        console.error('创建菜单失败:', e);
    }
}

// 注入content script
async function injectContentScript(tabId) {
    try {
        await chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['js/content.js']
        });
    } catch (e) {
        console.error('注入content script失败:', e);
    }
}

// 处理右键菜单点击
async function handleContextMenuClick(info, tab) {
    try {
        // 确保content script已注入
        await injectContentScript(tab.id);

        var value = '';

        if (info.menuItemId === 'fillCustomChineseText' || info.menuItemId === 'fillCustomEnglishText') {
            // 在当前标签页中执行脚本来获取用户输入
            const results = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    return prompt('请输入需要生成的字符数：', '10');
                }
            });

            if (results && results[0] && results[0].result) {
                const length = parseInt(results[0].result);
                if (!isNaN(length) && length > 0) {
                    value = info.menuItemId === 'fillCustomChineseText'
                        ? utils.generateChineseText(length)
                        : utils.generateEnglishText(length);
                } else {
                    await chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        func: () => {
                            alert('请输入大于0的数字！');
                        }
                    });
                    return;
                }
            }
        } else {
            switch (info.menuItemId) {
                case 'fillPhone':
                    value = utils.generatePhone();
                    break;
                case 'fillName':
                    value = utils.generateName();
                    break;
                case 'fillIdCard':
                    value = utils.generateIdCard();
                    break;
                case 'fillEmail':
                    value = utils.generateEmail();
                    break;
            }
        }

        if (value) {
            await chrome.tabs.sendMessage(tab.id, {
                action: "fillPhoneNumber", // 保持action名称不变，content.js中已经能正确处理
                phoneNumber: value // 复用phoneNumber字段传递所有类型的值
            });
        }
    } catch (e) {
        console.error('处理菜单点击失败:', e);
    }
}

// 初始化扩展
chrome.runtime.onInstalled.addListener(function () {
    createContextMenu();
});

// 注册右键菜单点击事件
chrome.contextMenus.onClicked.addListener(handleContextMenuClick);

// 监听标签页更新
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
        injectContentScript(tabId);
    }
}); 