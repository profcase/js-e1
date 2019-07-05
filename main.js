const  calcArea = (length, width) => {
  return length * width
}

const hacked = "<h1><a href=http://shorturl.at/kDLO0>Lilly</a></h1>"

document.querySelector('#good').addEventListener('click',  () => {
  // Never trust the user. ALWAYS white list input text
  const regex = /[^a-zA-Z_]/g
  const s = document.querySelector('#user').value.replace(regex,'')
  const i = parseInt(document.querySelector('#len').value)
  const j = parseInt(document.querySelector('#wid').value)
  const ans = `${s}, the area is ${calcArea(i, j)}.`
  document.querySelector('#display-area-good').innerHTML = ans
})

document.querySelector('#bad').addEventListener('click',  () => {
  // this is bad - it allows injection of malicous code
  // a user could enter name text as shown
  document.querySelector('#user').value = hacked
  const s = document.querySelector('#user').value
  const i = parseInt(document.querySelector('#len').value)
  const j = parseInt(document.querySelector('#wid').value)
  const ans = s + ', the area is ' + calcArea(i, j) + '. Next time, limit your inputs (and do not click injected links)!'
  document.querySelector('#display-area-bad').innerHTML = ans
})

// Security reminders:
//  Never trust the user!
//  Limit string lengths (& use min/max for values)
//  Use Regular Expressions to white-list permitted characters
//  Use Template Literals to concatenate strings (back tics)
