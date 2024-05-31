document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      const res = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = 'admin.html';
    } catch (error) {
      alert('Login falhou!');
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await axios.post('/api/register', { name, email, password });
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'login.html';
    } catch (error) {
      alert('Cadastro falhou!');
    }
  });
  