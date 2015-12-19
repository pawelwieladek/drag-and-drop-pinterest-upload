import express from 'express';
import path from 'path';

import routes from './routes';

let app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/api', routes);

app.listen(process.env.PORT || 9000);

export default app;