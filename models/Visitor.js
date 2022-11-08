
import mongoose from 'mongoose';

const VisitorSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

export default mongoose.model('Visitor', VisitorSchema);