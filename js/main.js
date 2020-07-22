$(document).ready(function(){
    $("#header").load("../include/header.html");
    $("#footer").load("../include/footer.html");
});

$("#logoutBtn").click(function(){
    let logout = confirm("정말 로그아웃 하시겠습니까?");
    if(logout){
        // Cookie에 저장된 토큰을 삭제 + localStorage에 저장된 사용자 데이터 삭제.
        // => index.html로 이동.(잘 삭제됐는지 확인.)
        
        // 쿠키에 저장된 토큰 삭제
        $.removeCookie('userToken');

        localStorage.removeItem('userInfo');

        location.href='index.html';
    }
})

let mainVisual = new Swiper("#mainVisual .mask",{
    direction:"horizontal",
    speed : 1000,
    spaceBetween:0,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    }
    
});

let projectList = new Swiper("#topicList .topicMask",{
    initialSlide:0,
    speed:1000,
    loop: true,
    slidesPerView :3,
    spaceBetween : 80,
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    navigation: {
        nextEl: '#topicList .swiperBtn .nextBtn',
        prevEl: '#topicList .swiperBtn .prevBtn',
    },

});


// let topicList = new Swiper("#topicList .topicMask",{
//     // direction:"horizontal",
//     // centeredSlides:true,
//     loop:true,
//     autoplay:{
//         delay:1000,
//         disableOnInteraction:false,
//     },
//     // slidesPerView:"3",
//     // spaceBetween:80,
//     navigation: {
//         nextEl: '.nextBtn',
//         prevEl: '.prevBtn',
//       },
// });

