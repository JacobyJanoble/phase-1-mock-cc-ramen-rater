// // Deliverables: Pesudo code

// // See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// // select #ramen-menu div
// // fetch ramens data from /ramens endpoint
// // iterate over ramens data and for each ramen create an image
//     // create image tag
//     // update source attribute
//     // append to #ramen-menu div


    // const ramenMenu = document.querySelector("#ramen-menu")
    // // console.log(ramenMenu)
    // const baseUrl = "http://localhost:3000"

    // // remove let ramens if code breaks or dissect
    // fetch(baseUrl + "/ramens")
    // .then((res) => res.json())
    // .then((ramensData) => renderRamens(ramensData))

    // function renderRamens(ramens){
    //     //console.log(ramen);
    //     ramens.forEach(ramen => {
    //         const img = document.createElement('img')
    //         img.src= ramen.image;
    //         img.details = ramen;
    //         img.addEventListener('click', updateRamenDetails)
    //         ramenMenu.append(img);
    //     })
    // }



    // function appendRamenImage(ramen){
    //     const img = document.createElement('img')
    //         img.src= ramen.image;
    //         img.details = ramen;
    //         img.addEventListener('click', () => updateRamenDetails(ramen))
    //         ramenMenu.append(img);
    // }

// // Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.


// // add event listener to each img in the #ramen-menu div
// // have callback function for event listenerthat will update #ramen-detail div
//     // select name, restaurant, image, rating, and comment tags in #ramen-detail div
//     // where does the ramen data come from?
//     // update all tags with correct information

// function updateRamenDetails(e){
//     let ramen = e.target.details;
//     //console.log(e.target.details.name);
//     const name = document.querySelector(".name")
//     name.textContent = ramen.name;
//     const image = document.querySelector(".detail-image");
//     image.src = ramen.image;
//     const restaurant = document.querySelector(".restaurant")
//     restaurant.textContent = ramen.restaurant
//     const rating = document.querySelector("#rating-display")
//     rating.textContent = ramen.rating;
//     const comment = document.querySelector("#comment-display")
//     comment.textContent = ramen.comment;
// }

// // Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

// // add a submit event listener to the new ramen form
// // select #ramen-menu div
// // select new ramen form
// // callback function that will add the ramen to the ramen-menu div
//     // select all input fields from form
//     // create image & add to ramen-menu div


// const ramenForm = document.querySelector("#new-ramen")

// ramenForm.addEventListener("submit", createRamen)


// function createRamen(event){
//     event.preventDefault();
//     //console.log("hello world")
//     const name = document.querySelector("#new-name").value;
//     const restaurant = document.querySelector("#new-restaurant").value;
//     const image = document.querySelector("#new-image").value;
//     const rating = document.querySelector("#new-rating").value;
//     const comment = document.querySelector("#new-comment").value;
// //       console.log(name, restaurant, image, rating, comment)
//     const ramen = {name, restaurant, image, rating, comment};

//     appendRamenImage(ramen)
// }


const ramenMenu = document.querySelector("#ramen-menu");
const baseUrl = "http://localhost:3000";

fetch(baseUrl + "/ramens")
  .then((res) => res.json())
  .then((ramensData) => renderRamens(ramensData));

  // Builds object for
function renderRamens(ramens) {
  updateRamenDetails(ramens[0]);
  ramens.forEach(appendRamenImage);
}

function appendRamenImage(ramen) {
  const img = document.createElement("img");
  img.src = ramen.image;
  img.details = ramen;
  img.addEventListener("click", () => updateRamenDetails(ramen));
  ramenMenu.append(img);
}

function updateRamenDetails(ramen) {
    // let ramen = e.target.details;
    const name = document.querySelector(".name");
    name.innerText = ramen.name;
    const image = document.querySelector(".detail-image");
    image.src = ramen.image;
    const restaurant = document.querySelector(".restaurant");
    restaurant.innerText = ramen.restaurant;
    const rating = document.querySelector("#rating-display");
    rating.innerText = ramen.rating;
    const comment = document.querySelector("#comment-display");
    comment.innerText = ramen.comment;
}




  const ramenForm = document.querySelector("#new-ramen");
  ramenForm.addEventListener("submit", createRamen);

  function createRamen(event) {
    event.preventDefault();

    // grab the values inputted into the form
    const name = document.querySelector("#new-name").value;
    const restaurant = document.querySelector("#new-restaurant").value;
    const image = document.querySelector("#new-image").value;
    const rating = document.querySelector("#new-rating").value;
    const comment = document.querySelector("#new-comment").value;

    // creates object for form input data
    const ramen = { name, restaurant, image, rating, comment };
    // console.log(ramen);
    // Passed through the same function as rest of images, also receives the event listener command & appends details to the propper location
    appendRamenImage(ramen);
  }

