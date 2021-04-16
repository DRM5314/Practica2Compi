import {Router} from 'express';
import funcionesRequesResponse from '../funReqRes/funReqRes';

const router = Router();

router.get('/editor',funcionesRequesResponse.editor);

router.get('/analizadores',funcionesRequesResponse.analizadores);

router.post('/analizar', funcionesRequesResponse.analizar);

router.post('/editor',funcionesRequesResponse.regreso);
export default router;