/* -------------------------------------------------------------------------- */
/*                         Object Definition and Usage                        */
/* -------------------------------------------------------------------------- */

// Objects in javascript is a collection of data which are seen as attributes/ properties of an entity
// There are 2 ways to define Objects in JavaScript

// 1) Define via declaration
const person = {
    first_name: 'Joe',
    last_name: 'Adam',
    age: 32
}

// 2) Define via constructor
function personConstructor(first_name,last_name,age){
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age
}
// Here person1 & person2 would be Objects with first_name, last_name and age as their attributes / properties / keys
const person1 = new personConstructor('Joe','Adam',32)
const person2 = new personConstructor('Emily','Cyrus',31)

// To access values of Object, simply type the variable name followed by period '.' and then the attribute / property / key that you need to access

console.log(person1.first_name) // Joe
console.log(person2.last_name) // Cyrus


/* -------------------------------------------------------------------------- */
/*                       Objects Equality & Assignment                        */
/* -------------------------------------------------------------------------- */

/*
    There are multiple ways to assign objects but the 2 most used ones are: Direct Assignment & Object.create()
    When direct assignment is used, same memory reference is used by both of the variables. Hence, any change in values of an attributes for one of the object will lead to attribute changes in both objects
*/ 

/* ----------------------Example for Direct Assignment:------------------------------- */
const car = {
    brand: 'Ford',
    model: 'Figo'
}

// Assigning values of car to new_car
const new_car = car
// Changing value of 'model' key for new_car Object
new_car.model = 'Feista'

console.log(car) // { brand: 'Ford', model: 'Feista' }
/* ^^ output explanation
    Even though 'model' attribute of new_car was changed, on consoling Original car object, we can see that values were affected on both ends
*/ 

/* -------------------------------------------------------------------------- */

/* ------------------Example for Object Assignment via Object.create():------------- */
const bike = {
    brand: 'Yamaha',
    model: 'R1'
}

/*
    Object.create would create a completey new Object with new memory address for the value assigned to the variable `new_bike`
    One important thing to note is that, On assignment `new_bike` is an empty object {}, but it's prototype is set to `bike`. 
    i.e All the properties of `bike` is inherited by `new_bike`, any changes to the properties of `bike` will be reflected in `new_bike` as well but the opposite is not true.
*/
const new_bike = Object.create(bike)
console.log(new_bike, new_bike.model) // {} R1
/* ^^ output explanation
    `new_bike` is empty object but stil inherits propety of the parent Object `bike` hence properties are accessible
*/ 

new_bike.model = 'R2'
console.log(new_bike, bike) // { model: 'R2' } { brand: 'Yamaha', model: 'R1' }
/* ^^ output explanation
    `new_bike` now has its own model propery and on assignement it doesn't affect the attributes of parent object
*/ 

bike.brand = 'Suzuki'
bike.model = 'S1'
console.log(new_bike, new_bike.brand, bike) //  { model: 'R2' } Suzuki { brand: 'Suzuki', model: 'S1' }
/* ^^ output explanation
    When attributes of parent object `bike` are changed then we can see that `new_bike.brand` changed as well
    `new_bike.model` remained 'R2' as post assignment of attributes of child object, any changes to parent object wont be reflected in child object
    As there is no property set for `new_bike.brand`, it still inherits parent's properties. Once brand is also assigned to `new_bike`, any changes to existing properties of `bike` won't be reflected for `new_bike`
*/ 
/* -------------------------------------------------------------------------- */

/* ------------------Bonus: Spread Operator---------------------------------- */

// There is yet another way to assign object to a variable. We use this syntax {...Object_Name} to spread an object which can be assigned to other variables
// It creates a new object with new memory address. Hence, any changes to attributes of the original or copied object won't affect each other. There is a big catch though
// If any property of the original object is itself an object, then that object has a reference in the the newly created object. Or in short its a shallow copy.

const originalPerson = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

const newPerson = {...originalPerson}
console.log(newPerson) // { name: 'John', address: { city: 'New York', zip: '10001' } }

newPerson.name = 'Alice'
newPerson.address.city = 'Texas'

console.log(newPerson.name, newPerson.address.city) // Alice Texas
console.log(originalPerson.name, originalPerson.address.city) // John Texas
/* ^^ output explanation
    As mentioned above, the object within an object which is `address` in our scenario is a shallow copy. So any change in Original object or copied object will reflect changes if there are modifications to inner object
    In the above example you can see that `newPerson.address.city` is set as `Texas` but `originalPerson.address.city` is now also changed from `New York` to  `Texas`
*/ 