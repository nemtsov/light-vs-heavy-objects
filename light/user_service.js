module.exports = UserService;

function UserService(db) {
  this._db = db;
}

UserService.prototype.create = function (name, age, cb) {
  var user = {name: name, age: age};
  this._db.insert(user, cb);
};

UserService.prototype.read = function (id, cb) {
  this._db.findOne({_id: id}, cb);
};

UserService.prototype.update = function (user, cb) {
  this._db.save(user, cb);
};

UserService.prototype.del = function (id, cb) {
  this._db.remove({_id: id}, cb);
};
