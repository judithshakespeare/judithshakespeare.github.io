$(document).ready(function(){
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
        'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2),
        'z-index' : '6'
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
        $(this).css({
          'width' : "120px",
          'z-index' : '6'
        });
        $('#diary-wrapper').children('img').not(this).css('z-index','5');
      });
      $('#trash').droppable({
        over: function(event, ui) {
          ui.draggable.remove();
        }
      });
    });
    $('.gemSticker').click(function(e){
      var clone = $(this).clone().attr('class','gemStickerdraggable').css({
        'width' : '100px',
        'position' : 'absolute',
        'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
        'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2)
      });
      $('#diary-wrapper').append(clone);
      $(function(e){
        $(".gemStickerdraggable").draggable({
          containment: 'parent',
          scroll: false
        });
      });
      $(".gemStickerdraggable").on('mouseup',function(e){
        $(this).css({
          width: "100px"
        });
      });
      $(".gemStickerdraggable").on('mousedown',function(){
        $(this).css({
          'width' : "110px",
          'z-index' : '6'
        });
        $('#diary-wrapper').children('img').not(this).css('z-index','5');
      });
      $('#trash').droppable({
        over: function(event, ui){
          ui.draggable.remove();
        }
      });
    });
    $('.imgSticker').click(function(e){
      var clone = $(this).clone().attr('class','imgStickerdraggable').css({
        'width' : '25%',
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
          width: "25%"
        });
      });
      $(".imgStickerdraggable").on('mousedown',function(){
        $(this).css({
          'width' : "27%",
          'z-index' : '6'
        });
        $('#diary-wrapper').children('img').not(this).css('z-index','5');
      });
      $('#trash').droppable({
        over: function(event, ui){
          ui.draggable.remove();
        }
      });
    });
    $('.wordSticker').click(function(e){
      var clone = $(this).clone().attr('class','wordStickerdraggable').css({
        'width' : 'auto',
        'height' : '23%',
        'position' : 'absolute',
        'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
        'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2),
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
        'width' : 'auto',
        'height' : '23%',
        });
      });
      $(".wordStickerdraggable").on('mousedown',function(){
        $(this).css({
        'width' : 'auto',
        'height' : '24%',
          'z-index' : '6'
        });
        $('#diary-wrapper').children('img').not(this).css('z-index','5');
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
        $(this).css({
          'width' : "2.1em",
          'z-index' : '6'
        });
        $('#diary-wrapper').children('img').not(this).css('z-index','5');
      });
      $('#trash').droppable({
        over: function(event, ui){
          ui.draggable.remove();
        }
      });
    });
});
