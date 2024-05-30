document.addEventListener('DOMContentLoaded', function() {
    // Form handlers
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            try {
                const response = await axios.post('/api/login', { email, password });
                alert('Login bem-sucedido');
                window.location.href = 'admin.html';
            } catch (error) {
                alert('Erro no login');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            try {
                const response = await axios.post('/api/register', { name, email, password });
                alert('Registro bem-sucedido');
                window.location.href = 'login.html';
            } catch (error) {
                alert('Erro no registro');
            }
        });
    }

    // Fetch users for admin page
    if (window.location.pathname.endsWith('admin.html')) {
        fetchUsers();
    }
});

async function fetchUsers() {
    try {
        const response = await axios.get('/api/users');
        const users = response.data;
        const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
        
        users.forEach(user => {
            const row = usersTable.insertRow();
            row.insertCell(0).innerText = user._id;
            row.insertCell(1).innerText = user.name;
            row.insertCell(2).innerText = user.email;
            const actionsCell = row.insertCell(3);
            actionsCell.innerHTML = `<button class="btn btn-warning btn-sm" onclick="editUser('${user._id}')">Editar</button>
                                     <button class="btn btn-danger btn-sm" onclick="deleteUser('${user._id}')">Excluir</button>`;
        });
    } catch (error) {
        alert('Erro ao buscar usuários');
    }
}

async function editUser(userId) {
    const name = prompt('Novo nome:');
    const email = prompt('Novo email:');
    
    try {
        await axios.put(`/api/users/${userId}`, { name, email });
        alert('Usuário atualizado');
        location.reload();
    } catch (error) {
        alert('Erro ao atualizar usuário');
    }
}

async function deleteUser(userId) {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
        try {
            await axios.delete(`/api/users/${userId}`);
            alert('Usuário excluído');
            location.reload();
        } catch (error) {
            alert('Erro ao excluir usuário');
        }
    }
}
