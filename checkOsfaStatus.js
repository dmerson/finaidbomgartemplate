function checkOsfaStatus(textDay, arrayOfClosedDates) {
    var today = new Date(textDay);
  
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
        console.log('weekdays')
        if (todaysHour == 8 && todaysDay == 2) { //we are not open on tuesday at 8
            console.log('tuesday at 8AM');
            return false;
        } else { //other weekdays
            console.log('other weekdays than tuesday at 8');
            console.log(todaysHour)

            if (todaysHour == 16) { // if it is 4 PM
                if (minutenow < 30) { //if it is less than 4:30 PM
                    console.log("4 but not past 29 minutes")
                    return true;
                } else {
                    return false;
                }
            }

            if (todaysHour > 16 || todaysHour < 8) {
                console.log("after 5 or before 8");
                        return false;
                    }
             else {
            console.log("not before 8 or after 5");
                return true;
            }
        }
        
    }
     

}