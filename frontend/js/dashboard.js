document.addEventListener('DOMContentLoaded', async () => {
    const apiUrl = 'http://localhost:3000/api';
    const totalDoacoesElement = document.getElementById('total-doacoes');
    const totalPedidosElement = document.getElementById('total-pedidos');
    const novasDoadorasElement = document.getElementById('novas-doadoras');
    const estoqueTotalElement = document.getElementById('estoque-total');
    const errorMessageElement = document.getElementById('dashboard-error-message'); 
  
    try {
      // Pegar o token do localStorage
      const token = localStorage.getItem('token');
  
      if (!token) {
        // Se não houver token, redirecione para a página de login
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
  
      if (response.ok) {
        const dashboardData = await response.json();
        totalDoacoesElement.textContent = dashboardData.totalDoacoes;
        totalPedidosElement.textContent = dashboardData.totalPedidos;
        novasDoadorasElement.textContent = dashboardData.novasDoadoras;
        estoqueTotalElement.textContent = dashboardData.estoqueTotal;
        // Esconda a mensagem de erro, se estiver visível
        errorMessageElement.style.display = 'none';
      } else {
        console.error('Error occurred:', response.status);
        // Exibir mensagem de erro no frontend
        errorMessageElement.textContent = 'Erro ao carregar dados do dashboard. Por favor, tente novamente mais tarde.';
        errorMessageElement.style.display = 'block';
      }
    } catch (error) {
      console.error('Error occurred:', error);
      // Exibir mensagem de erro no frontend
      errorMessageElement.textContent = 'Erro ao carregar dados do dashboard. Por favor, tente novamente mais tarde.';
      errorMessageElement.style.display = 'block';
    }
    async function updateDashboardData() {
      try {
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
    
        if (response.ok) {
          const dashboardData = await response.json();
          totalDoacoesElement.textContent = dashboardData.totalDoacoes;
          totalPedidosElement.textContent = dashboardData.totalPedidos;
          novasDoadorasElement.textContent = dashboardData.novasDoadoras;
          estoqueTotalElement.textContent = dashboardData.estoqueTotal;
          // Esconda a mensagem de erro, se estiver visível
          errorMessageElement.style.display = 'none';
        } else {
          console.error('Error occurred:', response.status);
          // Exibir mensagem de erro no frontend
          errorMessageElement.textContent = 'Erro ao carregar dados do dashboard. Por favor, tente novamente mais tarde.';
          errorMessageElement.style.display = 'block';
        }
      } catch (error) {
        console.error('Error occurred:', error);
        // Exibir mensagem de erro no frontend
        errorMessageElement.textContent = 'Erro ao carregar dados do dashboard. Por favor, tente novamente mais tarde.';
        errorMessageElement.style.display = 'block';
      }
    }
    
    // Chama a função inicial para carregar os dados do dashboard
    updateDashboardData(); 
    
    // Define um intervalo para atualizar os dados a cada 60 segundos (1 minuto)
    setInterval(updateDashboardData, 60000); 
  });

  