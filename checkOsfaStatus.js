function checkOsfaStatus(textDay, arrayOfClosedDates) {
    var rightNow = new Date();
    var year = rightNow.getFullYear();
    var month = rightNow.getUTCMonth();
    var day = rightNow.getUTCDate();
    var hour = rightNow.getUTCHours();
    var minute = rightNow.getUTCMinutes();
    var UTCDateTime = new Date(year, month, day, hour, minute, 1);
    var today = UTCDateTime;
  
    var monthday = (today.getMonth() + 1) + "/" + today.getDate();
    var todaysHour = today.getHours();
    var todaysDay = today.getDay();
    var minutenow = today.getMinutes();
 
    

    if (arrayOfClosedDates != undefined) {
        lngOfArray = arrayOfClosedDates.length;
        console.log("length of array is " + lngOfArray);
        console.log("day to prepare " + monthday);
        for (i = 0; i < lngOfArray; i++) {
            console.log(arrayOfClosedDates[i]);
            if (arrayOfClosedDates[i] == monthday) {
                console.log("found date");
                return false;
            } else {
                console.log("not found");
            }
        }
    } else {
        console.log("No array of dates passed");
    }
    console.log("test" + minutenow);
    if (todaysDay == 0 || todaysDay == 6) { //if todays is  saturday or sunday
        console.log('sat or sun');
        return false;
    } else { // weekdays
        console.log('weekdays');
        if (todaysHour < 16 || todaysHour > 23) { //before 9 and after 4 on UTC time
        //if (todaysHour < 9 || todaysHour > 16) { //before 9 and after 4
            return false;
        } else {
            return true;
        }
        
        
    }
     

}