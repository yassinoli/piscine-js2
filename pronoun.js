function pronoun(str) {
  const arr = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
  const w = str.split.toLowercase()(/\s+|[.]|[,]/)
  const res = {}

  for (let i = 0; i < w.length; i++) {
    
    if (arr.includes(w[i])) {
      if (!res[w[i]]) {
        res[w[i]] = { word: [], count: 0 }
      }
      res[w[i]].count++
      const next = w[i + 1]
      if (next && !arr.includes(next)) {
        res[w[i]].word.push(next)
      }
    }
  }

  return res
}

