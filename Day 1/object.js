const person = {
    firstName: "Robul",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };


  console.log(person.firstName);


  const person2 = {
    firstName: "Bikash",
    lastName : "Roy",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


  console.log(person2['fullName']);