import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsIn, IsInt, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

const country = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos Islands", "Cocos Keeling Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia","Hrvatska","Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virgin Islands", "Virgin Islands", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"]

export class UpdatePlayerDto {
    
    @ApiPropertyOptional({
        name: "playerFaceUrl",
        "description": "Player face picture url",
        example: "https://sofifa.com/player/158023/lionel-messi/220002",
    })
    @IsString()
    @IsOptional()
    playerFaceUrl? : string;

    @ApiPropertyOptional({
        name: "longName",
        "description": "Player full name",
        example: "Lionel Andrés Messi Cuccittini"
    })
    @IsString()
    @IsOptional()
    longName? : string;

    @ApiPropertyOptional({
        name: "playerPositions",
        "description": "Positions of the player",
        example: "RW, ST, CF"
    })
    @IsString()
    @IsOptional()
    playerPositions? : string;

    @ApiPropertyOptional({
        name: "overall",
        "description": "player overall note attribute",
        example: 93
    })
    @IsInt()
    @Min(0)
    @IsOptional()
    overall? : number;

    @ApiPropertyOptional({
        name: "valueEur",
        "description": "Player value",
        example: 78000000
    })
    @IsNumber()
    @Min(0)
    @IsOptional()
    valueEur?: number;

    @ApiPropertyOptional({
        name: "wageEur",
        "description": "Player weekly wage",
        example: 320000
    })
    @IsNumber()
    @Min(0)
    @IsOptional()
    wageEur? : number;

    @ApiPropertyOptional({
        name: "age",
        "description": "Player age",
        example: 34
    })
    @IsInt()
    @Min(0)
    @IsOptional()
    age? : number;

    @ApiPropertyOptional({
        name: "dob",
        "description": "Player date of birth",
        example: "1987-06-24T00:00:00.000Z"
    })
    @IsDateString()
    @IsOptional()
    dob? : String;

    @ApiPropertyOptional({
        name: "height",
        "description": "Height of the player (cm)",
        example: 170
    })
    @IsInt()
    @Min(0)
    @IsOptional()
    height? : number;

    @ApiPropertyOptional({
        name: "weight",
        "description": "Weight of the player (kg)e",
        example: 72
    })
    @IsInt()
    @Min(0)
    @IsOptional()
    weight? : number;

    @ApiPropertyOptional({
        name: "leagueName",
        "description": "Player league name",
        example: "French Ligue 1"
    })
    @IsString()
    @IsOptional()
    clubName? : string;
    
    @ApiPropertyOptional({
        name: "leagueName",
        "description": "Player league name",
        example: "French Ligue 1"
    })
    @IsString()
    @IsOptional()
    leagueName? : string;

    @ApiProperty({
        name: "nationalityName",
        "description": "Player nationality",
        example: "Argentina"
    })
    @IsString()
    @IsIn(country)
    @IsNotEmpty()
    nationalityName: string;

    @ApiPropertyOptional({
        name: "preferredFoot",
        "description": "Player preferred foot",
        example: "Left"
    })
    @IsString()
    @IsIn(["Right", "Left"])
    @IsOptional()
    preferredFoot? : string;

    @ApiPropertyOptional({
        name: "internationalReputation",
        "description": "Player international Reputation attribute",
        example: 5
    })
    @IsInt()
    @IsOptional()
    @Min(1)
    @Max(5)
    internationalReputation? : number;

    @ApiPropertyOptional({
        name: "pace",
        "description": "Player pace attribute",
        example: 85
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    pace : number;

    @ApiPropertyOptional({
        name: "shooting",
        "description": "Player shooting attribute",
        example: 92
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    shooting :  number;

    @ApiPropertyOptional({
        name: "passing",
        "description": "Player passing attribute",
        example: 91
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    passing : number;

    @ApiPropertyOptional({
        name: "dribbling",
        "description": "Player dribbling attribute",
        example: 95
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    dribbling : number;

    @ApiPropertyOptional({
        name: "defending",
        "description": "Player defense attribute",
        example: 34
    })
    @IsOptional()
    @IsNotEmpty()
    @Min(0)
    @Max(100)
    defending : number;

    @ApiPropertyOptional({
        name: "physic",
        "description": "Player physic attribute",
        example: 65
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    physic : number;

    @ApiPropertyOptional({
        name: "skillBallControl",
        "description": "Player ball control attribute",
        example: 96
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    skillBallControl : number;

    @ApiPropertyOptional({
        name: "goalkeepingDiving",
        "description": "Player goal keeping diving attribute",
        example: 6
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    goalkeepingDiving : number;

    @ApiPropertyOptional({
        name: "goalkeepingHandling",
        "description": "Player goal keeping handling attribute",
        example: 11
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    goalkeepingHandling : number;

    @ApiPropertyOptional({
        name: "goalkeepingKicking",
        "description": "Player goal keeping kicking attribute",
        example: 15
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    goalkeepingKicking : number;

    @ApiPropertyOptional({
        name: "goalkeepingPositioning",
        "description": "Player goal keeping positioning attribute",
        example: 14
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    goalkeepingPositioning : number;

    @ApiPropertyOptional({
        name: "goalkeepingReflexes",
        "description": "Player goalkeeping reflexes attribute",
        example: 8
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    goalkeepingReflexes : number;

    @ApiPropertyOptional({
        name: "goalkeepingSpeed",
        "description": "Player goalkeeping Speed attribute",
        example: 0
    })
    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    goalkeepingSpeed : number;

    @ApiPropertyOptional({
        name: "clubLogoUrl",
        "description": "Player club logo url",
        example: "https://cdn.sofifa.net/teams/73/60.png",
    })
    @IsString()
    @IsOptional()
    clubLogoUrl : string;

    @ApiPropertyOptional({
        name: "clubFlagUrl",
        "description": "Player club flag url",
        example: "https://cdn.sofifa.net/flags/fr.png",
    })
    @IsString()
    @IsOptional()
    clubFlagUrl? : string;

    @ApiPropertyOptional({
        name: "nationLogoUrl",
        "description": "player nation logo url",
        example: "https://cdn.sofifa.net/teams/1369/60.png",
    })
    @IsString()
    @IsOptional()
    nationLogoUrl? : string;

    @ApiPropertyOptional({
        name: "nationFlagUrl",
        "description": "Player nation flag url",
        example: "https://cdn.sofifa.net/flags/ar.png",
    })
    @IsString()
    @IsOptional()
    nationFlagUrl? : string;

    @ApiPropertyOptional({
        name: "shortName",
        "description": "Player short name",
        example: "L. Messi"
    })
    @IsString()
    @IsOptional()
    @IsDefined()
    shortName : string;
}
