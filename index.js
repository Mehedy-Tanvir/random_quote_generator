const btn = document.querySelector('#btn');
const quote =document.querySelector('#quote');
const author = document.querySelector('#author');
const coma = document.querySelector('.fa-solid');


async function getQuote(){
    try {
        quote.innerText = 'Loading...';
        author.innerText = '';
        coma.display = "none";
        btn.disabled = true;
        btn.innerText = 'Wait'
        randomNumber = Math.floor(Math.random()*1642)+1;
        const url = "https://type.fit/api/quotes";
        const result = await fetch(url).then((res) => res.json());
        coma.display = "inline";
        quote.innerText = result[randomNumber].text;
        author.innerText = `~${result[randomNumber].author}`;
        btn.innerText = 'get a quote';
        btn.disabled = false;
    } catch (error) {
        console.log('An Error Occured');
        console.log(error);
        quote.innerText = "An Error Occured! Try Again Later!";
    }
   
}

btn.addEventListener('click', getQuote);