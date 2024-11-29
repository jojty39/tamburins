
// header 스크롤 감지에 따른 헤더 표시/숨김과 슬라이더 구현 
$(document).ready(function () {
    let prevScroll = window.scrollY; // 이전 스크롤 위치 저장
  
    $(window).on("scroll", function () {
      let currentScroll = window.scrollY;
  
      if (currentScroll > prevScroll) {
        // 스크롤을 내릴 때 (헤더 숨김)
        $("#header").css("transform", "translateY(-100%)");
      } else {
        // 스크롤을 올릴 때 (헤더 표시)
        $("#header").css("transform", "translateY(0)");
      }
  
      prevScroll = currentScroll; // 현재 스크롤 위치를 이전 값으로 갱신
    });
  });
  



// new item 슬라이더 Slides per view 사용!




// .main-popup 
   
    // jQ로  main-popup 모바일 버전 (버튼 클릭시 아이템 변경)
    $(document).ready(function() {
        $('.main-popup-slider-item').each(function() {
            const $item = $(this);
            const $openBtn = $item.find('.open-btn');
            const $closeBtn = $item.find('.close-btn');
            const $firstPopup = $item.find('.main-popup_first');
            const $lastPopup = $item.find('.main-popup-last');

            $openBtn.on('click', function(e) {
                e.preventDefault(); // 기본 동작 방지
                $firstPopup.hide(); // 첫 번째 팝업 숨기기
                $lastPopup.show();  // 두 번째 팝업 표시
            });

            $closeBtn.on('click', function(e) {
                e.preventDefault(); // 기본 동작 방지
                $lastPopup.hide();  // 두 번째 팝업 숨기기
                $firstPopup.show(); // 첫 번째 팝업 표시
            });
        });
    });


    //main-popup PC 버전 (마우스 이벤트로 아이템 변경)  
    // jQuery를 활용하여 각 .item*-1 항목에 마우스를 올렸을 때 해당 항목의 부모 슬라이더(.main-popup-slider-item)만 보이고 나머지는 숨겨지도록 구현
    $(document).ready(function () {
        const $sliderItems = $('.main-popup-slider-item'); // 슬라이더 항목들
        const $defaultSlider = $('.main-popup-slider-item.item1'); // 기본 활성 슬라이더

        // 초기화: 첫 번째 슬라이더 활성화
        $sliderItems.removeClass('active');
        $defaultSlider.addClass('active');

        // 각 li 요소에 마우스 올렸을 때 동작
        $('.main-popup-slider-index-first li').on('mouseenter', function () {
            const index = $(this).attr('class').match(/item\d/)[0]; // li의 클래스에서 'itemX' 추출
            const $targetSlider = $('.main-popup-slider-item.' + index); // 해당 index의 슬라이더 선택

            $sliderItems.removeClass('active'); // 모든 슬라이더 비활성화
            $targetSlider.addClass('active'); // 대상 슬라이더 활성화
        });

        // 마우스가 .main-popup 영역을 완전히 벗어났을 때 기본 상태 복귀
        $('.main-popup').on('mouseleave', function () {
            $sliderItems.removeClass('active'); // 모든 슬라이더 비활성화
            $defaultSlider.addClass('active'); // 기본 슬라이더 활성화
        });
    });






    //스토어 초기화
    document.addEventListener("DOMContentLoaded", () => {
        const swiper = new Swiper('.main-store-swiper', {
            loop: true, // 무한 반복
            slidesPerView: 1, // 한 번에 보이는 슬라이드 개수
            spaceBetween: 0, // 슬라이드 간 간격
    
            // 내비게이션
            navigation: {
                nextEl: '.main-store-button-next',
                prevEl: '.main-store-button-prev',
            },
    
            // 페이지네이션
            pagination: {
                el: '.main-store-pagination',
                clickable: true,
            },
    
            // 자동 재생
            autoplay: {
                delay: 3000, // 슬라이드 전환 시간 (밀리초)
                disableOnInteraction: false, // 사용자가 조작한 후에도 재생
            },
    
            // 반응형 설정
            breakpoints: {
                768: {
                    slidesPerView: 2, // 태블릿: 두 개의 슬라이드 표시
                    spaceBetween: 20, // 태블릿 간 간격
                },
                1024: {
                    slidesPerView: 3, // PC: 세 개의 슬라이드 표시
                    spaceBetween: 30, // PC 간 간격
                },
            },
        });
    });
    

// .main store




document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.main-store-swiper', {
      // 기본 설정
      loop: true, // 무한 반복
      slidesPerView: 1, // 한 번에 보이는 슬라이드 개수
      spaceBetween: 0, // 슬라이드 간 간격
  
      // 내비게이션
      navigation: {
        nextEl: '.main-store-button-next',
        prevEl: '.main-store-button-prev',
      },
  
      // 페이지네이션
      pagination: {
        el: '.main-store-pagination',
        clickable: true,
      },
  
      // 자동 재생
      autoplay: {
        delay: 3000, // 슬라이드 전환 시간 (밀리초)
        disableOnInteraction: false, // 사용자가 조작한 후에도 재생
      },
  
      // 반응형 설정
      breakpoints: {
        768: {
          slidesPerView: 2, // 태블릿: 두 개의 슬라이드 표시
          spaceBetween: 20, // 태블릿 간 간격
        },
        1024: {
          slidesPerView: 3, // PC: 세 개의 슬라이드 표시
          spaceBetween: 30, // PC 간 간격
        },
      },
    });
  });
  




