function Clock() {
  this.seconds = 0;
}

Clock.prototype.increment = function() {
  this.seconds = this.seconds + 1;
  console.log('Seconds: ' + this.seconds);
};

Clock.prototype.tick = function() {
  setInterval(this.increment.bind(this), 1000);
};

var timex = new Clock();
timex.tick();


