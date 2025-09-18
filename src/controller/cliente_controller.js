import Cliente from '../model/cliente.js';

export default class ClienteController {
  static async findAll(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.json({ clientes });
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao listar clientes', details: err.message });
    }
  }

  static async create(req, res) {
    const { nome, email, telefone } = req.body;
    try {
      const cliente = await Cliente.create({ nome, email, telefone });
      return res.status(201).json({ cliente });
    } catch (err) {
      const status = err.name && (err.name.includes('Validation') || err.name.includes('Unique')) ? 400 : 500;
      return res.status(status).json({ error: 'Erro ao cadastrar cliente', details: err.message });
    }
  }
}
