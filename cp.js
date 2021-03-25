const fs = require('fs')

if(process.argv.length !== 4) {
  console.log('syntaxe attendue : node cp.js fichier1 fichier2')
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log(`Erreur : ${process.argv[2]} n'existe pas`)
  process.exit(1)
}

let txt = fs.readFileSync(process.argv[2], 'utf-8')
fs.writeFileSync(process.argv[3], txt)