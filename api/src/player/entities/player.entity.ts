import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Transform, Type } from 'class-transformer'
import mongoose from 'mongoose';
import { Player } from '../schemas/player.schema';

@Exclude()
export class PlayerEntity {
    
    @ApiProperty({
        name: "_id",
        "description": "Player ID",
        example: 90,
    })
    @Type(() => String)
    @Exclude()
    _id : string;

    @ApiProperty({
        name: "sofifaId",
        "description": "Player sofifa ID",
        example: 90
    })
    @Expose()
    sofifaId : number;

    @ApiProperty({
        name: "playerFaceUrl",
        "description": "Player face picture url",
        example: 90
    })
    @Expose()
    playerFaceUrl: string;

    @ApiProperty({
        name: "longName",
        "description": "Player full name",
        example: 90
    })
    @Expose()
    longName : string;

    @ApiProperty({
        name: "playerPositions",
        "description": "Positions of the player",
        example: 90
    })
    @Expose()
    playerPositions: string;

    @ApiProperty({
        name: "overall",
        "description": "player overall note attribute",
        example: 90
    })
    @Expose()
    overall : number;

    @ApiProperty({
        name: "valueEur",
        "description": "Player value",
        example: 90
    })
    @Expose()
    valueEur: number;

    @ApiProperty({
        name: "wageEur",
        "description": "Player weekly wage",
        example: 90
    })
    @Expose()
    wageEur: number;

    @ApiProperty({
        name: "age",
        "description": "Player age",
        example: 90
    })
    @Expose()
    age: number;

    @ApiProperty({
        name: "dob",
        "description": "Player date of birth",
        example: 90
    })
    @Expose()
    //Date of Birth
    dob: Date;

    @ApiProperty({
        name: "height",
        "description": "Height of the player (cm)",
        example: 90
    })
    @Expose()
    height : number;

    @ApiProperty({
        name: "weight",
        "description": "Weight of the player (kg)e",
        example: 90
    })
    @Expose()
    weight: number;
    
    @ApiProperty({
        name: "clubTeamId",
        "description": "Player clubTeamId attribute",
        example: 90
    })
    @Expose()
    clubTeamId: number;

    @ApiProperty({
        name: "clubName",
        "description": "Player club name",
        example: "OM"
    })
    @Expose()
    clubName: string;
    
    @ApiProperty({
        name: "leagueName",
        "description": "Player league name",
        example: "French Ligue 1"
    })
    @Expose()
    leagueName: string;

    @ApiProperty({
        name: "nationalityId",
        "description": "Player nationality ID attribute",
        example: 90
    })
    @Expose()
    nationalityId: number;

    @ApiProperty({
        name: "nationalityName",
        "description": "Player nationality",
        example: 90
    })
    @Expose()
    nationalityName: string;

    @ApiProperty({
        name: "nationTeamId",
        "description": "Player nationTeam ID attribute",
        example: 90
    })
    @Expose()
    nationTeamId? : number;

    @ApiProperty({
        name: "preferredFoot",
        "description": "Player preferred foot",
        example: "Left"
    })
    @Expose()
    preferredFoot : string;

    @ApiProperty({
        name: "pace",
        "description": "Player international Reputation attribute",
        example: 5
    })
    @Expose()
    internationalReputation : number;

    @ApiProperty({
        name: "realFace",
        "description": "Player real face attribute",
        example: "Yes"
    })
    @Expose()
    realFace : string;

    @ApiProperty({
        name: "pace",
        "description": "Player pace attribute",
        example: 90
    })
    @Expose()
    pace : number;

    @ApiProperty({
        name: "shooting",
        "description": "Player shooting attribute",
        example: 90
    })
    @Expose()
    shooting :  number;

    @ApiProperty({
        name: "passing",
        "description": "Player passing attribute",
        example: 90
    })
    @Expose()
    passing : number;

    @ApiProperty({
        name: "dribbling",
        "description": "Player dribbling attribute",
        example: 90
    })
    @Expose()
    dribbling : number;

    @ApiProperty({
        name: "defending",
        "description": "Player defense attribute",
        example: 90
    })
    @Expose()
    defending : number;

    @ApiProperty({
        name: "physic",
        "description": "Player physic attribute",
        example: 90
    })
    @Expose()
    physic : number;

    @ApiProperty({
        name: "skillBallControl",
        "description": "Player ball control attribute",
        example: 90
    })
    @Expose()
    skillBallControl : number;

    @ApiProperty({
        name: "goalkeepingDiving",
        "description": "Player goal keeping diving attribute",
        example: 90
    })
    @Expose()
    goalkeepingDiving : number;

    @ApiProperty({
        name: "goalkeepingHandling",
        "description": "Player goal keeping handling attribute",
        example: 90
    })
    @Expose()
    goalkeepingHandling : number;

    @ApiProperty({
        name: "goalkeepingKicking",
        "description": "Player goal keeping kicking attribute",
        example: 90
    })
    @Expose()
    goalkeepingKicking : number;

    @ApiProperty({
        name: "goalkeepingPositioning",
        "description": "Player goal keeping positioning attribute",
        example: 90
    })
    @Expose()
    goalkeepingPositioning : number;

    @ApiProperty({
        name: "goalkeepingReflexes",
        "description": "Player goalkeeping reflexes attribute",
        example: 90
    })
    @Expose()
    goalkeepingReflexes : number;

    @ApiProperty({
        name: "goalkeepingSpeed",
        "description": "Player goalkeeping Speed attribute",
        example: 90
    })
    @Expose()
    goalkeepingSpeed : number;

    @ApiProperty({
        name: "clubLogoUrl",
        "description": "Player club logo url",
        example: 90
    })
    @Expose()
    clubLogoUrl : string;

    @ApiProperty({
        name: "clubFlagUrl",
        "description": "Player club flag url",
        example: 90
    })
    @Expose()
    clubFlagUrl : string;

    @ApiProperty({
        name: "nationLogoUrl",
        "description": "player nation logo url",
        example: 90
    })
    @Expose()
    nationLogoUrl? : string;

    @ApiProperty({
        name: "nationFlagUrl",
        "description": "Player nation flag url",
        example: 90
    })
    @Expose()
    nationFlagUrl : string;

    @ApiProperty({
        name: "shortName",
        "description": "Player short name",
        example: 90
    })
    @Expose()
    shortName : string;


    constructor(partial: Partial<Player>) {
        Object.assign(this, partial);
    }
}
