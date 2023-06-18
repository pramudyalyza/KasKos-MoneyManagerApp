window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });

$(document).ready(function() {
    $('.subscribe-button').click(function() {
      var email = $('input[type="email"]').val();
      if (email !== '') {
        alert('Subscribe successful! Thank you for subscribing.');
      } else {
        alert('Please enter your email address.');
      }
    });
});
  
$(document).ready(function() {
    $('a[href="#features"]').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('.middlecontainer').offset().top
      }, 100); // Ubah nilai animasi menjadi lebih kecil untuk mempercepat durasi
    });
  
    $('a[href="#contact"]').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('.credit-container').offset().top
      }, 100); // Ubah nilai animasi menjadi lebih kecil untuk mempercepat durasi
    });
  
    $('a[href="#home"]').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('.topcontainer').offset().top
      }, 100); // Ubah nilai animasi menjadi lebih kecil untuk mempercepat durasi
    });
});

$(document).ready(function() {
    $('.button-LM').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('.middlecontainer').offset().top
      }, 100); // Ubah nilai animasi menjadi lebih kecil untuk mempercepat durasi
    });
});
  
$(document).ready(function() {
  $('.create-account').click(function() {
    window.location.href = "registerpage.html";
  });

  $('.button-GKN').click(function() {
    window.location.href = "registerpage.html";
  });

  $('.login').click(function() {
    window.location.href = "loginpage.html";
  });
});
