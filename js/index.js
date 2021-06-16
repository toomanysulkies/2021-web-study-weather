$(function () {
    /*************** 글로벌 설정 *****************/
    var time;
    var timeDivision;
    var stageWrapper = $('.stage-wrapper');
    /*************** 사용자 함수 *****************/
    init();
    function init() {
        var d = new Date();
        time = d.getHours(); //date 객체
        timeDivision = time >= 2 && time < 6 ? 1 : time >= 6 && time < 10 ? 2 : time >= 6 && time < 10 ? 2 : time >= 10 && time < 14 ? 3 : time >= 14 && time < 18 ? 4 : time >= 18 && time < 22 ? 5 : 6;
        $stageWrapper.attr('class', '.stage-wrapper active' + timeDivision);
    }
    /*************** 이벤트 등록 *****************/

    /*************** 이벤트 콜백 *****************/
});
