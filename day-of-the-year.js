function dayOfTheYear(date){
    let year =  date.getFullYear()
    
    let fstDate = new Date("0001-01-01")
    if (date == fstDate){
        return 1
    }
    
    fstDate.setUTCFullYear(year)

   let bfrlst = ((date.getTime() - fstDate.getTime()) / 1000 / 3600 / 24) +1
   if (bfrlst >366){
    return 1
   } else{
    return bfrlst
   }
}
