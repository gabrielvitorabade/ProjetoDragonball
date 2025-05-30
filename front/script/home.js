// let charactersList = document.querySelector('#characters')
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
                    <img src="${character.image}" alt="image of ${character.name}" >
                    <h2>${character.name}</h2>
                    
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