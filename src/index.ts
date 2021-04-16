import express,{Request,Response,NextFunction} from 'express';
import path from 'path';
import router from './routes/indexRoute';
import bodyParser from 'body-parser';

const app = express();
const port = 8888;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use((req:Request,res:Response,next:NextFunction)=>{
    console.log(`${req.url} usa metodo ${req.method}`);
    next();
});

app.use(router);

app.listen(port,()=>{
    console.log('Servidor en puerto: ',port);
});