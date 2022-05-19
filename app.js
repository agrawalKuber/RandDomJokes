const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


async function generateJoke() {
    const config = { headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    jokeEl.innerHTML = res.data.joke
  }
  
jokeBtn.addEventListener('click', generateJoke)

generateJoke()


