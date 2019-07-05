const  calcArea = (length, width) => {
  return length * width;
}

document.querySelector('#btn').addEventListener('click',  () => {
  const s = document.querySelector('#user').value
  const i = parseInt(document.querySelector('#len').value)
  const j = parseInt(document.querySelector('#wid').value)
  const ans = s + ', the area is ' + calcArea(i, j) + '.'
  //$("#display-area").html(ans);
  document.querySelector('#display-area').innerHTML = ans
})
