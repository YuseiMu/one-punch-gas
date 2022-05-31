const url = 'http://galaxyheavyblow.web.fc2.com/';
const sheet = SpreadsheetApp.getActiveSheet();
const recipient = '任意のメールアドレス'; //送信先のメールアドレス
const subject = 'ワンパンマンが更新されました';
 
function myFunctionA1() {//A1セルを書き換える。トリガー：00:00~01:00
 const html = UrlFetchApp.fetch(url).getContentText("Shift-JIS");
 const infoA1 = html.match( /[0-9].*話更新/g) ;
 sheet.getRange('A1').setValue(infoA1);
 const range1 = sheet.getRange('A1');
 const range2 = sheet.getRange('A2');
 const value1 = range1.getValue();
 const value2 = range2.getValue();
 console.log(value1);
 console.log(value2);
 
 if(value1 !== value2){
 const body = infoA1;
 const options = {name: 'ワンパンマン最新話更新通知システム'};
 GmailApp.sendEmail(recipient, subject, body, options);
 } 
}

function myFunctionA2() {//A2セルを書き換える。トリガー:12:00~13:00
 const html = UrlFetchApp.fetch(url).getContentText("Shift-JIS");
 const infoA2 = html.match( /[0-9].*話更新/g) ;
 sheet.getRange('A2').setValue(infoA2);
 const range1 = sheet.getRange('A1');
 const range2 = sheet.getRange('A2');
 const value1 = range1.getValue();
 const value2 = range2.getValue();
 console.log(value1);
 console.log(value2);
 
 if(value1 !== value2){
 const body = infoA2;
 const options = {name: 'ワンパンマン最新話更新通知システム'};
 
 GmailApp.sendEmail(recipient, subject, body, options);
 }
}
