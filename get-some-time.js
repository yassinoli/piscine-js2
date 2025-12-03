function firstDayWeek(week,year){
    let date = new Date(year)
    date.setDate(week*7)
    return date 
}

