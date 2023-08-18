import { Injectable } from "@nestjs/common";
import { S3Client } from "@aws-sdk/client-s3";
import config from "src/config/config";
import { ConfigService } from "@nestjs/config";
import { S3 } from "aws-sdk";

@Injectable()
export class ContentService {
  private readonly client: S3Client;
  constructor(private configService: ConfigService) {
    this.client = new S3Client({ region: 'eu-central-1' });

  }

  s3Config = this.configService.get('s3');
  s3 = new S3({
    accessKeyId: this.s3Config.AWS_ACCESS_KEY,
    secretAccessKey: this.s3Config.AWS_ACCESS_SECRET,
    region: this.s3Config.AWS_REGION,
  });

  async getFileFromAws(file: string): Promise<{ Body: Buffer; ContentType: string; }> {
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: config().s3.AWS_S3_BUCKET,
        Key: `${config().s3.AWS_S3_FOLDER}/${file}`,
      };

      this.s3.getObject(params, (err, data: any) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  }
}