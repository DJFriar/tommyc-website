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

  app.get("/blog", function (req, res) {
    res.render("pages/blog");
  });

  app.get("/devresume", function (req, res) {
    res.render("pages/devresume");
  });
  
  app.get("/devportfolio", function (req, res) {
    res.render("pages/portfolio");
  });

  app.get("/riderresume", function (req, res) {
    res.render("pages/riderresume");
  });

  app.get("/bikehistory", function (req, res) {
    res.render("pages/motorcycling/bikehistory");
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

  app.get("/ridereports/rat", function (req, res) {
    res.render("pages/ridereports/rat");
  });

  app.get("/tacomadetails", function (req, res) {
    res.render("pages/vehicles/tommytacoma");
  });

  app.get("/civicdetails", function (req, res) {
    res.render("pages/vehicles/civicdetails");
  });

  app.get("/carhistory", function (req, res) {
    res.render("pages/vehicles/carhistory");
  });

  // If no matching route is found, return the 404 page
  app.get("*", function (req, res) {
    res.render("pages/404");
  });
};
