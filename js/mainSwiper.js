const topSwiper = new Swiper(".gallery-top", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    on: {
        slideChange: function () {
            const fill = document.querySelector(".slide_progress-bar .fill");
            if (fill) {
                fill.style.transition = "none";
                fill.style.width = "0%";
                setTimeout(() => {
                    fill.style.transition = "width 3s linear";
                    fill.style.width = "100%";
                }, 30);
            }

            const color = this.slides[this.activeIndex].dataset.color;
            if (color) {
                document.querySelector(".main_showcase").style.backgroundColor = color;
            }
        }
    }
});

document.querySelector(".btn-prev").addEventListener("click", () => topSwiper.slidePrev());
document.querySelector(".btn-next").addEventListener("click", () => topSwiper.slideNext());

const toggleBtn = document.querySelector(".btn-toggle");
toggleBtn.addEventListener("click", () => {
    if (topSwiper.autoplay.running) {
        topSwiper.autoplay.stop();
        // 멈춤
        toggleBtn.innerHTML = `<i class="ico ico-play"></i>`;
    } else {
        topSwiper.autoplay.start();
        // 재생
        toggleBtn.innerHTML = `<i class="ico ico-pause"></i>`;
    }
});