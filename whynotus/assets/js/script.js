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
      'width' : '130px',
      'position' : 'absolute',
      'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
      'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2)
    });
    $('#diary-wrapper').append(clone);
    //드래그
    $(function(e){
      $(".stickerdraggable").draggable({
        containment: 'parent',
        scroll: false
      });
    });
    $(".stickerdraggable").on('mouseup',function(e){
      $(this).css({
        width: "130px"
      });
    });
    $(".stickerdraggable").on('mousedown',function(){
      $(this).css({
        width: "140px"
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
    //드래그
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
      $(this).css({
        width: "180px"
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
      'width' : '300px',
      'position' : 'absolute',
      'top' : Math.random() * ($('#diary-wrapper').height() - $(this).height() * 1.8),
      'left' : Math.random() * ($('#diary-wrapper').width() - $(this).width() * 2)
    });
    $('#diary-wrapper').append(clone);
    //드래그
    $(function(e){
      $(".wordStickerdraggable").draggable({
        containment: 'parent',
        scroll: false
      });
    });
    $(".wordStickerdraggable").on('mouseup',function(e){
      $(this).css({
        width: "300px"
      });
    });
    $(".wordStickerdraggable").on('mousedown',function(){
      $(this).css({
        width: "310px"
      });
    });
    $('#trash').droppable({
        over: function(event, ui){
            ui.draggable.remove();
        }
    });
  });
});
