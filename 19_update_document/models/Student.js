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

// Update Document

const updateDocById = async (id) => {
  //   try {
  //     const result = await studentModel.findByIdAndUpdate(
  //       id,
  //       {
  //         name: "prince sharma",
  //       },
  //       {
  //         returnDocument: "after",
  //       }
  //     );
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err);
  //   }
};

const updateDocOne = async (id) => {
  //   try {
  //     const result2 = await studentModel.updateOne(
  //       { _id: id },
  //       { name: "Karan" }
  //     );
  //     console.log(result2);
  //   } catch (err) {
  //     console.log(err);
  //   }
};

const updateDocByAge = async (age) => {
  try {
    const result = await studentModel.updateOne(
      { age: age },
      { name: "prince" }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const updateManyDoc = async (age) => {
  try {
    const result = await studentModel.updateMany(
      { age: age },
      { name: "rahul sharma" }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export { updateDocById, updateDocOne, updateDocByAge, updateManyDoc };
