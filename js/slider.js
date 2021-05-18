async function getSlider() {
  try {
    const response = await fetch(
      "https://api.tjemsland.online/wp-json/wp/v2/posts"
    );
    const jsonResults = await response.json();
    const postArray = jsonResults;
    postArray.forEach(function (element) {
      if (
        element.better_featured_image.media_details.sizes.thumbnail.source_url
      ) {
        document.querySelector("#examposts").innerHTML += `
        <div class="slide">
            <img src="${element.better_featured_image.source_url}">
            <div class="h1undertitle">
                <h3 class="value_title">${element.title.rendered}</h3>
            </div>
        </div>
        `;
      } else {
        document.querySelector("#examposts").innerHTML += `
            <div class="h2undertitle">   
                <h2>${element.title.rendered}</h2>
            </div>
        `;
      }
    });
    exam_slider();
  } catch (error) {
  } finally {
  }
}

getSlider();

function exam_slider() {
  $(".blogs").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
}
