const addWeek = (first) => {
    let day = ""
    let d = new Date(first)
    let birst = new Date("0001-01-01")
    let res = (d-birst) / 1000 /24 /60 / 60
    
        let sw = res%14

        switch (sw){
            case 0 : day = "Monday"; break
            case 1 : day = "Tuesday"; break
            case 2 : day = "Wednesday"; break
            case 3 : day = "Thursday"; break
            case 4 : day = "Friday"; break
            case 5 : day = "Saturday"; break
            case 6 : day = "Sunday"; break
            case 7 : day = "secondMonday"; break
            case 8 : day = "secondTuesday"; break
            case 9 : day = "secondWednesday"; break
            case 10 : day = "secondThursday"; break
            case 11 : day = "secondFriday"; break
            case 12 : day = "secondSaturday"; break
            case 13 : day = "secondSunday"; break
    }

return day

}


function timeTravel(obj){
     obj.date.setHours(obj.hour)
     obj.date.setMinutes(obj.minute)
     obj.date.setSeconds(obj.second)

     return obj.date
}

