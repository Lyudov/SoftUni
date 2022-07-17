function tradeCommissions(input) {

    let city = input[0];
    let salesVolum = Number(input[1]);

    let sum = 0;

    switch (city) {
        case "Sofia":
            if (salesVolum >= 0 && salesVolum <= 500) {
                sum = salesVolum * 0.05;
            } else if (salesVolum > 500 && salesVolum <= 1000) {
                sum = salesVolum * 0.07;
            } else if (salesVolum > 1000 && salesVolum <= 10000) {
                sum = salesVolum * 0.08;
            } else if (salesVolum > 10000) {
                sum = salesVolum * 0.12;
            } else {
                sum = "error";
            }
            break;
        case "Varna":
            if (salesVolum >= 0 && salesVolum <= 500) {
                sum = salesVolum * 0.045;
            } else if (salesVolum > 500 && salesVolum <= 1000) {
                sum = salesVolum * 0.075;
            } else if (salesVolum > 1000 && salesVolum <= 10000) {
                sum = salesVolum * 0.1;
            } else if (salesVolum > 10000) {
                sum = salesVolum * 0.13;
            } else {
                sum = "error";
            }
            break;
        case "Plovdiv":
            if (salesVolum >= 0 && salesVolum <= 500) {
                sum = salesVolum * 0.055;
            } else if (salesVolum > 500 && salesVolum <= 1000) {
                sum = salesVolum * 0.08;
            } else if (salesVolum > 1000 && salesVolum <= 10000) {
                sum = salesVolum * 0.12;
            } else if (salesVolum > 10000) {
                sum = salesVolum * 0.145;
            } else {
                sum = "error";
            } break;
        default: sum = "error"; break;
    }
    if (typeof sum === "number") {
        sum = sum.toFixed(2);
    }
    console.log(sum)

}
tradeCommissions(["Bourgas", "1500"])



             //case "Varna": sum = salesVolum * 0.045; break;
//             case "Plovdiv": sum = salesVolum * ; break;
//             default: console.log();
//                 typeError = true; break;
//         }
//         console.log(sum.toFixed(2));
//     }
//      {
//         switch (city) {
//             case "Sofia":
//             case "Varna": sum = salesVolum * ; break;
//             case "Plovdiv": sum = salesVolum *; break;

//         }
//         console.log(sum.toFixed(2));
//     }
//      {
//         switch (city) {
//             case "Sofia": break;
//             case "Varna": sum = salesVolum * ; break;
//             case "Plovdiv": sum = salesVolum * ; break;
//             default: console.log("error");
//                 typeError = true; break;
//         }
//         console.log(sum.toFixed(2));
//     }
//     if (salesVolum > 10000) {
//         switch (city) {
//             case "Sofia":  break;
//             case "Varna": sum = salesVolum * ; break;
//             case "Plovdiv": sum = salesVolum * ; break;
//             default: console.log("error");
//                 typeError = true; break;
//         }
//         console.log(sum.toFixed(2));
//     }

//     if (!typeError || (salesVolum < 0)) {
//         console.log("error")
//     }

// }
// tradeCommissions(["Bourgas", "1500"])






































// function tradeCommissions(input) {

//     let city = input[0];
//     let salesVolum = Number(input[1]);

//     let sum = 0;
//     let typeError = true;

//     if (salesVolum >= 0 && salesVolum <= 500) {
//         switch (city) {
//             case "Sofia": sum = salesVolum * 0.05; break;
//             case "Varna": sum = salesVolum * 0.045; break;
//             case "Plovdiv": sum = salesVolum * 0.055; break;
//             default: console.log("error");
//                 typeError = true; break;
//         }
//         console.log(sum.toFixed(2));
//     }
//     if (salesVolum > 500 && salesVolum <= 1000) {
//         switch (city) {
//             case "Sofia": sum = salesVolum * 0.07; break;
//             case "Varna": sum = salesVolum * 0.075; break;
//             case "Plovdiv": sum = salesVolum * 0.08; break;

//         }
//         console.log(sum.toFixed(2));
//     }
//     if (salesVolum > 1000 && salesVolum <= 10000) {
//         switch (city) {
//             case "Sofia": sum = salesVolum * 0.08; break;
//             case "Varna": sum = salesVolum * 0.1; break;
//             case "Plovdiv": sum = salesVolum * 0.12; break;
//             default: console.log("error");
//                 typeError = true; break;
//         }
//         console.log(sum.toFixed(2));
//     }
//     if (salesVolum > 10000) {
//         switch (city) {
//             case "Sofia": sum = salesVolum * 0.12; break;
//             case "Varna": sum = salesVolum * 0.13; break;
//             case "Plovdiv": sum = salesVolum * 0.145; break;
//             default: console.log("error");
//                 typeError = true; break;
//         }
//         console.log(sum.toFixed(2));
//     }

//     if (typeError === false || salesVolum <= 0) {
//         console.log("error")
//     }

// }
// tradeCommissions(["Bourgas", "1500"]);