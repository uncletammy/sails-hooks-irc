var _ = require('lodash');
var irc = require('irc');

module.exports = function irc(sails) {

    return {
        signIn: function(message){
            var hook = this;

            console.log('Registering Bots!')
        },
        // Run automatically when the hook initializes
        initialize: function (cb) {

            var hook = this;
            var eventsToWaitFor = [];
            if (sails.hooks.orm) {
                eventsToWaitFor.push('hook:orm:loaded');
            }

            sails.after(eventsToWaitFor, hook.signIn);

            // You must trigger `cb` so sails can continue loading.  If you pass in an error, sails will fail to load, and display your error on the console.
            return cb();
        },
    }
};
