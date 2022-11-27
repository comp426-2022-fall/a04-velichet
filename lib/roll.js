export {roll}

// Input the sides, dice and rolls 

function roll(sides,dice,rolls) {
// Store the results in an array 
        let results=[]
// iterate the rolls with index 0
        for (let i=0;i<rolls;i++) {
             let sum=0
// iterate the dice with index 0
          for (let j=0;j<dice;j++) {
            sum += Math.floor(Math.random() * sides) + 1;
    }
// push the sum to the results
    results.push(sum)
    }
  let final = {sides: sides
               ,dice: dice
               ,rolls : rolls
               ,results :results }
    return (final)
}


