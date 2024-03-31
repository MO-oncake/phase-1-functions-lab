// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    const Hq = 42;
    if (pickUpLocation < Hq) {
        return Hq - pickUpLocation;
    } else {
        return pickUpLocation - Hq;
    }
}

const feetPerBlock = 264

function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * feetPerBlock
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * feetPerBlock
    } else {
        return (destination - start) * feetPerBlock
    }
}

// function calculatesFarePrice(start, destination) {
//     const distance = distanceTravelledInFeet(start, destination);
//     if (distance <= 400) {
//         return 0;
//     } else if (distance > 400 && distance <= 2000) {
//         return (distance - 400) * 0.02;
//     } else if (distance > 2000 && distance < 2500) {
//         return 25;
//     } else if (distance >= 2500) {
//         return 'cannot travel that far';
//     }
// }

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    const ppf = 0.02 //(consider with and without.)
  switch (true) {
    case distance <= 400:
      return 0;
    case distance > 400 && distance <= 2000:
      return (distance - 400) * ppf; //(consider ppf back to fixed 0.02)
    case distance > 2000 && distance < 2500:
      return 25;
    case distance >= 2500:
      return 'cannot travel that far';
    default:
      return 'cannot travel that far';
  }
} 
