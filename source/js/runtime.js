var now = new Date();
function createtime() {
    // 当前时间
    now.setTime(now.getTime() + 1000);
    // var start = new Date("10/09/2023 13:14:00"); // 旅行者1号开始计算的时间
    // var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
    // var unit = (dis / 149600000).toFixed(6);  // 天文单位
    var grt = new Date("10/09/2023 13:14:00");	// 网站诞生时间
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum).length && (hnum = "0" + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum).length && (mnum = "0" + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum).length && (snum = "0" + snum);
    let currentTimeHtml = "";
    (currentTimeHtml =
        hnum < 22 && hnum >= 8
            ? `<img class='boardsign' src='https://this0.oss-cn-chengdu.aliyuncs.com/blog/base/svg/this0-%E4%B8%8A%E7%8F%AD%E4%B8%AD%F0%9F%92%BB.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站已开源 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> </div>`
            : `<img class='boardsign' src='https://this0.oss-cn-chengdu.aliyuncs.com/blog/base/svg/this0-%E4%BC%91%E6%81%AF%E5%95%A6%F0%9F%8C%99.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站已开源 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> </div>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
    createtime();
}, 1000);