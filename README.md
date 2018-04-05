# Financial Aid Template For Bomgar Chat
 The template we now have does the following features that others might want to emulate:
 
 - Hide fields
-	Change the labels for different fields
-	Automatically select the first item in the dropdown
-	Automatically turn off during custom working hours
-	I have the logic in a separate file that has unit tests in case others might want it to modify and test it
-	We have Monday through Friday logic with a special condition on Tuesday which can be easily modified
-	We have the ability to send an array of dates (like ['12/25', '12/26', '12/27', '12/28', '12/29', '12/30', '12/31', '1/1']) which turns off the chat feature on any of these dates
-	We also have a manual override which the customer can use.
-	It also tells the customer whether we are open or closed.

#How to use this
bomgartemplate.html is our current template for bomgar.

There is a QUnit test to test the current logic. To run these tests, just open the VerifyLogicTemplate.html file.
This will run and give the results of the checkOsfaStatus.js file.

If you would want to change the logic, you are do this in the checkOsfaStatus.js file and create tests on VerifyTemplate.html.
The syntax is simple and you can just use copy and paste.

Once your new logic is verified just copy the function into the template and modify it to your desires.
