
class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date;
    // 2. Store the hours, minutes, and seconds.
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    // 3. Call printTime.
    this.printTime(h, m, s);
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick(h,m,s), 1000);
  }

  printTime(h, m, s) {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    var time = `${h}:${m}:${s}`
    console.log(time);
    setInterval(this._tick(h,m,s), 1000);
  }

  _tick(h, m, s) {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    if (s < 60){
      s += 1;
    }else {
      s = 0;
      m += 1;
    }

    if (m< 60) {
      m += 1;
    }else {
      m = 0;
      h += 1;
    }
    this.printTime(h, m, s);
  }
}

const clock = new Clock();
