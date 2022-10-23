import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { catchError, firstValueFrom, lastValueFrom, throwError } from "rxjs";
import { PlayerEntity } from "../entities/player.entity";
import { PlayerService } from "../player.service";

@ValidatorConstraint({ name:"PlayerExists", async:true})
@Injectable()
export class PlayerExists implements ValidatorConstraintInterface{

    constructor(private readonly playerService: PlayerService){
    }

    validate(value: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        
        return lastValueFrom(this.playerService.findOne(value)).then( (e) => {
            return true;
        } ).catch( (e) =>{
            return false;
        })
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        if(typeof validationArguments !== "undefined"){
            if(Array.isArray(validationArguments.value)){
                return "each value in "+validationArguments.property+" must be referenced in the database"
            } else{
                console.log(validationArguments)
                return "The player #"+validationArguments.value+" playing at the postion "+ validationArguments.property +" is not referenced in our database"
            }
        }
        return "All players must exist"
    }
    
}