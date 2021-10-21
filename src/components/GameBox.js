import Sketch from 'react-p5'
import {assignColor, diamondSquare, generateMatrix} from './utilities/MapUtilities';

export default function GameBox() {
    

    const heightMatrix = diamondSquare(generateMatrix())
    console.log(heightMatrix)
    
    let matrixUnit = 1;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    }

    function draw(p5) {
        p5.background(220, 220, 220);
        let x = 0;
        let y = 0;
        for (let line of heightMatrix) {
            for (let heightValue of line) {
                p5.noStroke();
                p5.fill(assignColor(heightValue));
                p5.square(x, y, matrixUnit);
                x += matrixUnit;
            }
            y += matrixUnit;
            x = 0;
        }
    }



    return <Sketch setup={setup} draw={draw} />
}

