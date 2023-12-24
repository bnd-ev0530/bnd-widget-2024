let markupUpdate = "";
fetch(
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUhhKBlh_wvspTh5n4mL0b5g&key=AIzaSyAL4Z90CnJoDcl74Rh_r9eBnz5DvXTw4FQ"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.items.forEach((curr) => {
      vidTitle = curr.snippet.title;
      vidURL =
        "https://www.youtube.com/watch?v=" + curr.snippet.resourceId.videoId;
      vidThumb = curr.snippet.thumbnails.maxres.url;

      markup = `
      <div class="swiper-slide" onclick=goSong('${curr.snippet.resourceId.videoId}');><img src='${vidThumb}' /></div>`;
      console.log(markup);
      markupUpdate += markup;
    });

    console.log(markupUpdate);
    const list = document.querySelector("div.list");
    list.innerHTML = markupUpdate;

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3.2,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 4.3,
          spaceBetween: 10,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    });
    // Update swiper after dynamically inserting slides
    if (swiper && typeof swiper.update === "function") {
      swiper.update();
    }
  });
