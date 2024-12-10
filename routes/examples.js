const express = require("express");
const router = express.Router();
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/exampleController");

// Rotta GET for all examples
router.get("/examples", index);
// Rotta GET for one post
router.get("/examples/:id", show);
// Rotta DELETE for one post
router.delete("/examples/:id", destroy);
// Rotta POST for create a new post
router.post("/examples", store);
// Rotta PUT for update a post
router.put("/examples/:id", update);

module.exports = router;
