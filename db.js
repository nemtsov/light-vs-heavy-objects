module.exports = Db;

function Db() {
}

Db.prototype.insert = function (user, cb) {
  cb(null, user);
};

Db.prototype.findOne = function (id, cb) {
  cb(null, {});
};

Db.prototype.save = function (user, cb) {
  cb(null, user);
};

Db.prototype.remove = function (id, cb) {
  cb(null);
};
