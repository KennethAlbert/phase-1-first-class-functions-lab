// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=([...drivers])=>{
    return drivers.splice(0,2)
    
}

const returnLastTwoDrivers=([...drivers])=>{
    return drivers.splice(-2)
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
    return function fareMultiplier(){
          return Math.pow((parseInt(num,10)),2)
    }

}


function fareDoubler(num){
    const multiplier=createFareMultiplier(num)(num);
    return Math.sqrt(multiplier)*2
}

function fareTripler(num){
    const multiplier=createFareMultiplier(num)(num);
    return Math.sqrt(multiplier)*3
}

function selectDifferentDrivers(arrayOfDrivers,firstTwoOrLastTwo){
    return firstTwoOrLastTwo(arrayOfDrivers);

}

