Template.admin.helpers({
    'counter1': function () {
        return Counter.find();
    }

});

Template.admin.events({
    'click #incrementar': function () {
        var counterId = this._id;
        Session.set('counter', counterId);

        var counterActual = Session.get('counter');
        console.log(counterActual);

        Counter.update(counterActual, {$inc: {value:1} })
    },

    'click #decrementar': function () {
        var counterActual = Session.get('counter');
        console.log(counterActual);

        Counter.update(counterActual, {$inc: {value: -1} })
    }
});


//{{name}} {{value}}