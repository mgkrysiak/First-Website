document.addEventListener('DOMContentLoaded', function(e) {

  var li = document.querySelectorAll('.menu li')

  for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseenter', function(e) {

      if (this.firstElementChild) {
        this.firstElementChild.style.display = 'block'
      }



    })
    li[i].addEventListener('mouseleave', function(e) {

      if (this.firstElementChild) {
        this.firstElementChild.style.display = 'none'
      }

    })
  }

  var image = document.querySelectorAll('.photos .photo')

  for (var i = 0; i < image.length; i++) {
    image[i].addEventListener('mouseenter', function(e) {

      this.firstElementChild.style.display = 'none'
    })

    image[i].addEventListener('mouseleave', function(e) {
      this.firstElementChild.style.display = 'block'
    })
  }
  var nextPicture = document.querySelector('.right');
  var prevPicture = document.querySelector('.left')

  var currentImage = 0;

  var slides = document.querySelectorAll('.box .slider li');

  slides[currentImage].classList.add('visible');

  nextPicture.addEventListener('click', function(e) {
    slides[currentImage].classList.remove('visible');
    currentImage++;
    if (currentImage >= slides.length) {
      currentImage = 0
    }
    //currentImage = currentImage >= slides.length ? 0 : currentImage
    slides[currentImage].classList.add('visible')
  })

  prevPicture.addEventListener('click', function(e) {
    slides[currentImage].classList.remove('visible');
    currentImage--;
    if (currentImage < 0) {
      currentImage = slides.length - 1;
    }
    slides[currentImage].classList.add('visible');

  })

  var inside = document.querySelectorAll('.designList li')

  for (var i = 0; i < inside.length; i++) {
    inside[i].addEventListener('click', function(e) {

      if (this.firstElementChild) {
        this.firstElementChild.style.display = 'block'
      }



    })
    inside[i].addEventListener('mouseleave', function(e) {

      if (this.firstElementChild) {
        this.firstElementChild.style.display = 'none'
      }

    })
  }

  var choice = document.querySelectorAll('.designList .insideList li')
  var sum = 0;

  for (var i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", function() {

      if (this.parentElement.className == "insideList") {

        document.querySelector('.list2').appendChild(this);

        var price = document.createElement('li');
        price.innerHTML = '<li>100</li>';

        document.querySelector('.prices').appendChild(price);

        var sumElement = document.querySelector('.sum')

        sum+= 100;
        sumElement.innerHTML = sum;

      }
    })


}

if (document.querySelector('.checkbox').checked === true) {

var price = document.createElement('li');
price.innerHTML = '<li>100</li>';

document.querySelector('.prices').appendChild(price);

var sumElement = document.querySelector('.sum')

sum+= 100;
sumElement.innerHTML = sum;
}

})
