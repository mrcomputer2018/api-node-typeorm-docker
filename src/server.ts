import 'reflect-metadata';
import { AppDataSource } from './database/data-source';
import app from './app';

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
.then(async () => {
    console.log('Conexão com o banco de dados realizada com sucesso!');

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
})
.catch(error => {
    console.log('Erro ao conectar com o banco de dados: ', error);
});
