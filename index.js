const express = require('express');
const cors = require('cors'); // Importando o pacote cors
const sequelize = require('./config');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Habilitando CORS
app.use(cors()); // Isso habilita CORS para todas as rotas

// Usando as rotas
app.use('/api/users', userRoutes);

// Teste de conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});