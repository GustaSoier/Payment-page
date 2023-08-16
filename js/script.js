let inputCvc = document.querySelector('#cvcNumber');
let outputCvc = document.querySelector('#numberCvc')
let inputValMm = document.getElementById('monthNumber');
let inputValYy = document.getElementById('yearNumber');
let inputCardNumber = document.querySelector('#numberCard');
let outputCardNumber = document.querySelector('#cardNumber');
let inputNameCard = document.querySelector('#nameCard');
let outputNameCard = document.querySelector('#cardName');

inputNameCard.addEventListener('input', function () {
  if (inputNameCard.value.length > 0) {
    outputNameCard.textContent = inputNameCard.value
  } else {
    outputNameCard.textContent = 'JANE APPLESEED'
  }
})

inputCvc.addEventListener('input', function () {
  var maxLengthCvc = 3;
  if (inputCvc.value.length > maxLengthCvc) {
    inputCvc.value = inputCvc.value.slice(0, maxLengthCvc);
  }
  if (inputCvc.value.length > 0) {
    outputCvc.textContent = inputCvc.value;
  } else {
    outputCvc.textContent = '000'
  }
});

inputValMm.addEventListener('input', function () {
  var maxLengthVal = 2;
  if (inputValMm.value.length > maxLengthVal) {
    inputValMm.value = inputValMm.value.slice(0, maxLengthVal)
  }
});

inputValYy.addEventListener('input', function () {
  var maxLengthVal = 2;
  if (inputValYy.value.length > maxLengthVal) {
    inputValYy.value = inputValYy.value.slice(0, maxLengthVal)
  }
});

inputCardNumber.addEventListener('input', function () {
  var maxLengthVal = 16;
  if (inputCardNumber.value.length > maxLengthVal) {
    inputCardNumber.value = inputCardNumber.value.slice(0, maxLengthVal)
  }

  if (inputCardNumber.value.length > 0) {
    outputCardNumber.textContent = inputCardNumber.value
  } else {
    outputCardNumber.textContent = '0000 0000 0000 0000'
  }

});

function concatenaValidade() {
  let validadeMM = document.querySelector('#monthNumber').value;
  let validadeYY = document.querySelector('#yearNumber').value;
  let validadeMMeYY = (`${validadeMM}/${validadeYY}`);
  let outputvalidade = document.querySelector('#cardVal');

  if (validadeMM > 0) {
    outputvalidade.textContent = validadeMMeYY
  } else {
    outputvalidade.textContent = '00/00'
  }
}