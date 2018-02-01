
module.exports = function (user) {

var app = require('../../server/server');

  // Set the username to the users email address by default.
  user.observe('after save', function setDefaultUsername(ctx, next) {
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

    if (ctx.instance) {
      if(ctx.isNewInstance) {
        ctx.instance.username = ctx.instance.email;
          console.log(ctx.instance.id);
            console.log(ctx.instance.user_type);
      Role.find({where: {name: ctx.instance.user_type}}, function(err, role) {
          console.log('Roles:'+role[0].id+'Name:'+role[0].name);
        if (err) {return console.log(err);}

        RoleMapping.create({
          principalType: "USER",
          principalId: ctx.instance.id,
          roleId: role[0].id
        }, function(err, roleMapping) {

          if (err) {return console.log(err);}

          console.log('User assigned RoleID ' + role[0].id + ' (' + ctx.instance.user_type + ')');

        })

      });
      }
      ctx.instance.status = 'created';
      ctx.instance.created = Date.now();
    }
    next();
  });

};
