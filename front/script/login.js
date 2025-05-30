
function fazerLogin(){
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    // const data = { email, password }; // Cria um objeto com os dados do formulário
    
    fetch('http://localhost:3000/login',{
        method: 'POST', // Define o método HTTP como POST
        mode: 'cors',
        body: JSON.stringify({ email, password }), // Converte o objeto em uma string JSON),
        headers: {
            'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
        },
         // Converte o objeto em uma string JSON
    })
        .then(async (response) => {
            let responseJSON = await response.json()
            if (response.ok) {
                window.location.href = 'home.html'
            } else {
                alert(responseJSON.message); // Exibe a mensagem de erro retornada pelo servidor
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Falha na requisição, tente novamente mais tarde.'); // Exibe a mensagem de erro
        });
    
}