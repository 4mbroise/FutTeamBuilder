import { Stat } from "./stat.type";

export type Player = {
    _id : string;
    playerFaceUrl: string;
    longName : string;
    playerPositions: string;
    overall : number;
    valueEur: number;
    wageEur: number;
    age: number;
    dob: Date;
    height : number;
    weight: number;
    clubName: string;
    leagueName: string;
    nationalityName: string;
    preferredFoot : string;
    internationalReputation : number;
    
    //stats:Stat[]

    //--------------STATS------------------
    //--- NOT GOAL KEEPER
    pace : number;
    shooting :  number;
    passing : number;
    dribbling : number;
    defending : number;
    physic : number;
    skillBallControl : number;
    //--- GOAL KEEPER
    goalkeepingDiving : number;
    goalkeepingHandling : number;
    goalkeepingKicking : number;
    goalkeepingPositioning : number;
    goalkeepingReflexes : number;
    goalkeepingSpeed : number;


    clubLogoUrl : string;
    clubFlagUrl : string;
    nationLogoUrl? : string;
    nationFlagUrl : string;
    shortName : string;
};