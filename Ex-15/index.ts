let guestList : string[] = ["Hamna", "Sarah", "Mahrukh"]

let absentGuest:string= "Hamna";

let newGuest:string= "Ambreen"

guestList[0] = newGuest;

for(let i=0; i<guestList.length; i++){

    console.log("Dear friend," ,guestList[i], "It is my pleasure to invite you to dinner. Thank you!")

}

console.log(absentGuest, "is not coming to the dinner.");