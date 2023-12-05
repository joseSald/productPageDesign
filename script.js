let productImg = document.getElementById('product-img');
let imgBtn = document.getElementsByClassName('btn');

imgBtn[0].onclick = function () {
  productImg.src = '/img/image1.png';
  for (imgBt of imgBtn) {
    imgBt.classList.remove('active');
  }
  this.classList.add('active');
};
imgBtn[1].onclick = function () {
  productImg.src = '/img/image2.png';
  for (imgBt of imgBtn) {
    imgBt.classList.remove('active');
  }
  this.classList.add('active');
};
imgBtn[2].onclick = function () {
  productImg.src = '/img/image3.png';
  for (imgBt of imgBtn) {
    imgBt.classList.remove('active');
  }
  this.classList.add('active');
};
