define('plugin', [], {
    load: function (name, req, load, config) {
        req([name], function (value) {
            load(value);
        });
    }
});

define('person', [], {
        name: 'person'
});

define('employee', ['plugin!dynamic/person'], function(person) {
    return {
        name: 'employed ' + person.name
    };
});

define('application', ['dynamic/person'], function(person) {
    return {
        name: 'application',
        person: person
    };
});

require({
    map: {
        '*': {
            'person': 'employee'
        },
        'employee': {
            'person': 'person'
        }
    }
}, ['dynamic/application'], function (application) {

    doh.register(
        'pluginMap',
        [
            function pluginMap(t){
                t.is('application', application.name);
                t.is('employed person', application.person.name);
            }
        ]
    );
    doh.run();

});
