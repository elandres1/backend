import { Module } from '@nestjs/common';
import { CharacterService } from './services/character.service';
import { CharacterController } from './controllers/character.controller';

@Module({
  providers: [CharacterService],
  controllers: [CharacterController]
})
export class CharacterModule {}
