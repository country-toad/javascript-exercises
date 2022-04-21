const findTheOldest = function(people) {
  let oldestAge = 0;
  let oldestPerson = '';
  let dt = new Date();
  for (person of people) {
    let endYear = person.yearOfDeath;
    if (!person.hasOwnProperty('yearOfDeath')) {
      endYear = dt.getFullYear(); 
    }
    let age = endYear - person.yearOfBirth;
    if (age > oldestAge) {
      oldestPerson = person;
      oldestAge = age;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
