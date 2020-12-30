var path = require("path");
var fs = require("fs");

module.exports = function (app) {
  // ===============================================================================
  // HTML ROUTES
  // ===============================================================================

  app.get("/gwen", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/gwen.html"));
  });

  app.get("/photography", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/photography.html"));
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
