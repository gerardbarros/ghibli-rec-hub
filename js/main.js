document.querySelector("button").addEventListener("click", getMovie)

function getMovie() {
  // show movie info
  let movieInfo = document.querySelector("#info")
  movieInfo.classList.remove("hidden")
  // randomize a number from 0-22
  let random = Math.floor( Math.random() * 22 )
  fetch("https://ghibliapi.herokuapp.com/films/")
    .then(res => res.json())
    .then(data => {
      console.log(data[random])
      // get movie name
      document.querySelector(".title").innerText = data[random].title
      // get movie poster image
      document.querySelector("img").src = data[random].image
      // // description
      document.querySelector(".plot").innerText = data[random].description
      // // release date
      document.querySelector(".release").innerText = data[random].release_date
      // // running time
      document.querySelector(".run-time").innerText = data[random].running_time
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
    
  
  

}


