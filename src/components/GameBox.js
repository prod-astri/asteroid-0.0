import Sketch from 'react-p5'
import {assignColor, diamondSquare, generateMatrix} from './utilities/MapUtilities';

export default function GameBox() {
    

    const heightMatrix = diamondSquare(generateMatrix())
    function rightEdge (matrix){
        let i = matrix[0].length - 1
        let edge = [];
        for (let line of matrix){
            edge.push(line[i])
        }
        return edge;
    }

    function leftEdge (matrix){
        let edge = [];
        for (let line of matrix){
            edge.push(line[0])
        }
        return edge;
    }

    const bottomHeightMatrix = diamondSquare(generateMatrix(heightMatrix[heightMatrix.length-1]))
    const rightHeightMatrix =  smooth(diamondSquare(generateMatrix(null, null, rightEdge(heightMatrix))))
    console.log(rightHeightMatrix)
    let matrixUnit = 2;

    function smooth (matrix) {
        return matrix
    }

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
        
        for (let line of bottomHeightMatrix) {
            for (let heightValue of line) {
                // p5.noStroke();
                p5.fill(assignColor(heightValue));
                p5.square(x, y, matrixUnit);
                x += matrixUnit;
            }
            y += matrixUnit;
            x = 0;
        }

        let displacementX = matrixUnit * heightMatrix.length
        x = displacementX
        y = 0
        // p5.push()
        for (let line of rightHeightMatrix) {
            for (let heightValue of line) {
                // p5.noStroke();
                p5.fill(assignColor(heightValue));
                p5.square(x, y, matrixUnit);
                x += matrixUnit;
            }
            y += matrixUnit;
            x = displacementX;
        }
        // p5.pop()
        
    }



    return <Sketch setup={setup} draw={draw} />
}

