import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const port = process.env.NX_PORT || 3333;
  const globalPrefix = "";

  const app = await NestFactory.create(AppModule);

  app
    .setGlobalPrefix(globalPrefix)
    .useGlobalPipes(
      new ValidationPipe({
        transform: true,
      })
    )
    .enableCors({
      origin: "*",
    });

  const config = new DocumentBuilder()
    .setTitle("IMSS")
    .setDescription("IZTECH Master's Students System API documentation")
    .setVersion("1.0")
    .addBearerAuth()
    .addTag("auth", "User related endpoints")
    .addTag("forms", "Form related endpoints")
    .addTag("theses", "Thesis related endpoints")
    .addTag("tss", "Thesis exam result related endpoints")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(port, async () => {
    Logger.log(`Listening at ${await app.getUrl()}`);
  });
}

bootstrap();
