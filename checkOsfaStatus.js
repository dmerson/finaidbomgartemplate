function checkOsfaStatus(textDay) {
    var today = new Date(textDay);
    var isChatEnabled = true;
    var monthday = (today.getMonth() + 1) + "/" + today.getDate();
    var todaysHour = today.getHours();
    var todaysDay = today.getDay();
    var minutenow = today.getMinutes();
    if (todaysDay == 0 || todaysDay == 6) { //if todays is  saturday or sunday
        isChatEnabled = false;
    } else {

        if (todaysHour == 8 && todaysDay == 2) { //we are not open on tuesday at 8
            isChatEnabled = false;
        } else {

            if (todaysHour >= 15 || todaysHour < 8) { //if it is before or on 8 or after 4
                if (todaysHour == 15) { // if it is 4 PM
                    if (minutenow < 30) { //if it is less than 4:30 PM
                        isChatEnabled = true;
                    } else {
                        isChatEnabled = false;
                    }

                } else { //9-3pm

                    isChatEnabled = true;


                }
            }
        }
    }
    return isChatEnabled;

}