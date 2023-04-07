//your JS code here. If required.
//your JS code here. If required.
// create student object with name property
const student = {
  name: "John"
};

// add getKeys method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
}

// test the getKeys method on the student object
console.log(student.getKeys()); // output: ["name"]