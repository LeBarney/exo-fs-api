const fs = require('fs')

var index = 2;
var nombredeligne = 10;


if(process.argv.length != 3 && process.argv.length != 5){
  console.log("Usage : node tail.js (-n longueur) file.txt")
  process.exit(1)
}
if(process.argv[2] === '-n'){
  index += 2;
  nombredeligne = process.argv[3];
}

if (!fs.existsSync(process.argv[index])) {

  console.log(`Désolé ${process.argv[index]} n\'existe pas`)
  process.exit(1)
}


  let texte = fs.readFileSync(process.argv[index], 'utf-8')


  const tab1 = texte.split('\n') 
  const rev = tab1.reverse()
  const compte = rev.slice(0, nombredeligne)
  const alendroit = compte.reverse()
  const joinalendroit = alendroit.join('\n')
  console.log(joinalendroit)



  






