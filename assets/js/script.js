var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
  var name = document.getElementById('contact-name').value;

  if(name.lenght == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

if(phone.lenght == 0){
    phoneError.innerHTML = 'Phone no. is required';
    return false;
}
if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Phone no. should be 10 digits';
    return false;
}

phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
return true;
}

function validateEmail(){
  var email = document.getElementById('contact-email').value;

  if(email.lenght == 0){
    emailError.innerHTML = 'Email is required'
    return false;
  }
  if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    emailError.innerHTML = 'Invalid Email'
    return false;
  }

  emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
return true;
}

function validateMessage(){
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if(left > 0){
    messageError.innerHTML = left + ' more characters required';
    return false;
  }

messageError.innerHTML = '<i class="fa fa-check-circle"></i>';
return true;
}

function validateForm() {
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
    return false;
  }
  else(
    resolve( 'Successfull request!' )
  )
}