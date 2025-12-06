export function generateLetters(){
    const L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    for (let i=0 ; i<120; i++){
        const add = document.createElement("div")
        add.append(L[Math.floor(Math.random()*100)%26])

        add.style.fontSize = 11 + i ;
        if (  i <40 ){
            add.style.fontWeight = 300
        }
        if (  i <80 && i>=40 ){
            add.style.fontWeight = 300
        }
        if (  i <120 && i>=80 ){
            add.style.fontWeight = 300
        }

    }
    
    
}