let dv = null
export function createCircle() {
    addEventListener("click", function doit(event) {
         dv = document.createElement("div")
        dv.setAttribute("class", "circle")
        dv.style.background = "white"
        dv.style.top = event.clientY - 25 + "px"
        dv.style.left = event.clientX - 25 + "px"
        document.body.appendChild(dv)
        moveCircle()
    });
}

export function moveCircle(){
   addEventListener("mousemove", function movit(event) {
          
            let box = document.getElementsByClassName("box")[0]
            let bxps = box.getBoundingClientRect()

            const mx = event.clientX
            const my = event.clientY

            let x = mx - 25
            let y = my - 25
            if (dv.dataset.trapped !== "true") {

                dv.style.left = x + "px"
                dv.style.top = y + "px"
                if (  x >= bxps.left  &&  x + 50 <= bxps.right  && y >= bxps.top  &&  y + 50 <= bxps.bottom  ){
                    dv.dataset.trapped = "true"
                    dv.style.background = "var(--purple)"
                    box.appendChild(dv)
                    dv.style.position = "absolute"
                    dv.style.left = x - bxps.left + "px"
                    dv.style.top =  y - bxps.top + "px"
                }

            } else { 
               const lclX = mx - bxps.left - 25
               const lclY = my - bxps.top - 25
               const maxX = bxps.width - 50 - 1
               const maxY = bxps.height - 50 - 1
               dv.style.left = Math.max(1, Math.min(lclX, maxX)) + "px"
               dv.style.top = Math.max(1, Math.min(lclY, maxY)) + "px"
            }

            addEventListener("click", function stop() {
                removeEventListener("mousemove", movit, false)
                removeEventListener("click", stop, false)
            });
        });
}

export function setBox() {
    const bx = document.createElement("div");
    bx.setAttribute("class", "box");
    bx.style.position = "relative";
    document.body.appendChild(bx);
}

