import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 50,
  },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5500.5,
  },
  hobbies: {
    type: Array,
  },
  isactive: {
    type: Boolean,
  },
  comment: [
    {
      value: {
        type: String,
      },
      publish: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  join: {
    type: Date,
    default: Date.now,
  },
});

// Create a models

const studentModel = new mongoose.model("student", studentSchema);

// Create a data
const createDoc = async (name, age, fees, hobbies, isactive, comment) => {
  try {
    // Insert Data
    const studentDoc = new studentModel({
      name: name,
      age: age,
      fees: fees,
      hobbies: hobbies,
      isactive: isactive,
      comment: comment,
    });

    // Save Data
    const results = await studentDoc.save();
    // console.log(results);
    console.log("Data Create Successfully..");
  } catch (err) {
    console.log(err);
  }
};

export default createDoc;
