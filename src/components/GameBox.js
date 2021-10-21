import Sketch from 'react-p5'

export default function GameBox(){
    const heightMatrix = 
    [
      [
          9,  18,  -7, -44,
        -34, -42, -28,  -5,
         36
      ],
      [
         10,  37,  20, -30,
        -64, -13, -19,  36,
         43
      ],
      [
         55,  58, 48, -35,
        -74, -44,  5,  49,
         50
      ],
      [
         89,  85,  30, -24,
        -60, -39, -27,   1,
         32
      ],
      [
        105,  47,  39, -24,
        -48, -60, -25, -32,
        -14
      ],
      [
        101,  79,  34,   7,
        -59, -44, -43, -17,
        -11
      ],
      [
         92, 45,  43,  11,
        -38, -9, -25, -18,
         34
      ],
      [
        45, 32,  0,  4, -11,
        18,  2, 31, 50
      ],
      [
          7, -16, -54, -28,
        -20,  29,  77,  58,
         87
      ]
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
                p5.fill(assignColor(heightValue))
                p5.square(x, y, matrixUnit)
                x += matrixUnit;
            }
            y += matrixUnit
            x = 0;
        }
    }
    
    function assignColor(heightValue){
        if (heightValue > 80) return 'white'
        if (heightValue > 60) return 'orange'
        if (heightValue > 40) return 'beige'
        if (heightValue > 20) return 'lightgreen'
        if (heightValue > 0) return'lightyellow'
        if (heightValue > -20) return 'aliceblue'
        if (heightValue > -40) return 'cyan'
        if (heightValue > -60) return 'darkcyan'
        if (heightValue > -80) return 'darkblue'
        return 'black'
    }

    return <Sketch setup={setup} draw={draw} />
}

