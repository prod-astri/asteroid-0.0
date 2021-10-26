import Sketch from 'react-p5'
import {assignColor, rightEdge, leftEdge, diamondSquare, generateMatrix} from './utilities/MapUtilities';

export default function GameBox() {
    const FACTOR = 1;

    const heightMatrix = diamondSquare(generateMatrix())
    const smoothHeightMatrix = smooth(heightMatrix)
   
    let matrixUnit = 10;

    function smooth (matrix) {
        const newMatrix = [...matrix].map(line =>  line.map(el => 0))
        console.log(newMatrix, '<<<<<<<<<<<<<<<<')
        for (let row in matrix){
            for (let col in matrix[row]){
                console.log(row, col)
                let sum = 0;
                let counter = 0;
                let adjacents = [];
                
                    // if (!matrix[row - 1][col - 1]) adjacents.push(9)
                    // if (matrix[row + 1][col - 1]) adjacents.push(matrix[row + 1][col - 1])
                    // if (matrix[row + 1][col + 1]) adjacents.push(matrix[row + 1][col + 1])
                    // if (matrix[row - 1][col + 1]) adjacents.push(matrix[row - 1][col + 1])
                    // if (matrix[row - 1][col]) adjacents.push(matrix[row - 1][col])
                    // if (matrix[row][col + 1]) adjacents.push(matrix[row][col + 1])
                    // if (matrix[row + 1][col]) adjacents.push(matrix[row + 1][col])
                    // if (matrix[row][col - 1]) adjacents.push(matrix[row][col - 1])
            
                    if (matrix[row][col]) adjacents.push(-140)
                for (let el of adjacents){
                        sum += el;
                        counter += 1;
                }
                sum += matrix[row][col] * FACTOR
                counter += FACTOR
                newMatrix[row][col] = sum / counter;
            }
        }
        // console.log(newMatrix)
        return newMatrix;
        
    }

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
        // const heightMatrix = diamondSquare(generateMatrix())
        // const smoothHeightMatrix = smooth(heightMatrix)
       
    }

    function draw(p5) {
        p5.background(220, 220, 220);
        // p5.noStroke()
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
        
        for (let line of smoothHeightMatrix) {
            for (let heightValue of line) {
                // p5.noStroke();
                p5.fill(assignColor(heightValue));
                p5.square(x, y, matrixUnit);
                x += matrixUnit;
            }
            y += matrixUnit;
            x = 0;
        }

        // let displacementX = matrixUnit * heightMatrix.length
        // x = displacementX
        // y = 0
        // // p5.push()
        // for (let line of rightHeightMatrix) {
        //     for (let heightValue of line) {
        //         // p5.noStroke();
        //         p5.fill(assignColor(heightValue));
        //         p5.square(x, y, matrixUnit);
        //         x += matrixUnit;
        //     }
        //     y += matrixUnit;
        //     x = displacementX;
        // }
        // p5.pop()
        
    }



    return <Sketch setup={setup} draw={draw} />
}

