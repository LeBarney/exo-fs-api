const fs = require('fs')

let texte = fs.readFileSync(process.argv[2], 'utf-8')

const tab1 = texte.split('\n') 
const rev = tab1.reverse()
const compte = rev.slice(0,10)

console.log(compte)