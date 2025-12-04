function matchCron(cron , date){
    let minute = date.getMinutes()
    
    let month = date.getMonth()+1
    let hour = date.getHours()
    let dayM = date.getDate()
    let dayW = date.getDay()
    

    if ((cron[0]==minute || cron[0]=="*") && (cron[2]==hour || cron[2]=="*") && (cron[4]==dayM || cron[4]=="*") && (cron[6]==month || cron[6]=="*") && (cron[8]==(dayW) || cron[8]=="*")){
        return true
    }
    return false
}
console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')));
