/*************** API *****************/
//KAKAO:24a84e0d94214e6e7fdd697b820464b0
//openweathermap.com icon: http://openweathermap.org/img/wn/10d@2x.png

$(function () {
    /*************** 글로벌 설정 *****************/
    var map;
    var time;
    var timeDivision;
    var mapCenter = { lat: 35.8, lon: 127.55 };
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
    var $map = $('#map');
    /*************** 사용자 함수 *****************/
    initBg();
    initMap();

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
        for (var i = 1; i <= 6; i++) $bgWrapper.removeClass('active' + i); //설정된 클래스 네임인 active1(1-6) 에서 설정 숫자값제거
        $bgWrapper.addClass('active' + timeDivision); //제거한 자리에 현재 시간의 분할값(1-6)중 해당 시간의 분할값 클래스명에 삽입
    }

    function initMap() {
        var options = {
            center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lon),
            level: 13,
            draggable: false,
            zoomable: false,
        };

        map = new kakao.maps.Map($map[0], options);
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN); // 지형도 붙이기

        $(window).resize(onResize).trigger('resize'); //윈도우 사이즈가 변경될 때 지도 중심 맞추기
    }
    $.get('../json/city.json', onGetCity); //도시정보 가져오기
    /*************** 이벤트 콜백 *****************/

    // prettier-ignore
    function onResize() {
        var windowHeight = $(window).innerHeight();
        var lat = (windowHeight > 800 || windowHeight < 600) ? mapCenter.lat : mapCenter.lat + 1;
        //위도가 (윈도우 높이가 800보다 크거나 600보다 작으면 위도 35.8 아니면 36.8)
        map.setCenter(new kakao.maps.LatLng(lat, mapCenter.lon)); //
        map.setLevel(windowHeight > 800 ? 13 : 14);
    }
    function onGetCity(r) {
        r.city.forEach(function (v, i) {
            var customOverlay = new kakao.maps.CustomOverlay({
                position: new kakao.maps.LatLng(v.lat, v.lon),
                content: '<div class="co-wrapper">' + v.name + '</div>',
                xAnchor: v.anchor ? v.anchor.x : 0.25,
                yAnchor: v.anchor ? v.anchor.y : 0.65,
            });
            customOverlay.setMap(map);
        });
    }

    /*************** 이벤트 등록 *****************/
});
