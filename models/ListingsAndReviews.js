import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  thumbnail_url: String,
  medium_url: String,
  picture_url: String,
  xl_picture_url: String,
});

const addressSchema = new mongoose.Schema({
  street: String,
  suburb: String,
  government_area: String,
  market: String,
  country: String,
  country_code: String,
});

const reviewsSchema = new mongoose.Schema({
  date: Date,
  listing_id: String,
  reviewer_id: String,
  reviewer_name: String,
  comments: String,
});

const listingsAndReviewsSchema = new mongoose.Schema(
  {
    listing_url: String,
    name: String,
    summary: String,
    space: String,
    description: String,
    neighborhood_overview: String,
    notes: String,
    transit: String,
    access: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
    last_scraped: Date,
    calendar_last_scraped: Date,
    first_review: Date,
    last_review: Date,
    accommodates: Number,
    bedrooms: Number,
    beds: Number,
    number_of_reviews: Number,
    bathrooms: Number,
    price: Number,
    security_deposit: Number,
    cleaning_fee: Number,
    extra_people: Number,
    guests_included: Number,
    amenties: [String],
    images: imageSchema,
    address: addressSchema,
    reviews: [reviewsSchema],
  },
  { collection: "listingsAndReviews" }
);

const ListingsAndReviews = mongoose.model(
  "listingsAndReviews",
  listingsAndReviewsSchema
);

export default ListingsAndReviews;
