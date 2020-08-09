const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {

    // Inserir os dados
    proffyValue = {
        name: "Gabriela Gonçalves", 
        avatar: "https://avatars0.githubusercontent.com/u/68876780?s=460&u=c11ec0571a10be54488e1675499930b8ad2bef08&v=4", 
        whatsapp:"21998509882", 
        bio:"Instrutora de matemática", 
    }

    classValue = {
        subject:"7", 
        cost:"30", 
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // o class_id virá pelo banco de dados após cadastramos a class (aula)
        {
            weekday:1, 
            time_from:720, 
            time_to:1220
        },
        {
            weekday:3, 
            time_from:520, 
            time_to:1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Consultar os dados inseridos

    // todos os proffys
    const allProffys = await db.all("SELECT * FROM proffys")
    // console.log(allProffys)

    // consultar as classes de um determinado professor e trazer junto os dados dele
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys )

    // o horario que a pessoa trabalha, por exemplo, é de 8h - 18h
    // o time_from (8h) precisa ser menor ou igual ao horario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 1
        AND class_schedule.time_from <= 720
        AND class_schedule.time_to > 720
    `)
    console.log(selectClassesSchedules)

})