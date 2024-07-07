import mongoose, { model } from 'mongoose';
import { mongoSaveError, setMongoUpdateSettings } from './hooks';
const { Schema } = mongoose;
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', mongoSaveError);
contactSchema.pre('findOneAndUpdate', setMongoUpdateSettings);
contactSchema.post('findOneAndUpdate', mongoSaveError);
const Contact = model('contact', contactSchema);

export default Contact;