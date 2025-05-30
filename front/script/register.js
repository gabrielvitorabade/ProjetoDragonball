function doRegister() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  fetch('http://localhost:3000/register', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ email, password, confirmPassword }),
      headers: {
        'Content-Type': 'application/json',
      },
  })
    .then(async (response) => {
      let responseJSON = await response.json();
      if (response.ok) {
        alert(responseJSON.message);
        window.location.href = 'login.html';
      } else {
        alert(responseJSON.message); // Exibe a mensagem de erro retornada pelo servidor
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Falha na requisição, tente novamente mais tarde.'); // Exibe a mensagem de erro
    });
}