// Your code goes here

//click event
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', () => {
        el.style.color = 'blue';
    })
})




//mouseenter/mouseleave
document.querySelectorAll('.img-content').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.1)';
        el.style.transition = 'all 0.4s';
    })
})

document.querySelectorAll('.img-content').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
        el.style.transition = 'all 0.4s'
    })
})

//dblclick
// const changeH1 = document.querySelector('.logo-heading');
// changeH1.addEventListener('dblclick', (event) => {
//     event.target.style.color = 'red';
// })
document.querySelectorAll("img").forEach(e => {
    e.addEventListener("dblclick", () => {
        e.style.display = "none";
    })
    //propagation
    e.addEventListener("click", () => {
        e.style.transform  = 'rotate(360deg)';
        e.style.transition = "all 5s"
        event.stopPropagation();
    })
    
})

//resize
window.addEventListener('resize', (event) => {
    const body = document.querySelector('body')
    body.style.background = 'coral';
    body.style.transition = 'background 1s';
})

//keydown
let keyBody = document.querySelector('body')

keyBody.addEventListener('keydown', () => {
  alert(`Unfortunately key strokes do nothing here`)
})

//mousemove
let mouseH2 = document.querySelectorAll('h2')

mouseH2.forEach((h2) => {
  h2.addEventListener('mousemove', (event) => {
    event.target.textContent = 'Look at me!'
  })
})

//load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
 });

 //wheel
 const wheelImg = document.querySelector('h2')
 wheelImg.addEventListener('wheel', (event) => {
     event.stopPropagation();
     event.currentTarget.style.fontWeight= 'bold' 
 })

 //beforeprint afterprint
 window.addEventListener('beforeprint', (event) => {
    alert('Select print options')
  });

  window.addEventListener('afterprint', (event) => {
      alert('If you say so...')
  })

 //contextmenu
 const introImg = document.querySelector('.intro img');
 introImg.addEventListener('contextmenu', function(){
     introImg.style.display = 'none';
 });

 //fullscreenchange
 window.addEventListener('fullscreenchange', (event) => {
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If there isn't one,
    // the value of the property is null.
    if (window.fullscreenElement) {
      console.log(`Element: ${window.fullscreenElement.id} entered full-screen mode.`);
    } else {
      console.log('Leaving full-screen mode.');
    }
  });

//preventDefault
const preventDefault = document.querySelector('.main-navigation')
preventDefault.addEventListener('click', (event) => {
    console.log('Link was clicked');
    event.preventDefault();
})