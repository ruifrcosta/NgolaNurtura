document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/api'; // URL base da API
    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');
  
    // Verifica se já existe um token no localStorage
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/frontend/dashboard.html'; // Redireciona para o dashboard
      return; // Sai da função
    }
  
    // Event Listener para o formulário de login
    signInForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const email = signInForm.querySelector('input[type="email"]').value;
      const password = signInForm.querySelector('input[type="password"]').value;
  
      try {
        const response = await fetch(`${apiUrl}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
  
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          window.location.href = '/frontend/dashboard.html'; 
        } else {
          const errorData = await response.json();
          console.error(errorData.message);
          // Exiba uma mensagem de erro para o usuário (ex.: em um elemento HTML)
          const errorMessage = document.getElementById('login-error-message');
          if (errorMessage) {
            errorMessage.textContent = errorData.message;
            errorMessage.style.display = 'block';
          }
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        // Exiba uma mensagem de erro genérica para o usuário (ex.: em um elemento HTML)
        const errorMessage = document.getElementById('login-error-message');
        if (errorMessage) {
          errorMessage.textContent = 'Erro ao fazer login. Por favor, tente novamente.';
          errorMessage.style.display = 'block';
        }
      }
    });
  
    // Event Listener para o formulário de cadastro
    signUpForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const nomeCompleto = signUpForm.querySelector('input[type="text"]').value;
      const email = signUpForm.querySelector('input[type="email"]').value;
      const password = signUpForm.querySelector('input[type="password"]').value;
      const tipoUsuario = signUpForm.querySelector('select').value;
  
      try {
        const response = await fetch(`${apiUrl}/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nome_completo: nomeCompleto, email, senha: password, tipo_usuario: tipoUsuario })
        });
  
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          window.location.href = '/frontend/dashboard.html'; // Redireciona para o dashboard
        } else {
          const errorData = await response.json();
          console.error(errorData.message);
          // Exiba uma mensagem de erro para o usuário (ex.: em um elemento HTML)
          const errorMessage = document.getElementById('signup-error-message');
          if (errorMessage) {
            errorMessage.textContent = errorData.message;
            errorMessage.style.display = 'block';
          }
        }
      } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        // Exiba uma mensagem de erro genérica para o usuário (ex.: em um elemento HTML)
        const errorMessage = document.getElementById('signup-error-message');
        if (errorMessage) {
          errorMessage.textContent = 'Erro ao registrar usuário. Por favor, tente novamente.';
          errorMessage.style.display = 'block';
        }
        
      }
    });
  });

  const token = localStorage.getItem('token');

if (!token) {
  window.location.href = '/frontend/index.html';
  return;
}

const response = await fetch(`${apiUrl}/dashboard`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  }
});