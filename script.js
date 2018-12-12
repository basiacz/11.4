function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}

Phone.prototype.printInfo = function () {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var SamsungGalaxy6 = new Phone("Samsung", 3500, "White");
var iPhoneXs = new Phone("Apple", 7219, "Gold");
var LGG7 = new Phone("LGG7", 2899, "Black");

SamsungGalaxy6.printInfo();
iPhoneXs.printInfo();
LGG7.printInfo();