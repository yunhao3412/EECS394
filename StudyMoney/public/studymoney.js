
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
      contact: "N/A"
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
  
});
*/