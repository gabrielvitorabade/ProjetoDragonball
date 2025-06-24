// função responsavel por buscar os personagens na API e exibir na tela
var links={}
fetch('http://localhost:3000/characters',{
    method:'get',
    headers:{
        'content-type':'application/json',
    },
})
    .then(async(response)=>{
        const responseJS = await response.json()
        if(response.ok){
        links = responseJS.links
        }})

    console.log(links)
function getPage(tipo)
{
fetch('http://localhost:3000/characters',{
    method:'get',
    headers:{
        'content-type':'application/json',
    },
})
    .then(async(response)=>{
        const responseJS = await response.json()
        if(response.ok){      
            responseJS.items.forEach((character)=> {
                document.querySelector('#characters').innerHTML += `
                <div class="card">
                    <div class="card-img">
                        <img src="${character.image}" alt="image of ${character.name}" >
                    </div>
                    <div class="card-info">
                    <h2>${character.name}</h2>
                        <div>
                        <P>Race :  </P>
                        <div class="card-info_data">${character.race}</div> <br>
                        <p>Base kI : </p> 
                        <div class="card-info_data">${character.ki}</div>
                        </div>
                    <div/>
                </div>
                `
            }      
        )
    }else{
            charactersList.innerHTML = `<p>${responseJS.message}</p>`
        } 
    }) 
      .catch((error) =>{
        console.error('Error:', error)
      })
}
getPage()

function searchCharacters(){

    const searchInput = document.querySelector('#searchInput').value.toLowerCase();
    fetch(`http://localhost:3000/characters`, 
        {
        method: 'get',
        headers:{
            'content-type': 'application/json'
        }
    })
    .then(async(res)=>{
        responseJS = await res.json()
        const characters = responseJS.items;
        if(res.ok){ 
            var character = characters.filter( character => character.name.toLowerCase().includes(searchInput))
        }
         if (character.length > 0) {
        const selected = character[0]; // pega o primeiro resultado
        document.querySelector('#characters').innerHTML = `
            <div class="card">
                <div class="card-img">
                    <img src="${selected.image}" alt="image of ${selected.name}" >
                </div>
                <div class="card-info">
                    <h2>${selected.name}</h2>
                    <div>
                        <p>Race:</p>
                        <div class="card-info_data">${selected.race}</div> <br>
                        <p>KI:</p>
                        <div class="card-info_data">${selected.ki}</div>
                    </div>
                </div>
            </div>
        `;
    } else {
        document.querySelector('#characters').innerHTML = `<p>Nenhum personagem encontrado.</p>`;
    }
             console.log(character[0].name,race)
    })
}


                