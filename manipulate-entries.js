function filterEntries(obj, func) {
  const res = {}
  for (const [key, val] of Object.entries(obj)) {
    if (func([key, val])) res[key] = val
  }
  return res
}


function mapEntries(obj , func){
  let res = {}
  for (let [key ,val] of Object.entries(obj)){
    const [newKey,newVal] = func([key,val])
    res[newKey] = newVal
  }
  return res
}

function reduceEntries(obj, func, acc) {
  for (const entry of Object.entries(obj)) {
    acc = func(acc, entry)
  }
  return acc
}


function totalCalories(obj) {
  const total = reduceEntries(obj, (acc, [key, grams]) => {
    const nutrition = nutritionDB[key]
    return acc + nutrition.calories * grams / 100
  }, 0)

  return Number(total.toFixed(1))
}


function lowCarbs(obj){
  return filterEntries(obj, ([key,grams])=>{
    const nutrition = nutritionDB[key]
    return nutrition.carbs * grams / 100 < 50
  })
}

function cartTotal(obj){
  return mapEntries(obj, ([key,grams])=>{
    const nutrition = nutritionDB[key]
    const totals = {}
    for (const [nutrient, amount] of Object.entries(nutrition)){
      totals[nutrient] = Number((amount * grams / 100).toFixed(3))
    }
    return [key, totals]
  })
}

