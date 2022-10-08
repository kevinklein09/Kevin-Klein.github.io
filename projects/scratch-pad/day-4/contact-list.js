// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function 
 *         should return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var obj = { // create new object and assign each property to each parameter 
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };

    return obj; // return obj
} 


function makeContactList() { // FACTORY FUNCTION but  different
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //create a variable contacts that is assigned the value of an empty array
    
    return {
        // we implemented the length api for you //
        length: function() { // create a length function method that determines the length of contacts
            return contacts.length; // return the length of contacts
        },
        addContact: function(contact) { //create an addContact function that takes one input, contact, and adds it the contact list
            return contacts.push(contact); // return contact input to the contacts array using .push method
        },
        findContact: function(fullName) { //create a findContact function that takes one input, fullName
            for (var i = 0; i < contacts.length; i++) { //create a for loop to iterate through contacts
                if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) { //create an if statement that combines nameFirst and nameLast into a string and determines if it is equal to the input fullName
                    return contacts[i]; // if true, return each iteration of contacts
                }
            }
        },
        removeContact: function(contact) { //create a removeContact function that takes one input, contact
            for (var i = 0; i < contacts.length; i++) { //create a for loop to iterate through contacts
                if(contacts[i] === contact) { //create an if statement that determines if each iteration of contacts is equal to the input contact
                    return contacts.splice(i, 1); //if true, update and return contacts by removing the contact from the contacts array by using the splice method
                }
            }
        },
        printAllContactNames: function () { //create a printAllContactNames function that takes no inputs
            var myContacts = ""; //create a variable myContacts and assign it to an empty string
            for (var i = 0; i < contacts.length; i++) { //create a for loop to iterate through contacts
                if(i === contacts.length - 1) { //create an if statement to catch the last iteration of the for loop. Use the strict equality operator to see if i is equal to the last contact index in the conacts array
                    myContacts = myContacts + contacts[i].nameFirst + ' ' + contacts[i].nameLast; //if true, assign the myContacts variable to a full name of the contact
                } else { // use an else statement to otherwise...
                myContacts = myContacts + contacts[i].nameFirst + ' ' + contacts[i].nameLast + "\n"; //assign myContacts variable to each contact's full name with a break "\n" in the string
                }
            }
            return myContacts; //return myContacts
            
            
        }

    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
