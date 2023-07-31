enum SeatChoice {
    AISLE,          // 0
    MIDDLE ,       //  1
    WINDOW,       //   2
    FOUTH,       //    3
}


/* using const will not generate too much code for javaScript  */

const enum SeatChoice2 {
    AISLE = "AISLE",
    MIDDLE = 3 ,
    WINDOW,        // automatically 4
    FOUTH,         // automatically 5
}

const sbSeat = SeatChoice2.WINDOW
console.log(sbSeat)