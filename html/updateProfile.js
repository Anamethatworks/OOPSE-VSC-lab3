"use strict";

function submiit(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("birthdate").value;
    let J = {
        firstName: fname,
        lastName: lname,
        birthDate: dob
    };
    fetch( "/updateprofile",
        {   method: "POST",
            body: JSON.stringify(J)
        }
    ).then( (resp) => {
        //can also use text(), blob(), or arrayBuffer()
        resp.json().then( (J) => {
            console.log("Server said:",J);
        });
    }).catch( (err) => {
        console.log("Uh oh",err);
    })
}


function filechanged() {

    let file = document.getElementById("ppic").files[0];
if(!file){
    console.log("No file!");
    return;
}
let R = new FileReader();
let errorOccur = 0;

R.addEventListener("load", () => {
    
    let profilepic = btoa(R.result);    //do base64 encoding
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let dob = document.getElementById("birthdate").value;

if (fname.indexOf('<') != -1) {
    errorOccur = 1;

}

if (fname == "") {
    errorOccur = 1;

}

if (lname.indexOf('<') != -1) {
    errorOccur = 1;

}

if (lname == "") {
    errorOccur = 1;

}

//make if for if error

if (errorOccur == 0) {

let J = {
    firstName: fname,
    lastName: lname,
    birthDate: dob,
    pic: profilepic
};
fetch( "/updateprofile",
    {   method: "POST",
        body: JSON.stringify(J)
    }
).then( (resp) => {
    //can also use text(), blob(), or arrayBuffer()
    resp.json().then( (J) => {
        console.log("Server said:",J);
    });
}).catch( (err) => {
    console.log("Uh oh",err);
}) }

if (errorOccur == 1) {

    console.log("Error: invalid input");
//throw new Error("Error: Invalid Input");
}

});
R.readAsBinaryString(file);


}