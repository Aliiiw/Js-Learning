function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);

// Constructor

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(5);
