let guestList : string[] = ["Hamna", "Sarah", "Mahrukh"]

let absentGuest:string= "Hamna";

let newGuest:string= "Ambreen"

guestList[0] = newGuest;


console.log("I have a good new for you, I found a bigger dinner table that's why I am inviting three more guests.");

guestList.unshift("Alizey");
guestList.splice(2,0, "Sidra");
guestList.push("Maryam");

for(let i=0; i<guestList.length; i++){

    console.log("Dear friend," ,guestList[i], "It is my pleasure to invite you to dinner. Thank you!")

}
