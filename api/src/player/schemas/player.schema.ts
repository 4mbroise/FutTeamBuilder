import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type PlayerDocument = Player & Document

@Schema({
    collection: "players"
})
export class Player {

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
      })
    _id: any;
    
    @Prop()
    sofifaId : number;

    @Prop()
    playerUrl: string;

    @Prop()
    longName : string;

    @Prop()
    playerPositions: string;

    @Prop()
    overall : number;

    @Prop()
    valueEur: number;

    @Prop()
    wageEur: number;

    @Prop()
    age: number;

    @Prop()
    dob: Date;

    @Prop()
    height : number;

    @Prop()
    weight: number;
    
    @Prop()
    clubTeamId: number;

    @Prop()
    clubName: string;
    
    @Prop()
    leagueName: string;

    @Prop()
    nationalityId: number;

    @Prop()
    nationalityName: string;

    @Prop()
    nationTeamId? : number;

    @Prop()
    preferredFoot : string;

    @Prop()
    internationalReputation : number;

    @Prop()
    realFace : string;

    @Prop()
    pace : number;

    @Prop()
    shooting :  number;

    @Prop()
    passing : number;

    @Prop()
    dribbling : number;

    @Prop()
    defending : number;

    @Prop()
    physic : number;

    @Prop()
    skillBallControl : number;

    @Prop()
    goalkeepingDiving : number;

    @Prop()
    goalkeepingHandling : number;

    @Prop()
    goalkeepingKicking : number;

    @Prop()
    goalkeepingPositioning : number;

    @Prop()
    goalkeepingReflexes : number;

    @Prop()
    goalkeepingSpeed : number;

    @Prop()
    playerFaceUrl : string;

    @Prop()
    clubLogoUrl : string;

    @Prop()
    clubFlagUrl : string;

    @Prop()
    nationLogoUrl? : string;

    @Prop()
    nationFlagUrl : string;

    @Prop()
    shortName : string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
