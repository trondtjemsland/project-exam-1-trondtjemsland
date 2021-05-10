async function getApi() {
  try {
    const response = await fetch(
      "https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wp/v2/posts "
    );
    const apiResults = await response.json();
    console.log(apiResults);

    apiResults.forEach((element) => {
      document.querySelector(".postsContainer").innerHTML += `
    
          <div class="postsCards postcardsStyle"${element.id}">
              <img class="postsImage" src="${element.better_featured_image.source_url}">    
          </div>
            
         `;
    });
  } catch (error) {
  } finally {
  }
}

getApi();
