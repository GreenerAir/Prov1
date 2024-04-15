const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  console.log('Name:', name.value);
  console.log('Email:', email.value);
  console.log('Message:', message.value);

  if (name.value.length < 3) {
    errorElement.innerHTML = 'Tu nombre al menos tiene más de 3  carácteres.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Porfavor introduce un email valido.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Porfavor introduce un email valido.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Porfavor escribe un mensaje más largo.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Gracias! Te responderemos lo antes posible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  console.log('Ha sido enviado');

  return true;

}