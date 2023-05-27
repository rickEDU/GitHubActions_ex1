import { Router, Request, Response } from 'express';
import Express from 'express';
import path from 'path';

const router = Router();
router.use(Express.json());
router.use(Express.urlencoded({ extended: true }));

// ----- ROTAS ------
router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

export { router };
