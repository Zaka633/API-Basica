import express from 'express';
import dbConfig from './db/db_config.js';
import clientesRouter from './routes/clientes_routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'aula1109-api' });
});

app.use(express.json());
app.use('/clientes', clientesRouter);

dbConfig
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Falha ao conectar/sincronizar com o banco de dados.\n', err.message);
    console.error(
      'Dica: configure as variáveis de ambiente DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD ou use docker compose up.'
    );
    process.exit(1);
  });