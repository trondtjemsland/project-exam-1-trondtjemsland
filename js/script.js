async function getApi() {
  try {
    const response = await fetch(
      "https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wp/v2/posts "
    );
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
  }
}

getApi();

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".activePage");
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
  }
}
