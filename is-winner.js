async function isWinner(str){

    try{
        country = await db.getWinner(str)
        if (country === Error("Country Not Found")){
          return `${country.name}` + 'never was a winner';
        }
         if (country.continent !== "Europe"){
            return   `${country.name}` + "is not what we are looking for because of the continent"
        }
       let  result = await db.getResults(country.id)
       if (result === Error('Result Not Found')){
        return `${country}` + 'never was a winner'
       }
       if (result.length < 3){
        return `${country} is not what we are looking for because the number of times it was champion`
       }
       return 'Country won the FIFA World Cup in' + result.map((res) => { res.year }).join(',') + 'Winning by' + result.map((item) => {res.score }).join(',')
    }catch (err){
        if (err.message === 'Country Not Found'){
            return `${country} never was a winner`
        }
    }
}

