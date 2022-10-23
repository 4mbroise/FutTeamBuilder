import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type TeamDocument = Team & Document

@Schema({
  collection: "teams",
  toJSON: {
      virtuals: true,
    },
  versionKey: false,
})
export class Team {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
      })
    _id: any;

    @Prop()
    striker: string;

    @Prop()
    rightForward: string;

    @Prop()
    centerMiddle1: string;

    @Prop()
    centerMiddle2: string;

    @Prop()
    centerMiddle3: string;

    @Prop()
    leftBack: string;

    @Prop()
    centerBack1: string;

    @Prop()
    centerBack2: string;

    @Prop()
    rightBack: string;

    @Prop()
    goalKeeper: string;

    @Prop()
    name: String
}

export const TeamSchema = SchemaFactory.createForClass(Team);
