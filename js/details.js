const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");

async function getBlogposts(Id) {
  try {
    const response = await fetch(
      "https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wp/v2/posts/" +
        id
    );
    const jsonResults = await response.json();
    document.title = jsonResults.title.rendered;
    console.log(jsonResults);
    console.log(Id);

    document.querySelector(".spesificBlogContainer").innerHTML += `
                <h1 class="specificBlogHeading">${jsonResults.title.rendered}</h1>
                <div class="postcards">
                    ${jsonResults.content.rendered}
                </div>
                   
        `;

    const openModal = document.querySelector(".modalImage");
    const overlay = document.querySelector(".overlay");
    overlay.innerHTML = `<img class="popUpImg" src="${jsonResults.better_featured_image.source_url}" />`;
    openModal.onclick = function () {
      overlay.classList.remove("hide");
    };
    overlay.onclick = function () {
      overlay.classList.add("hide");
    };
  } catch (error) {
    console.log(error);
  }
}
getBlogposts(id);
