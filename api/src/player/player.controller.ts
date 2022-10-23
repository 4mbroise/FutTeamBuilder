import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PlayerEntity } from './entities/player.entity';
import { Observable } from 'rxjs';

@ApiTags("player")
@Controller('player')
@UseInterceptors(ClassSerializerInterceptor)
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Returns the array of all players',
    type: PlayerEntity,
    isArray: true
  })
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Returns a player with a given id',
    type: PlayerEntity,
    isArray: false
  })
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(id);
  }
}
