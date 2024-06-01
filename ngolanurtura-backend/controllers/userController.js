const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id_usuario);
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao obter usuário.' });
  }
};

exports.updateUser = async (req, res) => {
  const { nome_completo, interesses, necessidades_especificas_leite, preferencias_comunicacao } = req.body;

  try {
    const user = await User.findByPk(req.user.id_usuario);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    await user.update({
      nome_completo,
      interesses,
      necessidades_especificas_leite,
      preferencias_comunicacao
    });

    return res.json({ message: 'Usuário atualizado com sucesso.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao atualizar usuário.' });
  }
};

exports.updatePassword = async (req, res) => {
  const { senha_atual, nova_senha } = req.body;

  try {
    const user = await User.findByPk(req.user.id_usuario);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const isMatch = await bcrypt.compare(senha_atual, user.senha);
    if (!isMatch) {
      return res.status(401).json({ message: 'Senha atual inválida.' });
    }

    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(nova_senha, saltRounds);

    await user.update({ senha: senhaHash });
    return res.json({ message: 'Senha atualizada com sucesso.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao atualizar senha.' });
  }
};