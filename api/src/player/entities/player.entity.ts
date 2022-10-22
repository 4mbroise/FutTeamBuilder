import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Transform, Type } from 'class-transformer'
import mongoose from 'mongoose';
import { Player } from '../schemas/player.schema';

@Exclude()
export class PlayerEntity {
    
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
        example: "https://sofifa.com/player/158023/lionel-messi/220002",
    })
    @Expose()
    playerFaceUrl: string;

    @ApiProperty({
        name: "longName",
        "description": "Player full name",
        example: "Lionel Andrés Messi Cuccittini"
    })
    @Expose()
    longName : string;

    @ApiProperty({
        name: "playerPositions",
        "description": "Positions of the player",
        example: "RW, ST, CF"
    })
    @Expose()
    playerPositions: string;

    @ApiProperty({
        name: "overall",
        "description": "player overall note attribute",
        example: 93
    })
    @Expose()
    overall : number;

    @ApiProperty({
        name: "valueEur",
        "description": "Player value",
        example: 78000000
    })
    @Expose()
    valueEur: number;

    @ApiProperty({
        name: "wageEur",
        "description": "Player weekly wage",
        example: 320000
    })
    @Expose()
    wageEur: number;

    @ApiProperty({
        name: "age",
        "description": "Player age",
        example: 34
    })
    @Expose()
    age: number;

    @ApiProperty({
        name: "dob",
        "description": "Player date of birth",
        example: "1987-06-24T00:00:00.000Z"
    })
    @Expose()
    //Date of Birth
    dob: Date;

    @ApiProperty({
        name: "height",
        "description": "Height of the player (cm)",
        example: 170
    })
    @Expose()
    height : number;

    @ApiProperty({
        name: "weight",
        "description": "Weight of the player (kg)e",
        example: 72
    })
    @Expose()
    weight: number;
    
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

    nationalityId: number;

    @ApiProperty({
        name: "nationalityName",
        "description": "Player nationality",
        example: "Argentina"
    })
    @Expose()
    nationalityName: string;

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

    realFace : string;

    @ApiProperty({
        name: "pace",
        "description": "Player pace attribute",
        example: 85
    })
    @Expose()
    pace : number;

    @ApiProperty({
        name: "shooting",
        "description": "Player shooting attribute",
        example: 92
    })
    @Expose()
    shooting :  number;

    @ApiProperty({
        name: "passing",
        "description": "Player passing attribute",
        example: 91
    })
    @Expose()
    passing : number;

    @ApiProperty({
        name: "dribbling",
        "description": "Player dribbling attribute",
        example: 95
    })
    @Expose()
    dribbling : number;

    @ApiProperty({
        name: "defending",
        "description": "Player defense attribute",
        example: 34
    })
    @Expose()
    defending : number;

    @ApiProperty({
        name: "physic",
        "description": "Player physic attribute",
        example: 65
    })
    @Expose()
    physic : number;

    @ApiProperty({
        name: "skillBallControl",
        "description": "Player ball control attribute",
        example: 96
    })
    @Expose()
    skillBallControl : number;

    @ApiProperty({
        name: "goalkeepingDiving",
        "description": "Player goal keeping diving attribute",
        example: 6
    })
    @Expose()
    goalkeepingDiving : number;

    @ApiProperty({
        name: "goalkeepingHandling",
        "description": "Player goal keeping handling attribute",
        example: 11
    })
    @Expose()
    goalkeepingHandling : number;

    @ApiProperty({
        name: "goalkeepingKicking",
        "description": "Player goal keeping kicking attribute",
        example: 15
    })
    @Expose()
    goalkeepingKicking : number;

    @ApiProperty({
        name: "goalkeepingPositioning",
        "description": "Player goal keeping positioning attribute",
        example: 14
    })
    @Expose()
    goalkeepingPositioning : number;

    @ApiProperty({
        name: "goalkeepingReflexes",
        "description": "Player goalkeeping reflexes attribute",
        example: 8
    })
    @Expose()
    goalkeepingReflexes : number;

    @ApiProperty({
        name: "goalkeepingSpeed",
        "description": "Player goalkeeping Speed attribute",
        example: 0
    })
    @Expose()
    goalkeepingSpeed : number;

    @ApiProperty({
        name: "clubLogoUrl",
        "description": "Player club logo url",
        example: "https://cdn.sofifa.net/teams/73/60.png",
    })
    @Expose()
    clubLogoUrl : string;

    @ApiProperty({
        name: "clubFlagUrl",
        "description": "Player club flag url",
        example: "https://cdn.sofifa.net/flags/fr.png",
    })
    @Expose()
    clubFlagUrl : string;

    @ApiProperty({
        name: "nationLogoUrl",
        "description": "player nation logo url",
        example: "https://cdn.sofifa.net/teams/1369/60.png",
    })
    @Expose()
    nationLogoUrl? : string;

    @ApiProperty({
        name: "nationFlagUrl",
        "description": "Player nation flag url",
        example: "https://cdn.sofifa.net/flags/ar.png",
    })
    @Expose()
    nationFlagUrl : string;

    @ApiProperty({
        name: "shortName",
        "description": "Player short name",
        example: "L. Messi"
    })
    @Expose()
    shortName : string;


    constructor(partial: Partial<Player>) {
        Object.assign(this, partial);
    }
}
