 const earth = 31557600 

const  mercury = earth*0.2408467 
 const venus = earth*0.61519726 
 const mars = earth*1.8808158 
 const jupiter = earth*11.862615 
 const saturn = earth*29.447498 
const uranus = earth*84.016846 
 const neptune = earth*164.79132 
 
function dogYears(nameOfPlanet , dogAge){
    return ((dogAge)/ (nameOfPlanet))*7
}

