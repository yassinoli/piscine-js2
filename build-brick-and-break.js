export function  build(max){

    let n = 1

    let interval = setInterval(() => {
        if (n >= max) {
            clearInterval(interval)
            return
        }

        const brick = document.createElement("div")
        brick.setAttribute("id" ,`brick-${n}`);
        

        if (n % 3  === 2) {
            brick.setAttribute("data-foundation","true")
        }
        document.body.appendChild(brick)
        n++
    }, 100)
   
}






export function repair(...ids) {
   for (let i=0 ; i<ids.length ; i++){

        const brick = document.getElementById(ids[i]);
   
        if (brick.hasAttribute("data-foundation")) {
            brick.setAttribute("data-repaired" , "in progress")
        } else {
            brick.setAttribute("data-repaired" , "true")
        }
    
   }
}



export function destroy() {
    const bricks = Array.from(document.querySelectorAll(".brick"));
    if (bricks.length === 0) return;

    const lastBrick = bricks[bricks.length - 1];
    document.body.removeChild(lastBrick);
}



