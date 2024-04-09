//SlideShow---------------------------------------------------------------------------------------


//SCROLL--------------------------------------------------------------------------------------
$(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
        $("header .logo").show();
        header.style.justifyContent = "space-between";
    } else {
        $("header .logo").hide();
        header.style.justifyContent = "flex-end";
    }

    //console.log($(window).height());
    //console.log($("#slideshow").offset().top);

    if ($(window).scrollTop() > $("#slideshow").offset().top - 80) {
        document.querySelectorAll(".btn_header").forEach((button) => {
            button.classList.add("blue");
            button.classList.remove("white");
        });
        document.querySelector("header nav").classList.add("bg_header");
    } else {
        document.querySelectorAll(".btn_header").forEach((button) => {
            button.classList.remove("blue");
            button.classList.add("white");
        });
        document.querySelector("header nav").classList.remove("bg_header");
    }

});


//Burger Menu--------------------------------------------------------------------------------------
$("#icons").click(() => {
    document.querySelector("#header").classList.toggle("active");
})

document.querySelectorAll("header nav li").forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("active");
    });
});



//Swiper menu--------------------------------------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    freeMode: true,
  });


//LE DESIGN C'EST QUOI HREF ------------------------------------------------------------------------------
$('#swiper-slide-01').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-02').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-03').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-04').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-05').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-06').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-07').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-08').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-09').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});

//NOS SERVICES HREF ------------------------------------------------------------------------------
$('.service_case_01').click(function (e) {
    e.preventDefault();
    location.href = "./Design.html";
    return true;
});

$('.service_case_02').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});