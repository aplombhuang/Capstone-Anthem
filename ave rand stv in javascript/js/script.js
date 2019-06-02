function handleFile(e) {
    //Get the files from Upload control
    var files = e.target.files;
    var i, f; // loop variables
    var card_header_footer_color = $("#card_header_footer_color").val();
    var card_profile_site_color = $("#card_profile_site_color").val();
    var session_header = $("#session_header").val();
    var month_value = $('#month_value').val();
    var calendar_background = $('#calendar-background').val();

    //Loop through files

    var rows = [];


    for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader();
        var name = f.name;
        reader.onload = function (e) {
            var data = e.target.result;

            var result;
            var workbook = XLSX.read(data, { type: 'binary' });

            var sheet_name_list = workbook.SheetNames;
            sheet_name_list.forEach(function (y) { /* iterate through sheets */
                //Convert the cell value to Json
                var roa = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                if (roa.length > 0) {
                    result = roa;
                }
            });

            //Get the first column first cell value
            for (i = 0; i < result.length; i++) {
				
				rows.push({
					'jobCode' : result[i]['job code'] ,
                    'jobStatus' :  result[i]['job status'],
                    'startTime' : result[i]['start time stapm'],
                    'endTime' : result[i]['end time stamp'],
                    'msgStart' : result[i]['msg start time'],
                    'msgEnd' :  result[i]['msg end time'],
                    'duration' : result[i]['duration'],
                    'status' : result[i]['status']
				});

                $(".card-header,.card-footer").css("background-color", card_header_footer_color);
                $(".profile").css("background-color", card_profile_site_color);
                $(".btn-info").css({ "background-color": card_profile_site_color, "border-color": card_profile_site_color });
                $(".open-session-header,.close-session-header").css("background-color", session_header);
                $('.overlay_file_chooser').hide(500);
                $('.month-text').html(month_value + "-2018");
                $('.container').css("background-color", calendar_background);
            }

            debugger;
            rows.sort(function (a,b) {
                return a.jobCode > b.jobCode ;
            })
            
            let start = 0;
            let sum = 0;
            for(i=0; i<rows.length - 1; i++){
                sum += parseInt(rows[i].duration);
                if(rows[i].jobCode != rows[i+1].jobCode){
                    findMeanAndDeviation(start, i, sum, rows);
                    start= i+1;
                    sum = 0;
                }
            }
            if(start<= rows.length-1){
                findMeanAndDeviation(start, rows.length-1, sum, rows);
            }
        };
        reader.readAsArrayBuffer(f);
    }

}

function findMeanAndDeviation(start, end, sum, rows) {
    let mean = 0;
    if(end-start+1 > 0){
        mean = sum/(end-start+1);
    }
    total = 0;
    for(i=start; i<=end; i++){
        total += Math.pow((parseInt(rows[i].duration) - mean), 2);
    }
    var deviation = Math.sqrt(total);
    populateItems(rows[start].jobCode, mean, deviation);
}

function populateItems(code, mean, deviation) {
    var x =
        '<div class="col-md-4 mt-4 mb-4">' +
        ' <div class="card">' +
        ' <div class="card-block">' +
        '<h4 class="card-title mt-3">Code = ' + code  + '  </h4>' +
        '<h4 class="card-title mt-3"> Mean = ' + mean  + '  </h4>' +
        '<h4 class="card-title mt-3"> Standard Deviation = ' + deviation  + '  </h4>' +
        ' </div>' +
        '</div>' +
        ' </div>'
    ;

    $('#close-session').append(x);
}

function makeTable(array) {
    var table = document.createElement('table');
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}

//Change event to dropdownlist
$(document).ready(function () {
    $('#files').change(handleFile);
});