!--------------------------------Sourabh Yadav  19001601056------------------------------!


JAVASCRIPT INTRODUCTION------🙏

JAVASCRIPT: - JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

JavaScript is lightweight, object oriented, dynamic programming language.


—————————————————————————————————————————————————————————————————————————————————————————————————————————


JAVASCRIPT VARIABLES------🥱👀👀👀👀👀


VARIABLE: - Variables are the containers for storing something in the memory. 
            for example we want to store someone's age then we store age in
            a variable.

Syntax:

let age = 25;
var age = 35;
const age = 40;


here in the above statements we store age of someone in 3 ways that is

in Javascript we can store a variable using one out of above keywords.


—————————————————————————————————————————————————————————————————————————————————————————————————————————


JAVASCRIPT ARRAYS-----👌✔✔✔✔✔

Arrays: -Arrays are the collection of data which is in the form of related information
         about same type.
    
In OTHER words we can say Array are the collection of homogenous elements.

         
Syntax:

let fruitsNames = ["APPLE", "MANGO", "BANANA", "ORANGE", "CHIKU"];


Here in the above example we store the fruits name in a single variable
named ←fruitsNames→😎

Arrays is used to store multiple values at the same time
If you want to print the Arrays elements one by one then we should use for loop

Syntax:
for (let i = 0; i < fruitsNames.length; i++) {
    console.log(fruitsNames[i]);
}


—————————————————————————————————————————————————————————————————————————————————————————————————————————


JAVASCRIPT FUNCTIONS-----😎✌✌✌✌✌🤞

functions: -function are nothing but a block of line of code
            when we want a functionality many times then we
            make a function for that purpose

Function is the way to archieve Modularization which is the
process by which we select and group programming instructions
that fulfill a specific function

Syntax:

function calAge(presentYear, dobYear) {
    return dobYear - presentYear;
}

Above we create a function whose name is ←calAge→😎
function is the inbuilt keyword and there should be 0
or n number of parameter.`

Now to explore function we write a simple program...


function whatDoYouDo(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code..';
        case 'driver':
            return firstName + ' drives the car in the london..';
        case 'designer':
            return firstName + ' designs the beautiful website..';
        default:
            return firstName + ' does something else..'
    }

}

console.log(whatDoYouDo('teacher', 'RAKESH'));


—————————————————————————————————————————————————————————————————————————————————————————————————————————

JAVASCRIPT OBJECTS-----🎃

Objects: -In real life, everthing is a king of an object.
          Objects may be defined as anything having properties and some 
          implementation technique i.e methods.

A car has properties like weight and color, and methods like start and stop:
All cars have the same properties, but the property values differ from car to car.
All cars have the same methods, but the methods are performed at different times.

Syntax:

let str = [1, 1.2, null, "Rakesh", [1, 2, 3, 4, 5], function fn(val) {
    console.log("Hello")
    val = val * 10;
    return val;
}]

    Now to explore more we can take a simple example

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {

    for (let i in contacts) {
        let contact = contacts[i];
        if (contact.firstName == name) {
            if (contact[prop]) {
                return contact[prop];
            }
            else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));


—————————————————————————————————————————————————————————————————————————————————————————————————————————


JAVASCRIPT DIALOG HANDLING-----🙄

DialogBoxes: -A small area on a screen in which the user is prompted
              to provide information or select commands.
        
 
There are 3 types of Dialog boxes in Js  — ALERT, PROMPT and CONFIRM —  

ALERTBOX: - An alert box is used in the website to show a warning message to the user
            that they have entered the wrong value other than what is required to filled
            in that position.Nonetheless, an alert box can still be used for friendlier 
            messages.Alert box gives only one button “OK” to select and proceed.

Now we can understand this concept easily by a simple program


alert("This is an alert message box.");      // display string message

alert('This is a numer: ' + 100);           // display result of a concatenation

alert(100);                                // display number

alert(Date());                            // display current date


CONFIRMBOX: -A confirm box is often used if you want the user to verify or accept something.
             When a confirm box pops up, the user will have to click either “OK” or “Cancel” to proceed.
             If the user clicks on the OK button, the window method confirm() will return true.
             If the user clicks on the Cancel button, then confirm() returns false and will show null.

Now we can understand this concept easily by a simple program


var userPreference;

if (confirm("Do you want to save changes?") == true) {
    userPreference = "Data saved successfully!";
} else {
    userPreference = "Save Cancelled!";
}


PROMPTBOX: -A prompt box is often used if you want the user to input a value before entering a
            page.When a prompt box pops up, the user will have to click either “OK” or “Cancel” to
            proceed after entering an input value.If the user clicks the OK button, the window method
            prompt() will return the entered value from the text box.If the user clicks the Cancel
            button, the window method prompt() returns null.


Now we can understand this concept easily by a simple program

var tenure = prompt("Please enter preferred tenure in years", "15");

if (tenure != null) {
    alert("You have entered " + tenure + " years");
}


—————————————————————————————————————————————————————————————————————————————————————————————————————————


JAVASCRIPT EVENT HANDLING-----😴

EVENTHANDLING: -When emitting a event, the Event class is used as a object which passes the data.
                It accepts a data object, which can be accessed via the exposed data getter and an optional
                callee argument which can be used to pass information(or a reference) to the calling object.


HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" on these events. 


An HTML event can be something the browser does, or something a user does.

Examples of HTML events:
{
    An HTML web page has finished loading
    An HTML input field was changed
    An HTML button was clicked.
} 


The below shows the most simple way create a handler and a listener and emit an event. 

import { EventHandler, Event } from '@RakeshPrajapati/events';

const handler = new Handler();

handler.on('test-event', (event) => {
  console.log(event.data.message);
});

handler.emit('test-event', new Event({
  message: 'This is a simple example...'
}));

—————————————————————————————————————————————————————————————————————————————————————————————————————————