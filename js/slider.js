function charousel() {
  $(".blogs").slick({
    arrows: false,
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
          slidesToScroll: 1,
        },
      },
    ],
  });
}

async function getSlider() {
  try {
    const response = await fetch(
      "https://api.tjemsland.online/wp-json/wp/v2/posts"
    );

    const jsonResults = await response.json();
    const postArray = jsonResults;
    postArray.forEach(function (element) {
      if (element.better_featured_image.source_url) {
        document.querySelector("#charouselPosts").innerHTML += `
        <div class="slide">
        <a  href="specificblog.html?id=${element.id}"><img src="${element.better_featured_image.source_url}">
            <div class="h3title">
                <h2 class="charouseltitle">${element.title.rendered}</h2>
            </div>
         </a>   
        </div>
        `;
      } else {
        document.querySelector("#charouselPosts").innerHTML += `
            <div class="h2undertitle">   
                <h2>${element.title.rendered}</h2>
            </div>
        `;
      }
    });
    charousel();
  } catch (error) {
  } finally {
  }
}

getSlider();
