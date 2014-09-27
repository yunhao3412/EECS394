
/*
$(function() {
  
  Parse.$ = jQuery
  
  Parse.initialize("2Adfr8LRfl5VwX8WgHQHRKZo6GpNcsiUvdBXoBya", "xGwCwmFcuKXxI9JwDuRcJs8uch6UMQAYPre18dzH");
      
  var ResearchStudy = Parse.Object.extend("ResearchStudy", {
    defaults: {
      title: "N/A",
      requirements: "N/A",
      duration: "N/A",
      pay: "N/A",
      expiration: "N/A",
      description: "N/A",
      contact: "N/A",
      URL: "N/A"
    }
  })
  
  var study = new ResearchStudy(); 
  study.save({
    title: "Study on Life Roles and Experiences",
    duration: "15 minutes",
    pay: 5,
    contact: "scm.lab.northwestern@gmail.com"
  }, {
    success: function(study) {
      // The object was saved successfully.
    },
    error: function(study, error) {
      // The save failed.
      // error is a Parse.Error with an error code and message.
    }
  });
  
  study = new ResearchStudy(); 
  study.save({
    title: "Brain Development",
    requirements: "18-34 years of age",
    duration: "Variable",
    pay: 25,
    contact: "lhn@northwestern.edu"
  }, {
    success: function(study) {
      // The object was saved successfully.
    },
    error: function(study, error) {
      // The save failed.
      // error is a Parse.Error with an error code and message.
    }
  });
  
  study = new ResearchStudy(); 
  study.save({
    title: "Skill Learning",
    requirements: "Over 18 years of age",
    duration: "Variable",
    pay: 10,
    contact: "reberlab@gmail.com"
  }, {
    success: function(study) {
      // The object was saved successfully.
    },
    error: function(study, error) {
      // The save failed.
      // error is a Parse.Error with an error code and message.
    }
  });
  
  study = new ResearchStudy(); 
  study.save({
    title: "College Experiences",
    duration: "30 minutes",
    pay: 10,
    contact: "nuselflab@gmail.com"
  }, {
    success: function(study) {
      // The object was saved successfully.
    },
    error: function(study, error) {
      // The save failed.
      // error is a Parse.Error with an error code and message.
    }
  });
  
  var LogInView = Parse.View.extend({
    events: {
      "submit form.login-form": "logIn",
      "submit form.signup-form": "signUp"
    },

    el: ".content",
    
    initialize: function() {
      _.bindAll(this, "logIn", "signUp");
      this.render();
    },

    logIn: function(e) {
      var self = this;
      var username = this.$("#login-username").val();
      var password = this.$("#login-password").val();
      
      Parse.User.logIn(username, password, {
        success: function(user) {
          new ManageTodosView();
          self.undelegateEvents();
          delete self;
        },

        error: function(user, error) {
          self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
          self.$(".login-form button").removeAttr("disabled");
        }
      });

      this.$(".login-form button").attr("disabled", "disabled");

      return false;
    },

    signUp: function(e) {
      var self = this;
      var username = this.$("#signup-username").val();
      var password = this.$("#signup-password").val();
      
      Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
        success: function(user) {
          new ManageTodosView();
          self.undelegateEvents();
          delete self;
        },

        error: function(user, error) {
          self.$(".signup-form .error").html(error.message).show();
          self.$(".signup-form button").removeAttr("disabled");
        }
      });

      this.$(".signup-form button").attr("disabled", "disabled");

      return false;
    },

    render: function() {
      this.$el.html(_.template($("#login-template").html()));
      this.delegateEvents();
    }
  });
  
});
*/