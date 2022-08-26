// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers ,ind){
    return drivers.filter(function (name){
        return name.toLowerCase() === ind.toLowerCase();
    })
}

function beforeEach() {
    drivers.length = 0;
    return drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
  };


function fuzzyMatch (arr, firstTwo){
    // const startsWithSa = drivers.filter((arr) => arr.startsWith("Sa"));
    return arr.filter (function (driver){
        return (driver.slice (0,2) === firstTwo);
    })
}


const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName (){
    return drivers2.filter (function (ind){
        return ind.name === 'Bobby';
    });
    }
      