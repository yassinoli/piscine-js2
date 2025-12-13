async function isWinner(country){

    try{
       let  data = await db.getWinner(country)        
        if (data === Error("Country Not Found")){
          return `${country}` + ' never was a winner';
        }
         if (data.continent !== "Europe"){
            return   `${country}` + " is not what we are looking for because of the continent"
        }
       let  result = await db.getResults(data.id)
       if (result === Error('Result Not Found')){
        return `${country}` + 'never was a winner'
       }
       if (result.length < 3){
        return `${country} is not what we are looking for because of the number of times it was champion`
       }
       
       return `${country} won the FIFA World Cup in ` + result.map(res => res.year ).join(', ') + ' Winning by ' + result.map(res => res.score ).join(', ')
    }catch (err){
        if (err.message === 'Country Not Found'){
            return `${country} never was a winner`
        }
    }
}
