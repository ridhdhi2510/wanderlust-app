const Listing =require("../models/listing.js");

module.exports.tranding = async (req, res)=>{
     const allListings = await Listing.find({
          category: { $in: ["Tranding"] }
      });
      res.render("listings/index.ejs" , {allListings})
}

module.exports.rooms = async (req, res)=>{
     const allListings = await Listing.find({
          category: { $in: ["Rooms"] }
      });
      res.render("listings/index.ejs" , {allListings})
}

module.exports.iconicCity = async (req, res)=>{
     const allListings = await Listing.find({
          category: { $in: ["Iconic Cities"] }
      });
      res.render("listings/index.ejs" , {allListings})
}

module.exports.mountains = async (req, res)=>{
     const allListings = await Listing.find({
          category: { $in: ["Mountains"] }
      });
      res.render("listings/index.ejs" , {allListings})
}

module.exports.castles = async (req, res)=>{
     const allListings = await Listing.find({
          category: { $in: ["Castles"] }
      });
      res.render("listings/index.ejs" , {allListings})
}

module.exports.pools = async (req, res)=>{
     const allListings = await Listing.find({
          category: { $in: ["Amazing pools"] }
      });
      res.render("listings/index.ejs" , {allListings})
}

module.exports.camping = async (req, res)=>{
     const allListings = await Listing.find({
          category: { $in: ["Camping"] }
      });
      res.render("listings/index.ejs" , {allListings})
}

module.exports.farms = async (req, res)=>{
     const allListings = await Listing.find({
          category: { $in: ["Farm"] }
      });
      res.render("listings/index.ejs" , {allListings})
}

module.exports.beach = async (req, res)=>{
     const allListings = await Listing.find({
          category: { $in: ["Beach"] }
      });
      res.render("listings/index.ejs" , {allListings})
}