const button=document.getElementById('btn');
const result=document.getElementById('result');

button.addEventListener('click',getJokes);

async function getJokes() {
    try{
        const res=await fetch("https://v2.jokeapi.dev/joke/Any");
        const jsonres=await res.json();
        console.log(jsonres);
        result.innerHTML=
        `<h2>Type: <span>"${jsonres.type}"</span> joke</h2>
        <h3>Category:<span> ${jsonres.category} </span> </h3>`
        if(jsonres.joke!=undefined){
            result.innerHTML+=
            `<h3>${jsonres.joke}</h3>`
        }else{
            console.log('2 jokes');
            result.innerHTML+=
            `<h3>${jsonres.setup}</h3>
            <hr/>
            <h3>${jsonres.delivery}</h3>`
        }
    }
    catch(err){
        console.log(err);
    }
}