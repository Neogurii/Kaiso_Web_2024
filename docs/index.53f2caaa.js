$(window).on("scroll",function(){0===$(window).scrollTop()?($("header .logo").show(),header.style.justifyContent="space-between"):($("header .logo").hide(),header.style.justifyContent="flex-end"),$(window).scrollTop()>$("#slideshow").offset().top-80?(document.querySelectorAll(".btn_header").forEach(e=>{e.classList.add("blue"),e.classList.remove("white")}),document.querySelector("header nav").classList.add("bg_header")):(document.querySelectorAll(".btn_header").forEach(e=>{e.classList.remove("blue"),e.classList.add("white")}),document.querySelector("header nav").classList.remove("bg_header"))}),$("#icons").click(()=>{document.querySelector("#header").classList.toggle("active")}),document.querySelectorAll("header nav li").forEach(e=>{e.addEventListener("click",()=>{header.classList.remove("active")})}),new Swiper(".mySwiper",{slidesPerView:"auto",spaceBetween:30,loop:!0,freeMode:!0});