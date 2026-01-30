import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { Team } from './team/team.entity';
import { Player } from './player/player.entity';

@Module({
  imports: [
    // Configuración de la base de datos SQLite
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Team, Player],
      synchronize: true, // Crea las tablas automáticamente
    }),
    // Servir archivos estáticos (para el index.html)
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TeamModule,
    PlayerModule,
  ],
})
export class AppModule {}