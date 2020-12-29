/* ziye  导出企鹅ck专用

github地址     https://github.com/ziye12/JavaScript
TG频道地址     https://t.me/ziyescript
TG交流群       https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接      https://raw.githubusercontent.com/ziye12/JavaScript/master/Task/ziye.boxjs.json

转载请备注个名字，谢谢



*/

//请先确定boxjs已经存在ck，想要导出哪个值，就设置为1

const body=1
const timeurl=0
const timeheader=0
const GG=''//默认为换行，也可以将需要隔开的符号填写在''内


let K = 1;//从哪个账号开始

let Z = 2;//到哪个账号结束












const jsname = "企鹅读书";
const $ = Env(jsname);
$.idx = ($.idx = ($.getval('qeSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : "";



const qqreadbdArr = [];
let qqreadbodyVal = "";
const qqreadtimeurlArr = [];
let qqreadtimeurlVal = "";
const qqreadtimehdArr = [];
let qqreadtimeheaderVal = "";
let qqreadBD = [];
let qqreadtimeURL = [];
let qqreadtimeHD = [];
if ($.isNode()) {
  if (process.env.COOKIES_SPLIT) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT;
  }
  console.log(
    `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
  );
  if (
    process.env.QQREAD_BODY &&
    process.env.QQREAD_BODY.indexOf(COOKIES_SPLIT) > -1
  ) {
    qqreadBD = process.env.QQREAD_BODY.split(COOKIES_SPLIT);
  } else {
    qqreadBD = process.env.QQREAD_BODY.split();
  }

  if (
    process.env.QQREAD_TIMEURL &&
    process.env.QQREAD_TIMEURL.indexOf(COOKIES_SPLIT) > -1
  ) {
    qqreadtimeURL = process.env.QQREAD_TIMEURL.split(COOKIES_SPLIT);
  } else {
    qqreadtimeURL = process.env.QQREAD_TIMEURL.split();
  }

  if (
    process.env.QQREAD_TIMEHD &&
    process.env.QQREAD_TIMEHD.indexOf(COOKIES_SPLIT) > -1
  ) {
    qqreadtimeHD = process.env.QQREAD_TIMEHD.split(COOKIES_SPLIT);
  } else {
    qqreadtimeHD = process.env.QQREAD_TIMEHD.split();
  }
}

if ($.isNode()) {
  Object.keys(qqreadBD).forEach((item) => {
    if (qqreadBD[item]) {
      qqreadbdArr.push(qqreadBD[item]);
    }
  });
  Object.keys(qqreadtimeURL).forEach((item) => {
    if (qqreadtimeURL[item]) {
      qqreadtimeurlArr.push(qqreadtimeURL[item]);
    }
  });
  Object.keys(qqreadtimeHD).forEach((item) => {
    if (qqreadtimeHD[item]) {
      qqreadtimehdArr.push(qqreadtimeHD[item]);
    }
  });

  console.log(
    `============ 共${qqreadtimehdArr.length}个企鹅读书账号  =============\n`
  );
  console.log(
    `============ 脚本执行-北京时间(UTC+8)：${new Date(
      new Date().getTime() + 8 * 60 * 60 * 1000
    ).toLocaleString()}  =============\n`
  );
} else {
  qqreadbdArr.push($.getdata("qqreadbd"));
  qqreadtimeurlArr.push($.getdata("qqreadtimeurl"));
  qqreadtimehdArr.push($.getdata("qqreadtimehd"));
  // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
  let qeCount = ($.getval('qeCount') || '1') - 0;
  for (let i = 2; i <= qeCount; i++) {
    if ($.getdata(`qqreadbd${i}`)) {
      qqreadbdArr.push($.getdata(`qqreadbd${i}`));
      qqreadtimeurlArr.push($.getdata(`qqreadtimeurl${i}`));
      qqreadtimehdArr.push($.getdata(`qqreadtimehd${i}`));
    }
  }
}


all();
function all() {

if (!qqreadbdArr[Z-1]) {
    $.msg(jsname+Z+'⚠️打印失败', '提示：请先获取ck，并在boxjs里设置好账号数')
   $.done();
  };


  qqreadbodyVal = qqreadbdArr[K-1];
  qqreadtimeurlVal = qqreadtimeurlArr[K-1];
  qqreadtimeheaderVal = qqreadtimehdArr[K-1];

if(body==1)console.log(qqreadbodyVal+GG)

if(timeurl==1)console.log(qqreadtimeurlVal+GG)

if(timeheader==1)console.log(qqreadtimeheaderVal+GG)




  for (let i = 0; i < 1; i++) {
    (function (i) {
      setTimeout(
        function () {
          
      if (i == 0){  
       if ( K < Z ) {
              K += 1;
              all();
}    else if (K == Z ) {
              
              $.done();
  }
 }
},

        (i + 1) * 10
      );
    })(i);
  }
}

