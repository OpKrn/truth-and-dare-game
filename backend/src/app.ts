import express from 'express';
import { setGameRoutes } from './routes/gameRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setGameRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});