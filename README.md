# Dùng Google Sheets để lưu database:
### Cấu hình App Script:
```js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Contact"); 
  var data = [];
  data.push(new Date()); 
  data.push(e.parameter.email);
  data.push(e.parameter.telegram);
  data.push(e.parameter.project);
  data.push(e.parameter.proposal);
  
  sheet.appendRow(data); // Thêm dữ liệu vào bảng tính

  // Trả về phản hồi cho người dùng
  return ContentService
    .createTextOutput(JSON.stringify({"result":"success", "data": e.parameters}))
    .setMimeType(ContentService.MimeType.JSON);
}
```