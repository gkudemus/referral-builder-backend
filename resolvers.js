const Referral = require("./models/Referral"); // Ensure the path is correct

const resolvers = {
  Query: {
    referrals: async () => {
      try {
        return await Referral.find();
      } catch (error) {
        throw new Error("Error fetching referrals");
      }
    },
  },
  Mutation: {
    createReferral: async (_, { input }) => {
      try {
        const newReferral = new Referral(input);
        return await newReferral.save();
      } catch (error) {
        throw new Error("Error creating referral");
      }
    },
    updateReferral: async (_, { id, input }) => {
      try {
        const updatedReferral = await Referral.findByIdAndUpdate(id, input, {
          new: true,
        }).exec();
        if (!updatedReferral) {
          throw new Error("Referral not found for update");
        }
        return updatedReferral; // Return the updated referral
      } catch (error) {
        throw new Error(`Error updating referral: ${error.message}`);
      }
    },
    deleteReferral: async (_, { id }) => {
      try {
        // Check if the referral exists
        const referral = await Referral.findById(id);
        if (!referral) {
          throw new Error("Referral not found");
        }

        // Attempt to delete the referral
        const result = await Referral.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
          return true; // Return true if the referral was successfully deleted
        } else {
          throw new Error("Referral could not be deleted");
        }
      } catch (error) {
        throw new Error(`Error deleting referral: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
