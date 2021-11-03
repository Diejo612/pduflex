const downloadTable = () => {
  let tableID = "table-to-export";
  let filename = "report-table";

  let downloadLink;
  let dataType = "application/vnd.ms-excel";
  let tableSelect = document.getElementById(tableID);
  let tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");

  console.log(tableHTML);

  // Specify file name
  filename = filename ? filename + ".xls" : "excel_data.xls";

  // Create download link element
  downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    let blob = new Blob(["ufeff", tableHTML], {
      type: dataType,
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = "data:" + dataType + ", " + tableHTML;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
  }

  // const table = document.getElementById('table-to-export');
  // const content = table.innerHTML;

  // const button = document.getElementById('test');

  // let tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
  // tab_text += '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
  // tab_text += '<x:Name>Test Sheet</x:Name>';
  // tab_text += '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
  // tab_text += '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
  // tab_text += "<table border='1px'>";
  // tab_text += content;
  // tab_text += '</table></body></html>';

  // let data_type = 'data:application/vnd.ms-excel';

  // let ua = window.navigator.userAgent;
  // let msie = ua.indexOf("MSIE ");

  // if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
  //     if (window.navigator.msSaveBlob) {
  //         let blob = new Blob([tab_text], {
  //             type: "application/csv;charset=utf-8;"
  //         });
  //         navigator.msSaveBlob(blob, 'Test file.xls');
  //     }
  // } else {
  //     button.setAttribute('href', data_type + ', ' + encodeURIComponent(tab_text));
  //     button.setAttribute('download', 'Reporte_cuotas.xls');
  // }
};

export default downloadTable;
