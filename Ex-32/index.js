"use strict";
let current_users = ["Saima", "Naureen", "uzma", "tahira", "Maira"];
let new_users = ["Muneezah", "Tahira", "Fatima", "Sadaf", "Uzma"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
