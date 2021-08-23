/*слайдер в банере*/
$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false,
    });
});
/*слайдер в скилах*/
$(document).ready(function(){
    $('.bxslider_team').bxSlider({
        controls:false,
    });
});
/*флек сдайдер партнеры*/
$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 280,
      itemMargin: 5
    });
  });

  /*вызываем аккордион*/
  $(document).ready(function(){
      $('.accordion').accordion({
            defaultOpen:''
      })
  });

/*mixltUP вызов функцию фильтрации */
$(function(){
    var filterList = {
        init: function(){
            $('.workportfolio').mixitup({/*выбираем поле фильтрации где все будет происходить*/
                /*выборка фильтрации*/
                targetSelector: '.portfolio',/*которые должны фильтроваться - выбрать все элементы которые будут участовать */
                filterSelector:'.filter',/*выбрать элементы к которым будт фильтроваться*/
                effects: ['fade'],/*эффекты */
                easing: 'snap',/*тип перехода*/
                onMixEnd: filterList.hoverEffect()/*вызвать по завершению фильтрации */
            });
        },
        hoverEffect: function(){
        }
    };
    filterList.init();
});


$(document).ready(function(){
    //свертывание шапки
    //высота шапки
    var headerHeight = $(".topheader").height();
    $(window).on('scroll',{ previousTop: 0 },function(){
     /*текущая высота*/ var currentTop = $(window).scrollTop();//контретное значения окна
        //проверка не на каком положении находится пользлватель,а вектор в которую крутит пользователь либо вверх либо вниз
        if(currentTop < this.previousTop){// вверх крутит
            if(currentTop > 0 && $(".topheader").hasClass('is-fixed')){
                
            }else{
                //когда пользователь находится в самом верху
                $(".topheader").removeClass('is-fixed')
            }
        }else{//крутят вниз
            if(currentTop > headerHeight && !$(".topheader").hasClass('is-fixed')){
                $(".topheader").addClass('is-fixed')
            }
        }
        this.previousTop = currentTop;//перезаполнить координату
    });
    
    
    //анимация прокрутки 
    //клик по меню А
    //event -событие
    $(".primary-nav").on("click","a",function(event){
        event.preventDefault()//прерывание события, т.е. отмена перехода по якорю //делается для того чтобы запомнить текущее положение пользователя на сайте(какой именно кусок в поле зрения)
        var id = $(this).attr("href"), //attr получить значение атрибута //получает то на какой якорь надо сослаться
            top = $(id).offset().top; //получаем (offset - получает координату) - эти две строчки получаем координату куда надо отправится 
            // с текущей координаты нам надо спуститься к примеру нв 2-х тыс координату(запоминаем в top  что нам надо на 2-х тыс координату)
         $('body,html').animate({scrollTop: top}, 1000) //анимируем указываем что конкретно мы будем  анимироваться. и говорим как анимируется и с какой скоростью
        });

    /*скрип для меню*/
    $('.primary-nav-trigger').on("click",function()/*обработчик событий*/{
        $(".menu-icon").toggleClass("is-clicked")/*сменить*/

        if($(".primary-nav").hasClass("is-visible")){
            //если у меню есть класс is-visible то его нужно убрать
            $(".primary-nav").removeClass("is-visible");
            //применяется конкретно к тегу body для того чтобы боковая прокрутка пропадала(пропадала высота)
            $("body").removeClass("overflow-hidden");
        }else{
            //если у меню есть класс is-visible то его нужно добавить
            $(".primary-nav").addClass("is-visible");
            $("body").addClass("overflow-hidden");
        }
    });
});

//email
$(document).ready(function(){
    $(".submit").on("click", function(){
        if($("#name").val() != '' && $("#email").val() != '' ){
            fetch('send.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-from-urlencoded'
                },
                body: $("#send_form").serialize(),//serialize() очищает все лишнее кроме инпуты с неймами - отправка 
            }).then((response) => response.json())
            .then((data) => {
                if(data.status === 'ok'){
                    $("#send_form").addClass("send_success");
/*угасание после отправления */setTimeout(() => $("#send_form").removeClass("send_success"), 4000);
                }
                if(data.status === 'error'){
                    $("#send_form").addClass("send_fail");
                    setTimeout(() => $("#send_form").removeClass("send_fail"), 4000);
                }
            });
        }else{
/*предупреждаем что данные поля не заполнены*/alert("Поля не заполнены!");
        }
    });
});

//убрать анимацию ожидания
$(window).load(function(){
    $(".preload").fadeOut("slow");
});