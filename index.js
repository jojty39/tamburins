// 모든 <a> 태그의 기본 동작을 막음
$('a[href="#"]').on('click', function(event) {
  event.preventDefault(); // 기본 동작 방지
});


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
  



// new item 슬라이더 JS 사용!

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container-new-wrap .slider-scrollbar");
  const ScrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Handle scrollbar thumb drag
  ScrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = ScrollbarThumb.offsetLeft;

    // Update thumb position on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPositon = sliderScrollbar.getBoundingClientRect().width - ScrollbarThumb.offsetWidth;

      const boundedPosition = Math.max(0, Math.min(maxThumbPositon, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPositon) * maxScrollLeft;

      ScrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    }

    // Remove event listeners on mouse up
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

    } 

    // Add event listeners for drag interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks 슬라이드 버튼 클릭에 따른 이미지 좌우 변경
  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      // console.log(button); 버튼 작동 확인
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
    });
  });

  // slideButtions 이미지 존재하지 않으면 숨겨진 상태 유지하다 동작시 나타나게 처리 !?????

  const handleSlideButtons = () => {
    slideButtons[0].style.dislpay = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.dislpay = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft ) * (sliderScrollbar.clientWidth - ScrollbarThumb.offsetWidth);
    ScrollbarThumb.style.left = `${thumbPosition}px`;
  }

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
  
}

window.addEventListener("load", initSlider);




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




