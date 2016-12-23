var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  author: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  reviewText: String,
  createdOn:{
    type: String,
    "default": Date.now
  }
});

var openingTimesSchema = new Schema({

    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    },
});

var locationSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: {
        type: [Number],
        index: '2dsphere'
    },
    openingTimes: [openingTimesSchema],
    review: [reviewSchema]
});

mongoose.model('Location', locationSchema);
