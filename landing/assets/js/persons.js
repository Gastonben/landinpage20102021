Parse.initialize('Dk6gGgFPeXajSp1dYqjuYGpBdApowPJFvDQyHAZ6', 'zGTJyFjUyW2yL6eiCCQNvKBoNNPW8j6utVd5XwnG');
Parse.serverURL = 'https://parseapi.back4app.com/';
let nameP1, nameP2, nameP3, nameP4, nameP5, nameP6, name1MP, name2MP, name3MP, titleP1, titleP2, titleP3, titleP4, titleP5, titleP6, title1MP, title2MP, title3MP;

async function retrievePersonHome() {
    let query = new Parse.Query("Users")

    try {
        let person1MP = await query.get('2WxWqYIXxj');
        name1MP = person1MP.get('name');
        title1MP = person1MP.get('title');

        let person2MP = await query.get('wKYgnsGFOe');
        name2MP = person2MP.get('name');
        title2MP = person2MP.get('title');

        let person3MP = await query.get('HAadNTMZiy');
        name3MP = person3MP.get('name');
        title3MP = person3MP.get('title');

        return {name1MP, name2MP, name3MP, title1MP, title2MP, title3MP};
    } catch (err) {
        console.log('retrieve failed: ', err);
    }
}

async function retrievePersonAbout() {
    let query = new Parse.Query("Users")

    try {
        let person1 = await query.get('KRVXr4bFYE');
        nameP1 = person1.get('name');
        titleP1 = person1.get('title');

        let person2 = await query.get('GNHw1BaRCh');
        nameP2 = person2.get('name');
        titleP2 = person2.get('title');

        let person3 = await query.get('pLH9DCPcUr');
        nameP3 = person3.get('name');
        titleP3 = person3.get('title');

        let person4 = await query.get('LRvi8rMPUh');
        nameP4 = person4.get('name');
        titleP4 = person4.get('title');

        let person5 = await query.get('2XDdwHbV22');
        nameP5 = person5.get('name');
        titleP5 = person5.get('title');

        let person6 = await query.get('ocmZMmjfxM');
        nameP6 = person6.get('name');
        titleP6 = person6.get('title');
        return {nameP1, nameP2, nameP3, nameP4, nameP5, nameP6, titleP1, titleP2, titleP3, titleP4, titleP5, titleP6};
    } catch (err) {
        console.log('retrieve failed: ', err);
    }
}

function sendMail(params){
    emailjs.send(`service_3hounyt`, `template_hh4w0ze`, params)
   .then(function(res){
        console.log("success", res.status);
   });
}
