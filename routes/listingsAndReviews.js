import express from "express";
import ListingsAndReviews from "../models/ListingsAndReviews.js";

const router = express.Router();

router.get("/listings", async (req, res) => {
  try {
    const result = await ListingsAndReviews.find().limit(10);
    return res.status(200).json(result);
  } catch (error) {
    console.error("error", error);
  }
});
router.get("/listings/limit", async (req, res) => {
  const limit = req.query.limit;

  try {
    const result = await ListingsAndReviews.find().limit(limit || 5);
    return res.status(200).json(result);
  } catch (error) {
    console.error("error", error);
  }
});
router.get("/listings/search", async (req, res) => {
  try {
    const result = await ListingsAndReviews.find()
      .limit(10)
      .select(" name , propertyType , beds , numberOfReviews , price");
    return res.status(200).json(result);
  } catch (error) {
    console.error("error", error);
  }
});
router.get("/listings/skip", async (req, res) => {
  const skip = +req.query.skip;
  try {
    const result = await ListingsAndReviews.find()
      .limit(10)
      .skip(skip)
      .select(" name , propertyType , beds , numberOfReviews , price");
    return res.status(200).json(result);
  } catch (error) {
    console.error("error", error);
  }
});
//BONUS
router.get("/listings/pagination", async (req, res) => {
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.pageSize) || 10;
  try {
    const skipRows = (page - 1) * pageSize;
    const result = await ListingsAndReviews.find()
      .skip(skipRows)
      .limit(pageSize)
      .select("name")
      .lean();
    return res.status(200).json(result);
  } catch (error) {
    console.log("error", error);
  }
});
export default router;
