$(document).ready(function(){


 /* $(".submenu > a").click(function(e) {
    e.preventDefault();
    var $li = $(this).parent("li");
    var $ul = $(this).next("ul");

    if($li.hasClass("open")) {
      $ul.slideUp(350);
      $li.removeClass("open");
    } else {
      $(".nav > li > ul").slideUp(350);
      $(".nav > li").removeClass("open");
      $ul.slideDown(350);
      $li.addClass("open");
    }
  });
*/
    $('#confirm_password').on('keyup', function () {
        if ($('#password').val() == $('#confirm_password').val()) {

            $('#message').css("display","none");

            $('#submit').removeAttr('disabled');
        } else {
            $('#message').html('Not Matching').css({'color': 'red', 'display': 'block'});
            $('#submit').attr('disabled', 'disabled');
        }
    });
    $('#add-student').click(()=>{
       $('#myForm').submit();
    });




});