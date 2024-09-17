function join(){
    location.href = 'minecraft://?addExternalServer=牛舍伺服器|node3-hk.aquaticnodes.host:19898'
}
window.onload = function changeTheme(){  
  const title = document.querySelector('#title')
  const list = [
    'url("assets/1.webp")',
    'url("assets/2.webp")',
    'url("assets/3.webp")',
    'url("assets/4.webp")'
  ]
  const random = Math.floor(Math.random() * 4)
  console.log(random)
  $('#title').css({'background-image':list[random]})
  if (random!=0) title.style.color = 'white'
  const button = document.querySelector('#theme-toggle-button')
  if (document.cookie=='theme=dark'){
    $('body').css({'background-color':'#303030','color':'white'})
    $('code').css({'background-color':'#202020','color':'white'})
    button.innerHTML = '<i class="fa-solid fa-sun"></i>'
  }
}
function toggle(){
  const button = document.querySelector('#theme-toggle-button')
  if (button.innerHTML=='<i class="fa-solid fa-moon"></i>'){
    $('body').css({'background-color':'#303030','color':'white'})
    $('code').css({'background-color':'#202020','color':'white'})
    document.cookie = 'theme=dark'
    button.innerHTML = '<i class="fa-solid fa-sun"></i>'
    return
  }
  if (button.innerHTML=='<i class="fa-solid fa-sun"></i>'){
    $('body').css({'background-color':'white','color':'black'})
    $('code').css({'background-color':'fcfcfc','color':'black'})
    document.cookie = 'theme=light'
    button.innerHTML = '<i class="fa-solid fa-moon"></i>'
    return
  }
}