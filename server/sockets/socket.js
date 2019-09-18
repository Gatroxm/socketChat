const { io } = require('../server');
const { Users } = require('../classes/Users');

const person = new Users();

io.on('connection', (client) => {

    client.on('enterChat', (user, callback) => {

        if ( !user.name ) {
            return callback({
                err: true,
                message: 'El nombre es necesario'
            });
        } 

        let people = person.addPerson( client.id, user.name)

        client.broadcast.emit('peopleList', person.getPerson() );
        
        callback( people );
    });
    
    client.on('disconnect', () => {
        let deletePerson = person.deletePerson( client.id ); 
        
        client.broadcast.emit('createMessage', { usuario: 'Administrator', message: `El Usuario ${ deletePerson.name } ha salido de la sala`});
        client.broadcast.emit('peopleList', person.getPerson());

    });

}); 