const http = require('http');
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/index') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write('<h2>İlk oluşturduğum web sunucumun <b>index</b> sayfasına hoşgeldiniz!</h2>');
  }
  
  else if (url === '/hakkimda') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write('<h2>İlk oluşturduğum web sunucumun <b>hakkımda</b> sayfasına hoşgeldiniz!</h2>');
  }
  
  else if (url === '/iletisim') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write('<h2>İlk oluşturduğum web sunucumun <b>iletişim</b> sayfasına hoşgeldiniz!</h2>');
  }
  
  else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write('<h1>404 NOT FOUND</h1>');
  }

  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port}'de başlatıldı.`);
});