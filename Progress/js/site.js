// Selecting all the required classes from HTML to change 
var check = document.querySelector('#darkmode-button')
var box = document.querySelector('.darkmode-box')
var ball = document.querySelector('.darkmode-ball')

// Adding an eventListener function to change color everytime var check is changed.(checked & unchecked)

check.addEventListener('change',function(){

  //   conditions to apply when checkbox is checked

  if(this.checked == true){
    darkmode.setDarkMode(true)
    box.setAttribute('style','background-color:white;')
    ball.setAttribute('style','transform:translatex(100%);')
  }

  //   conditions to apply when checkbox is unchecked

  if(this.checked == false){
    darkmode.setDarkMode(false)
    box.setAttribute('style','background-color:black; color:white;')
    ball.setAttribute('style','transform:translatex(0%);')
  }
})

