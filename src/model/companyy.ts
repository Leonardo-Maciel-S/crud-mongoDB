import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: Number,
    required: true,
    min: [14, "Cnpj deve ter no mínimo 14 caractere"],
  },
  address: {
    type: {
      number: {
        type: Number,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
});

export default mongoose.model("Company", companySchema);
