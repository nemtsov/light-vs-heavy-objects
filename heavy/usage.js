var Db = require('../db'),
  UserService = require('./user_service'),
  userService = new UserService(new Db());

function main(cb) {
  function create() {
    userService.create('mary', 24, read);
  }

  function read(err, user) {
    if (err) return cb(err);
    userService.read(user._id, update);
  }

  function update(err, user) {
    if (err) return cb(err);
    user.age = 21;
    user.save(del);
  }

  function del(err, user) {
    if (err) return cb(err);
    user.del(cb);
  }

  create();
}

main(function (err) {
  console.log('ok');
});
