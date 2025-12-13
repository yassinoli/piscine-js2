async function getJSON(path , params){
    let url = path
    if (params){
     url =  `${path}`+ new URLSearchParams(params).toString()
    }
    
   let  response = await fetch(url)
  
        
        if (!response.ok){
            throw new Error(response.statusText)
        }else{
            let data =  await response.json()
            if (data.data){
                return data.data
            }else{
               throw new Error(data.error) 
            }
        }
       
    
   
   

}
