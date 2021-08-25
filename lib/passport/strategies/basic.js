
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const Client = require(appRoot + '/app/models').Client;

const opts = { passReqToCallback: true };

passport.use(new BasicStrategy(opts,
    function (req, clientId, clientSecret, done) {
        Client
            .findOne({
                where: {
                    clientId,
                    clientSecret
                }
            })
            .then(client => {
                if (!client) {
                    return done(null, null, false);
                }
                if (client.locked) {
                    return done(null, false, 'Access token revoked');
                }
                req.Client = client;
                done(null, client);
            })
            .catch(err => {
                done(err);
            });
    }
));

module.exports = passport;