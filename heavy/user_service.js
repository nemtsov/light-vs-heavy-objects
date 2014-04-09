var User = require('./user');

module.exports = UserService;

function UserService(db) {
  this._db = db;
}

UserService.prototype.create = function (name, age, cb) {
  var user = new User(this._db, name, age);
  user.save(cb);
};

UserService.prototype.read = function (id, cb) {
  var self = this;
  function unmarshall(err, dbUser) {
    if (err) return cb(err);
    var user = new User(self._db);
    user.unmarshall(dbUser);
    cb(null, user);
  }
  this._db.findOne({_id: id}, unmarshall);
};
