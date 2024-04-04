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



//Drag menu--------------------------------------------------------------------------------------
/*var slides = jQuery('#drag_slider_main .drag_slider_wrapper').children().length;
var min = 0;
var wid = $(".drag_slide").width();
var max = (slides - 1) * wid;

jQuery("#drag_slider_main .drag_slider_wrapper").width(slides*wid);

jQuery("#drag_slider_main .drag_slider_wrapper").draggable({
    axis: 'x',
    drag: function (event, ui) {
       var left = ui.position.left,
       offsetWidth = ($(this).width() - $(this).parent().width()) * -1;

       if (left > 0) {
         ui.position.left = 0;
       }
       if (offsetWidth > left) {
         ui.position.left = offsetWidth;
       }
    }
});*/

const slideable = document.querySelector("#slideable");

let isSlidding = false;
let x = 0;

// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
const slideableWidth = slideable.scrollWidth + $(".drag_slide").width();

let xMin = -(slideableWidth - window.innerWidth);

slideable.addEventListener("pointerdown", () => (isSlidding = true));
slideable.addEventListener("pointerup", () => (isSlidding = false));
slideable.addEventListener("pointerleave", () => (isSlidding = false));
window.addEventListener("pointerleave", () => (isSlidding = false));

window.addEventListener("pointermove", (ev) => {
    console.log();
    if (isSlidding) {
        x += ev.movementX;

        if (x > 0) {
            x = 0;
        } else if (x < xMin) {
            x = xMin;
        }

        slideable.style["transform"] = `translate(${x}px, 0px)`;
        console.log(xMin);
    }
});