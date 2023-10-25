function colorBord() {
  var imageBord = document.getElementById('image_bord');
  if (imageBord.style.border === "2px solid red") {
    imageBord.style.border = "none";
} else {
  imageBord.style.border = "2px solid red";
}
}

function stiker() {
  let sticker1Count = parseInt(document.getElementById('sticker1').value);
  let sticker2Count = parseInt(document.getElementById('sticker2').value);
  let sticker3Count = parseInt(document.getElementById('sticker3').value);

  let totalStickers = sticker1Count + sticker2Count + sticker3Count;

  let resultElement = document.getElementById('textresult');

  if (totalStickers <= 10) {
      resultElement.innerHTML = "Llevas " + totalStickers + " stickers";
  } else {
      resultElement.innerHTML = "Llevas demasiados stickers";
  }
}

function checkPassword() {
  let digit1 = document.getElementById('digit1').value;
  let digit2 = document.getElementById('digit2').value;
  let digit3 = document.getElementById('digit3').value;

  let password = digit1 + digit2 + digit3;
  let resultElement = document.getElementById('result');

  if (password === "911") {
      resultElement.innerHTML = "Password 1 correcto";
  } else if (password === "714") {
      resultElement.innerHTML = "Password 2 es correcto";
  } else {
      resultElement.innerHTML = "Password incorrecto";
  }
}

