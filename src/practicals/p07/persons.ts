interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

function sortPersons(persons: Person[]): Person[] {
  let result: Person[] = [];
  const sort = persons.filter((person) => person.firstName !== '' && person.lastName !== '' && person.age !== undefined && person.age > 0 );
  console.log(sort)
  // console.log(persons.length);

  return result

}


const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

sortPersons(persons);
