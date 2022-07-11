function areaOfFigures(input) {

    let figureType = input[0];

    switch (figureType) {
        case "square":
            let lenghtSquare = Number(input[1]);
            let totalSquare = Math.abs(lenghtSquare * lenghtSquare);
            console.log(totalSquare.toFixed(3));
    }
    switch (figureType) {
        case "rectangle":
            let lenghtRectangleA = Number(input[1]);
            let lenghtRectangleB = Number(input[2]);
            let totalRectangle = Math.abs(lenghtRectangleA * lenghtRectangleB);
            console.log(totalRectangle.toFixed(3));
    }
    switch (figureType) {
        case "circle":
            let circleRadius = Number(input[1]);
            let totalCircle = Math.abs(circleRadius * circleRadius * Math.PI);
            console.log(totalCircle.toFixed(3));
    }
    switch (figureType) {
        case "triangle":
            let triangleLenght = Number(input[1]);
            let triangleHeight = Number(input[2]);
            let totalTriangle = Math.abs(1 / 2 * triangleLenght * triangleHeight);
            console.log(totalTriangle.toFixed(3));
    }

}