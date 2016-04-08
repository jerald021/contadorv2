Router.configure({
    //layoutTemplate: 'layout',
    //loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return Meteor.subscribe('counter');
    }
});

Router.route('/', {
    name: 'index'
});

Router.route('/admin', {
   name: 'admin'
});