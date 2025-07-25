 let person = {
    first_name : 'john',
    last_name : 'doe',
    age : 30,
    full_name : function() {
        return person.first_name + ' ' + person.last_name;
    },
    city : ['new york', 'los angeles', 'chicago'],
 };

 console.log(person.full_name());