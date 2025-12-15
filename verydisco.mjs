const args = process.argv.slice(2)

const res = []

args.forEach(word => {
  const cut = Math.ceil(word.length / 2)

  const wrd = word.slice(cut) + word.slice(0, cut)

  res.push(wrd)
})

console.log(res.join(' '))
