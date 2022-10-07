const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const arr = originalDisorderFormat.split("|$|")

const dividedItems = arr.join("</div><div>")

console.log(`<div>${dividedItems}</div>`)
