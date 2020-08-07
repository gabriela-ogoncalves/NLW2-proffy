// Dados
const proffys = [
    { 
        name: "Gabriela Gonçalves", 
        avatar: "https://avatars0.githubusercontent.com/u/68876780?s=460&u=c11ec0571a10be54488e1675499930b8ad2bef08&v=4", 
        whatsapp:"21998509882", 
        bio:"Entusiasta das melhores tecnologias de matemática avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Matemática", 
        cost:"30", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220]
    },
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"123456789", 
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química", 
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220]
    },
    { 
        name: "Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"123456789", 
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química", 
        cost:"20", 
        weekday:[1], 
        time_from:[720], 
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query;

    //se tiver dados (data)
    const isNotEmpty = Object.keys(data).length > 0;
    if (isNotEmpty) {
        // adicionar dados a lista de proffys

        data.subject = getSubject(data.subject);
        
        proffys.push(data);
        return res.redirect("/study")
    }

    // senão, não adicionar
    return res.render("give-classes.html", { subjects, weekdays })
}

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
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// start do servidor
.listen(5000)