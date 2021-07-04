function header() {
  $.ajax({
    url: "header.html", // includeしたいファイルのパスを指定
    dataType: "html", // htmlのまま
    // 読み込み成功時の処理
    success: function (data) {
      $("body").prepend(data);
    },
    // 読み込み失敗時の処理
    error: function () {
      alert("header error!");
    },
  });
}

function footer() {
  $.ajax({
    url: "footer.html", // includeしたいファイルのパスを指定
    dataType: "html", // htmlのまま
    // 読み込み成功時の処理
    success: function (data) {
      $("body").append(data);
    },
    // 読み込み失敗時の処理
    error: function () {
      alert("footer error!");
    },
  });
}