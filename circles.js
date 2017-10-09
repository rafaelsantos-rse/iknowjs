function randInt(){
    return Math.round(Math.random()*10);
}

function Point(x = 0, y = 0){
    this.x = x, 
    this.y = y,
    this.distance = function (p2){
                        return Math.sqrt( (p2.x - this.x)**2 + (p2.y - this.y)**2 );
                    } ,
    this.getPlace = function(){
                        return [this.x, this.y];
                    } ,
    this.setPlace = function (x = undefined, y = undefined) {
                        if(x == undefined){
                            this.x = parseFloat(prompt("x: "));
                            if (this.x == NaN){
                                this.setPlace();
                            }
                        } else {
                            this.x = x;
                        }       
                        if(y == undefined){
                            this.y = parseFloat(prompt("y: "));
                            if (this.y == NaN){
                                this.setPlace();
                            }
                        } else{
                            this.y = y;
                        }
                    }
}

function Circle(r = 1, c = new Point()){
    this.radix = r,
    this.center = c,
    this.len = function(){
                    // C(r) =  2 * pi * r 
                    return (2)*(Math.PI)*(this.radix);
                }
    this.area = function(){
                    // A(r) = pi * r^2
                    return Math.PI*(this.radix**2);
                }
    this.distance = function (circle){
                    
                        return this.center.distance(circle.center) - this.radix - circle.radix;
                    }
    this.hasCollide = function (circle){
                         if (this.distance(circle) <= 0){
                            console.log("COLLIDED");
                        } else{
                             console.log("DOES NOT COLLIDED");
                        }
                      }
    this.info = function(){
                    console.log("radix = ", this.radix);
                    console.log("center point = (", this.center.getPlace()[0], ", ", this.center.getPlace()[1], ")");
                    console.log("circle length = ", this.len());
                    console.log("circle area = ", this.area());
                }    
}

c1 = new Circle(randInt()+1, new Point(randInt(), randInt() ) );
c2 = new Circle(randInt()+1, new Point(randInt(), randInt() ) );
console.log("c1 information: ");
c1.info();
console.log("c2 information: ");
c2.info();
c1.hasCollide(c2);

for(var i = 0; i < 10; i++){
    c1.center.setPlace(randInt(), randInt());
    c2.center.setPlace(randInt(), randInt());
    c1.hasCollide(c2);
}   