import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDefined, IsMongoId, IsNotEmpty, IsOptional, IsString, Validate, } from "class-validator"
import { PlayerExists } from "src/player/validators/playerExists.validator"


export class CreateTeamDto {

    @ApiPropertyOptional({
        name: '_id',
        description :"Team ID",
        example:"6352b7036d2f2c39d71b6482"
    })
    @IsOptional()
    @IsMongoId()
    @Type(()=>String)
    _id : string

    @ApiProperty({
        name : "name",
        description: "FC FST",
        type: String
    })
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    name: string

    @ApiProperty({
        name : "striker",
        description : "Player ID playing at the striker position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    striker: string

    @ApiProperty({
        name : "leftForward",
        description : "Player ID playing at the left forward position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    leftForward: string

    @ApiProperty({
        name : "rightForward",
        description : "Player ID playing at the right forward position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    rightForward: string

    @ApiProperty({
        name : "centerMiddle1",
        description : "Player ID playing at center middle the position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerMiddle1: string

    @ApiProperty({
        name : "centerMiddle2",
        description : "Player ID playing at center middle the position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerMiddle2: string

    @ApiProperty({
        name : "centerMiddle3",
        description : "Player ID playing at center middle the position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerMiddle3: string

    @ApiProperty({
        name : "leftBack",
        description : "Player ID playing at the left back position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    leftBack: string

    @ApiProperty({
        name : "centerBack1",
        description : "Player ID playing at the center back position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerBack1: string

    @ApiProperty({
        name : "centerBack2",
        description : "Player ID playing at the center back position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    centerBack2: string

    @ApiProperty({
        name : "RightBack",
        description : "Player ID playing at the Right back position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    RightBack: string

    @ApiProperty({
        name : "goalKeeper",
        description : "Player ID playing at the goal keeper position",
        example: "6352b7036d2f2c39d71b6491",
    })
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    @Type(()=>String)
    @Validate(PlayerExists)
    goalKeeper: string

}
