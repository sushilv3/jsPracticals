// alert("message");
console.dir(Date);

var d = new Date();
//parameterized constructor
var date = new Date(2020,2,25);

//parameterized constructor string
var date1 = new Date("30 january 2021");

console.log(date);
//current date time;
console.log(d);

// several importtant methods 

console.log("display an abbreviated date String : " + d.toDateString());

console.log("display a localized date String : " + d.toLocaleDateString());

console.log("display the ISO Standardized date String : " + d.toISOString());

console.log("display a date string converted to UTC time : " + d.toUTCString());

console.log("display the full date String with local timezone : " + d.toString());

console.log(d.getDate());

console.log(d.getDay());

console.log(d.getMonth());

console.log(d.getFullYear());



