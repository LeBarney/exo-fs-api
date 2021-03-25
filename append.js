const fs = require('fs')

if((process.argv.length < 5) || (process.argv.length > process.argv[process.argv.length - 1])) {
  console.log('usage : node append.js file.ext file1.ext file2.ext .... dst.txt')
  process.exit(1)
}
for (let i = 2; i < process.argv.length - 1; i++){
if (!fs.existsSync(process.argv[2])) {
  console.log(`Erreur : ${process.argv[2]} n'existe pas`)
  process.exit(1)
}
  let texte = fs.readFileSync(process.argv[i], 'utf-8')

  fs.appendFileSync(`${process.argv[process.argv.length - 1]}`, `${texte}`, 'utf-8')
  
}

console.log('normalement on est bon')