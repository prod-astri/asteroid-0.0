import Sketch from 'react-p5'

export default function GameBox(){
    const heightMatrix = [
        [ 1, 15, -34, 65, 81 ],
        [ 13, -17, -55, 56, 97 ],
        [ -16, -1, 19, 95, 116 ],
        [ -1, 56, 1, 47, 70 ],
        [ 89, 67, -11, 17, 79 ]
    ]
    let matrixUnit = 30;
    
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    }
    
    const draw = p5 => {
        p5.background(220, 220, 220)
        let x = 0;
        let y = 0;
        for (let line of heightMatrix){
            for (let heightValue of line){
                p5.fill(heightValue * 2.55)
                p5.square(x, y, matrixUnit)
                x += matrixUnit;
            }
            y += matrixUnit
            x = 0;
        }
    }
    
    function assignColor(heightValue){
        
    }

    return <Sketch setup={setup} draw={draw} />
}

