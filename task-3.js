// Write code under this line
const getUsersWithGender = (array, gender) =>
  array
    .filter(function (e) {
      return e.gender === gender;
    })
    .map(function ({ name }) {
      return name;
    });

console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
