
class Users {

    constructor() {
        this.people = [];
    }

    addPerson( id, name) {
        
        let person = {
            id,
            name
        };

        this.people.push(person);

        return this.people;
    }

    getPerson( id ) {
        let person = this.people.filter( person => person.id === id)[0];
        return person;
    }

    getPeople() {
        return this.people;
    }

    getPeoplePerRoom( room ) {  
        //...
    }

    deletePerson( id ) {

        let deletePerson = this.getPerson( id );
        this.people = this.people.filter( person => person.id != id);

        return deletePerson;
    }

}

module.exports = {
    Users
}