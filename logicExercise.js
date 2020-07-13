function main(...params) {
    params.map((mn = String)=>{
        const dimensions =  mn.split(' ')
        const rows = dimensions[0]
        const columns = dimensions[1]
        travelGrid(rows, columns)
    })
}

function travelGrid(rows, columns) {
    if(rows === columns && rows > 1){
        if(rows % 2 == 0) console.log("L")
        else console.log("R")
    }
    else if (rows > columns && columns > 1) {
        if (columns % 2 == 0) console.log("U");
        else console.log("D");
    }
    else if (columns > rows) {
        if (rows % 2 == 0) console.log("L");
        else console.log("R");
    }
    else if (columns == 1) {
        if (rows == 1) console.log("R");
        else console.log("D");
    }
}

main("1 1", "2 2", "3 1", "3 3", "1000000000 1000000000")