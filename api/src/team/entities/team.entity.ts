import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { PlayerEntity } from "src/player/entities/player.entity";

@Exclude()
export class TeamEntity {

    @ApiProperty({
        name: "roster",
        description: "List of the players of the team",
        isArray: true,
        type : PlayerEntity,
    })
    @ValidateNested({ each: true})
    @Type( () => Number)
    roster: number[]

    @ApiProperty({
        name: "name",
        description: "Team name",
        type : String,        
    })
    name: String

    constructor(partial: Partial<TeamEntity>) {
        Object.assign(this, partial);
    }

}
