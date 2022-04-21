const findTheOldest = function(people) {
  let oldestAge = 0;
  let oldestPerson = '';
  for (person of people) {
    let age = person.yearOfDeath - person.yearOfBirth;
    if (age > oldestAge) {
      oldestPerson = person;
      oldestAge = age;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
