const Koa= require('koa');
const app= new Koa();
app.use(ctx => {  
  if(ctx.path=='/'){
    ctx.body= '<h1>Index Sayfasına Hosgeldiniz</h1>';
  }
  else if(ctx.path=='/hakkimda'){
    ctx.body= '<h1>Hakkimda Sayfasına Hosgeldiniz</h1>';
  }
  else if(ctx.path=='/iletisim'){
    ctx.body= '<h1>Iletisim Sayfasına Hosgeldiniz</h1>';
  }
  else{
    ctx.body= '<h1>404 Sayfa Bulunamadi</h1>';
  }
});
app.listen(3000);