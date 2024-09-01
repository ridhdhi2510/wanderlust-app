const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js"); 
const Review = require("../models/review.js"); 
const Listing =require("../models/listing.js");
const {validateReviews, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//Reviews -- POST route
router.post("/" ,isLoggedIn, validateReviews ,wrapAsync(reviewController.createReview));

//Review -- Delete Review
router.delete("/:reviewId" ,isLoggedIn , isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router