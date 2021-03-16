import * as express from 'express';
import apiRouter from './routes'
let app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRouter)



app.listen(3000)