$(document).ready(function(){
  // var mql = window.matchMedia("screen and (max-width: 768px)");
  // if (mql.matches) {
    $('.backgrounds').first().addClass('active');
    $('.backgrounds').hide();    
    $('.active').show();
    $('#nextBtn').click(function(){
      $('.active').removeClass('active').addClass('oldActive');    
      if ( $('.oldActive').is(':last-child')) {
        $('.backgrounds').first().addClass('active');
      }
      else{
        $('.oldActive').next().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.backgrounds').fadeOut();
      $('.active').fadeIn();
    });
    $('#backBtn').click(function(){
      $('.active').removeClass('active').addClass('oldActive');    
      if ( $('.oldActive').is(':first-child')) {
        $('.backgrounds').last().addClass('active');
      }
      else{
        $('.oldActive').prev().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.backgrounds').fadeOut();
      $('.active').fadeIn();
    });
    $('.sticker').click(function(e){
      var clone = $(this).clone().attr('class','stickerdraggable').css({
        'width' : '110px',
        'position' : 'absolute',
        'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
        'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2)
      });
      $('#diary-wrapper').append(clone);
      $(function(e){
        $(".stickerdraggable").draggable({
          containment: 'parent',
          scroll: false
        });
      });
      $(".stickerdraggable").on('mouseup',function(e){
        $(this).css({
          width: "110px"
        });
      });
      $(".stickerdraggable").on('mousedown',function(){
        $('#diary-wrapper').children('img').not(this).css('z-index','5');
        $(this).css({
          'width' : "120px",
          'z-index' : '6'
        });
      });
      $('#trash').droppable({
        over: function(event, ui) {
          ui.draggable.remove();
        }
      });
    });
    $('.imgSticker').click(function(e){
      var clone = $(this).clone().attr('class','imgStickerdraggable').css({
        'width' : '170px',
        'position' : 'absolute',
        'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
        'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2)
      });
      $('#diary-wrapper').append(clone);
      $(function(e){
        $(".imgStickerdraggable").draggable({
          containment: 'parent',
          scroll: false
        });
      });
      $(".imgStickerdraggable").on('mouseup',function(e){
        $(this).css({
          width: "170px"
        });
      });
      $(".imgStickerdraggable").on('mousedown',function(){
        $(this).css('z-index','6');
        $('#diary-wrapper').children('img').not(this).css('z-index','5');
        $(this).css({
          'width' : "180px",
          'z-index' : '6'
        });
      });
      $('#trash').droppable({
        over: function(event, ui){
          ui.draggable.remove();
        }
      });
    });
    $('.wordSticker').click(function(e){
      var clone = $(this).clone().attr('class','wordStickerdraggable').css({
        'width' : '200px',
        'position' : 'absolute',
        'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
        'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2),
        'z-index' : '6'
      });
      $('#diary-wrapper').append(clone);
      $(function(e){
        $(".wordStickerdraggable").draggable({
          containment: 'parent',
          scroll: false
        });
      });
      $(".wordStickerdraggable").on('mouseup',function(e){
        $(this).css({
          width: "200px"
        });
      });
      $(".wordStickerdraggable").on('mousedown',function(){
        $(this).css('z-index','6');
        $('#diary-wrapper').children('img').not(this).css('z-index','5');
        $(this).css({
          'width' : "210px",
          'z-index' : '6'
        });
      });
      $('#trash').droppable({
        over: function(event, ui){
          ui.draggable.remove();
        }
      });
    });
    $('.miniSticker').click(function(e){
      var clone = $(this).clone().attr('class','miniStickerdraggable').css({
        'width' : '2em',
        'position' : 'absolute',
        'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
        'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2)
      });
      $('#diary-wrapper').append(clone);
      $(function(e){
        $(".miniStickerdraggable").draggable({
          containment: 'parent',
          scroll: false
        });
      });
      $(".miniStickerdraggable").on('mouseup',function(e){
        $(this).css({
          width: "2em"
        });
      });
      $(".miniStickerdraggable").on('mousedown',function(){
        $(this).css('z-index','6');
        $('#diary-wrapper').children('img').not(this).css('z-index','5');
        $(this).css({
          'width' : "2.1em",
          'z-index' : '6'
        });
      });
      $('#trash').droppable({
        over: function(event, ui){
          ui.draggable.remove();
        }
      });
    });
////////////////////
  // } else {
  //   $('.backgrounds').first().addClass('active');
  //   $('.backgrounds').hide();    
  //   $('.active').show();
  //   $('#nextBtn').click(function(){
  //     $('.active').removeClass('active').addClass('oldActive');    
  //     if ( $('.oldActive').is(':last-child')) {
  //       $('.backgrounds').first().addClass('active');
  //     }
  //     else{
  //       $('.oldActive').next().addClass('active');
  //     }
  //     $('.oldActive').removeClass('oldActive');
  //     $('.backgrounds').fadeOut();
  //     $('.active').fadeIn();
  //   });
  //   $('#backBtn').click(function(){
  //     $('.active').removeClass('active').addClass('oldActive');    
  //     if ( $('.oldActive').is(':first-child')) {
  //       $('.backgrounds').last().addClass('active');
  //     }
  //     else{
  //       $('.oldActive').prev().addClass('active');
  //     }
  //     $('.oldActive').removeClass('oldActive');
  //     $('.backgrounds').fadeOut();
  //     $('.active').fadeIn();
  //   });
  //   $('.sticker').click(function(e){
  //     var clone = $(this).clone().attr('class','stickerdraggable').css({
  //       'width' : '15%',
  //       'position' : 'absolute',
  //       'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
  //       'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2)
  //     });
  //     $('#diary-wrapper').append(clone);
  //     $(function(e){
  //       $(".stickerdraggable").draggable({
  //         containment: 'parent',
  //         scroll: false
  //       });
  //     });
  //     $(".stickerdraggable").on('mouseup',function(e){
  //       $(this).css({
  //         width: "15%"
  //       });
  //     });
  //     $(".stickerdraggable").on('mousedown',function(){
  //       $(this).css('z-index','6');
  //       $('#diary-wrapper').children('img').not(this).css('z-index','5');
  //       $(this).css({
  //         'width' : "16%",
  //         'z-index' : '6'
  //       });
  //     });
  //     $('#trash').droppable({
  //       over: function(event, ui) {
  //         ui.draggable.remove();
  //       }
  //     });
  //     $(".stickerdraggable").on("click",function(){

  //     });
  //   });
  //   $('.imgSticker').click(function(e){
  //     var clone = $(this).clone().attr('class','imgStickerdraggable').css({
  //       'width' : '170px',
  //       'position' : 'absolute',
  //       'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
  //       'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2)
  //     });
  //     $('#diary-wrapper').append(clone);
  //     $(function(e){
  //       $(".imgStickerdraggable").draggable({
  //         containment: 'parent',
  //         scroll: false
  //       });
  //     });
  //     $(".imgStickerdraggable").on('mouseup',function(e){
  //       $(this).css({
  //         width: "170px"
  //       });
  //     });
  //     $(".imgStickerdraggable").on('mousedown',function(){
  //       $(this).css('z-index','6');
  //       $('#diary-wrapper').children('img').not(this).css('z-index','5');
  //       $(this).css({
  //         'width' : "180px",
  //         'z-index' : '6'
  //       });
  //     });
  //     $('#trash').droppable({
  //       over: function(event, ui){
  //         ui.draggable.remove();
  //       }
  //     });
  //   });
  //   $('.wordSticker').click(function(e){
  //     var clone = $(this).clone().attr('class','wordStickerdraggable').css({
  //       'width' : '300px',
  //       'position' : 'absolute',
  //       'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
  //       'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2),
  //       'z-index' : '6'
  //     });
  //     $('#diary-wrapper').append(clone);
  //     $(function(e){
  //       $(".wordStickerdraggable").draggable({
  //         containment: 'parent',
  //         scroll: false
  //       });
  //     });
  //     $(".wordStickerdraggable").on('mouseup',function(e){
  //       $(this).css({
  //         width: "300px"
  //       });
  //     });
  //     $(".wordStickerdraggable").on('mousedown',function(){
  //       $(this).css('z-index','6');
  //       $('#diary-wrapper').children('img').not(this).css('z-index','5');
  //       $(this).css({
  //         'width' : "310px",
  //         'z-index' : '6'
  //       });
  //     });
  //     $('#trash').droppable({
  //       over: function(event, ui){
  //         ui.draggable.remove();
  //       }
  //     });
  //   });
  //   $('.miniSticker').click(function(e){
  //     var clone = $(this).clone().attr('class','miniStickerdraggable').css({
  //       'width' : '40px',
  //       'position' : 'absolute',
  //       'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
  //       'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2)
  //     });
  //     $('#diary-wrapper').append(clone);
  //     $(function(e){
  //       $(".miniStickerdraggable").draggable({
  //         containment: 'parent',
  //         scroll: false
  //       });
  //     });
  //     $(".miniStickerdraggable").on('mouseup',function(e){
  //       $(this).css({
  //         width: "40px"
  //       });
  //     });
  //     $(".miniStickerdraggable").on('mousedown',function(){
  //       $(this).css('z-index','6');
  //       $('#diary-wrapper').children('img').not(this).css('z-index','5');
  //       $(this).css({
  //         'width' : "45px",
  //         'z-index' : '6'
  //       });
  //     });
  //     $('#trash').droppable({
  //       over: function(event, ui){
  //         ui.draggable.remove();
  //       }
  //     });
  //   });
  // }
});
