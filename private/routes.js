var path = require("path");
// var fs = require("fs");

module.exports = function (app) {
  // ===============================================================================
  // HTML ROUTES
  // ===============================================================================

  app.get("/", function (req, res) {
    res.render("pages/index");
  });

  app.get("/gwen", function (req, res) {
    res.render("pages/gwen");
  });

  app.get("/photography", function (req, res) {
    res.render("pages/photography");
  });

  app.get("/aboutme", function (req, res) {
    res.render("pages/aboutme");
  });

  app.get("/misc", function (req, res) {
    res.render("pages/misc");
  });

  app.get("/devresume", function (req, res) {
    res.render("pages/devresume");
  });

  app.get("/riderresume", function (req, res) {
    res.render("pages/riderresume");
  });

  app.get("/ridereports", function (req, res) {
    res.render("pages/ridereports/ridereports");
  });

  app.get("/ridereports/iba1", function (req, res) {
    res.render("pages/ridereports/iba1");
  });

  app.get("/ridereports/iba2", function (req, res) {
    res.render("pages/ridereports/iba2");
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.render("pages/index");
  });
};
