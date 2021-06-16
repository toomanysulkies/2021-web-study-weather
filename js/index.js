$(function () {
    /*************** 글로벌 설정 *****************/
    var time;
    var timeDivision;
    var $stageWrapper = $('.stage-wrapper');
    /*************** 사용자 함수 *****************/
    init();
    function init() {
        initBg();
    }
    function initBg() {
        var d = new Date();
        time = d.getHours(); //date 객체
        timeDivision =
             (time >= 2 && time < 6) ? 1 :
             (time >= 6 && time < 10) ? 2 :
             (time >= 6 && time < 10) ? 2 :
             (time >= 10 && time < 14) ? 3 :
             (time >= 14 && time < 18) ? 4 :
             (time >= 18 && time < 22) ? 5 : 6;

        // console.log(timeDivision);
        for (i = 1; i <= 6; i++) $stageWrapper.removeClass('active' + i); //설정된 클래스 네임인 active1(1-6) 에서 설정 숫자값제거
        $stageWrapper.addClass('active' + timeDivision); //제거한 자리에 현재 시간의 분할값(1-6)중 해당 시간의 분할값 클래스명에 삽입
    }
    /*************** 이벤트 등록 *****************/

    /*************** 이벤트 콜백 *****************/
});
