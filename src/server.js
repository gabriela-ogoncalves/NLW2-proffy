const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages');

// Servidor
const express = require('express');
const server = express()

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/pages', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// start do servidor
.listen(5000)