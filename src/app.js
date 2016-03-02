import koa from 'koa';
import Jade from 'koa-jade';
import path from 'path';

let app = koa();

const jade = new Jade({ viewPath: path.resolve(__dirname, 'views'), app: app });

app.use(function* () {
  this.render('index', true)
})

app.use(function *() {
  this.body = 'Koa app';
});

app.listen(3000);
