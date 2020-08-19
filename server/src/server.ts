import express from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express();
const upload = multer({dest: 'uploads/'});

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    return response.json({
        Hello: "dev"
    });
});

app.post('/upload', upload.array('img'), (request, response) => {
    return response.json();
});

app.listen(3333);
