// Code your solution in this file!
const distanceFromHqInBlocks = (destination) => {
    return Math.abs(destination - 42);
}

const distanceFromHqInFeet = (destination) => {
    return distanceFromHqInBlocks(destination)*264;
}

 const distanceTravelledInFeet = (start, destination) => {
    return Math.abs(destination - start)*264;
 }

 const calculatesFarePrice = (start, destination) => {
    let distance = Math.abs(destination - start)*264;;
    
    if (distance <= 400)
    {
        return 0;
    }
    if (distance > 400 && distance < 2000)
    {
        return (distance - 400)*0.02;
    }
    if (distance >= 2000 && distance < 2500)
    {
        return 25;
    }
    if (distance >= 2500)
    {
        return "cannot travel that far";
    }

 }