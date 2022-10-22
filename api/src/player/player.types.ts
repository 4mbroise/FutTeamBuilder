export type Player = {
    //Identity
    id: number;
    age: number;
    shortName: string;

    //ressource
    faceUrl?: string;

    //stats
    overall: number;
    pace?: number;
    shooting? : number;
    passing?: number;
    dribbling? : number;
    defending? : number;
    physic? : number;

}

