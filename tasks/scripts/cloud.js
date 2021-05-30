const { sh } = require('tasksfile');
const { Storage } = require('@google-cloud/storage');

require('dotenv').config();

async function uploadFile(options) {
  try {
    const bucketName = process.env.BUCKET_NAME;
    const filePath = options.file;

    if (!bucketName) {
      console.log('Add BUCKET_NAME to env');
      return;
    }

    if (!filePath) {
      console.log('Please specify path to file');
      return;
    }

    const storage = new Storage();
    const bucket = storage.bucket(bucketName);

    const res = await bucket.upload(`./${filePath}`, { destination: `common/${filePath}` });
    console.log(res);
    console.log('Success');
  } catch (ex) {
    console.log(ex);
  }
}

module.exports = {
  uploadFile,
};
