//console.log('connected');

document.getElementById("phone-plus").addEventListener('click', () => {
  let phoneNumberInput = document.getElementById('phone-number')
  //console.log(phoneNumber);
  let phoneQuantity = phoneNumberInput.value;
  let newPhoneQuantity = parseInt(phoneQuantity) + 1;
  phoneNumberInput.value = newPhoneQuantity;
  //console.log(newPhoneQuantity);

  let phonePrice = document.getElementById("phone-total");
  //console.log(phonePrice);

  let previousPhoneValue = parseInt(phonePrice.innerHTML);
  //console.log(phoneValue);
  let currentPhoneValue = previousPhoneValue * newPhoneQuantity;
  //phoneValue = newPhoneValue;

  phonePrice.innerHTML = currentPhoneValue;

  //console.log(phoneValue);

})

document.getElementById("phone-minus").addEventListener('click', () => {
  let phoneNumberInput = document.getElementById('phone-number')
  //console.log(phoneNumber);
  let phoneQuantity = phoneNumberInput.value;
  let newPhoneQuantity = parseInt(phoneQuantity) - 1;
  if (newPhoneQuantity >= 0) {
    phoneNumberInput.value = newPhoneQuantity;
  }
  //console.log(newPhoneQuantity);

})

