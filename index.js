const p = document.querySelector('.joke');
const button = document.querySelector('.get-joke');
const url = 'https://multi-purpose-api.herokuapp.com/api/jokes/joke'

window.addEventListener('load', async () => {
    try {
        const res = await axios.get(url)
        const { joke } = res.data;
        p.innerText = joke;
    } catch (err) {
        console.log(err)
    }
})

button.addEventListener('click', async () => {
    try {
        const res = await axios.get(url)
        
        const { joke } = res.data;

        p.innerText = joke;
    } catch (err) {
        console.log(err)
    }
})

