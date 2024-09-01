const express = require("express");
const router = express.Router();
const Listing =require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner , validateListings} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const categoryController = require("../controllers/category.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage})

//Index & Create Route
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn , upload.single('listing[image]'), validateListings, wrapAsync(listingController.createListing));


//category
router.get("/tranding" ,categoryController.tranding);
router.get("/rooms" ,categoryController.rooms);
router.get("/iconicCity" ,categoryController.iconicCity);
router.get("/mountains" ,categoryController.mountains);
router.get("/castles" ,categoryController.castles);
router.get("/pools" ,categoryController.pools);
router.get("/camping" ,categoryController.camping);
router.get("/farms" ,categoryController.farms);
router.get("/beach" ,categoryController.beach);
//New Route
router.get("/new" , isLoggedIn , listingController.renderNewForm);

//Show , Update & Delete Route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn ,isOwner , upload.single('listing[image]'), validateListings, wrapAsync(listingController.updateListing))
.delete(isLoggedIn , isOwner, wrapAsync(listingController.destroyListing));



//edit route
router.get("/:id/edit" , isLoggedIn , isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;