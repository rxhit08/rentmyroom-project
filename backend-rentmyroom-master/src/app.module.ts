import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PhoneNumber, Property, User } from './entities';
import { ConfigModule } from '@nestjs/config';
import { PropertyModule } from './property/property.module';
import { PhoneNumberModule } from './phonenumber/phonenumber.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'iamrohitrk00',
      password: 'test',
      database: 'postgres',
      entities: [User, Property, PhoneNumber],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PropertyModule,
    PhoneNumberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
