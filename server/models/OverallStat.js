import mongoose from 'mongoose';

const OverallStatSchema = mongoose.Schema(
  {
    totalCustomer: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: {
      date: String,
      totalSales: Number,
      totalUnits: Number,
    },
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const overallStat = mongoose.model('OverallStat', OverallStatSchema);
export default overallStat;
