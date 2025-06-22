// função responsavel por buscar os personagens na API e exibir na tela
fetch('http://localhost:3000/characters',{
    method:'Get',
    headers:{
        'content-type':'application/json',
    }
    
    
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
                        <p>kI : </p> 
                        <div class="card-info_data">${character.ki}</div>
                        </div>
                    <div/>
                </div>
                `
            }      
        )}else{
            charactersList.innerHTML = `<p>${responseJS.message}</p>`
        } 
    }) 
      .catch((error) =>{
        console.error('Error:', error)
      })

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
        document.querySelector('#characters').innerHTML = 
                `
                <div class="card">
                    <div class="card-img">
                        <img src="${character.image}" alt="image of ${character.name}" >
                    </div>
                    <div class="card-info">
                    <h2>${character.name}</h2>
                        <div>
                        <P>Race :  </P>
                        <div class="card-info_data">${character.race}</div> <br>
                        <p>kI : </p> 
                        <div class="card-info_data">${character.ki}</div>
                        </div>
                    <div/>
                </div>
                `
            console.log(character)
    })
}

                