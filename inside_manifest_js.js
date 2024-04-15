$("#ageForm").submit(() => {
    let day = $("#birthDay").val();
    let month = $("#birthMonth").val();
    let year = $("#birthYear").val();
    let age  = $("#requiredAge").val();
    if (day == "" || month == "" || year == "" || month > 12 || year < 1900) {
        document.getElementById('hidden').style.display = "block";
        event.preventDefault();
        return false;
    }
    let mydate = new Date();
    mydate.setFullYear(year, month-1, day);
    let currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - age);
    if ((currdate - mydate) < 18){
        document.getElementById('hidden').style.display = "block";
        event.preventDefault();
        return false;
    }
    // Acceso solo cuando se introduce +18
        window.location.assign("frnt.html");  
        event.preventDefault();
        return true;  
});