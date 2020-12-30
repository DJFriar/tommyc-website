var path = require("path");
// var fs = require("fs");

module.exports = function (app) {
  // ===============================================================================
  // HTML ROUTES
  // ===============================================================================

  app.get("/gwen", function (req, res) {
    res.render("pages/gwen");
  });

  app.get("/photography", function (req, res) {
    res.render("pages/photography");
  });

  app.get("/aboutme", function (req, res) {
    res.render("pages/aboutme");
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.render("pages/index");
  });
};
