const fs = require('fs')

if(process.argv.length !== 5) {
  console.log('usage : node cat.js fichier1 fichier2 fichier3')
  process.exit(1)
}
for (let i = 2; i < process.argv.length; i++){
if (!fs.existsSync(process.argv[2])) {
  console.log(`Erreur : ${process.argv[2]} n'existe pas`)
  process.exit(1)
}
  let txt = fs.readFileSync(process.argv[i], 'utf-8')
  console.log(txt)
}
