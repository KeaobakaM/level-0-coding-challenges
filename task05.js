
function areaOfTriangle(sidea,sideb,sidec){
    const semiperemeter = (1/2 * (sidea + sideb + sidec));
    const heronform = semiperemeter * (semiperemeter - sidea) * (semiperemeter - sideb) *
    (semiperemeter - sidec);
    let area = Math.sqrt(heronform);
    area = Math.round(area);
    return area;
    
} 

let calculateArea = areaOfTriangle(8,8,8);
console.log("The area of the triangle is " + calculateArea + " square units");