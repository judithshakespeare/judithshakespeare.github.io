$(document).ready(function() {

  var len = $('.bookshelf > li').length;

  $('.bookshelf').each(function() {
    var ul = $('.bookshelf');

    var liArr = ul.children('li');

    liArr.sort(function(){
      var temp = parseInt(Math.random()*len);
      var temp1 = parseInt(Math.random()*len);
      return temp1-temp;
    }).appendTo(ul);
  });

  $('.book-title').click(function(){
    var show = $(this).closest('li').find('.book-description-wrapper');
    show.show();
    $('.book-description-wrapper').not(show).hide();
    var width = $(window).width();
    var height = $('main').height();
    var listlength = $('.bookshelf > li:visible').length;
    if(width < 500){
      if(listlength >= 21){
        $('body').css('height', height + 300);
      }else{
        $('body').css('height', '100%');
      }
    } else{
      if(listlength >= 21){
        $('body').css('height', 'calc(100% + 440px)');
      }else{
        $('body').css('height', '100%');
      }
    }

  })

  $('.x').click(function(){
    $('.book-description-wrapper').hide();
    $('body').css('height', '100%');
  });

  /**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  var colors = ['LightSalmon', 'Thistle', 'LightBlue', 'PaleGreen', 'LightPink', 'Yellow', 'Violet', 'BlanchedAlmond', 'LightGray'];
  shuffle(colors);
  var findlist1 = '> .recommend span';
  var findlist2 = '> .book-description-wrapper > .container > .book-description-text > .recommend-reoson';

  $('.mh' + findlist1).css('background-color', colors[0]);
  $('.mh' + findlist2).css('background-color', colors[0]);
  $('.bg' + findlist1).css('background-color', colors[1]);
  $('.bg' + findlist2).css('background-color', colors[1]);
  $('.ss' + findlist1).css('background-color', colors[2]);
  $('.ss' + findlist2).css('background-color', colors[2]);
  $('.hy' + findlist1).css('background-color', colors[3]);
  $('.hy' + findlist2).css('background-color', colors[3]);
  $('.hg' + findlist1).css('background-color', colors[4]);
  $('.hg' + findlist2).css('background-color', colors[4]);
  $('.gr' + findlist1).css('background-color', colors[5]);
  $('.gr' + findlist2).css('background-color', colors[5]);
  $('.kl' + findlist1).css('background-color', colors[6]);
  $('.kl' + findlist2).css('background-color', colors[6]);
  $('.nr' + findlist1).css('background-color', colors[7]);
  $('.nr' + findlist2).css('background-color', colors[7]);
  $('.jo' + findlist1).css('background-color', colors[8]);
  $('.jo' + findlist2).css('background-color', colors[8]);


  $('.art.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field art"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.economy.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field economy"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.westernhistory.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field westernhistory"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.history.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field history"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.humanities.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field humanities"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.science.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field science"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.essay.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field essay"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.comics.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field comics"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.literature.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field literature"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.ko-literature.field').click(function(){
    $('span[class*="field"]').parent('li').not($('span[class*="field ko-literature"]').parent('li')).hide();
    $('#show-all').show();
  });

  $('.field').click(function(){
    $('body').css('height', '100%');
  });

  $('.jo > .recommend').click(function(){
    $('.bookshelf > li').not($('.jo')).hide();
    $('#show-all').show();
  });

  $('.nr > .recommend').click(function(){
    $('.bookshelf > li').not($('.nr')).hide();
    $('#show-all').show();
  });

  $('.kl > .recommend').click(function(){
    $('.bookshelf > li').not($('.kl')).hide();
    $('#show-all').show();
  });

  $('.hg > .recommend').click(function(){
    $('.bookshelf > li').not($('.hg')).hide();
    $('#show-all').show();
  });

  $('.gr > .recommend').click(function(){
    $('.bookshelf > li').not($('.gr')).hide();
    $('#show-all').show();
  });

  $('.mh > .recommend').click(function(){
    $('.bookshelf > li').not($('.mh')).hide();
    $('#show-all').show();
  });

  $('.hy > .recommend').click(function(){
    $('.bookshelf > li').not($('.hy')).hide();
    $('#show-all').show();
  });

  $('.bg > .recommend').click(function(){
    $('.bookshelf > li').not($('.bg')).hide();
    $('#show-all').show();
  });

  $('.ss > .recommend').click(function(){
    $('.bookshelf > li').not($('.ss')).hide();
    $('#show-all').show();
  });

  $('.recommend').click(function(){
    $('.book-description-wrapper').hide();
    $('body').css('height', '100%');
  });

  $('#show-all').click(function(){
    $('.bookshelf li').show();
    $(this).hide();
    $('.book-description-wrapper').hide();
  });
});