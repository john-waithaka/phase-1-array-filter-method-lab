// Code your solution here


// function findMatching(drivers,name) {

    
//     // Create an array for drivers
//     const matchingDrivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  
//     // Iterate over each driver in the drivers array
//     for (const driver of drivers) {
//       // Check if the driver's name matches the passed-in name (case-insensitive)
//       if (driver.toLowerCase() === name.toLowerCase()) {
//         // If there's a match, add the driver to the matchingDrivers array
//         matchingDrivers.push(driver);
//       }
//     }
// }

function findMatching(drivers, string) {
    return drivers.filter(drivers => drivers.toLowerCase().includes(string.toLowerCase()))
  }

  function fuzzyMatch(drivers, string) {
    return drivers.filter(drivers => drivers.toLowerCase().startsWith(string.toLowerCase()))
  }
  
  function matchName(drivers, string) {
  
    const result = drivers.filter(word => word.name === string)

    return result;
  }
  