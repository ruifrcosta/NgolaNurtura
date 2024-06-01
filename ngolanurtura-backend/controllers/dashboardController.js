const { Op } = require('sequelize');
const User = require('../models/User');
const Donation = require('../models/Donation');
const Request = require('../models/Request');
const CentroColeta = require('../models/CentroColeta');
const Stock = require('../models/Stock'); 
const Notification = require('../models/Notification'); 

// Função para obter dados do dashboard
exports.getDashboardData = async (req, res) => {
  try {
    const totalDoacoes = await Donation.count();
    const totalPedidos = await Request.count();
    const novasDoadoras = await User.count({
      where: {
        tipo_usuario: 'mae_doadora',
        createdAt: {
          [Op.gte]: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)) // Últimos 7 dias
        }
      }
    });

    const estoqueTotal = await Stock.sum('quantidade_leite'); 

    res.json({
      totalDoacoes,
      totalPedidos,
      novasDoadoras,
      estoqueTotal
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter dados do dashboard' });
  }
};

// Função para obter pedidos recentes
exports.getRecentRequests = async (req, res) => {
  try {
    const pedidosRecentes = await Request.findAll({
      order: [['data_pedido', 'DESC']],
      limit: 10 // Mostrar os 10 pedidos mais recentes
    });

    res.json(pedidosRecentes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter pedidos recentes' });
  }
};

// Função para obter informações dos centros de coleta
exports.getDonationCenters = async (req, res) => {
  try {
    const centrosColeta = await CentroColeta.findAll({
      include: [{
        model: Stock,
        attributes: ['quantidade_leite'],
        required: false 
      }]
    });

    res.json(centrosColeta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter centros de coleta' });
  }
};

// Função para obter notificações
exports.getNotifications = async (req, res) => {
  try {
    const notificacoes = await Notification.findAll({
      where: {
        lido: false
      }
    });

    res.json(notificacoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter notificações' });
  }
};