function matchCron(cron , date){
    let minute = date.getMinutes()
    console.log(minute);
    
    let month = date.getMonth()
    let hour = date.getHours()
    let dayM = date.getDate()
    let dayW = date.getDay()
    

    if ((cron[0]==minute || cron[0]=="*") && (cron[2]==hour || cron[2]=="*") && (cron[4]==dayM || cron[4]=="*") && (cron[6]==month || cron[6]=="*") && (cron[8]==(dayW+1) || cron[8]=="*")){
        return true
    }
    return false
}
