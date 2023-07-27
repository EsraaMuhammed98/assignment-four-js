var email = document.getElementById('email')
var password = document.getElementById('password')
var form = document.querySelector('form')
var signupAnchor = document.getElementById('signupAnchor');
var invalidPassOrEmail = document.getElementById('invalidPassOrEmail')
var requiredAll = document.getElementById('requiredAll')
form.addEventListener('click',function(e){
    e.preventDefault()
})

var users = [];
if( JSON.parse(localStorage.getItem('Users')) !=null  ){
        users = JSON.parse(localStorage.getItem('Users'))
}


function signin(){
for(let i=0 ; i<users.length ; i++){
   if(  users[i].mail == email.value  && users[i].pass == password.value ){
     window.location='../home.html'    
     localStorage.setItem('userName', users[i].name)  
     invalidPassOrEmail.classList.add('d-none')
     requiredAll.classList.add('d-none')
 
    }   else  if(email.value == '' || password.value == ''){
      requiredAll.classList.remove('d-none')
      invalidPassOrEmail.classList.add('d-none')
  
    }
  
 else{
      requiredAll.classList.add('d-none')
      invalidPassOrEmail.classList.remove('d-none')
    } 
       
          }
        

 
 
    }
 


  signupAnchor.addEventListener('click',()=>{
    location='../signup.html'
  })