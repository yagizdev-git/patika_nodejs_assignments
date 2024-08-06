// Installing Koa.js
const Koa = require('koa');
const app = new Koa();

// Req - Res Loop
app.use(async ctx => {
  // Index page
  if (ctx.path === '/index') {
    ctx.status = 200;
    ctx.set('Content-Type', 'text/html; charset=UTF-8');
    ctx.body = '<h1>Index sayfasına hoşgeldiniz!</h1>';
  }
  // Hakkimda page
  else if (ctx.path === '/hakkimda') {
    ctx.status = 200;
    ctx.set('Content-Type', 'text/html; charset=UTF-8');
    ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz!</h1>';
  }
  // İletisim page
  else if (ctx.path === '/iletisim') {
    ctx.status = 200;
    ctx.set('Content-Type', 'text/html; charset=UTF-8');
    ctx.body = '<h1>İletişim sayfasına hoşgeldiniz!</h1>';
  }
  // 404
  else {
    ctx.status = 404;
    ctx.set('Content-Type', 'text/html; charset=UTF-8');
    ctx.body = '<h1>404 NOT FOUND</h1>';
  }
});

// Port Listen
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port}'da çalışmaya başladı.`);
});