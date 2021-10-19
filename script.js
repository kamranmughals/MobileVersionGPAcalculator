

$(() => {
    let grade, cred;
    $(".grade-select").on("change", () => {
        grade = $("#grade1").val()
        cred = $("#credit-hour1").val();
        $("#points1").val(grade);
        let round1 = parseFloat(grade * cred).toFixed(2);
        $("#tpoints1").val(round1);
        grade = $("#grade2").val()
        cred = $("#credit-hour2").val();
        $("#points2").val(grade);
        let round2 = parseFloat(grade * cred).toFixed(2);
        $("#tpoints2").val(round2);
        grade = $("#grade3").val()
        cred = $("#credit-hour3").val();
        $("#points3").val(grade);
        let round3 = parseFloat(grade * cred).toFixed(2);
        $("#tpoints3").val(round3);
        grade = $("#grade4").val()
        cred = $("#credit-hour4").val();
        $("#points4").val(grade);
        let round4 = parseFloat(grade * cred).toFixed(2);
        $("#tpoints4").val(round4);
        grade = $("#grade5").val()
        cred = $("#credit-hour5").val();
        $("#points5").val(grade);
        let round5 = parseFloat(grade * cred).toFixed(2);
        $("#tpoints5").val(round5);
        grade = $("#grade6").val()
        cred = $("#credit-hour6").val();
        $("#points6").val(grade);
        let round6 = parseFloat(grade * cred).toFixed(2);
        $("#tpoints6").val(round6);
    })
    $(".btn").click(function () {
        let sum = $("#tpoints1, #tpoints2, #tpoints3, #tpoints4, #tpoints5, #tpoints6")
        // Total Sum of all points of graded subjects----->
        let rounded = sum.toArray().reduce((sum, el) => sum + +el.value, 0).toFixed(2)
        $("#sum").val(rounded)
        // Total credit Hours------>
        let credit = $("#credit-hour1, #credit-hour2, #credit-hour3, #credit-hour4, #credit-hour5, #credit-hour6")
        $("#creditHours").val(credit.toArray().reduce((sum, e) => sum + +e.value, 0))
        let cr_hours = credit.toArray().reduce((sum, e) => sum + +e.value, 0)
        let roundoff = (rounded / cr_hours).toFixed(2);
        $("#gpa").val(roundoff)
        // Current Gpa Area--------->
        let cr_gpa = $("#currentGpa").val();
        let cr_credit = $("#currentCredit").val();
        // Calculating CGPA---------->
        let newGpa = parseFloat(cr_credit) * parseFloat(cr_gpa);
        let newGpa2 = rounded;
        let totalcredits = parseFloat(cr_credit) + parseFloat(cr_hours);
        let cgpa = parseFloat(newGpa2) + parseFloat(newGpa);
        let cgpa_roundoff = (parseFloat(cgpa) / parseFloat(totalcredits)).toFixed(2)
        // CGPA DONE-------->
        $("#cgpa").val(cgpa_roundoff)//-------Final output
    })

})
