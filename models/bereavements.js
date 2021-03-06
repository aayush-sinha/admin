// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models

module.exports = (mongoose, Mongoose) => {
  // This section contains the properties of your model, mapped to your collection's properties.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const schema = Mongoose.Schema( {
    formType: {
      type: String,
    },
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
    authorName: {
      type: String,
    },
    subCategoryTime: {
      type: String,
    },
    subCategoryDate: {
      type: Date,
    },
    timeZone: {
      type: String,
    },
    communityCalender: {
      isSelected: Boolean,
      title: {
        type: String,
      },
      contactName: {
        type: String,
      },
      contactNumber: {
        type: Number,
      },
    },
    zipCode: {
      type: Number,
    },
    postTitle: {
      type: String,
    },
    flyer: {
      isSelected: Boolean,
      fileUrl: String,
      imageUrl: String,
    },
    content: {
      isSelected: Boolean,
      templateType: { type: String, enum: ['BLANK', 'EDIT_EXISTING'] },
      editTemplate: {
        nifterName: {
          type: String,
        },
        beloved: {
          type: String,
        },
        subCategoryDate: {
          type: Date,
        },
        subCategoryTime: {
          type: String,
        },
        subCategoryVenue: {
          type: String,
        },
        subCategoryAddress: {
          type: String,
        },
        subCategoryCity: {
          type: String,
        },
        subCategoryZip: {
          type: Number,
        },
        shivaMinyanimVenue: {
          type: String,
        },
        shivaMinyanimAddress: {
          type: String,
        },
        shivaMinyanimCity: {
          type: String,
        },
        shivaMinyanimZip: {
          type: Number,
        },
        daysAndTimeOfMinyanim: {
          type: String,
        },
        daysAndTimeOfVisit: {
          type: String,
        },
        avelName: {
          type: String,
        },
        phone: {
          type: Number,
        },
      },
      blankTemplate: {
        addContent: {
          type: String,
        },
      },
    },
    userid: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
    viewerDetails: {
      type: [String],
    },
    status: {
      type: String,
      default: 'active',
    },
  },
  { timestamps: true }
  );

  return mongoose.model('bereavements', schema, 'bereavements');
};
