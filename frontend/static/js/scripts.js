$(document).ready(function () {
    $('#uploadForm').on('submit', function (event) {
        event.preventDefault(); 

        var formData = new FormData(this);

        $.ajax({
            url: 'http://127.0.0.1:5000/process', // Backend API endpoint
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
               
                $('#response').html('<p>' + response.message + '</p>');
            },
            error: function (xhr, status, error) {
               
                let errorMessage = 'An error occurred: ';
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    errorMessage += xhr.responseJSON.message;
                } else {
                    errorMessage += xhr.statusText || 'Unknown error';
                }
                $('#response').html('<p>' + xhr.responseJSON.messag + '</p>');
            }
        });
    });
});


















































        const studentsData = [
            { enrollment: "0801CS21100", name: "Ajay Kumar Sahani", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 2, attendedOS: 0, osTotalPercentage: 0, totalAS: 3, attendedAS: 3, asTotalPercentage: 100, totalPD: 3, attendedPD: 2, pdTotalPercentage: 67, totalLectures: 13, totalAttended: 8, totalPercentage: 62 },
            { enrollment: "0801CS21102", name: "Harsh Agrawal", totalDL: 5, attendedDL: 0, dlTotalPercentage: 0, totalOS: 2, attendedOS: 0, osTotalPercentage: 0, totalAS: 3, attendedAS: 0, asTotalPercentage: 0, totalPD: 3, attendedPD: 0, pdTotalPercentage: 0, totalLectures: 13, totalAttended: 0, totalPercentage: 0 },
            { enrollment: "0801CS21105", name: "RUCHI JAMRE", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 2, attendedOS: 1, osTotalPercentage: 50, totalAS: 3, attendedAS: 2, asTotalPercentage: 100, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 12, totalAttended: 7, totalPercentage: 58 },
            { enrollment: "0801CS21107", name: "VIJAY CHOUHAN", totalDL: 5, attendedDL: 2, dlTotalPercentage: 40, totalOS: 2, attendedOS: 2, osTotalPercentage: 100, totalAS: 2, attendedAS: 1, asTotalPercentage: 50, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 12, totalAttended: 6, totalPercentage: 50 },
            { enrollment: "0801CS21063", name: "NISHA CHOUHAN", totalDL: 5, attendedDL: 2, dlTotalPercentage: 40, totalOS: 2, attendedOS: 2, osTotalPercentage: 100, totalAS: 2, attendedAS: 1, asTotalPercentage: 50, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 12, totalAttended: 6, totalPercentage: 50 },
            { enrollment: "0801CS21057", name: "MANIT ASHAB", totalDL: 5, attendedDL: 0, dlTotalPercentage: 0, totalOS: 2, attendedOS: 0, osTotalPercentage: 0, totalAS: 2, attendedAS: 0, asTotalPercentage: 0, totalPD: 3, attendedPD: 0, pdTotalPercentage: 0, totalLectures: 12, totalAttended: 0, totalPercentage: 0 },
            { enrollment: "0801CS22D03", name: "VANSHITA KANIK", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 3, attendedOS: 2, osTotalPercentage: 67, totalAS: 2, attendedAS: 2, asTotalPercentage: 100, totalPD: 3, attendedPD: 2, pdTotalPercentage: 67, totalLectures: 13, totalAttended: 9, totalPercentage: 69 },
            { enrollment: "0801CS21106", name: "Ishaan das Gupta", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 3, attendedOS: 2, osTotalPercentage: 67, totalAS: 2, attendedAS: 1, asTotalPercentage: 50, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 13, totalAttended: 7, totalPercentage: 54 },
            { enrollment: "0801CS21089", name: "Srajan Sohani", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 3, attendedOS: 3, osTotalPercentage: 100, totalAS: 2, attendedAS: 2, asTotalPercentage: 100, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 13, totalAttended: 9, totalPercentage: 69 },
            { enrollment: "0801CS21172", name: "Raj Gupta", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 2, attendedOS: 2, osTotalPercentage: 100, totalAS: 2, attendedAS: 1, asTotalPercentage: 50, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 12, totalAttended: 6, totalPercentage: 50 },
            { enrollment: "0801CS22D03", name: "Uswat Zehra Naqui", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 3, attendedOS: 2, osTotalPercentage: 67, totalAS: 2, attendedAS: 2, asTotalPercentage: 100, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 13, totalAttended: 9, totalPercentage: 69 },
            { enrollment: "0801CS22D04", name: "Pritha Mishra", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 3, attendedOS: 2, osTotalPercentage: 67, totalAS: 2, attendedAS: 2, asTotalPercentage: 100, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 13, totalAttended: 8, totalPercentage: 62 },
            { enrollment: "0801ME21057", name: "Nishika Shashidhar", totalDL: 5, attendedDL: 1, dlTotalPercentage: 20, totalOS: 3, attendedOS: 1, osTotalPercentage: 34, totalAS: 2, attendedAS: 1, asTotalPercentage: 50, totalPD: 3, attendedPD: 0, pdTotalPercentage: 0, totalLectures: 13, totalAttended: 4, totalPercentage: 31 },
            { enrollment: "0801CS22D03", name: "Nikhil Dwivedi", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 3, attendedOS: 2, osTotalPercentage: 67, totalAS: 2, attendedAS: 2, asTotalPercentage: 100, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 13, totalAttended: 8, totalPercentage: 62 },
            { enrollment: "0801CS21108", name: "Ansh Jain", totalDL: 5, attendedDL: 4, dlTotalPercentage: 80, totalOS: 3, attendedOS: 2, osTotalPercentage: 67, totalAS: 2, attendedAS: 2, asTotalPercentage: 100, totalPD: 3, attendedPD: 2, pdTotalPercentage: 67, totalLectures: 13, totalAttended: 9, totalPercentage: 69 },
            { enrollment: "0801CS21103", name: "Divyansh Muley", totalDL: 5, attendedDL: 4, dlTotalPercentage: 80, totalOS: 2, attendedOS: 2, osTotalPercentage: 100, totalAS: 2, attendedAS: 1, asTotalPercentage: 50, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 12, totalAttended: 8, totalPercentage: 67 },
            { enrollment: "0801CS21151", name: "Kartik Baghel", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 2, attendedOS: 2, osTotalPercentage: 100, totalAS: 2, attendedAS: 0, asTotalPercentage: 0, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 12, totalAttended: 6, totalPercentage: 50 },
            { enrollment: "0801CS21100", name: "Sujata More", totalDL: 5, attendedDL: 4, dlTotalPercentage: 80, totalOS: 3, attendedOS: 2, osTotalPercentage: 67, totalAS: 2, attendedAS: 2, asTotalPercentage: 100, totalPD: 3, attendedPD: 2, pdTotalPercentage: 67, totalLectures: 13, totalAttended: 9, totalPercentage: 69 },
            { enrollment: "0801CS21102", name: "Aayushi Sahai", totalDL: 5, attendedDL: 4, dlTotalPercentage: 80, totalOS: 3, attendedOS: 2, osTotalPercentage: 67, totalAS: 2, attendedAS: 1, asTotalPercentage: 50, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 13, totalAttended: 8, totalPercentage: 67 },
            { enrollment: "0801CS21105", name: "Aniket Bandi", totalDL: 5, attendedDL: 3, dlTotalPercentage: 60, totalOS: 2, attendedOS: 1, osTotalPercentage: 50, totalAS: 2, attendedAS: 1, asTotalPercentage: 50, totalPD: 3, attendedPD: 1, pdTotalPercentage: 33, totalLectures: 12, totalAttended: 7, totalPercentage: 58 },
        ];

        document.getElementById('uploadForm').addEventListener('click', function() {
            console.log(studentsData);
        });
    

