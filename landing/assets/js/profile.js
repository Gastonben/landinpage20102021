Parse.initialize('Dk6gGgFPeXajSp1dYqjuYGpBdApowPJFvDQyHAZ6', 'zGTJyFjUyW2yL6eiCCQNvKBoNNPW8j6utVd5XwnG');
Parse.serverURL = 'https://parseapi.back4app.com/';

async function retrievePerson() {
    let Person = Parse.Object.extend('');
    let query = new Parse.Query(Person)

    try {
        let person1 = query.get('KRVXr4bFYE');
        let nameP1 = person1.get('name');
        let titleP1 = person1.get('title');
        
        let person2 = query.get('GNHw1BaRCh');
        let nameP2 = person2.get('name');
        let titleP2 = person2.get('title');
        
        let person3 = query.get('pLH9DCPcUr');
        let nameP3 = person3.get('name');
        let titleP3 = person3.get('title');
        
        let person4 = query.get('LRvi8rMPUh');
        let nameP4 = person4.get('name');
        let titleP4 = person4.get('title');
        
        let person5 = query.get('2XDdwHbV22');
        let nameP5 = person5.get('name');
        let titleP5 = person5.get('title');
        
        let person6 = query.get('ocmZMmjfxM');
        let nameP6 = person6.get('name');
        let titleP6 = person6.get('title');

        let person1MP = query.get('2WxWqYIXxj');
        let name1MP = person1MP.get('name');
        let title1MP = person1MP.get('title');

        let person2MP = query.get('wKYgnsGFOe');
        let name2MP = person2MP.get('name');
        let title2MP = person2MP.get('title');

        let person3MP = query.get('HAadNTMZiy');
        let name3MP = person3MP.get('name');
        let title3MP = person3MP.get('title');
    } catch (err) {
        console.log('retrieve failed: ', err);
    }
}
