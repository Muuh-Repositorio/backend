import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SaveCowSituations } from './cow_situations/SaveCowSituations.service';
import { SaveCowTypes } from './type_cow/services/SaveCowTypes.service';
import { Chatbot } from './utils/mimosa/Chatbot.service';
import { Notification } from './utils/mimosa/Notification.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))
  
  app.enableCors() 

  const config = new DocumentBuilder()
	.setTitle('Muuh - API')
	.setDescription('Muuh API documentation')
	.setVersion('1.0')
  .addBearerAuth()
	.build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  
  const saveCowTypes = new SaveCowTypes()
  await saveCowTypes.execute()

  const saveCowSituations = new SaveCowSituations()
  await saveCowSituations.execute()

  // const initChatbot = new Chatbot(new Notification())
  // initChatbot.execute()
  
  await app.listen(3000);
}
bootstrap();
