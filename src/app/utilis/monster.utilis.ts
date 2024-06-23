
export enum MonsterType {
    PLANT="plant",
    ELECTRIC ="electric",
    FIRE="fire",
    WATER="water",
    
}

export interface IMonsterProperties{
    imageUrl: string;
    color:string;
}

export const MonsterTypeProperties: {[key:string]:IMonsterProperties} ={
    [MonsterType.PLANT]:{
        imageUrl:'/img/plant.png',
        color: 'rgba(135,255,124)'
    },
    [MonsterType.ELECTRIC]:{
        imageUrl:'/img/electric.webp',
        color: 'rgba(255,255,104)'
    },
    [MonsterType.FIRE]:{
        imageUrl:'/img/fire.jpg',
        color: 'rgba(255,104,104)'
    },
    [MonsterType.WATER]:{
        imageUrl:'/img/water.png',
        color: 'rgba(118,235,124)'
    },
}