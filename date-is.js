function isValid(date) {
if (typeof input === "number") {
    return !isNaN(new Date(input).getTime());
  }
    return date instanceof Date && !isNaN(date.getTime())  && typeof date != 'number'

}

function isAfter(date1 , date2){
    return date1 > date2
}
function isBefore(){
    return date1 < date2
}
function isFuture(dat){
    if (!isValid(dat)){
        return false
    }
    return dat.getTime() > Date.now()
}
function isPast(dat){
     if (!isValid(dat)){
        return false
    }
    return dat.getTime() < Date.now()
}

