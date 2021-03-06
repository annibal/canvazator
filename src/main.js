
// i take care of starting the stuff!

class Canvazator {
  constructor(config) {

    //=require defaultconfig.js
    console.log(defaultConfig.canvas.containerElement)
    this.config = Canvazator.ObjectMerger.merge(defaultConfig, config);
    console.log(defaultConfig.canvas.containerElement)
    console.log(config.canvas.containerElement)

    // initialize Substract
    this._substract = new Canvazator.Substract(this.config.canvas);
    this._substract.updateGlobals(this);

    // call loader to load stuff
    this._loader = new Canvazator.Loader(this.config.assets);

    // initialize input to listen for events
    this._input = new Canvazator.Input(this.config.input);

    // start the engines
    this._engine = new Canvazator.Engine();

    Object.assign(this, Canvazator);
  }
}

//=require thing.js
//=require core/engine.js
//=require core/input.js
//=require core/loader.js
//=require core/substract.js
//=require helpers/HTMLAttributeHandler.js
//=require helpers/objectMerger.js
//=require helpers/math.js
//=require helpers/mesh.js
//=require helpers/particles.js
//=require helpers/random.js
