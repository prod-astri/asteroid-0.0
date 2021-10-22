import Sketch from 'react-p5'
import {assignColor, diamondSquare, generateMatrix} from './utilities/MapUtilities';

export default function GameBox() {
    

    const heightMatrix = diamondSquare(generateMatrix())
    const secondHeightMatrix = diamondSquare(generateMatrix(heightMatrix[heightMatrix.length-1]))
    
    let matrixUnit = 5;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
       
    }

    function draw(p5) {
        p5.background(220, 220, 220);
        p5.noStroke()
        let x = 0;
        let y = 0;
        for (let line of heightMatrix) {
            for (let heightValue of line) {
                // p5.noStroke();
                p5.fill(assignColor(heightValue));
                p5.square(x, y, matrixUnit);
                x += matrixUnit;
            }
            y += matrixUnit;
            x = 0;
        }
        p5.push()
        for (let line of secondHeightMatrix) {
            for (let heightValue of line) {
                // p5.noStroke();
                p5.fill(assignColor(heightValue));
                p5.square(x, y, matrixUnit);
                x += matrixUnit;
            }
            y += matrixUnit;
            x = 0;
        }
        p5.pop()
    }



    return <Sketch setup={setup} draw={draw} />
}

