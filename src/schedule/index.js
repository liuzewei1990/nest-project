
// import schedule from "";
let schedule = require("node-schedule");
// import pm2 from "pm2";

//每分钟的1-10秒执行 每秒执行一次
// schedule.scheduleJob("任务名称", "1-10 * * * * *", () => {
//     console.log("hello word!")
// })

//每分钟的第15秒执行一次
schedule.scheduleJob("任务名称", "0-30 * * * * *", () => {
    console.log("hello word!")
    console.log("pid:", process.pid)
})


// pm2.list((err, list) => {
//     if (list[0].pid === process.id) { // let first process to running job
//         // running job
//     }
// })
