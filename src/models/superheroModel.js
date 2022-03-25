const mongoose= require('mongoose')
const superheroSchema= mongoose.Schema({
  superhero:{
    type:String,
    require:true
  },
  real_name:{
    type:String,
    require:true
  },
  dni:{
    type:String,
    require:true,
    unique:true
  },
  feature:{
    type:Object,
    require:true,
    universe:{
      type:String,
      require:true
   },
   super_powers:{
     type:Array,
     require:true
   }

  },
  superhero_sideKick:{
    type:Object,
    require:true,
    sideKick:{
      type:String,
      require:true
    },
    sidePowers:{
      type:Array,
      require:true
    }
  }
});
module.exports= mongoose.model('SuperHeroCollection',superheroSchema)