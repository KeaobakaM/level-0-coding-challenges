
function areaOfTriangle(sideA,sideB,sideC){
    const semiperemeter = (1/2 * (sideA + sideB + sideC));
    const heronForm = semiperemeter * (semiperemeter - sideA) * (semiperemeter - sideB) *
    (semiperemeter - sideC);
    let area = Math.sqrt(heronForm);
    area = Math.round(area);
    return area;
    
} 

let calculateArea = areaOfTriangle(8,8,8);
console.log("The area of the triangle is " + calculateArea + " square units");