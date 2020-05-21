var now = new Date();
module.exports = async function (context, req) {
    var Year = now.getFullYear();
    var Month = now.getMonth() + 1;
    var Date = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();
    var result = Year + "年" + Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec;
    context.res = {
        body: {
            text: "今何時？" + result
        }
    };
};