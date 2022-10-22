import { Type } from "class-transformer"
import { ArrayMaxSize, ArrayMinSize, IsArray, IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"
import { PlayerEntity } from "src/player/entities/player.entity"

export class CreateTeamDto {
    
    @Type(() => PlayerEntity)
    @IsNumber({},{each: true})
    @ArrayMinSize(11)
    @ArrayMaxSize(11)
    @IsArray()
    @IsNotEmpty()
    @IsDefined()
    roster: PlayerEntity[]

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    name: String

}
