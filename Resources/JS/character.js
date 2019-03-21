class character{
    constructor(name, type, level, stats, spells, feats, bonuses, resistances){
        this.name = name;
        this.type = type;
        this.level = level;
        this.stats = stats;
        this.spells = spells;
        this.spellSlots = spells.length;
        this.feats = feats;
        this.bonuses = bonuses;
        this.resistances = resistances;
    }
}






//name = string
//type = string
//level = number
//stats = array of numbers
//spells = array of spell/description pairs
//feats = array of name/description pairs
//bonuses = array of strings
//resistances = array of strings