import dva from 'dva';
// import 'babel-polyfill';

import './index.css';

const app = dva();

app.use(require('dva-loading')());

app.model(require('./models/cnode').default);

app.router(require('./router').default);

app.start('#app');
