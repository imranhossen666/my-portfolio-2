

$('.clients-reviews-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});


$(".client-prev").on("click", function(){
    $(".clients-reviews-main").slick("slickPrev")
})
$(".client-next").on("click", function(){
    $(".clients-reviews-main").slick("slickNext")
})


function showParagraph1(){
    const questionPara = document.querySelector(".question-para1")
    const showIcon = document.querySelector(".show-icon")
    const hiddenIcon = document.querySelector(".hidden-icon")
    questionPara.classList.toggle("showParagraph")
    showIcon.classList.toggle("hiddenTheIcon")
    hiddenIcon.classList.toggle("showTheIcon")
}
function showParagraph2(){
    const questionPara = document.querySelector(".question-para2")
    const showIcon = document.querySelector(".show-icon2")
    const hiddenIcon = document.querySelector(".hidden-icon2")
    questionPara.classList.toggle("showParagraph")
    showIcon.classList.toggle("hiddenTheIcon")
    hiddenIcon.classList.toggle("showTheIcon")
}
function showParagraph3(){
    const questionPara = document.querySelector(".question-para3")
    const showIcon = document.querySelector(".show-icon3")
    const hiddenIcon = document.querySelector(".hidden-icon3")
    questionPara.classList.toggle("showParagraph")
    showIcon.classList.toggle("hiddenTheIcon")
    hiddenIcon.classList.toggle("showTheIcon")
}
function showParagraph4(){
    const questionPara = document.querySelector(".question-para4")
    const showIcon = document.querySelector(".show-icon4")
    const hiddenIcon = document.querySelector(".hidden-icon4")
    questionPara.classList.toggle("showParagraph")
    showIcon.classList.toggle("hiddenTheIcon")
    hiddenIcon.classList.toggle("showTheIcon")
}
function showParagraph5(){
    const questionPara = document.querySelector(".question-para5")
    const showIcon = document.querySelector(".show-icon5")
    const hiddenIcon = document.querySelector(".hidden-icon5")
    questionPara.classList.toggle("showParagraph")
    showIcon.classList.toggle("hiddenTheIcon")
    hiddenIcon.classList.toggle("showTheIcon")
}



$(document).ready(function() {
    $('.portfolio-items-name button').on('click', function() {
      $('.portfolio-items-name button').removeClass('active'); // Remove active class from all buttons
      $(this).addClass('active'); // Add active class to the clicked button
    });
});



$(window).scroll(function(){
    const scrolling = $(this).scrollTop()
    if(scrolling > 40){
        $("nav").addClass("navBG")
    }
    else{
        $("nav").removeClass("navBG")
    }
})
$(window).scroll(function(){
    const scrollingTop = $(this).scrollTop()
    if(scrollingTop > 40){
        $(".backToTop").fadeIn(500)
    }
    else{
        $(".backToTop").fadeOut(500)
    }
})

$(".backToTop").click(function(){
    $("body, html").animate({
        scrollTop: 0
    })
})


var mixer = mixitup('.portfolio-main');


