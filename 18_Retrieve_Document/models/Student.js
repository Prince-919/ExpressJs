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
    max: 58,
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

const studentModel = new mongoose.model("student", studentSchema);

// All Data Retrieve
const getAllDoc = async () => {
  const results = await studentModel.find();
  // console.log(results);
  results.forEach((items) =>
    console.log(
      items.name,
      items.age,
      items.fees.toString(),
      items.hobbies[0],
      items.hobbies[1],
      items.isactive,
      items.comment[0].value,
      items.comment[0].publish,
      items.join
    )
  );
};

export { getAllDoc };
