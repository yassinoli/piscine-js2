function isFriday(date){
    let fri = date.toString()
    
    return fri.slice(0,3)=== 'Fri'
}

function isWeekend(date){
    let wknd = date.toString()
    return wknd.slice(0,3)==='Sat' || wknd.slice(0,3)==='Sun'
}

function isLeapYear(date){
    let year = date.getFullYear()
    if (year%4=== 0 && year%100 !== 0 && year%400!== 0){
        return true
    }
    return false
   
}

function isLastDayOfMonth(date){
        let day = date.getDate()
        let month = date.getMonth()
        date.setDate(day+1)
        if (month === date.getMonth()){
            return true 
        }
        return false
}

