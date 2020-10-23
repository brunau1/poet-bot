require('dotenv').config();

module.exports = {
  FBUser: process.env.FB_EMAIL || '',
  FBPass: process.env.FB_PASSWORD || '',
  TWUser: process.env.TW_EMAIL || '',
  TWPass: process.env.TW_PASSWORD || '',
};
