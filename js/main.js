/*=================================================
  文字のアニメーション < mainvisual slogan >
  ===================================================*/
$(function () {
  // glowAnimeにglowというクラス名を付ける定義
  function GlowAnimeControl() {
    $(".glowAnime").each(function () {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= target - windowHeight) {
        $(this).addClass("glow");
      } else {
        $(this).removeClass("glow");
      }
    });
  }

  $(window).on("load", function () {
    //spanタグを追加する
    var element = $(".glowAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split("").forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox +=
              '<span style="animation-delay: .' + i + 's;">' + t + "</span>";
          } else {
            var n = i / 10;
            textbox +=
              '<span style="animation-delay: ' + n + 's;">' + t + "</span>";
          }
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });

    $(window).resize(function () {
      GlowAnimeControl();
    });

    GlowAnimeControl();
  });

  // slogan<h2> 2行目のアニメーション
  function GlowAnimeDelayControl() {
    $(".glowAnimeDelay").each(function () {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= target - windowHeight) {
        $(this).addClass("glow");
      } else {
        $(this).removeClass("glow");
      }
    });
  }

  $(window).on("load", function () {
    var element = $(".glowAnimeDelay");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split("").forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            e = i / 10 + 1;
            textbox +=
              '<span style="animation-delay: ' + e + 's;">' + t + "</span>";
          } else {
            var n = i / 10 + 1;
            textbox +=
              '<span style="animation-delay: ' + n + 's;">' + t + "</span>";
          }
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });

    $(window).resize(function () {
      GlowAnimeDelayControl();
    });

    GlowAnimeDelayControl();
  });

  /*=================================================
   文字のアニメーション < access message >
  ===================================================*/

  function TextAnimeControl() {
    $(".text-anime").each(function () {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= target - windowHeight) {
        $(this).addClass("appeartext");
      } else {
        $(this).removeClass("appeartext");
      }
    });
  }

  $(window).scroll(function () {
    $(".text-anime").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        var element = $(".text-anime");
        element.each(function () {
          var text = $(this).text();
          var textbox = "";
          text.split("").forEach(function (t, i) {
            if (t !== " ") {
              if (i < 10) {
                e = i / 10 ;
                textbox +=
                  '<span style="animation-delay: ' + e + 's;">' + t + "</span>";
              } else {
                var n = i / 10;
                textbox +=
                  '<span style="animation-delay: ' + n + 's;">' + t + "</span>";
              }
            } else {
              textbox += t;
            }
          });
          $(this).html(textbox);
        });

        $(window).resize(function () {
          TextAnimeControl();
        });
        TextAnimeControl();
      }
    });
  });

  // message 2行目のアニメーション
  function TextAnimeDelayControl() {
    $(".text-animeDelay").each(function () {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= target - windowHeight) {
        $(this).addClass("appeartext");
      } else {
        $(this).removeClass("appeartext");
      }
    });
  }
  $(window).scroll(function () {
    $(".text-animeDelay").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        var element = $(".text-animeDelay");
        element.each(function () {
          var text = $(this).text();
          var textbox = "";
          text.split("").forEach(function (t, i) {
            if (t !== " ") {
              if (i < 10) {
                e = i / 10 + 1;
                textbox +=
                  '<span style="animation-delay: ' + e + 's;">' + t + "</span>";
              } else {
                var n = i / 10 + 1;
                textbox +=
                  '<span style="animation-delay: ' + n + 's;">' + t + "</span>";
              }
            } else {
              textbox += t;
            }
          });
          $(this).html(textbox);
        });

        $(window).resize(function () {
          TextAnimeDelayControl();
        });
        TextAnimeDelayControl();
      }
    });
  });

  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  /*ハンバーガーメニューをクリックした時*/
  $(".toggle-btn").on("click", function () {
    $("header").toggleClass("open");
    //丸背景にcircleactiveクラスを付与
    $(".circle-bg").toggleClass("circleactive");
  });
  /*menuリンクをクリックした時*/
  $(".nav-menu a").on("click", function () {
    $("header").toggleClass("open");
    //丸背景のcircleactiveクラスを除去
    $(".circle-bg").removeClass("circleactive");
  });

  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  /*standard menuのフェードインアニメーション*/
  $(window).scroll(function () {
    $(".fadein-item-upper").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top - 150;
      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadeup");
      }
    });
  });

  $(window).scroll(function () {
    $(".fadein-item-lower").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top - 100;
      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadeup");
      }
    });
  });

  /*season menu のスライドアニメーション*/
  $(window).scroll(function () {
    $(".slide-left").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top ;
      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("move-left");
      }
    });
  });

  $(window).scroll(function () {
    $(".slide-right").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top ;
      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("move-right");
      }
    });
  });

  /*=================================================
   topへ戻るボタン
  ===================================================*/

  let pagetop = $(".top-btn");
  pagetop.hide();
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定

  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if($(this).scrollTop() >700 ) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    } // スクロール位置が700px未満の場合は非表示になる
  });

  /*=================================================
  standard menu レスポンシブ時のスライド
  ===================================================*/

  function sliderSetting() {
    var width = $(window).width();
    if (width <= 900) {
      // ウィンドウサイズが900px以下のとき
      $(".slider").slick({
        autoplay: false,
        centerMode: true,
        arrows: false,
        dots: true,
        speed: 500, //スライドのスピード。初期値は300。
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
      });
    } else {
      $(".slider").slick("unslick");
    }
  }

  $(window).resize(function(){
    sliderSetting();
  });

  sliderSetting();
});
