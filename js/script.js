const getmorePosts =
  "https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wp/v2/posts";

async function getApi(url) {
  try {
    document.querySelector(".loading").innerHTML = `
    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_6gfl0jjp.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
  `;
    const response = await fetch(url);
    const apiResults = await response.json();
    console.log(apiResults);

    apiResults.forEach((element) => {
      document.querySelector(".postsContainer").innerHTML += `

          <div class="postsCards postcardsStyle">
            <a  href="specificblog.html?id=${element.id}"><img class="postsImage" src="${element.better_featured_image.source_url}">
              <div class="postCardTextContainer">
                <p class="postsCardText">${element.title.rendered}</p>
                <p class="postCardInfo">${element.excerpt.rendered}</p>
              </div>    
            </a>    
          </div>
        

         `;
    });
  } catch (error) {
  } finally {
    document.querySelector(".loadingcontainer").innerHTML = ` `;
  }
}

getApi(getmorePosts);

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".activePage");
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
  }
}

const readMoreButton = document.querySelector(".fa-plus-circle");

readMoreButton.onclick = function () {
  getApi(getmorePosts + `?page=2`);
  readMoreButton.innerHTML = "";
};
