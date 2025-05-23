// 1. loadイベント（HTML読み込み完了）
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

// 2. scrollイベント（スクロールしたとき）
$(window).on('scroll', function() {
  console.log('scrollイベントが発生しました');
});
