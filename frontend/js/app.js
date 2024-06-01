const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const db = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

// Configuração CORS
app.use(cors());

// Configuração do Body Parser
app.use(bodyParser.json());

// Configuração do Passport
app.use(passport.initialize());
require('./config/passport');

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Middleware para tratamento de erros
app.use(errorHandler);

// Conexão com o banco de dados
db.sync()
  .then(() => {
    console.log('Conectado ao banco de dados.');
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
  })
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));



const dashboardRoutes = require('./routes/dashboard');


app.use('/api/dashboard', dashboardRoutes); 
