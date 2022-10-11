let uneVariableDeTypeString: number | string = "hello"

// plus tard...
uneVariableDeTypeString = 2
console.log(uneVariableDeTypeString)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>${uneVariableDeTypeString}</div>
`
