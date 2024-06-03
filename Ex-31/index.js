"use strict";
let userNames = ["Amna", "Sana", "Farah", "Nazia", "Admin"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(userNames => {
        if (userNames == "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userNames}, thank you for logging in again.`);
        }
    });
}
