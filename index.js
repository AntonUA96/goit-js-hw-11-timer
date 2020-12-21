class CountdownTimer {
    constructor(selector, targetDate) {
this.selector = document.querySelector(selector);    
   this.targetDate = targetDate; 
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  updateClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    // console.log(`${days}:${hours}:${mins}:${secs}`);
   return this.selector.textContent = `${days}:${hours}:${mins}:${secs}`;
}
start() {
    const startTime = this.targetDate;
    setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = startTime - currentTime;
        this.updateClockFace(deltaTime);
    
    });
};
};

const timer = new CountdownTimer('#timer-1', new Date('Jan 01, 2021'));
timer.start();
timer.updateClockFace();



//   const clockFace = document.querySelector('#timer-1');

// const timer = {
// start() {
//     const startTime = countdownTimer.targetDate;
//     setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = startTime - currentTime;
//         updateClockFace(deltaTime);
    
//     });
// }

// }
// timer.start();

// function updateClockFace(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     // console.log(`${days}:${hours}:${mins}:${secs}`);
//    clockFace.textContent = `${days}:${hours}:${mins}:${secs}`;
// }

// function pad(value) {

//     return String(value).padStart(2, '0');
// }


//   /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// // const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// // const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// // const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// // const secs = Math.floor((time % (1000 * 60)) / 1000);