if(process.argv.length !== 5) {
  console.log('il faut mettre 3 paramètres en ligne de commande')
  process.exit(1)
}

console.log(process.argv[2], process.argv[3], process.argv[4])
