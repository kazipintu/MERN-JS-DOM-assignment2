//console.log('connected');

document.getElementById("phone-plus").addEventListener('click', () => {
  let phoneNumberInput = document.getElementById('phone-number')
  //console.log(phoneNumber);
  let phoneQuantity = phoneNumberInput.value;
  let newPhoneQuantity = parseInt(phoneQuantity) + 1;
  phoneNumberInput.value = newPhoneQuantity;
  //console.log(newPhoneQuantity);

  let phonePrice = document.getElementById("phone-total");

  let currentPhoneValuePlus = newPhoneQuantity * 100;
  phonePrice.innerText = currentPhoneValuePlus;
  //console.log(currentPhoneValue);

  let subTotalText = document.getElementById('sub-total');
  let subTotalValue = parseInt(document.getElementById('phone-total').innerHTML) + parseInt(document.getElementById('case-total').innerHTML)
  //console.log(subTotalValue);

  subTotalText.innerText = subTotalValue;

  let taxText = parseInt(subTotalText.innerText) / 10;
  //console.log(taxText);
  let taxValue = document.getElementById('tax-amount');
  taxValue.innerHTML = taxText;

  let total = parseInt(subTotalText.innerText) + taxText;
  //console.log(total);
  let totalValue = document.getElementById('total-price')
  totalValue.innerHTML = total;

})


document.getElementById("phone-minus").addEventListener('click', () => {
  let phoneNumberInput = document.getElementById('phone-number')
  //console.log(phoneNumber);
  let phoneQuantity = phoneNumberInput.value;
  let newPhoneQuantity = parseInt(phoneQuantity) - 1;
  if (newPhoneQuantity >= 0) {
    phoneNumberInput.value = newPhoneQuantity;

    let phonePrice = document.getElementById("phone-total");
    //console.log(phonePrice);

    let currentPhoneValueMinus = newPhoneQuantity * 100;
    phonePrice.innerText = currentPhoneValueMinus;
    //console.log(currentPhoneValue);

    let subTotalText = document.getElementById('sub-total');
    let subTotalValue = parseInt(document.getElementById('phone-total').innerHTML) + parseInt(document.getElementById('case-total').innerHTML)
    //console.log(subTotalValue)

    subTotalText.innerText = subTotalValue;

    let taxText = parseInt(subTotalText.innerText) / 10;
    //console.log(taxText);
    let taxValue = document.getElementById('tax-amount');
    taxValue.innerHTML = taxText;

    let total = parseInt(subTotalText.innerText) + taxText;
    //console.log(total);
    let totalValue = document.getElementById('total-price')
    totalValue.innerHTML = total;
  }

})


document.getElementById("case-plus").addEventListener('click', () => {
  let caseNumberInput = document.getElementById('case-number')
  //console.log(phoneNumber);
  let caseQuantity = caseNumberInput.value;
  let newCaseQuantity = parseInt(caseQuantity) + 1;
  caseNumberInput.value = newCaseQuantity;
  //console.log(newPhoneQuantity);

  let casePrice = document.getElementById("case-total");
  //console.log(phonePrice);

  let currentCaseValuePlus = newCaseQuantity * 10;
  casePrice.innerText = currentCaseValuePlus;
  //console.log(currentPhoneValue);

  let subTotalText = document.getElementById('sub-total');
  let subTotalValue = parseInt(document.getElementById('phone-total').innerHTML) + parseInt(document.getElementById('case-total').innerHTML);
  //console.log(subTotalValue)

  subTotalText.innerText = subTotalValue;

  let taxText = parseInt(subTotalText.innerText) / 10;
  //console.log(taxText);
  let taxValue = document.getElementById('tax-amount');
  taxValue.innerHTML = taxText;

  let total = parseInt(subTotalText.innerText) + taxText;
  //console.log(total);
  let totalValue = document.getElementById('total-price')
  totalValue.innerHTML = total;

})


document.getElementById("case-minus").addEventListener('click', () => {
  let caseNumberInput = document.getElementById('case-number')
  //console.log(phoneNumber);
  let caseQuantity = caseNumberInput.value;
  let newCaseQuantity = parseInt(caseQuantity) - 1;
  if (newCaseQuantity >= 0) {
    caseNumberInput.value = newCaseQuantity;

    let casePrice = document.getElementById("case-total");
    //console.log(phonePrice);

    let currentCaseValueMinus = newCaseQuantity * 10;
    casePrice.innerText = currentCaseValueMinus;
    //console.log(currentPhoneValue);

    let subTotalText = document.getElementById('sub-total');
    let subTotalValue = parseInt(document.getElementById('phone-total').innerHTML) + parseInt(document.getElementById('case-total').innerHTML);
    //console.log(subTotalValue)

    subTotalText.innerText = subTotalValue;

    let taxText = parseInt(subTotalText.innerText) / 10;
    //console.log(taxText);
    let taxValue = document.getElementById('tax-amount');
    taxValue.innerHTML = taxText;

    let total = parseInt(subTotalText.innerText) + taxText;
    //console.log(total);
    let totalValue = document.getElementById('total-price')
    totalValue.innerHTML = total;
  }

})

