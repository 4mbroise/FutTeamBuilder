import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose, Type,  } from "class-transformer";

@Exclude()
export class TeamEntity {

    @Expose()
    @Type( () => String)
    @ApiProperty({
        name: "Id",
        "description": "Player sofifa ID",
        example: "6352b7036d2f2c39d71b6491"
    })
    _id : any;

    @Expose()
    @ApiProperty({
        name: "striker",
        description: "Player playing at the striker position",
        type : String,
    })
    striker: string

    @Expose()
    @ApiProperty({
        name: "leftForward",
        description: "Player playing atthe  left forward position",
        type : String,
    })
    leftForward: string

    @Expose()
    @ApiProperty({
        name: "rightForward",
        description: "Player playing the right forward position",
        type : String,
    })
    rightForward: string

    @Expose()
    @ApiProperty({
        name: "centerMiddle1",
        description: "Player playing at the center Middle position",
        type : String,
    })
    centerMiddle1: string

    @Expose()
    @ApiProperty({
        name: "centerMiddle2",
        description: "Player playing at the center Middle position",
        type : String,
    })
    centerMiddle2: string

    @Expose()
    @ApiProperty({
        name: "centerMiddle3",
        description: "Player playing at the center Middle position",
        type : String,
    })
    centerMiddle3: string

    @Expose()
    @ApiProperty({
        name: "leftBack",
        description: "Player playing at the left back position",
        type : String,
    })
    leftBack: string

    @Expose()
    @ApiProperty({
        name: "centerBack1",
        description: "Player playing at the center back position",
        type : String,
    })
    centerBack1: string

    @Expose()
    @ApiProperty({
        name: "centerBack2",
        description: "Player playing at the center back position",
        type : String,
    })
    centerBack2: string

    @Expose()
    @ApiProperty({
        name: "rightBack",
        description: "Player playing at the right back position",
        type : String,
    })
    rightBack: string

    @Expose()
    @ApiProperty({
        name: "goalKeeper",
        description: "Player playing at the goal keeper position",
        type : String,
    })
    goalKeeper: string

    @Expose()
    @ApiProperty({
        name: "name",
        description: "Team name",
        type : String,        
    })
    name: string

    constructor(partial: Partial<TeamEntity>) {

        Object.assign(this, partial);
    }

}
