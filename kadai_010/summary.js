$(function () {
  // 1. 文字色変化
  $('#change-color').on('click', function () {
    $('#target').css('color', 'blue'); // 任意の色（ここでは青）
  });

  // 2. 文字内容変化
  $('#change-text').on('click', function () {
    $('#target').text('こんばんは！'); // 任意の文字
  });

  // 3. フェードアウト
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });

  // 4. フェードイン
  $('#fade-in').on('click', function () {
    $('#target').fadeIn();
  });
});
