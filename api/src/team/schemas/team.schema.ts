import { Prop, Schema } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    collection: "teams",
    toJSON: {
        virtuals: true,
        transform: (doc: any, ret: any) => {
          // delete obsolete data
          delete ret._id;
        },
      },
    versionKey: false,
})
export class Team {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
      })
    _id: any;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}]})


    @Prop()
    name: String
}