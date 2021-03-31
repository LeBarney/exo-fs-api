const fs = require('fs')

if (process.argv.length < 3 || process.argv.length > 4) {
    console.log('Usage : node wc.js file.txt')
    process.exit(1) 
   }   // check command line

if (!fs.existsSync(process.argv[2])) {
    console.log(`Sorry ${process.argv[2]} doesn't exist`)
    process.exit(1)
}  // check si le fichier existe
const stats = fs.statSync(process.argv[2])
if (!stats.isFile(process.argv[2])) {
  console.log(`${process.argv[2]} is not a file`)
  process.exit(1)
} // check si le fichier testé est bien un fichier et non un dossier
let text = process.argv[2]  
const firstSplit = text.split('') // pour transformer le texte en tableau
const countOfText = firstSplit.length // pour compter tous les caractère du text
const splitText = text.split('\n') // pour enlever les retour à la ligne
const countLine = splitText.length // pour compter toutes les lignes du texte
const joinSplitText = splitText.join(' ') //
const finalSplit = joinSplitText.split(' ')
const countWord = finalSplit.length // pour compter les mots
if(process.argv.length === 3){
    console.log(`${countWord}  ${countLine}  ${countOfText}  ${process.argv[2]}`)
}
if(process.argv[3] === '-w'){
console.log(${countWord}  ${text)
if(process.argv[3] === '-l'){
console.log(${countLine}  ${text)
if(process.argv[3] === '-c'){
console.log(${countOfText}  ${text)