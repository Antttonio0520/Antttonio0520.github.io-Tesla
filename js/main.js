$(function () {
   $('.slider').slick({
      arrows: false, //убираем кнопки
      fade: true, //плавный переход
      autoplay: 3000,
      dots: true
   });


   $('.header-btn-menu').on('click', function () {
      $('.menu').addClass('active');
   });

   $('.close-btn').on('click', function () {
      $('.menu').removeClass('active');
   });

   $('.header-btn-menu').on('click', function () {
      $('.header-btn-menu').hide();
   });

   $('.close-btn').on('click', function () {
      $('.header-btn-menu').show();
   });



   $('.drive-content__btn').on('click', function () {
      $('.testdrive').addClass('active');
   });

   $('.close-btn-test').on('click', function () {
      $('.testdrive').removeClass('active');
   });

   $('.drive-content__btn').on('click', function () {
      $('.drive-content__btn').hide();
   });

   $('.close-btn-test').on('click', function () {
      $('.drive-content__btn').show();
   });



   $('.menu-testdrive').on('click', function () {
      $('.testdrive').addClass('active');
   });

   $('.close-btn-test').on('click', function () {
      $('.testdrive').removeClass('active');
   });


   /*$('.menu-testdrive').on('click', function () {
      $('.menu').hide();
   });

   $('.close-btn-test').on('click', function () {
      $('.header-btn-menu').show();
   });*/




   $('.menu-contacts').on('click', function () {
      $('.contacts').addClass('active');
   });

   $('.close-btn-contacts').on('click', function () {
      $('.contacts').removeClass('active');
   });



   $('.testdrive').on('input', 'input[type="number"][maxlength]', function () {
      if (this.value.length > this.maxLength) {
         this.value = this.value.slice(0, this.maxLength);
      }
   });

   $('.testdrive-btn__clear').find('form')[0].reset();





});
$(document).ready(function () {

   $('.element-card').on('click', function () {

      if ($(this).hasClass('open')) {
         $(this).removeClass('open');
      } else {
         $('.element-card').removeClass('open');
         $(this).addClass('open');
      }
   });

   $('.card-attention').on('click', function () {

      if ($(this).hasClass('open')) {
         $(this).removeClass('open');
      } else {
         $('.card-attention').removeClass('open');
         $(this).addClass('open');
      }
   });

});
