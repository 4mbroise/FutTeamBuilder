import { ApiPropertyOptional } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDefined, IsMongoId, IsNotEmpty, IsOptional, IsString, Validate, } from "class-validator"
import { PlayerExists } from "src/player/validators/playerExists.validator"


export class UpdateTeamDto {

    @ApiPropertyOptional({
        name : "name",
        description: "FC FST",
        type: String
    })
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    name?: string

    @ApiPropertyOptional({
        name : "striker",
        description : "Player ID playing at the striker position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    striker?: string

    @ApiPropertyOptional({
        name : "leftForward",
        description : "Player ID playing at the left forward position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    leftForward?: string

    @ApiPropertyOptional({
        name : "rightForward",
        description : "Player ID playing at the right forward position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    rightForward?: string

    @ApiPropertyOptional({
        name : "centerMiddle1",
        description : "Player ID playing at center middle the position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerMiddle1?: string

    @ApiPropertyOptional({
        name : "centerMiddle2",
        description : "Player ID playing at center middle the position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerMiddle2?: string

    @ApiPropertyOptional({
        name : "centerMiddle3",
        description : "Player ID playing at center middle the position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerMiddle3?: string

    @ApiPropertyOptional({
        name : "leftBack",
        description : "Player ID playing at the left back position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    leftBack?: string

    @ApiPropertyOptional({
        name : "centerBack1",
        description : "Player ID playing at the center back position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerBack1?: string

    @ApiPropertyOptional({
        name : "centerBack2",
        description : "Player ID playing at the center back position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerBack2?: string

    @ApiPropertyOptional({
        name : "RightBack",
        description : "Player ID playing at the Right back position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    RightBack?: string

    @ApiPropertyOptional({
        name : "goalKeeper",
        description : "Player ID playing at the goal keeper position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    goalKeeper?: string

}
