import express, { Request, Response } from 'express';
import { upload } from './upload';

const app = express();
const PORT = 3001;

// Endpoint para fazer upload de imagem
app.post('/upload', upload.single('image'), (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Nenhum arquivo enviado' });
    }

    // A URL da imagem está disponível em req.file.path
    res.status(200).json({
        message: 'Upload bem-sucedido!',
        url: req.file.path,  // URL da imagem no Cloudinary
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
