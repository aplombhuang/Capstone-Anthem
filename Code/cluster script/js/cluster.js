//Tuhinur Jaman
//Senior Design Cluster algorithm.
$(document).ready(function () {
    // alert("Test");
    getAjax();
});

function getAjax() {
    $.ajax({
        type: "GET",
        url: "file.txt",
        dataType: "text",
        success: function(responseData) {
            readTextFile(responseData);
    }
});
}

function readTextFile(data) {
    // jQuery.get('file.txt', function(data) {

        var inputList = data.split("\n"); //this array list store the lines taken from the txt file

        var outputList = []; // this array list will store output after process and prep for print

        var processList = []; // this array list stores the duration of each job code, used in STD calculation

        var str = inputList[0]; // getting the first row

        var input = str.split("\t"); //line is separated by tab

        var date = moment(input[1], 'MM/DD/YYYY');

        var month = date.format('M');

        var year  = date.format('YYYY');

        var duration = parseInt(input[2]);

        var status = input[3];

        processList.push(duration);

        var jobCode = input[0]; //getting first job code

        var counter = 1;

        var stdMulti = 1.5;

        var keyCount = 1, jobMonthCount = 0, failCount = 0, abnorCount = 0; //initialized

        while(counter < inputList.length){

            str = inputList[counter];

            input = str.split("\t"); //line is separated by tab

            date = moment(input[1], 'MM/DD/YYYY');  // date method

            var tempMonth = date.format('M');

            var tempYear = date.format('YYYY');

            var tempJobCode = input[0];

            if(jobCode == tempJobCode && tempMonth == month && tempYear == year && counter < inputList.length -1){   // if the next job code is equal to the current, next month, year is the same as current

                duration = parseInt(input[2]);  // parsing the duration value from string to integer

                status = input[3].substring(0, input[3].length -2 ); //remove \ character from input file

                if(duration > 0 && status == "Success"){

                    processList.push(duration);
                } else if(status == "Failure") { // if status says fail, add count of fail

                    failCount++;
                } else if(duration == 0 && status == "Success"){ // if status says success but duration is 0, add count of abnormal

                    abnorCount++;
                }
            } else {

                processList.sort(function (a,b) {
                    return a - b ;
                });

                var cluster1 = [];  // cluster1 stores the abnormally low run time

                var cluster2 = [];  //  cluster2 stores the abnormally long run time

                var sum = 0.0, total, abnorSmall = abnorCount, abnorLarge = 0;  // abnormal small and large runtime

                total = processList.length;  // get total success jobcode count by asking for total number in processArray

                jobMonthCount = total + failCount + abnorCount;  // total count of job code each month is added by total success, count of fail and count of abnormal

                for(var index = 0; index<total; index++){  // get add sum of duration
                    sum += processList[index];
                }

                var mean = sum/total; // get average

                var standardDeviation = 0.0;

                for(var index = 0; index<total; index++){
                    standardDeviation += Math.pow(processList[index] - mean, 2);
                }

                var std = Math.sqrt(standardDeviation/total);  // get standard deviation

                if(total > 10 && std > 10){  // if there are job codes that has less than 10 counts, or the initial STD is not bigger than 10, we don't apply to the cluster forming
                    cluster1.push(processList[0]); // add the smallest data to cluster 1 as initial data

                    cluster2.push(processList[processList.length-1]); // add the largest data to cluster 2 as initial data

                    var radious1 = cluster1[0]/10, radious2 = cluster2[0]/10;   // setting the radius to be 10% of the initial cluster center

                    var g_center1 = cluster1[0]; // setting the initial center of gravity of the cluster using the first element in the cluster

                    var g_center2 = cluster2[0];

                    for(var index = 1; index<processList.length; index++){

                        if(processList[index] < g_center1){  //if the next element in the num array falls into the gravity+radius, it is added to cluster
                            g_center1 = (g_center1 + processList[0])/2;
                            radious1 = g_center1/10;
                            cluster1.push(processList[index]);
                        }

                        if(processList[processList.length - (1+index)] > g_center2-radious2){   //if the next element in the num array falls into the gravity - radius, it is added to cluster
                            g_center2 = (g_center2 + processList[processList.length - (1+index)])/2;
                            radious2 = g_center2/10;
                            cluster2.push(processList[processList.length - (1+index)]);
                        }
                    }

                    if(cluster1.length + cluster2.length < processList.length){  // if the cluster of either side is not the center cluster itself
                        total = processList.length - cluster2.length;  // reset some variable for recalculation

                        sum = 0;

                        for(var index = cluster1.length; index<total; index++){  // get new sum of duration
                            sum += processList[index];
                        }

                        mean = sum/total; // get new average

                        standardDeviation = 0.0;

                        for(var index = cluster1.length; index<total; index++){
                            standardDeviation += Math.pow(processList[index] - mean,2);
                        }

                        std = Math.sqrt(standardDeviation/total);  // get new standard deviation

                        abnorSmall += cluster1.length;
                        abnorLarge = cluster2.length;
                    }
                }

                abnorLarge = cluster2.length;

                var emptyCheck = "" + mean;  // due to the fact that there exists job codes that have none successful run, resulting a Not a Number in mean and std calculation

                if(emptyCheck == "NaN"){
                    mean = 0;
                }
                emptyCheck = "" + std;
                if(emptyCheck == "NaN"){
                    std = 0;
                }

                var output = keyCount + ", " + jobCode + ", " + month + "/" + year + ", " + mean + ", "
                            + ", " + std + ", "+ failCount + ", " + abnorSmall + ", " + abnorLarge + ", "
                            + ", " + jobMonthCount;
                outputList.push(output);  // put all the outputs together

                keyCount++;

                year = tempYear;  // restore all variable to default values in preparation to next calculation
                month = tempMonth;
                jobCode = tempJobCode;
                processList = [];

                jobMonthCount =0;
                failCount = 0;
                abnorCount = 0;

                if(counter != inputList.length -1 ){  // array size over flow checker
                    counter = counter -1;
                }

                counter++;
            }


            console.log(str);

            counter++;

        }

        console.log(outputList);
        writeToFile(outputList);

    // });
}

function writeToFile(d1){
    var text = "";

    for(var index = 0; index<d1.length; index++){
        text += d1[index] + '\n';
    }
    var filename = "output.txt";
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename+".txt"); //  store in text file
}
