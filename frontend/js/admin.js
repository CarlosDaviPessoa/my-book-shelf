const loadUsers = async () => {
    try {
      const res = await axios.get('/api/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const users = res.data;
      const userTableBody = document.getElementById('userTableBody');
      userTableBody.innerHTML = '';
      users.forEach(user => {
        const row = `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
              <button onclick="editUser('${user._id}')">Editar</button>
              <button onclick="deleteUser('${user._id}')">Excluir</button>
            </td>
          </tr>
        `;
        userTableBody.insertAdjacentHTML('beforeend', row);
      });
    } catch (error) {
      console.error(error);
      alert('Falha ao carregar usuários!');
    }
  };
  
  const editUser = async (id) => {
    // Função para editar usuário
  };
  
  const deleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      loadUsers();
    } catch (error) {
      console.error(error);
      alert('Falha ao excluir usuário!');
    }
  };
  
  document.addEventListener('DOMContentLoaded', loadUsers);
  