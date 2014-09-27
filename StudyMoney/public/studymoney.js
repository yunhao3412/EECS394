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
  
  var testObject = new ResearchStudy();
  testObject.set("title", "beep");
  testObject.set("pay", 5);
  testObject.save(null, {
    success: function(ResearchStudy) {
      alert('New object created with objectId: ' + ResearchStudy.id);
    },
    error: function(ResearchStudy, error) {
      alert('Failed to create new object, with error code: ' + error.message);
    }
  });
});