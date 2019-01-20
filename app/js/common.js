$(function() {
    
    // jquery.maskedinput
    $("#phone").mask("+7 (999) 999 - 99 - 99",{autoclear: false});
    $("#passport").mask("9999 999999",{autoclear: false});
    
    // jquery UI
    $('#datebirth').datepicker({
      changeMonth: true,
      changeYear: true,
      monthNamesShort: ["Янв", "Фев", "Мaр", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      firstDay: '1',
      yearRange: '-100:-0',
      maxDate: 0,
      dateFormat: 'dd-mm-yy'
    });
  
    $('#dod').datepicker({
      changeMonth: true,
      changeYear: true,
      monthNamesShort: ["Янв", "Фев", "Мaр", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      firstDay: '1',
      maxDate: '+6m',
      minDate: '0',
      dateFormat: 'dd-mm-yy'
    });
  
    $('#destination').selectmenu({
      width: '100%',
      icons: {
        button: "ui-icon-caret-1-s"
      }
    });
    
    $('.reset, .submit').button();
  
    $('.field-block--radio, .field-block--checkbox').buttonset();
  
    //E-mail Ajax Send and Validate for №1 и 2
    $("form.callback").each(function(){
      $(this).validate({
          
          rules: {
            phone: {
              required: true,
              digits: true,
              rangelength: [10,10]
            },
            email: {
              required: true,
              email: true
            },
            name: {
              required: true,
              minlength: 2
            }
          },
          messages: {
            phone: {
              required: "Введите номер телефона",
              digits: "Введите номер телефона",
              rangelength: "Введите 10-значный номер"
            },
            email: {
              required: "Введите адрес электронной почты",
              email: "Введите корректный email"
            },
            name: {
              required: "Введите ваше имя",
              minlength: "Введите ваше имя"
            }
          }, // end validate
        
          // Ajax Send
          submitHandler: function() {
            var th = $(this);
            $.ajax({
              type: "POST",
              url: "/mail.php", //Change
              data: th.serialize()
            }).done(function() {
              
              $('body').find('.overlay, .modal-send').addClass('show');
              $('.modal__close, .overlay').click(function(){
                $('body').find('.overlay, .modal-send').removeClass('show');
                $('form').trigger("reset");
              });
              
            });
            return false
          }
          // end Ajax Send
        });
      }); // end E-mail Ajax Send
  
  
  
    //E-mail Ajax Send and Validate for №3
    $("form.callback-modal").each(function(){
      $(this).validate({
          
          rules: {
            phone: {
              required: true,
              digits: true,
              rangelength: [10,10]
            },
            email: {
              required: true,
              email: true
            },
            name: {
              required: true,
              minlength: 2
            }
          },
          messages: {
            phone: {
              required: "Введите номер телефона",
              digits: "Введите номер телефона",
              rangelength: "Введите 10-значный номер"
            },
            email: {
              required: "Введите адрес электронной почты",
              email: "Введите корректный email"
            },
            name: {
              required: "Введите ваше имя",
              minlength: "Введите ваше имя"
            }
          }, // end validate
        
          // Ajax Send
          submitHandler: function() {
            var th = $(this);
            $.ajax({
              type: "POST",
              url: "/mail.php", //Change
              data: th.serialize()
            }).done(function() {
              
              $(th).find('.success').addClass('active').hide().fadeIn();
              setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
              }, 3000);
              
            });
            return false
          }
          // end Ajax Send
        });
      }); // end E-mail Ajax Send  
  
    // button-modal
    $(".button-modal").click(function(btn) {
      btn.preventDefault();
      $(".overlay").addClass("overlay-show");
      $(".modal").addClass("modal-show");
    });
  
    $(".modal__close, .overlay").click(function(cls){
      cls.preventDefault();
      $("body").find(".overlay").removeClass("overlay-show");
      $("body").find(".modal").removeClass("modal-show");
    });
    
});
