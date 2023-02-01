document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
const url = "https://dog.ceo/api/breeds/image/random"
      fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data.message)
        document.querySelector('img').src = data.message
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}