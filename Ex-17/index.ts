let guestList : string[] = ["Hamna", "Sarah", "Mahrukh"]

let absentGuest:string= "Hamna";

let newGuest:string= "Ambreen"

guestList[0] = newGuest;


guestList.unshift("Alizey");
guestList.splice(2,0, "Sidra");
guestList.push("Maryam");


console.log("Sorry we can't arrange a bigger dinner table so only two guest are invited.");
while(guestList.length > 2){

    let removedGuest = guestList.pop();
    console.log(removedGuest, "Sorry you are not invited to dinner");
 
}


for(let i=0; i<guestList.length; i++){

    console.log("Dear friend," ,guestList[i], "You are still invited to the dinner. Thank you!")

}

guestList.splice(0,2);
console.log(guestList);
