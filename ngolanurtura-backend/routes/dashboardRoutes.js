const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); 
const { getDashboardData, getRecentRequests, getDonationCenters, getNotifications } = require('../controllers/dashboard');

// Middleware de autenticação para todas as rotas do dashboard
router.use(auth);

// Rota para obter dados do dashboard
router.get('/', getDashboardData);

// Rota para obter pedidos recentes
router.get('/pedidos-recentes', getRecentRequests);

// Rota para obter informações dos centros de coleta
router.get('/centros-coleta', getDonationCenters);

// Rota para obter notificações
router.get('/notificacoes', getNotifications);

module.exports = router;