  const newJump=(transitionEventObject)=>{
  let horseID=(transitionEventObject.target.getAttribute('value'))
  console.log(horseID)
  race(horseID)
}

const race=(id)=>{
  let horse=document.getElementById(`horse${id}`)
  //the data-jumpCount gets lowercased here in JS
  horse.dataset.jumpcount++
  let cs=window.getComputedStyle(horse)
  let position=parseInt(cs.getPropertyValue('left'))
  if (position<371){
    horse.addEventListener('transitionend',newJump)
    horse.style.left=`${position+(Math.floor(Math.random()*10+10))}px`
  }
  else{console.log('finish')}
}

//Don't exactly know what it's doing
//Must understand if they are moving
//independantly or should i use promises
//Also want to pass value to newJump
//without so much event.target hype
//Also finetune movement & finish-line
