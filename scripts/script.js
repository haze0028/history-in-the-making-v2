(function () {
   console.log("Page loaded");

   $('nav li').hover(function(){
      $(this).find('ul').slideToggle('fast');
   })
   
   
})();
