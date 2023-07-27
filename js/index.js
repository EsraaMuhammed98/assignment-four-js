var nameInput = document.getElementById('nameInput')
var email = document.getElementById('email')
var password = document.getElementById('password')
var  signupAnchor = document.getElementById('signupAnchor');
var form = document.querySelector('form')
form.addEventListener('click',function(e){
    e.preventDefault()
})


 

var users = [];
if( JSON.parse(localStorage.getItem('Users')) !=null  ){
        users = JSON.parse(localStorage.getItem('Users'))
}

var emailWarning = document.getElementById('emailWarning');


function emailWarningFunc(){
    var regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    var testEmail = regEmail.test(email.value)
    if( testEmail == true ){
        emailWarning.classList.add('d-none')
        return true
    }else{
        emailWarning.classList.remove('d-none')
        return false
    }
}

function signupValidation(){
    var alertError = document.querySelector('.hint-error')
    var alertSuccess = document.querySelector('.hint-success')
 var existeEmail = document.getElementById('existe-email')
 var findEmailExite =  users.find((m)=> m.mail == email.value )  //true  
 
 
    if(nameInput.value != '' && email.value !='' && password.value !='' && emailWarningFunc() == true ){
        alertError.classList.add('d-none')
        existeEmail.classList.add('d-none')
        if(!findEmailExite){
            
            existeEmail.classList.add('d-none')

            var allUsers = {
                name:nameInput.value,
                mail:email.value,
                pass:password.value,
            }
            users.push(allUsers)
            localStorage.setItem('Users',JSON.stringify(users))
      


            alertSuccess.classList.remove('d-none')
            
        }else{
            alertSuccess.classList.add('d-none')
            existeEmail.classList.remove('d-none')
        }
      
    }else{
        existeEmail.classList.add('d-none')
    alertError.classList.remove('d-none')
    alertSuccess.classList.add('d-none')
 
    }

       
}

signupAnchor.addEventListener('click',function () {
    window.location='../signin.html'
  })