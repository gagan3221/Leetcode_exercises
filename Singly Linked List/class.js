class Cookie{
    constructor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
    setColor(color){
        this.color=color

    }
}
let cookie1 = new Cookie('Red');

console.log(cookie1.color)
cookie1.setColor('Green')
console.log(cookie1.color)