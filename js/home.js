var h1 = document.querySelector('#home h1')

 var userName = localStorage.getItem('userName')
 if(userName){
    h1.innerHTML = `Welcom ${localStorage.getItem('userName')}`
 }

function logOut( ) {
  localStorage.removeItem('userName')
  location='../signin.html'
  }