import { MonsterType } from "../utilis/monster.utilis";

export class Monster{
    id: number=-1;
    name: string="My Monster";
    image: string ="/img/pika.jpg";
    type: MonsterType= MonsterType.ELECTRIC;
    hp: number=40;
    figureCaption: string="N°001 Monster";
    attackName: string="Geo Impact";
    attackStrength: number=60;
    attackDescription:string="This is a long description"

    copy():Monster{
        return Object.assign(new Monster(),this)
    }
}