import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorsModule } from './authors/authors.module'
import { ReleasesModule } from './releases/releases.module'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { HttpErrorFilter } from './shared/http-error.filter'
import { LoggingInterceptor } from './shared/logging.interceptor'

@Module({
  imports: [
    ConfigModule.forRoot(), // For env files
    AuthorsModule,
    ReleasesModule,
    TypeOrmModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
