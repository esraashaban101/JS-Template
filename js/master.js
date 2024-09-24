
// check local storage color
if (localStorage.getItem('color-option') !== null) {
  document.documentElement.style.setProperty('--main-color', localStorage.getItem('color-option'));
  let elements = document.querySelectorAll('.colors-list li');
  elements.forEach(element => {
    element.classList.remove('active');

    if (element.dataset.color === localStorage.getItem('color-option')) {
      element.classList.add('active');
    }
  })
  //    add active to local storage color

}

// slect setting box
document.querySelector('.setting-box i').onclick = function () {
  document.querySelector('.setting-box i').classList.toggle('fa-spin');
  document.querySelector('.setting-box').classList.toggle('open')
}

// change website colors
let listColors = document.querySelectorAll('.colors-list li');

listColors.forEach((li) => {
  li.addEventListener('click', function (e) {
    // console.log(e.target.dataset.color)
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    localStorage.setItem('color-option', e.target.dataset.color);

    // add active class

    let elements = document.querySelectorAll('.colors-list li.active');
    elements.forEach(element => {
      element.classList.remove('active');

    })
    e.target.classList.add('active')



  })
})

// random background options

let randomBackgroundDiv = document.querySelectorAll('.RandomBackground span')
let backgroundInterval;
let backgroundFlag = 'true';
// if local storage not empty
if (localStorage.getItem('background-option') !== null) {
  // console.log(localStorage.getItem('background-option'))
  backgroundFlag = localStorage.getItem('background-option');
  if(backgroundFlag =='true')
  {
    document.querySelector('.yes').classList.add('active');
  }
  else
  {
    document.querySelector('.no').classList.add('active');
  }
}
else
{
  document.querySelector('.yes').classList.add('active');
  localStorage.setItem('background-option','true');

}

randomBackgroundDiv.forEach((span) => {
  span.addEventListener('click', function (e) {


    // add active class

    let elements = document.querySelectorAll('.RandomBackground span.active');
    elements.forEach(element => {
      element.classList.remove('active');

    })
    e.target.classList.add('active')

    if (e.target.dataset.background == 'yes') {
      backgroundFlag = 'true';
      localStorage.setItem('background-option', 'true')
      // console.log(backgroundFlag)
      randomizeImg()

    }
    else if (e.target.dataset.background == 'no') {

      backgroundFlag = 'false';

      localStorage.setItem('background-option', 'false')
      // console.log(backgroundFlag)
      clearInterval(backgroundInterval)

    }

  })
})

// remove all active of bg
randomBackgroundDiv.forEach((span) => {
  span.addEventListener('click', function (e) {


    // add active class

    let elements = document.querySelectorAll('.RandomBackground span');
    elements.forEach(element => {
      element.classList.remove('active');

    })
  

   
    e.target.classList.add('active')
  })
})
// select landnding to change bg
let landingPage = document.querySelector('.landing');
let arrImgs = ['../imgs/01.jpg', '../imgs/03.jpg', '../imgs/04.jpg', '../imgs/05.jpg']

// craete background flag

function randomizeImg() {
  if (backgroundFlag == 'true') {
    backgroundInterval = setInterval(() => {
      let randomImg = Math.floor(Math.random() * arrImgs.length)

      landingPage.style.backgroundImage = `url(${arrImgs[randomImg]})`
    }, 1000)
  }
  else {
    backgroundFlag = 'false';
    clearInterval(backgroundInterval)
  }
}

randomizeImg()



// animation when reach to skills


let ourSkills = document.querySelector('.skills');
document.onscroll = function()
{
    // offset of skills
    let skillsOffsetTop=ourSkills.offsetTop;
    // console.log(skillsOffsetTop)
    let skillsOuterHeight= ourSkills.offsetHeight;
    // console.log(skillsOuterHeight)
    let WindowHeight = window.innerHeight;
    // console.log(innerWindowHeight)
    let windowScrollTop=window.pageYOffset;
    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - WindowHeight))
    {
      let allSkills=document.querySelectorAll('.skill-container span')
       allSkills.forEach(skill=>{
        skill.style.width = skill.dataset.progress;
       })
    }
}

// popup layout of img 

let galleryImgs = document.querySelectorAll('.gallery img');
galleryImgs.forEach(img => {
  img.addEventListener('click', (e) => {
    // create layout
    let layout = document.createElement('div');
    layout.className = 'imgsLayout';
    document.body.appendChild(layout);
    //  create popup div
    let popUpBox = document.createElement('div');
    popUpBox.className = 'popup-Box';

    // create heading foe alt img
    if (img.alt !== null) {
      let heading = document.createElement('h3');
      heading.className = 'gallery-alt';
      heading.innerHTML = img.alt;
      popUpBox.appendChild(heading);

    }
    // create img of the box

    let popImg = document.createElement('img');
    popImg.setAttribute('src', e.target.getAttribute('src'))
    popUpBox.appendChild(popImg)
    layout.appendChild(popUpBox)



    //  create close btn

    let closebtn = document.createElement('span');
    closebtn.innerHTML = 'X';
    popUpBox.appendChild(closebtn);
    closebtn.className = 'closebtn'

  })
})


// clsoe layout img

document.addEventListener('click', function (e) {
  if (e.target.className == 'closebtn') {
    // remove popUpBox
    e.target.parentNode.remove();
    //  remove layout
    document.querySelector('.imgsLayout').remove()



  }
})

// tooltip 

const allBullets = document.querySelectorAll('.bullets');
allBullets.forEach(bullet => {
  bullet.addEventListener('click', (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    });
  })
})



// hide and show bullets
let bulletsBox = document.querySelectorAll('.showBullets span');
let  bulletsContainer =document.querySelector('.bullets')
if(localStorage.getItem('showBulletsOption')!==null)
{
 

  if(localStorage.getItem('showBulletsOption') =='yes')
  {
    bulletsContainer.style.display='block';
    document.querySelector('.showBullets .yes').classList.add('active');

  }
  else
  {
      bulletsContainer.style.display='none';
      document.querySelector('.showBullets .no').classList.add('active');
     
  }

}

else
{
  bulletsContainer.style.display='block';
  document.querySelector('.showBullets .yes').classList.add('active');
  localStorage.setItem('showBulletsOption','yes');
}


bulletsBox.forEach(span=>{
  // remove all active
 let elements = document.querySelectorAll('.showBullets span');
 
  span.addEventListener('click',function(e)
{
  
  if(span.dataset.show =='yes')
  {
        bulletsContainer.style.display='block';
        localStorage.setItem('showBulletsOption','yes');
       

      
  }
  else
  {
      bulletsContainer.style.display='none'
      localStorage.setItem('showBulletsOption','no')
     
  
  }
  elements.forEach(element => {
    element.classList.remove('active');
 
  })
  e.target.classList.add('active')
  
})
})


// reset options 


document.querySelector('.reset').onclick = function(){
      localStorage.clear();
      window.location.reload()
}


// toggle menu

// slect button

let toggleBtn = document.querySelector('.toggleBtn');
let ulLinks=document.querySelector('nav ul')
toggleBtn.onclick = function()
{
  toggleBtn.classList.toggle('menu-active');
  ulLinks.classList.toggle('open');
 
}

// click anywhere to close menu
let iconBar = document.querySelector('nav button i')
document.addEventListener('click',(e)=>{
      if(e.target!==toggleBtn&&e.target!==iconBar&&e.target!==ulLinks)
      {
           if(ulLinks.classList.contains('open'))
           {
            toggleBtn.classList.remove('menu-active');
            ulLinks.classList.remove('open');
           }
      }
})


