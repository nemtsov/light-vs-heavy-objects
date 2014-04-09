module.exports = User;

function User(db, name, age) {
  this._db = db;
  this.name = name;
  this.age = age;
}

User.prototype.save = function (cb) {
  this._db.save(this, cb);
};

User.prototype.del = function (cb) {
  this._db.remove({_id: this.id}, cb);
};

User.prototype.unmarshall = function (user) {
  this.name = user.name;
  this.age = user.age;
};
