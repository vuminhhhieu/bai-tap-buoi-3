class  Shape{
    constructor(Circle,Rectangle,Triangle){
        (this.Circle = Circle),(this.Rectangle = Rectangle),(this.Triangle = Triangle);
    }
}
const crouse  = new Shape('Tron','Vuong','Tam giac')
console.log(crouse)

class  Circle{
    constructor(perimeter,acreage){
        (this.perimeter = perimeter),(this.acreage = acreage);
    }
}
const Congthuctron  = new Circle('C = π x R','S = π x(R/2)^2')
console.log(Congthuctron)

class  Rectangle{
    constructor(perimeter,acreage){
        (this.perimeter = perimeter),(this.acreage = acreage);
    }
}
const Congthucvuong  = new Rectangle('Cạnh * 4','Cạnh^2')
console.log(Congthucvuong)

class  Triangle{
    constructor(perimeter,acreage){
        (this.perimeter = perimeter),(this.acreage = acreage);
    }
}
const Congthuctamgiac  = new Triangle('Cạnh1+Cạnh2+Cạnh3','1/2 cạnh huyền * đáy')
console.log(Congthuctamgiac)