import * as path from 'path';

const EMAIL_CONTATO = 'contato@edupass.one';

export default () => ({
  security: {
    jwtSecret: process.env.JWT_SECRET || 'secretjwt1234',
  },
  s3: {
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_ACCESS_SECRET: process.env.AWS_ACCESS_SECRET,
    AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
    AWS_S3_FOLDER: process.env.AWS_S3_FOLDER,
    AWS_REGION: 'us-east-1'
  },

  email: {
    contato: EMAIL_CONTATO,
    smtpEmail: 'contato@edupass.one',
    host: process.env.EMAIL_SERVICE || 'http://localhost:3002',
    service_token: process.env.EMAIL_SERVICE_TOKEN,
  },
});
