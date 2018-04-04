function checkOsfaStatus(textDay, arrayOfClosedDates) {
    var today = new Date(textDay);
    var isChatEnabled = true;
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
                return false;
            }
        }
    } else {
        console.log("No array of dates passed");
    }
    
    if (todaysDay == 0 || todaysDay == 6) { //if todays is  saturday or sunday
        console.log('sat or sun');
        return false;
    } else { // weekdays

        if (todaysHour == 8 && todaysDay == 2) { //we are not open on tuesday at 8
            console.log('tuesday at 8AM');
            return false;
        } else { //other weekdays

            if (todaysHour >= 15 || todaysHour < 8) { //if it is before or on 8 or after 4
                if (todaysHour == 15) { // if it is 4 PM
                    if (minutenow < 30) { //if it is less than 4:30 PM
                        console.log("4 but not past 29 minutes")
                        return true;
                    } else {
                        return false;
                    }

                }
                 
            }
        }
        
    }
    return isChatEnabled;

}