import Features from '../src'

const parent = document.getElementById('features')

var displayText = (feature) => {
  var name = feature.substr(feature.lastIndexOf('/') + 1)
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

Features().map((feature) => {
  var el = document.createElement('li')
  var a = document.createElement('a')
  a.innerText = displayText(feature)
  a.href = feature
  el.appendChild(a)
  parent.appendChild(el)
})
