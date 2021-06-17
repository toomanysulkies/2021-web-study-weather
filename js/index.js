$(function () {
    /*************** 글로벌 설정 *****************/
    var time;
    var timeDivision;
    var weatherIcon = {
        i01d: 'bi-brightness-high',
        i01n: 'bi-brightness-high-fill',
        i02d: 'bi-cloud-sun',
        i02n: 'bi-cloud-sun-fill',
        i03d: 'bi-cloud',
        i03n: 'bi-cloud-fill',
        i04d: 'bi-clouds',
        i04n: 'bi-cloud-fills',
        i09d: 'bi-cloud-rain-heavy',
        i09n: 'bi-cloud-rain-heavy-fill',
        i10d: 'bi-cloud-drizzle',
        i10n: 'bi-cloud-drizzle-fill',
        i11d: 'bi-cloud-lightning',
        i11n: 'bi-cloud-lightning-fill',
        i13d: 'bi-cloud-snow',
        i13n: 'bi-cloud-snow-fill',
        i50d: 'bi-cloud-haze',
        i50n: 'bi-cloud-haze-fill',
    };
    var $bgWrapper = $('.bg-wrapper');
    /*************** 사용자 함수 *****************/
    init();
    function init() {
        initBg();
    }
    // prettier-ignore
    function initBg() {
        var d = new Date();
       time = d.getHours();
		timeDivision = 
		(time >= 2 	&& time < 6	) ? 1 : 
		(time >= 6 	&& time < 10) ? 2 :
		(time >= 10 && time < 14) ? 3 :
		(time >= 14 && time < 18) ? 4 :
		(time >= 18 && time < 22) ? 5 : 6;

        // console.log(timeDivision);
        for (i = 1; i <= 6; i++) $bgWrapper.removeClass('active' + i); //설정된 클래스 네임인 active1(1-6) 에서 설정 숫자값제거
        $bgWrapper.addClass('active' + timeDivision); //제거한 자리에 현재 시간의 분할값(1-6)중 해당 시간의 분할값 클래스명에 삽입
    }
    /*************** 이벤트 등록 *****************/

    /*************** 이벤트 콜백 *****************/
});
