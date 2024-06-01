const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const db = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const dashboardRoutes = require('./routes/dashboard'); 
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

// Configuração CORS
app.use(cors());

// Configuração do Body Parser
app.use(bodyParser.json());

// Configuração do Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

// Configuração de sessões
app.use(session({
  secret: 'sua_chave_secreta',
  resave: false,
  saveUninitialized: false
}));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Middleware para tratamento de erros
app.use(errorHandler);

// Conexão com o banco de dados
db.sync()
    .then(() => {
        console.log('Conectado ao banco de dados.');
        app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
    })
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));