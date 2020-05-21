const {
    DateTime
} = require('luxon');
let now = new Date();
module.exports = async function (context, req) {
    let dt = DateTime.local().setZone('Asia/Tokyo');

    let Year = dt.year;
    let Month = dt.month;
    let Date = dt.day;
    let Hour = dt.hour;
    let Min = dt.minute;
    let Sec = dt.second;
    let result = Year + "年" + Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec;
    context.res = {
        body: {
            text: "今何時？" + result
        }
    };
};