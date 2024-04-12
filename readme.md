# Dùng Google Sheets để lưu database:
### Cấu hình App Script:
```js
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Contact");
  var rowData = [];

  rowData.push(new Date());
  rowData.push(data.email);
  rowData.push(data.telegram);
  rowData.push(data.project);
  rowData.push(data.proposal);

  sheet.appendRow(rowData);

  return ContentService
    .createTextOutput(JSON.stringify({"result": "success", "data": data}))
    .setMimeType(ContentService.MimeType.JSON);
}

```