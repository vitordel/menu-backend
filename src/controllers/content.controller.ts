import { Controller, Get, Param } from "@nestjs/common";
import { ContentService } from "src/services/content.service";

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) { }

  @Get('/images/:file')
  getFileFromAws(@Param('file') file: string) {
    return this.contentService.getFileFromAws(file);
  }
}