
// console.log('This is a test');

// let ws = new WebSocket(
//   "wss://stereotyped-bike-production-5012.up.railway.app/"
// );

// ws.onopen=(e)=>{
//         console.log(e);
// }

// ws.onmessage=(e)=>{
//     document.querySelector('p').textContent=e.data
// }


// select the password element
let password_input=document.querySelector('#password')

let toggleIcon=document.querySelector('.toggle')

let isVisible=false

let inputCont=document.querySelector('span')

toggleIcon.addEventListener('click',(e)=>{
    isVisible=!isVisible
    if(isVisible){
      password_input.setAttribute("type", "text");
      inputCont.children[1].setAttribute("name","eye-off")

    }
    else{
      password_input.setAttribute("type", "password");
      inputCont.children[1].setAttribute("name", "eye");
      // inputCont.children[1] = '<ion-icon name="eye"></ion-icon>';
    }
})

document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault()
  alert("Successful")
})
