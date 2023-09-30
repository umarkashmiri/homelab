import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@homelab-db:27017/', {
      autoCreate: true,
      dbName: 'homelab',
      auth: {
        username: 'root',
        password: 'root'
      }
    }),
    UserModule
  ],
})
export class AppModule {

}
