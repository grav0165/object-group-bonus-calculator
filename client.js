// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


function calculateBonus(name){
  

  const personalBonus = {
    totalBonus: 0,
    employeeName: '',
    totalCompensation: 0,
    bonusPercentage: 0
}

      for (let employee of employees) {

        if (employee.name == name) {
          personalBonus.employeeName = employee.name

          if (employee.employeeNumber <= 9999) {
            personalBonus.bonusPercentage += 0.05
          } 

          if (employee.reviewRating === 3) {
            personalBonus.bonusPercentage += 0.04
            }

            if (employee.reviewRating === 4) {
              personalBonus.bonusPercentage += 0.06
              }

              if (employee.reviewRating === 5) {
                personalBonus.bonusPercentage += 0.10
                }

                if (employee.annualSalary >= 65,000) {
                  personalBonus.bonusPercentage -= 0.01
                }

                if (personalBonus.bonusPercentage > 0.13){
                  personalBonus.bonusPercentage = 0.13
                }
                if (personalBonus.bonusPercentage < 0) {
                  personalBonus.bonusPercentage = 0
                }

        
                personalBonus.totalBonus = personalBonus.bonusPercentage * employee.annualSalary
                personalBonus.totalCompensation = (personalBonus.totalBonus + (1*employee.annualSalary))
               
        }

        
      }

  

    return personalBonus
}


function grabInfo () {
  fucntionNameSpotThing = ''
  for (let employee of employees) {
    console.log(calculateBonus(employee.name))
  }

}

grabInfo()









  // {
  //   name: 'Atticus',
  //   employeeNumber: '2405',
  //   annualSalary: '47000',
  //   reviewRating: 3
  // },


// * The `name` property holds the employee's name.
// * The `employeeNumber` property has their employee number.
// * The `annualSalary` property contains their base annual salary.
// * The `reviewRating` property contains their review rating.

// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

// ### Individual Bonus Rules

// - Those who have a rating of a 2 or below should not receive a bonus.
// - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.
// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.


// console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  
  
  // return new object with bonus results

}