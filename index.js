(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[322,174,210,172],[322,0,210,172],[212,482,210,172],[0,482,210,172],[212,656,210,172],[534,174,210,172],[424,522,210,172],[0,656,210,172],[534,0,210,172],[424,348,210,172],[0,0,320,480]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.cookieberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cookiefour = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cookiefrosting = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cookiegreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cookienine = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cookieone = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cookiesix = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cookiesixteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cookietwelve = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cookietwo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Interstitialtable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whiterectanglefade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ege2AqlMAAAhVJMA9tAAAMAAABVJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whiterectanglefade, new cjs.Rectangle(-197.4,-272.4,395,545), null);


(lib.somethingdeliciousInterstitial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgNBhIgUgEIgGAEIgFABIgEgBIgEgCQgGgGgFgPQgGgPAAgOQAAgFADgFQAEgDAEAAQAJAAAJAOIAHALQAFAIAKAFQAJADAKAAQANAAAHgFQAHgHAAgKQAAgQgegPIgLgFQgdgOgKgLQgKgNAAgRQAAgZARgPQAQgPAbAAIANABIANACIAIgDIAGgCQAJABAJAPQAJAOAAAQQAAAGgDAEQgDAEgFAAQgFAAgEgEQgEgDgGgJQgHgMgHgEQgHgFgLABQgKAAgGAFQgHAHAAAJQAAAIAHAHQAHAHAWAMIACAAQA0AZAAAeQAAAagUARQgUARgeABg");
	this.shape.setTransform(71.5,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AAoBeQgCgDgBgFIAAgOIAAgBIgBAAQgCAAgEAFIgDADQgIAJgLAEQgLAEgOABQgNgBgNgFQgMgFgIgKQgJgLgEgOQgDgPAAgnIAAgNIAAgNIAAgEQAAgPgCgFQgCgEgHgDIgHgCQgKgDAAgGQAAgFADgDQAEgDANgFIAZgGIAUgDQAFAAACAEQACAEAAAIIAAAHIgCBGQAAAkAIAPQAIAOATAAQAUAAAJgTQAKgSgBgsIAAgPQAAgOgCgFQgCgEgGgDIgIgCQgKgDAAgGQAAgEAEgEQADgDANgFIAZgGIATgDQAHAAABAEQACADAAAJIAAAKIgCBMIAAAfIABANQACAHAJAEIAEABQAKAEABAFQAAAFgDADQgEADgIAEIgbAIQgMADgHAAQgGAAgCgDg");
	this.shape_1.setTransform(52.2,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AhDBGQgagcAAgpQAAgpAcgcQAbgcApAAQAoAAAaAaQAZAaAAApQAAAqgbAdQgcAdgnAAQgoAAgbgbgAgjg2QgLAPAAAYQAAAkAQAZQAPAZAWAAQASAAALgPQAMgQAAgZQAAgjgQgZQgQgZgVAAQgSAAgMAQg");
	this.shape_2.setTransform(30.6,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_3.setTransform(14.6,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("Ag7BGQgagbAAgoQAAgqAcgcQAcgdApAAQAfAAAVAQQAVAQAAAWQAAAIgFAGQgHAFgJAAQgJAAgGgEQgGgFgGgPQgGgNgHgGQgIgFgLAAQgUAAgMAQQgNAQAAAdQAAAgARAVQASAVAZAAQAKAAAIgDQAIgCAIgFIAHgGQAJgHAGAAQAEAAACACQACACAAAEQAAAFgDAGQgFAHgFAFQgPANgQAGQgQAGgSAAQgmAAgbgbg");
	this.shape_4.setTransform(-0.1,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_5.setTransform(-15.4,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgfCFQgIgDgBgIQAAgFAIgEIAJgFQADgDACgLIACglIgBgdIAAgiIAAgPQAAgugBgOQgCgNgEgCIgLgFQgNgDAAgHQABgEAEgDQADgEANgEIAZgGIATgEQAFABACADQACADABAJIgBAPQgCBBAABDIACA/QABAOACADIALAGQAIADAAAHQAAAIgJACQgJADgZABQgbgBgJgDg");
	this.shape_6.setTransform(-26.2,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("Ag8BGQgagbAAgoQAAgqAbgcQAbgdApAAQAkAAAVAVQAVAUAAAjQAAALgDAEQgEAEgOAAIhGAAQgGAAgDgDQgEgDAAgFQAAgFAEgDQADgDAGAAIAmAAIAJgBQADgBAAgFQAAgSgMgMQgMgMgRAAQgWAAgLATQgKAUAAAbQAAAcAOAVQAPAVAXAAQAOAAAJgDQAJgDAJgGIAHgFQAJgIAGAAQAEAAACADQADADAAADQAAAFgFAGQgEAHgIAGQgQANgPAGQgPAGgSAAQgmAAgbgbg");
	this.shape_7.setTransform(-41.1,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgoCGIgWgBIgQABIgQAAQgXAAgGgDQgIgDAAgIQAAgHAKgEQAKgEACgCQACgEACgcIABhHIgBhFQgCgcgCgEQgCgCgKgEQgKgFAAgHQAAgHAJgEQAHgDAWAAIAQABIATAAIAZgBIAVAAQBFAAAlAkQAlAjAABBQAABBgmAhQgmAhhKAAgAgohpQgJADgBAGQgDAHgCAWIgBA4IABBGQACAdADAGQACAGALAEQANAEARAAQAqAAAVgaQAWgagBg0QABg2gZgdQgZgdgsAAQgQAAgIADg");
	this.shape_8.setTransform(-65.6,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AhEB5QgYgOAAgVQAAgJAFgGQAFgGAKAAQAIAAAEAEQAFAEACAJQAEAOAMAIQAMAHAXAAQAXAAARgJQAQgJAAgOQAAgKgGgEQgGgFgLAAIgWACIgcABQghAAgSgLQgRgMAAgOQAAgKAGgIQAGgIAOgJQgLgJgGgMQgFgMAAgPQAAgeAXgTQAXgVAjAAIASACIAdAFQAHAAAIgDQAIgEALgHIAGAFIACAGQAAAIgFAIQgGAHgLAFIAGAQIABAPQAAAegWAUQgXASgjAAIgUgBIgRgDIgGAHIgCAGQAAAJAJAEQAIAEATAAIAbgCIAdgCQAaAAAOALQAOAKAAATQAAAegdAUQgeAUgrAAQgkgBgXgOgAgehbQgKALAAATQAAATAKALQAJAMAPAAQAPAAALgMQAKgLAAgTQAAgTgKgLQgKgMgPgBQgPABgKAMg");
	this.shape_9.setTransform(83.4,-13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AhbBcQgJgDAAgIQAAgGAJgEIAFgCQAFgCACgHQACgGAAgOIAAgNIgBgOIAAgTQAAgdgBgJQgBgJgEgCIgJgDQgLgEAAgGQAAgEADgDQAEgDAIgEIAbgIIATgDQAFAAACACQADADAAAGIAAANIAAABIABABIABAAIABgBIAEgEIAEgDQAUgTAXAAQANAAANAGQAMAFAIAKQAJALAEAOQADAOAAAeIAAAYIAAAMIAAAKQAAAOACAFQACAGAEACIAFACQAJAEAAAGQAAAIgJADQgIADgdAAQgaAAgIgDQgJgDAAgHQAAgHAJgDIAHgEQAEgCACgIQACgIAAgUQAAg6gIgPQgHgPgUAAQgJAAgJAGQgJAGgFAKQgEAIgBAOQgCAOAAAkQAAASACAGQABAGAEACIAHAEQAJADAAAHQAAAHgJADQgJADgYAAQgcAAgKgDg");
	this.shape_10.setTransform(61.6,-16.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_11.setTransform(45,-21);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AAaCFQgJgDAAgHQAAgHAJgDIAHgEQAEgCACgIQABgIAAgTQABg8gIgOQgHgPgUAAQgJAAgJAGQgJAGgFAJQgEAIgCAOQgBAOAAAlQAAASABAGQACAGAEACIAHAEQAKADAAAHQAAAHgKADQgJADgYAAQgdAAgJgDQgJgDAAgIQAAgGAJgEIAFgCQAFgDACgHQACgIAAgUIAAgfIAAgcIgBhUQgBgUgDgEQgCgCgLgDQgLgEAAgGQAAgFAFgEQAEgDARgGIASgFIARgCQAHAAACADQADAEgBAIIAAAIIgBBKIAAAJIAAAEIADACIAFgEIAGgIQAKgJAKgEQAKgFALAAQAfAAARAVQAPAUAAApIAAARIAAAiIAAAKQAAAJACAFQACAEAEACIAFACQAJAEAAAGQAAAIgIADQgKADgdAAQgYAAgJgDg");
	this.shape_12.setTransform(28.3,-21);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgKBwQgIgDgHgGQgHgHgCgKQgDgKAAgcIAAhiIgRAAIgFgCIgCgFIAAgEQAAgGATgRIAIgHIAHgFQATgSAHABIAFABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAjIAqAAQAFABACABQABACAAAFIAAAFQAAAEgCACQgCADgEAAIgmAAIgDABIgCAEIAABcQABAXAEAHQAEAGAKAAQAHAAAJgEIAMgCQAEgBADADQADADAAAEQAAAKgQAJQgQAJgTAAQgLAAgKgCg");
	this.shape_13.setTransform(10.9,-18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("Ag8BGQgagbAAgoQAAgqAbgcQAbgdApAAQAkAAAVAVQAVAUAAAjQAAALgDAEQgEAEgOAAIhGAAQgGAAgDgDQgEgDAAgFQAAgFAEgDQADgDAGAAIAmAAIAJgBQADgBAAgFQAAgSgMgMQgMgMgRAAQgWAAgLATQgKAUAAAbQAAAcAOAVQAPAVAXAAQAOAAAJgDQAJgDAJgGIAHgFQAJgIAGAAQAEAAACADQADADAAADQAAAFgFAGQgEAHgIAGQgQANgPAGQgPAGgSAAQgmAAgbgbg");
	this.shape_14.setTransform(-5.8,-16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AiWBcQgJgDAAgIQAAgGAJgEIAFgCQAFgCACgHQACgGAAgOIgBgNIAAgOIAAgLQAAgigBgKQgCgKgEgDIgIgDQgLgEAAgGQAAgEADgDIAMgGIAbgKIASgDQAFAAADADQACADAAAHIAAAKIAAACIABACIABAAIABAAIABgBIAEgEIACgCQAWgUAXAAQAJAAAIADQAIACAHAFQAGAFAHAIQAHAJACAAQACAAAFgGIAJgIQAMgLAJgDQAJgEAKAAQAWAAAQAJQAQAIAIAQQAIARAAA2IAAASIAAAKIAAAJQAAAKABAFQACAFAFACIAFACQAJAEAAAGQAAAIgJADQgIADgdAAQgbAAgJgDQgJgDAAgHQAAgHAKgEIAHgDQAEgCACgJQACgKAAgWQAAg2gHgPQgIgOgUAAQgVAAgJATQgKASAAAtIAAAKQAAAUACAGQACAHAFACIAFACQAJAEAAAGQAAAIgJADQgIADgdAAQgZAAgJgDQgJgDAAgHQAAgHAKgDIAHgEQAEgCACgHQABgIAAgVQAAg6gHgPQgIgPgUAAQgJAAgJAGQgJAGgFAKQgEAIgCAPQgCAOAAAjQAAASACAGQACAGAEACIAHAEQAJADAAAHQAAAHgJADQgJADgZAAQgcAAgJgDg");
	this.shape_15.setTransform(-33,-16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AhDBGQgagcAAgpQAAgpAcgcQAbgcApAAQAoAAAaAaQAZAaAAApQAAAqgbAdQgcAdgnAAQgoAAgbgbgAgjg2QgLAPAAAYQAAAkAQAZQAPAZAWAAQASAAALgPQAMgQAAgZQAAgjgQgZQgQgZgVAAQgSAAgMAQg");
	this.shape_16.setTransform(-60.5,-16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AgtCGQgVgFgNgHQgHgFgFgPQgFgQAAgVQAAgJADgEQAEgFAFAAQAJAAAJARIAFAIQAMAUAOAKQAOAJASAAQAVAAANgMQAPgMAAgRQAAgbg3gYIgFgCQgugTgPgQQgOgRAAgaQAAghAYgWQAZgVAnAAIAWACIAZAFIAHgEIAHgCQAEAAAEADQAEADAEAHQAFALAEAMQAEAMAAAKQAAAGgDADQgDAEgFAAQgKAAgKgOIgCgDQgLgOgMgHQgMgGgQAAQgTAAgNAJQgLAKgBARQAAAPAKAKQALAKAnARIAIAEQAgAOAPAMQAKAJAGANQAFAMAAAPQAAAmgbAVQgaAVgvAAQgWAAgUgEg");
	this.shape_17.setTransform(-81.9,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.somethingdeliciousInterstitial, new cjs.Rectangle(-94.8,-45.1,189.6,90.2), null);


(lib.signupinterstitial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAuQgJgDgFgHIAKgJQADAGAGACQAGADAGAAIAGgBIAGgDIAFgFQABgDAAgEQAAgEgBgDIgFgFIgHgDIgIgDIgJgEIgIgDQgEgEgCgEQgCgEAAgHQAAgHADgFQADgFAFgEQAEgDAGgBIALgCIAIABIAHACQAIADAEAFIgJAJQgDgEgFgDQgFgCgGAAIgFABIgGACQgDADgCADQgBACAAAFQAAAEABACIAEAFIAGACIAHADIAKAEIAJADQAEAEACAEQADAFAAAHQAAAIgDAFQgCAGgFADQgFAEgGABQgGACgFAAQgJAAgIgEg");
	this.shape.setTransform(65.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAvIAAhdIANAAIAABRIAqAAIAAAMg");
	this.shape_1.setTransform(58.3,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAvIAAhdIANAAIAABdg");
	this.shape_2.setTransform(52.3,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgAvIgKgXIgsAAIgJAXIgPAAIAphdIALAAIApBdgAASANIgSgsIgRAsIAjAAg");
	this.shape_3.setTransform(45.5,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkAvIAAhOIggBOIgIAAIgfhOIAAAAIAABOIgNAAIAAhdIAVAAIAbBIIAchIIAVAAIAABdg");
	this.shape_4.setTransform(34.5,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAvIAAhdIA8AAIAAALIguAAIAAAcIAsAAIAAALIgsAAIAAAfIAwAAIAAAMg");
	this.shape_5.setTransform(24.5,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAvIgYgqIgNAAIAAAqIgOAAIAAhdIAfAAIALAAQAHACAEADQAFADADAFQADAFAAAIQAAAKgHAHQgDADgFABIgIADIAaArgAgTgFIAPAAIAIgBQAEgBACgCIAGgEQABgDAAgEQAAgFgBgDQgCgCgEgCQgCgCgEgBIgHgBIgQAAg");
	this.shape_6.setTransform(12.8,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAxIgKgDQgJgEgHgGQgHgHgDgJQgEgJgBgLQABgKAEgJQADgKAHgHQAHgGAJgEQAFgCAFAAIAJgBQALAAAJADIAJAFIAHAFQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAJgHAHIgHAGIgJAEQgJAEgLAAIgJgBgAgOgjQgHADgEAGQgFAFgDAHQgCAHAAAHQAAAHACAIQADAGAFAGQAEAFAHADQAHADAHAAQAIAAAHgDQAHgDAEgFQAFgGADgGQACgIAAgHQAAgHgCgHQgDgHgFgFQgEgGgHgDQgHgCgIAAQgHAAgHACg");
	this.shape_7.setTransform(2.3,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAvIAAhdIA7AAIAAALIgtAAIAAAdIAqAAIAAALIgqAAIAAAqg");
	this.shape_8.setTransform(-7.1,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAvIAAhdIAcAAQAIgBAGACQAGABAFAEQAEADACAFQACAFABAHQgBAHgCAFQgCAFgFADQgFACgHACQgFABgHABIgPAAIAAApgAgRgEIAOAAIAIgCIAHgCQADgCABgDQACgDAAgEQAAgFgCgDQgBgCgDgCQgDgCgEgBIgHgBIgPAAg");
	this.shape_9.setTransform(-18.6,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAwIgHgCIgHgEIgFgFQgEgFgDgHQgCgHAAgHIAAg7IANAAIAAA6QAAAFABAFQABAFADADQADAEAEACQAFADAGAAQAGAAAFgDQAFgCADgEQACgDABgFIABgKIAAg6IAOAAIAAA7QAAAHgDAHQgCAHgEAFIgGAFIgGAEIgIACIgIABIgIgBg");
	this.shape_10.setTransform(-27.9,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYAvIgyhMIAABMIgNAAIAAhdIARAAIAwBKIABAAIAAhKIAOAAIAABdg");
	this.shape_11.setTransform(-41.6,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAuQgKgEgGgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgKAGgHIAHgFIAJgFQAJgDALAAIAKABIAKACQAJAEAFAFIgJAKQgEgFgHgDIgHgCIgHAAQgIAAgGACQgHADgFAGQgEAFgDAHQgCAHAAAHQAAAHACAIQADAGAEAGQAFAFAHADQAGADAIAAQAHAAAFgCQAGAAAEgDIAAgaIgVAAIAAgKIAjAAIAAAtQgIAEgJACIgTACQgLAAgJgEg");
	this.shape_12.setTransform(-52.4,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAvIAAhdIANAAIAABdg");
	this.shape_13.setTransform(-59.4,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAuQgJgDgFgHIAKgJQADAGAGACQAGADAGAAIAGgBIAGgDIAFgFQABgDAAgEQAAgEgBgDIgFgFIgHgDIgIgDIgJgEIgIgDQgEgEgCgEQgCgEAAgHQAAgHADgFQADgFAFgEQAEgDAGgBIALgCIAIABIAHACQAIADAEAFIgJAJQgDgEgFgDQgFgCgGAAIgFABIgGACQgDADgCADQgBACAAAFQAAAEABACIAEAFIAGACIAHADIAKAEIAJADQAEAEACAEQADAFAAAHQAAAIgDAFQgCAGgFADQgFAEgGABQgGACgFAAQgJAAgIgEg");
	this.shape_14.setTransform(-65.4,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.signupinterstitial, new cjs.Rectangle(-71.3,-10.2,142.6,20.5), null);


(lib.partyreadyinterstitial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D6E47").s().p("AgNBhIgUgEIgGAEIgFABIgEgBIgEgCQgGgGgFgPQgGgPAAgOQAAgFADgFQAEgDAEAAQAJAAAJAOIAHALQAFAIAKAFQAJADAKAAQANAAAHgFQAHgHAAgKQAAgQgegPIgLgFQgdgOgKgLQgKgNAAgRQAAgZARgPQAQgPAbAAIANABIANACIAIgDIAGgCQAJABAJAPQAJAOAAAQQAAAGgDAEQgDAEgFAAQgFAAgEgEQgEgDgGgJQgHgMgHgEQgHgFgLABQgKAAgGAFQgHAHAAAJQAAAIAHAHQAHAHAWAMIACAAQA0AZAAAeQAAAagUARQgUARgeABg");
	this.shape.setTransform(59.1,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D6E47").s().p("Ag8BGQgagbAAgoQAAgqAbgcQAbgdApAAQAkAAAVAVQAVAUAAAjQAAALgDAEQgEAEgOAAIhGAAQgGAAgDgDQgEgDAAgFQAAgFAEgDQADgDAGAAIAmAAIAJgBQADgBAAgFQAAgSgMgMQgMgMgRAAQgWAAgLATQgKAUAAAbQAAAcAOAVQAPAVAXAAQAOAAAJgDQAJgDAJgGIAHgFQAJgIAGAAQAEAAACADQADADAAADQAAAFgFAGQgEAHgIAGQgQANgPAGQgPAGgSAAQgmAAgbgbg");
	this.shape_1.setTransform(41.2,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D6E47").s().p("AhZB+QgKgDAAgHQAAgGAIgEIAKgEQADgEACgPQABgOAAgvIAAgdQAAgzgBgOQgCgPgEgCIgJgDQgLgEAAgGQAAgFADgDQAEgDAHgDIAagIQAMgEAHAAQAFAAACADQADADAAAHIAAAJIAAADIABABIAHgFIAHgFQAMgIAKgFQAKgEALAAQAjAAAVAaQAWAZAAAoQAAAsgYAdQgZAcgmAAQgQAAgFgEQgGgFAAgHQAAgEADgDQACgDAGAAIAEABIAHAAQAUAAANgRQAMgRAAgcQAAgggNgTQgOgUgVAAQgTAAgLALQgLALAAAcIAAB1IABATQABAHADADQACACAIADIAHACIAFAEIABAFQAAAHgLADQgLADgaAAQgbAAgJgEg");
	this.shape_2.setTransform(19.7,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D6E47").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_3.setTransform(3.7,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D6E47").s().p("Ag6BGQgagbAAgoQAAgqAcgcQAbgdApAAQAeAAAWAQQAVAQABAWQgBAIgGAGQgGAFgJAAQgJAAgGgEQgGgFgGgPQgGgNgHgGQgHgFgLAAQgWAAgLAQQgMAQAAAdQgBAgASAVQARAVAZAAQAKAAAIgDQAJgCAGgFIAIgGQAKgHAFAAQAEAAACACQACACABAEQgBAFgEAGQgEAHgGAFQgOANgPAGQgRAGgSAAQgmAAgagbg");
	this.shape_4.setTransform(-11.1,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D6E47").s().p("Ag8BGQgagbAAgoQAAgqAbgcQAbgdApAAQAkAAAVAVQAVAUAAAjQAAALgDAEQgEAEgOAAIhGAAQgGAAgDgDQgEgDAAgFQAAgFAEgDQADgDAGAAIAmAAIAJgBQADgBAAgFQAAgSgMgMQgMgMgRAAQgWAAgLATQgKAUAAAbQAAAcAOAVQAPAVAXAAQAOAAAJgDQAJgDAJgGIAHgFQAJgIAGAAQAEAAACADQADADAAADQAAAFgFAGQgEAHgIAGQgQANgPAGQgPAGgSAAQgmAAgbgbg");
	this.shape_5.setTransform(-30.7,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D6E47").s().p("AAoBdQgRg8gOgLQgMgMgTgBQgOAAAAgLQAAgMALABQAfAAAOgNQAPgLAAgaQAAgYgPgNQgOgMgdAAQgOAAgGACQgGACgBAFIgCAQIgBAmIAABSIABA3QACANADADIAIADQAMAEAAAIQgBAIgJAEQgLADgeAAQgcAAgKgDQgLgEAAgIQAAgIALgEIAJgEQADgDADgWQABgWAAg5IgBhHQgCgbgDgDQgBgCgKgFQgKgEAAgHQAAgHAFgDQAGgDAMAAIApAAIAlgBIAdgBQAoAAAWARQAVASAAAhQAAAYgOASQgOARgaAIIAAACQAUADALANQAMAMAIAeIAGATQAHAdALgBIAFAAIAHAAQADAAADACQADAEAAADQAAAJgLAGQgKAFgSAAQgkAAgNgrg");
	this.shape_6.setTransform(-53.6,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D6E47").s().p("AhVB7QgJgIAAgMQAAgJAHgHQAGgHAJAAIAJACIAFAEIAFAHQAFAHAEAAQAJAAAKgNQAJgOAAgPQAAgQgNgdIgCgEIgdhBIgRgkQgDgGgLgFQgHgDgCgCQgCgDAAgEQAAgIAJgDQAKgDAbAAQAbAAAKADQAJACAAAIIgBAGIgEADIgHADQgHADAAADIAEAOIAPAlIAOAjQAFAJADAAQACAAAEgJIAMgdIAOglQAEgNAAgFQAAgFgKgGQgLgGAAgEQAAgHAJgDQAIgCAVAAQAXAAAHADQAIACAAAIQAAAHgKACIgIADQgKAGgMAfIgGAPIgXA6QgfBOgTAXQgUAXgbAAQgNAAgJgHg");
	this.shape_7.setTransform(95.4,-13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D6E47").s().p("AhQBwQgXgZAAgoQAAgtAagcQAZgcAnAAIAOABQAFACADAEQADAEAAAFQAAAKgMAAIgFAAIgEgBQgWAAgMARQgMAQAAAdQAAAfANAUQAOAUAVAAQATAAAKgLQALgLAAgVIAAgyIAAhVQAAgNgDgFQgCgFgHgDIgEgBQgMgDAAgHQAAgFAFgEQAEgDAOgFIAUgGIASgCQAGAAADADQADAEAAAIIgBAJIgCByIABBOQACASADACIANAEQAJADAAAGQAAAJgbAIIgSAFIgOACQgFAAgCgDQgCgDAAgGIAAgJIgBgEIgBgBIgGAEIgIAGQgLAJgKADQgLAEgLAAQgjAAgVgZg");
	this.shape_8.setTransform(75.5,-20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D6E47").s().p("AAhBXIgKgKIgIAEQgXAQgWAAQgbAAgRgQQgRgQAAgZQAAgeAWgPQAVgRAnAAQAJAAAEADQAFADAAAGQAAAKgMAAQgSABgMAIQgLAKAAAPQAAAPAKAJQAKAJAQAAQARgBAIgHQAIgJAAgSIAAhHQAAgQgIgJQgHgIgMgBQgJAAgIAFQgIADgHAJIgEAFQgLAOgNAAQgHAAgEgEQgFgGAAgIQAAgRAWgMQAVgMAiAAQAUAAAPAFQAOAGAJAKQAFAIADALQACALAAAbIAAA7QAAAKACAGQABAEAEABIAGACQAMADAAAHQAAAIgNAIQgMAHgRAAQgIAAgJgKg");
	this.shape_9.setTransform(53.9,-16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D6E47").s().p("Ag8BGQgagbAAgoQAAgqAbgcQAbgdApAAQAkAAAVAVQAVAUAAAjQAAALgDAEQgEAEgOAAIhGAAQgGAAgDgDQgEgDAAgFQAAgFAEgDQADgDAGAAIAmAAIAJgBQADgBAAgFQAAgSgMgMQgMgMgRAAQgWAAgLATQgKAUAAAbQAAAcAOAVQAPAVAXAAQAOAAAJgDQAJgDAJgGIAHgFQAJgIAGAAQAEAAACADQADADAAADQAAAFgFAGQgEAHgIAGQgQANgPAGQgPAGgSAAQgmAAgbgbg");
	this.shape_10.setTransform(33.8,-16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D6E47").s().p("AAoBdQgSg7gNgMQgMgNgTAAQgPAAAAgLQAAgLAMAAQAfgBAPgMQAOgLAAgaQAAgYgPgNQgOgMgdAAQgOAAgGACQgFACgCAFIgCARIgBAlIAABRIACA4QABANADADIAIADQAMAFgBAHQAAAJgKADQgJADgeAAQgdAAgKgDQgLgDAAgJQAAgHAMgFIAIgEQADgDACgWQACgWAAg6IgChGQgBgagCgEQgCgDgLgEQgJgEAAgHQAAgGAFgEQAGgDAMAAIAoAAIAmgBIAdgBQApAAAVARQAVASAAAhQAAAYgOASQgOARgaAIIAAACQAUADAMANQALAMAJAeIAEATQAIAcAKAAIAGAAIAHAAQADAAADADQADADAAADQAAAJgKAGQgMAFgRAAQglAAgMgrg");
	this.shape_11.setTransform(10.9,-20.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D6E47").s().p("AgkATQgFAAgDgCQgDgCAAgFIACgJIAEgKQADgFADgCQADgBAHAAIAJAAIAQAAIAfgBIAGAAQAFAAADACQACACABAFQgBAKgFAIQgGAJgIAAIgJAAIgKgBIgpACIgEAAg");
	this.shape_12.setTransform(-9.3,-17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D6E47").s().p("AhVB7QgJgIAAgMQAAgJAHgHQAGgHAJAAIAJACIAFAEIAFAHQAFAHAEAAQAJAAAKgNQAJgOAAgPQAAgQgNgdIgCgEIgdhBIgRgkQgDgGgLgFQgHgDgCgCQgCgDAAgEQAAgIAJgDQAKgDAbAAQAbAAAKADQAJACAAAIIgBAGIgEADIgHADQgHADAAADIAEAOIAPAlIAOAjQAFAJADAAQACAAAEgJIAMgdIAOglQAEgNAAgFQAAgFgKgGQgLgGAAgEQAAgHAJgDQAIgCAVAAQAXAAAHADQAIACAAAIQAAAHgKACIgIADQgKAGgMAfIgGAPIgXA6QgfBOgTAXQgUAXgbAAQgNAAgJgHg");
	this.shape_13.setTransform(-25,-13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D6E47").s().p("AgJBwQgJgDgHgGQgHgHgCgKQgDgKAAgcIAAhiIgRAAIgGgCIgBgFIAAgEQAAgGATgRIAIgHIAHgFQAUgSAHABIAEABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAIAAAjIApAAQAFABACABQABACAAAFIAAAFQAAAEgCACQgCADgEAAIgmAAIgDABIgCAEIAABcQAAAXAFAHQAEAGALAAQAFAAAKgEIANgCQAEgBACADQADADAAAEQAAAKgQAJQgQAJgUAAQgKAAgJgCg");
	this.shape_14.setTransform(-41.1,-18.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D6E47").s().p("Ag4BcQgJgDAAgIQABgGAIgEIAFgCQAFgCACgHQACgGAAgOIAAgNIgBgOIAAgLQAAgigBgKQgBgKgEgDIgJgDQgLgEAAgGQAAgEAEgDQACgDAJgEIAZgIIARgDQAIAAADAZIABAEIABABQAJgPALgIQAKgIALAAQAMAAAIAIQAIAHAAANQAAANgGAIQgGAHgKAAIgKgCIgHgFIgFgHQgCgFgCAAQgNAAgFASQgEARAAA4QAAAQABAIQADAIAEACIAIADQALAEAAAHQAAAHgLADQgKADgZAAQgbAAgKgDg");
	this.shape_15.setTransform(-54.6,-16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D6E47").s().p("AAhBXIgKgKIgIAEQgXAQgWAAQgbAAgRgQQgRgQAAgZQAAgeAWgPQAVgRAnAAQAJAAAEADQAFADAAAGQAAAKgMAAQgSABgMAIQgLAKAAAPQAAAPAKAJQAKAJAQAAQARgBAIgHQAIgJAAgSIAAhHQAAgQgIgJQgHgIgMgBQgJAAgIAFQgIADgHAJIgEAFQgLAOgNAAQgHAAgEgEQgFgGAAgIQAAgRAWgMQAVgMAiAAQAUAAAPAFQAOAGAJAKQAFAIADALQACALAAAbIAAA7QAAAKACAGQABAEAEABIAGACQAMADAAAHQAAAIgNAIQgMAHgRAAQgIAAgJgKg");
	this.shape_16.setTransform(-72.1,-16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D6E47").s().p("AhfCEQgLgDAAgJQAAgHALgFIAJgEQADgDADgWQABgWAAg6IgBhGQgCgagDgEQgBgDgKgEQgKgEAAgHQAAgGAFgEQAHgEALAAIATAAIAWABIAlgBIAdgBQAqAAAUASQAVARAAAkQAAAngZAVQgbATgwAAQgTAAAAgMQAAgNAQAAQAXAAAPgMQAOgMAAgcQAAgagPgMQgOgMgeAAQgNAAgGACQgGACgBAGIgCARIgBAmIAABRIABA1QACAOADADIAIADQAMAFAAAHQgBAJgJADQgLADgeAAQgcAAgKgDg");
	this.shape_17.setTransform(-93,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyreadyinterstitial, new cjs.Rectangle(-106.8,-45.1,213.7,90.2), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logokale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(130.4,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgVgDgGgEQgKgFAAgNQAAgKAFgHQAHgHAIAAIARAAQAKAAAFgLQACgKABgXIAAl5QgBgXgCgKQgFgLgKAAIgRAAQgIAAgHgHQgFgHAAgKQAAgNAKgFQAGgEAVgDQBdgNBrAAQBOAAA2ASQA0ASAnAoQAlAlAUA5QAUA4AABEQAABNgZA9QgaA+guAlQglAegxAOQgwAOhFAAQhrAAhdgNgAgwjrQgcAFgJALQgKAMAAAhIAAFjQAAAhAUALQAOAHAnADQBMAEAthAQAqg/AAhwQAAhwgqg/Qgrg/hKAAIgeADg");
	this.shape_1.setTransform(62.2,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(81.2,88.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(52.4,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(22.6,88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBeIgfgyQgGgJgKAAIgtAAQgDAAgEADQgEAEABADIAAAyQAAAGgKACIgPAAQgMAAAAgMIAAi5QgBgIAKAAIBqAAQAgAAAUATQAVATAAAfQAAAYgPAPQgIAJgPAKQgHAGADAGIAjAyQAFAIgFADQgEAFgPAAQgQAAgHgJgAg4g4IAAAuQAAAFAEADQAEACAFAAIA+AAQAQAAALgIQALgIAAgRQAAgQgLgJQgLgJgQABIg+AAQgNAAAAAKg");
	this.shape_5.setTransform(-11.1,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAAAABgBQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-44.3,88.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBkQgFgDAAgEIgOhsQgCgGgFAAQgDAAgDADIgxA+QgEAGgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBoQgCALgTAAQgGAAgFgDQgGgDAAgFIAViwQACgJADgEQAEgEALAAQAKAAAFAJIA4BPQAFAHAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAIIAVC1QABALgXAAQgFAAgFgDg");
	this.shape_7.setTransform(-78.1,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(14.6,-54.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDwQhFg1gYheIgBgCQgCgMgHAAQgGAAgCALIgBACQgYBfhGA1QhIA3hoAAQh+AAhMhQQhMhQAAiFQAAiHBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQACALAGAAQAHgBACgKIABgBQAXhgBGg1QBHg3BoAAQB/AABNBQQBMBPAACFQAACHhMBRQhNBRiBAAQhmAAhHg3gACniqQgpA/AABuQAABrApA/QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/gAmFiqQgoA/AABuQAABsAoA+QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/g");
	this.shape_9.setTransform(-21,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-98.4,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIIAJgFQAEgCAFAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(110.1,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAHQgNAJgQAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgLQAAgVAdgBICvAAQAcAAAAAYQAAAKgHAFQgHAFgRABQgOACgGAFQgGAFAAAJQAAAJADAKIBzFHQACAGAFgBQAEAAACgGIA/i2QAIgYgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgDgGgGQgFgEAAgKQAAgaAdAAICnAAQAdAAAAAYQAAASgcAEQgRACgFAFQgGAFAAAMQAAAKAIAZIBfEsQACAFAEAAQAFAAABgGIBdk6QAEgLAAgJQAAgSgdgEQgbgCAAgVQAAgNAHgGQAIgFARgBIElAAQAVABAIAFQAIAFAAAOQAAAKgGAIQgGAGgJAAIgQAAQgLAAgFALQgCAIAAAZIAABtQAAAeAFAGQAGAHAXAAIB0AAQAXAAAHgIQADgDAAgHIABgdIAAhpQAAgbgDgGQgFgLgKAAIgQAAQgKAAgHgGQgGgIAAgKQAAgOAIgFQAJgFAWgBICaAAQAWABAJAFQAJAFAAAOQAAAKgHAIQgGAGgJAAIgSAAQgEAAgEADQgFADgBAFQgDAJAAAYIAAF9QAAAXADAKQABAFAFACQAEADAEABIASAAQAJAAAGAGQAHAIAAAJQAAAOgJAFQgIAGgXAAIiaAAQgWAAgIgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIAQAAQAKAAAFgLQADgGAAgbIAAh8IgBgeQAAgHgDgEQgHgHgXAAIh0AAQgXAAgGAGQgFAHAAAdIAACCQAAAYACAJQAFALALAAIAQAAQAJAAAGAGQAGAIAAAKQAAAOgIAEQgIAGgVAAIiaAAQgWAAgJgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIARAAQAEgBAFgDQAEgCABgFQADgGAAgbIAAl9QAAgwgkAEQgLABgHAKQgIAIgGAWIiHGzQgJAfgKALQgLALgTAAQgTAAgLgJg");
	this.shape_12.setTransform(-74.6,-36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgHQAGgGAJAAIARAAQAEAAAEgDQAEgEACgEQADgIAAgXIAAl/QAAgZgDgJQgDgLgLABIgRAAQgKgBgGgGQgHgHAAgLQAAgNAJgGQAJgFAWAAICcAAQAWAAAJAFQAJAGAAANQAAALgGAHQgHAGgJABIgSAAQgOgBgDALQgDAGAAAcIAAFjQAAAdACAJQACAJAIAFQAGAEALACQALACAagBIAwAAQAvAAAPgfIAIgPQAIgQAPgBQAMAAAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(69.2,-37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgDALgHAFQgHAFgOAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(114.4,-37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZNQk7iFjyjyQjyjziFk6QiJlFAAljQAAlkCJlFQCFk6DyjzQDzjyE6iFQFFiJFjAAQFkAAFFCJQE6CFDyDyQDyDzCGE6QCJFFAAFkQAAFjiJFFQiGE6jyDzQjyDyk6CFQlFCJlkAAQljAAlFiJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.Interstitialtable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Interstitialtable();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Interstitialtable_1, new cjs.Rectangle(-160,-240,320,480), null);


(lib.holidayinterstitial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D6E47").s().p("AhbBcQgJgDAAgIQAAgGAJgEIAFgCQAFgCACgHQACgGAAgOIAAgNIgBgOIAAgTQAAgdgBgJQgBgJgEgCIgJgDQgLgEAAgGQAAgEADgDQAEgDAIgEIAbgIIATgDQAFAAACACQADADAAAGIAAANIAAABIABABIABAAIABgBIAEgEIAEgDQAUgTAXAAQANAAANAGQAMAFAIAKQAJALAEAOQADAOAAAeIAAAYIAAAMIAAAKQAAAOACAFQACAGAEACIAFACQAJAEAAAGQAAAIgJADQgIADgdAAQgaAAgIgDQgJgDAAgHQAAgHAJgDIAHgEQAEgCACgIQACgIAAgUQAAg6gIgPQgHgPgUAAQgJAAgJAGQgJAGgFAKQgEAIgBAOQgCAOAAAkQAAASACAGQABAGAEACIAHAEQAJADAAAHQAAAHgJADQgJADgYAAQgcAAgKgDg");
	this.shape.setTransform(81.5,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D6E47").s().p("AhDBGQgagcAAgpQAAgpAcgcQAbgcApAAQAoAAAaAaQAZAaAAApQAAAqgbAdQgcAdgnAAQgoAAgbgbgAgjg2QgLAPAAAYQAAAkAQAZQAPAZAWAAQASAAALgPQAMgQAAgZQAAgjgQgZQgQgZgVAAQgSAAgMAQg");
	this.shape_1.setTransform(59.8,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D6E47").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_2.setTransform(43.8,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D6E47").s().p("AgJBwQgKgEgGgFQgHgGgDgKQgCgLAAgcIAAhjIgRAAIgGgBIgBgEIAAgFQAAgGATgRIAIgHIAHgGQATgRAIAAIAFACQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIAAAjIApAAQAEABACABQACACAAAFIAAAEQAAAGgCABQgCACgEAAIgnAAIgCACIgBAEIAABcQgBAXAFAHQADAGAMAAQAFAAAKgDIANgDQADAAADACQADADAAAEQAAAJgQAKQgPAKgVAAQgKAAgJgDg");
	this.shape_3.setTransform(32,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D6E47").s().p("AAhBYIgKgKIgIADQgXAQgWAAQgbAAgRgQQgRgPAAgaQAAgeAWgQQAVgQAnAAQAJAAAEADQAFADAAAGQAAALgMgBQgSABgMAIQgLAKAAAPQAAAPAKAJQAKAJAQAAQARgBAIgHQAIgJAAgSIAAhGQAAgRgIgJQgHgJgMABQgJAAgIADQgIAFgHAIIgEAEQgLAPgNAAQgHAAgEgFQgFgEAAgJQAAgRAWgMQAVgMAiAAQAUAAAPAFQAOAGAJALQAFAGADAMQACAMAAAaIAAA7QAAAKACAFQABAGAEAAIAGACQAMAEAAAFQAAAJgNAIQgMAHgRAAQgIAAgJgJg");
	this.shape_4.setTransform(15.4,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D6E47").s().p("Ag4BcQgIgDgBgIQAAgGAJgEIAFgCQAFgCACgHQACgGAAgOIAAgNIAAgOIAAgLQgBgigBgKQgCgKgEgDIgIgDQgLgEAAgGQAAgEADgDQAEgDAIgEIAZgIIAQgDQAJAAAEAZIAAAEIABABQAJgPAKgIQALgIAKAAQAOAAAHAIQAIAHAAANQAAANgGAIQgGAHgLAAIgJgCIgIgFIgEgHQgCgFgCAAQgNAAgFASQgEARAAA4QAAAQACAIQABAIAGACIAHADQALAEAAAHQAAAHgKADQgLADgYAAQgdAAgJgDg");
	this.shape_5.setTransform(-1.6,25.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D6E47").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_6.setTransform(-14.7,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D6E47").s().p("AhZB+QgKgDAAgHQAAgGAIgEIAKgEQADgEACgPQABgOAAgvIAAgdQAAgzgBgOQgCgPgEgCIgJgDQgLgEAAgGQAAgFADgDQAEgDAHgDIAagIQAMgEAHAAQAFAAACADQADADAAAHIAAAJIAAADIABABIAHgFIAHgFQAMgIAKgFQAKgEALAAQAjAAAVAaQAWAZAAAoQAAAsgYAdQgZAcgmAAQgQAAgFgEQgGgFAAgHQAAgEADgDQACgDAGAAIAEABIAHAAQAUAAANgRQAMgRAAgcQAAgggNgTQgOgUgVAAQgTAAgLALQgLALAAAcIAAB1IABATQABAHADADQACACAIADIAHACIAFAEIABAFQAAAHgLADQgLADgaAAQgbAAgJgEg");
	this.shape_7.setTransform(-31.6,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D6E47").s().p("AgNBhIgUgEIgGAEIgFABIgEgBIgEgCQgGgGgFgPQgGgPAAgOQAAgFADgFQAEgDAEAAQAJAAAJAOIAHALQAFAIAKAFQAJADAKAAQANAAAHgFQAHgHAAgKQAAgQgegPIgLgFQgdgOgKgLQgKgNAAgRQAAgZARgPQAQgPAbAAIANABIANACIAIgDIAGgCQAJABAJAPQAJAOAAAQQAAAGgDAEQgDAEgFAAQgFAAgEgEQgEgDgGgJQgHgMgHgEQgHgFgLABQgKAAgGAFQgHAHAAAJQAAAIAHAHQAHAHAWAMIACAAQA0AZAAAeQAAAagUARQgUARgeABg");
	this.shape_8.setTransform(-50.4,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D6E47").s().p("AhbBcQgJgDAAgIQAAgGAJgEIAFgCQAFgCACgHQACgGAAgOIAAgNIgBgOIAAgTQAAgdgBgJQgBgJgEgCIgJgDQgLgEAAgGQAAgEADgDQAEgDAIgEIAbgIIATgDQAFAAACACQADADAAAGIAAANIAAABIABABIABAAIABgBIAEgEIAEgDQAUgTAXAAQANAAANAGQAMAFAIAKQAJALAEAOQADAOAAAeIAAAYIAAAMIAAAKQAAAOACAFQACAGAEACIAFACQAJAEAAAGQAAAIgJADQgIADgdAAQgaAAgIgDQgJgDAAgHQAAgHAJgDIAHgEQAEgCACgIQACgIAAgUQAAg6gIgPQgHgPgUAAQgJAAgJAGQgJAGgFAKQgEAIgBAOQgCAOAAAkQAAASACAGQABAGAEACIAHAEQAJADAAAHQAAAHgJADQgJADgYAAQgcAAgKgDg");
	this.shape_9.setTransform(-69.6,25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D6E47").s().p("AgmCDQgLgEAAgIQAAgIAMgEIAIgEQAEgDACgWQABgWAAg5IgBhHQgCgbgCgDQgCgDgKgEQgKgEAAgHQAAgIAJgCQAIgDAgAAQAhAAAJADQAIACAAAIQAAAHgMAEIgIAFQgDACgCATIgBA9IABBXQABAhACADQACADAKAEQAKADAAAIQAAAIgKAEQgKADgeAAQgcAAgKgDg");
	this.shape_10.setTransform(-86.7,21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D6E47").s().p("AhVB7QgJgIAAgMQAAgJAHgHQAGgHAJAAIAJACIAFAEIAFAHQAFAHAEAAQAJAAAKgNQAJgOAAgPQAAgQgNgdIgCgEIgdhBIgRgkQgDgGgLgFQgHgDgCgCQgCgDAAgEQAAgIAJgDQAKgDAbAAQAbAAAKADQAJACAAAIIgBAGIgEADIgHADQgHADAAADIAEAOIAPAlIAOAjQAFAJADAAQACAAAEgJIAMgdIAOglQAEgNAAgFQAAgFgKgGQgLgGAAgEQAAgHAJgDQAIgCAVAAQAXAAAHADQAIACAAAIQAAAHgKACIgIADQgKAGgMAfIgGAPIgXA6QgfBOgTAXQgUAXgbAAQgNAAgJgHg");
	this.shape_11.setTransform(56.5,-13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D6E47").s().p("AAhBXIgKgKIgIAEQgXAQgWAAQgbAAgRgQQgRgQAAgZQAAgeAWgPQAVgRAnAAQAJAAAEADQAFADAAAGQAAAKgMAAQgSABgMAIQgLAKAAAPQAAAPAKAJQAKAJAQAAQARgBAIgHQAIgJAAgSIAAhHQAAgQgIgJQgHgIgMgBQgJAAgIAFQgIADgHAJIgEAFQgLAOgNAAQgHAAgEgEQgFgGAAgIQAAgRAWgMQAVgMAiAAQAUAAAPAFQAOAGAJAKQAFAIADALQACALAAAbIAAA7QAAAKACAGQABAEAEABIAGACQAMADAAAHQAAAIgNAIQgMAHgRAAQgIAAgJgKg");
	this.shape_12.setTransform(37.2,-16.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D6E47").s().p("AhQBwQgXgZAAgoQAAgtAagcQAZgcAnAAIAOABQAFACADAEQADAEAAAFQAAAKgMAAIgFAAIgEgBQgWAAgMARQgMAQAAAdQAAAfANAUQAOAUAVAAQATAAAKgLQALgLAAgVIAAgyIAAhVQAAgNgDgFQgCgFgHgDIgEgBQgMgDAAgHQAAgFAFgEQAEgDAOgFIAUgGIASgCQAGAAADADQADAEAAAIIgBAJIgCByIABBOQACASADACIANAEQAJADAAAGQAAAJgbAIIgSAFIgOACQgFAAgCgDQgCgDAAgGIAAgJIgBgEIgBgBIgGAEIgIAGQgLAJgKADQgLAEgLAAQgjAAgVgZg");
	this.shape_13.setTransform(16.5,-20.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D6E47").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_14.setTransform(-0.7,-21);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D6E47").s().p("AgfCFQgJgDAAgIQABgGAHgDIAJgFQADgDACgMIACgkIgBgdIAAgiIAAgPQAAgvgCgNQgBgOgEgBIgLgFQgMgDgBgHQAAgEAFgDQADgEANgEIAZgGIASgEQAGAAACAEQADAEAAAIIgBAPQgCBCAABCIABBAQACANADAEIAKAFQAIADAAAHQAAAIgJACQgJAEgZAAQgaAAgKgEg");
	this.shape_15.setTransform(-11.6,-21);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D6E47").s().p("AhDBGQgagcAAgpQAAgpAcgcQAbgcApAAQAoAAAaAaQAZAaAAApQAAAqgbAdQgcAdgnAAQgoAAgbgbgAgjg2QgLAPAAAYQAAAkAQAZQAPAZAWAAQASAAALgPQAMgQAAgZQAAgjgQgZQgQgZgVAAQgSAAgMAQg");
	this.shape_16.setTransform(-27.1,-16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D6E47").s().p("AApCDQgKgDAAgJQAAgHAMgFIAIgEQADgCABgMIACgsIgBgZIgBgHQgCgEgJgCQgJgBgjAAIgnABQgKABgDADIgDAFIAAAOIAAAPIABAsQABAMADACIAIAEQAMAFAAAHQAAAJgKADQgKADgeAAQgdAAgKgDQgLgDAAgJQAAgHAMgFIAIgEQAEgDACgXQABgYAAg3IgBhFQgCgbgCgEQgCgCgKgFQgKgEAAgHQAAgHAJgDQAIgDAhAAQAhAAAIADQAJADAAAHQAAAHgMAEIgIAFQgDACgBALIgCA3QAAAIAHACQAHADAbAAIAPAAIAngBQALgBAEgDIACgDIABgIIAAgIIgCguQgBgJgDgCIgIgFQgMgEAAgHQAAgHAJgDQAIgDAhAAQAhAAAIADQAJACAAAIQAAAHgMAEIgIAFQgEACgCAaQgBAYAAAyIABBHQACAcACAFQACACAKAEQAKAEAAAHQAAAJgLADQgKADgdAAQgeAAgKgDg");
	this.shape_17.setTransform(-51.8,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidayinterstitial, new cjs.Rectangle(-94.8,-45.1,189.7,90.2), null);


(lib.fillyourinboxInterstitial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AAaCFQgJgDAAgHQAAgHAJgDIAHgEQAEgCACgIQACgIAAgTQAAg8gIgOQgHgPgUAAQgJAAgJAGQgJAGgFAJQgEAIgCAOQgBAOAAAlQAAASABAGQACAGAEACIAHAEQAKADAAAHQAAAHgKADQgJADgYAAQgdAAgJgDQgJgDAAgIQAAgGAJgEIAFgCQAFgDACgHQACgIAAgUIAAgfIAAgcIgBhUQgBgUgDgEQgCgCgLgDQgLgEAAgGQAAgFAFgEQAEgDAQgGIATgFIARgCQAGAAADADQACAEAAAIIAAAIIgBBKIAAAJIAAAEIAEACIAEgEIAGgIQAKgJAKgEQAJgFAMAAQAfAAARAVQAPAUAAApIAAARIAAAiIAAAKQAAAJACAFQACAEAEACIAFACQAJAEAAAGQAAAIgIADQgKADgdAAQgYAAgJgDg");
	this.shape.setTransform(80.2,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AgJBwQgJgEgHgFQgHgGgCgKQgDgLAAgcIAAhjIgRAAIgFgBIgCgEIAAgFQAAgGATgRIAIgHIAHgGQAUgRAHAAIAEACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAjIAqAAQAFABACABQABACAAAFIAAAEQAAAGgCABQgCACgEAAIgmAAIgDACIgCAEIAABcQAAAXAFAHQAEAGAKAAQAHAAAJgDIANgDQAEAAACACQADADAAAEQAAAJgQAKQgQAKgTAAQgLAAgJgDg");
	this.shape_1.setTransform(62.8,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_2.setTransform(50.5,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AALAUIgWg5QgLgbgJgEIgEgCQgLgFAAgHQAAgHAJgDQAJgDAdAAQAZAAAKADQAJADAAAHIgBAGIgEAEIgGACQgIAEAAAEIADAMIAQAmIAQAkQAEAIACAAQACAAAEgFIAIgQIAUguQAHgSAAgHIgBgGIgFgEIgFgDQgIgDAAgGQAAgHAIgDQAJgDAWAAQAUAAAIADQAHADAAAHQAAAIgJADIgHACQgIAEgRAnIgEAJIgIARQgpBggNAAQgNAAgghMgAhsAKIgGgLIgMgfQgMgggIgEIgGgCQgLgFABgHQAAgHAJgDQAKgDAdAAQAaAAAIADQAKADgBAHIAAAGIgEAEIgGACQgHAEgBAEIAEAPIAOAjIAQAjQAFAJACAAQAGAAAFgLIAGgOIAFgFQACgCAEAAQAEAAADACQADADAAAFQgBAFgFAKQgTArgJAOQgIAOgHAAQgNAAgkhWg");
	this.shape_3.setTransform(30.1,25.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AASBaQgLgDABgIQAAgFAFgEQAHgDAAgCQAAgDgJgNIghgxIgegtQgKgOgHgGQgCgCgJgCQgIgCAAgGQgBgIALgEQAJgDAYAAQAZAAALADQAJADAAAHQAAAGgGAEQgGAEAAABQAAAFAVAeIACACIAGgKQARgYAAgDQAAgBgHgEQgGgEgBgGQAAgGAJgEQAKgDATAAQAQAAAIADQAIAEAAAGQAAAIgNAEIgKAEQgHAEgMAOQgLANgOAYIAhAyQALAPAHAGIAMAGQAKADAAAHQAAAHgKAEQgJADgYAAQgZAAgKgDgAhXBaQgIgEAAgGQAAgIAOgEIAKgEQAFgCAJgMIAQgXIAFgFIAGgCQAEAAADACQACADAAAFQAAAEgDAGQgPAVAAADQAAACAHAEQAHADAAAGQAAAHgJADQgJAEgUAAQgRAAgHgDg");
	this.shape_4.setTransform(-5.2,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AhDBGQgagcAAgpQAAgpAcgcQAbgcApAAQAoAAAaAaQAZAaAAApQAAAqgbAdQgcAdgnAAQgoAAgbgbgAgjg2QgLAPAAAYQAAAkAQAZQAPAZAWAAQASAAALgPQAMgQAAgZQAAgjgQgZQgQgZgVAAQgSAAgMAQg");
	this.shape_5.setTransform(-25,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgZCFQgPgEgLgIIgMAIQgFACgFAAIgHAAIgHgDIAAgDQAIgIACgQQADgQAAgqIAAgoIAAgqQAAgjgBgLQgCgMgEgCIgKgDQgMgDAAgHQAAgDAEgEQAEgDAOgGIAWgGIASgDQAHAAADAEQACACAAAHIgBAKIgBA2IAABSIABAvQAAAcAIAJQAIAJAVAAQAWAAAOgTQANgUAAgiQAAgegNgQQgNgSgWAAIgFAAIgEAAQgOAAAAgMQAAgKAOgFQAMgFAPAAQAkAAAVAYQAVAYAAAoQAAAvgaAdQgbAcgsAAQgQAAgQgFg");
	this.shape_6.setTransform(-47.3,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AhbBcQgJgDAAgIQAAgGAJgEIAFgCQAFgCACgHQACgGAAgOIAAgNIgBgOIAAgTQAAgdgBgJQgBgJgEgCIgJgDQgLgEAAgGQAAgEADgDQAEgDAIgEIAbgIIATgDQAFAAACACQADADAAAGIAAANIAAABIABABIABAAIABgBIAEgEIAEgDQAUgTAXAAQANAAANAGQAMAFAIAKQAJALAEAOQADAOAAAeIAAAYIAAAMIAAAKQAAAOACAFQACAGAEACIAFACQAJAEAAAGQAAAIgJADQgIADgdAAQgaAAgIgDQgJgDAAgHQAAgHAJgDIAHgEQAEgCACgIQACgIAAgUQAAg6gIgPQgHgPgUAAQgJAAgJAGQgJAGgFAKQgEAIgBAOQgCAOAAAkQAAASACAGQABAGAEACIAHAEQAJADAAAHQAAAHgJADQgJADgYAAQgcAAgKgDg");
	this.shape_7.setTransform(-68.5,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgmCDQgLgEAAgIQAAgIAMgEIAIgEQAEgDACgWQABgWAAg5IgBhHQgCgbgCgDQgCgDgKgEQgKgEAAgHQAAgIAJgCQAIgDAgAAQAhAAAJADQAIACAAAIQAAAHgMAEIgIAFQgDACgCATIgBA9IABBXQABAhACADQACADAKAEQAKADAAAIQAAAIgKAEQgKADgeAAQgcAAgKgDg");
	this.shape_8.setTransform(-85.7,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("Ag4BcQgIgDgBgIQAAgGAJgEIAFgCQAFgCACgHQACgGAAgOIAAgNIAAgOIAAgLQAAgigCgKQgCgKgDgDIgJgDQgLgEAAgGQAAgEADgDQADgDAJgEIAZgIIARgDQAJAAACAZIABAEIABABQAJgPALgIQAKgIAKAAQANAAAIAIQAIAHAAANQAAANgGAIQgGAHgKAAIgKgCIgHgFIgFgHQgCgFgCAAQgNAAgFASQgEARAAA4QAAAQACAIQACAIAEACIAIADQALAEAAAHQAAAHgLADQgJADgaAAQgbAAgKgDg");
	this.shape_9.setTransform(66.6,-16.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AAoBeQgCgDgBgFIAAgOIAAgBIgBAAQgCAAgEAFIgDACQgIAKgLAEQgLAEgOAAQgNAAgNgFQgMgFgIgKQgJgKgEgQQgDgPAAgmIAAgMIAAgPIAAgDQAAgPgCgFQgCgEgHgCIgHgDQgKgDAAgGQAAgEADgEQAEgDANgEIAZgHIAUgDQAFAAACAEQACADAAAJIAAAHIgCBGQAAAlAIAOQAIAOATAAQAUABAJgUQAKgSgBgtIAAgOQAAgOgCgFQgCgEgGgCIgIgDQgKgDAAgGQAAgEAEgDQADgEANgEIAZgHIATgDQAHAAABADQACAEAAAJIAAAKIgCBMIAAAfIABANQACAHAJAEIAEABQAKAEABAFQAAAFgDADQgEADgIAEIgbAIQgMADgHAAQgGAAgCgDg");
	this.shape_10.setTransform(47.7,-16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AhDBGQgagcAAgpQAAgpAcgcQAbgcApAAQAoAAAaAaQAZAaAAApQAAAqgbAdQgcAdgnAAQgoAAgbgbgAgjg2QgLAPAAAYQAAAkAQAZQAPAZAWAAQASAAALgPQAMgQAAgZQAAgjgQgZQgQgZgVAAQgSAAgMAQg");
	this.shape_11.setTransform(26.1,-16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AgnCDQgKgDAAgJQAAgHAMgFIAIgEQAGgEABhMIAAgRIgXgkIgig3QgLgQgGgDIgJgFQgNgDAAgIQAAgHAJgDQAJgDAkAAQAkAAAIADQAJADAAAHQAAAHgOAGIgCAAIgFAEIgCAFQAAAFAIANIAlA5IAfgwQALgRAAgFQAAgFgDgDQgDgDgIgEQgHgDgCgCQgDgCAAgFQAAgHAIgDQAHgDAfAAQAeAAAIADQAIADAAAHQAAAHgKAFIgOAHQgJAGgSAbQgRAagcAvIABAgQABA/AFADIAIAEQAMAFAAAHQAAAJgKADQgLADgdAAQgcAAgLgDg");
	this.shape_12.setTransform(3.6,-20.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgfCFQgIgDgBgIQAAgGAIgDIAJgFQADgDACgMIACgkIgBgdIAAgiIAAgPQAAgvgBgNQgCgOgEgBIgLgFQgNgDAAgHQAAgEAFgDQADgEANgEIAZgGIATgEQAFAAACAEQADAEAAAIIgBAPQgCBCAABCIACBAQABANACAEIALAFQAIADAAAHQAAAIgJACQgJAEgZAAQgaAAgKgEg");
	this.shape_13.setTransform(-24.5,-21);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgfCFQgIgDgBgIQAAgGAIgDIAJgFQAEgDABgMIABgkIAAgdIAAgiIAAgPQAAgvgBgNQgCgOgEgBIgLgFQgMgDAAgHQAAgEADgDQAEgEANgEIAZgGIATgEQAFAAACAEQACAEABAIIgBAPQgCBCAABCIACBAQABANACAEIALAFQAJADgBAHQAAAIgJACQgJAEgYAAQgcAAgJgEg");
	this.shape_14.setTransform(-35.1,-21);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_15.setTransform(-45.6,-21);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AheCFQgKgDAAgJQAAgHAKgEQAKgEACgCQACgFACgcIABhHIgBhEQgCgcgCgEQgCgCgKgFQgKgEAAgHQAAgIAJgCQAIgDAgAAIBxAAIASgCIAKgCIAFABIADAEQAEAGADANQAEAMAAAJQAAAIgDAGQgDADgGAAQgGAAgIgMIgGgJQgEgFgIgDQgIgEgNAAIgZAAQgRAAgJADQgJABgEAFQgDADgBAMIgCAkIAAAQQAAAIACADQABABAGAAIAdAAQAPAAAGgDQAGgFACgLIAAgEQADgTAKgBQAIAAADALQADAKAAAkQAAAigDAKQgDAKgIAAQgKAAgDgTIAAgEQgCgLgGgFQgGgEgPAAIgdAAQgFAAgCADQgCAEAAALIAAAPIACA0QABALADACIAIAEQAMAFAAAHQAAAJgLADQgKADgdAAQgeAAgKgDg");
	this.shape_16.setTransform(-61.9,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fillyourinboxInterstitial, new cjs.Rectangle(-93.8,-45.1,187.6,90.2), null);


(lib.diyinterstitial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D6E47").s().p("AgNBhIgUgEIgGAEIgFAAIgEAAIgEgCQgGgGgFgPQgGgPAAgOQAAgGADgEQAEgDAEAAQAJAAAJAOIAHAMQAFAHAKAFQAJADAKAAQANAAAHgFQAHgHAAgKQAAgPgegQIgLgFQgdgOgKgLQgKgNAAgRQAAgZARgPQAQgPAbAAIANABIANACIAIgDIAGgCQAJAAAJAPQAJAPAAAQQAAAGgDAFQgDADgFAAQgFAAgEgDQgEgEgGgJQgHgMgHgEQgHgEgLAAQgKgBgGAHQgHAFAAAKQAAAIAHAHQAHAHAWAMIACAAQA0AZAAAeQAAAagUARQgUARgeAAg");
	this.shape.setTransform(66.1,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D6E47").s().p("AhZB+QgKgDAAgHQAAgGAIgEIAKgEQADgEACgPQABgOAAgvIAAgdQAAgzgBgOQgCgPgEgCIgJgDQgLgEAAgGQAAgFADgDQAEgDAHgDIAagIQAMgEAHAAQAFAAACADQADADAAAHIAAAJIAAADIABABIAHgFIAHgFQAMgIAKgFQAKgEALAAQAjAAAVAaQAWAZAAAoQAAAsgYAdQgZAcgmAAQgQAAgFgEQgGgFAAgHQAAgEADgDQACgDAGAAIAEABIAHAAQAUAAANgRQAMgRAAgcQAAgggNgTQgOgUgVAAQgTAAgLALQgLALAAAcIAAB1IABATQABAHADADQACACAIADIAHACIAFAEIABAFQAAAHgLADQgLADgaAAQgbAAgJgEg");
	this.shape_1.setTransform(46.4,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D6E47").s().p("AggCFQgJgEAAgIQAAgGAJgDIAFgCQAEgDACgGQACgGAAgPIAAgMIAAgPIAAgTQAAgdgBgIQgCgJgEgCIgIgDQgMgEAAgGQAAgEAEgEQADgDAIgDIAcgJIATgEQAFAAACAEQADADAAAJIAAALIgBAIIgBAvIAAABIgBAuQAAARACAIQABAHAEACIAHADQAKADAAAIQAAAHgJADQgJADgZAAQgbAAgJgDgAgWhdQgIgGAAgKQAAgLAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQAAAKgJAHQgIAIgMAAQgMAAgIgHg");
	this.shape_2.setTransform(30.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D6E47").s().p("AgmCEQgLgDAAgJQAAgHAKgEQAKgEACgCQACgEABgeIAChXIgBgxIgCgeQAAgFgEgBQgDgCgHAAIgIAAQgNAAgHADQgHADgGAHIgFANIgGAMIgFAGQgDACgEAAQgGAAgCgFQgCgFAAgLQAAgYAFgPQAGgPAJAAIACAAQAPACAWAAIBtAAQAWAAAPgCIACAAQAJAAAGAPQAFAPAAAYQAAALgCAFQgDAFgGAAIgGgCIgFgGIgGgMIgGgNQgFgHgHgDQgHgDgNAAIgIAAQgHAAgDACQgEABAAAFIgCAeIAAAxIABBXQABAeACAEQACACAKAEQAKAEAAAHQAAAJgLADQgKADgdAAQgcAAgKgDg");
	this.shape_3.setTransform(13,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D6E47").s().p("AgnCDQgKgDAAgJQAAgIAMgEIAIgEQAGgEABhMIAAgRIgXgjIgig4QgLgQgGgDIgJgFQgNgDAAgIQAAgIAJgCQAJgDAkAAQAkAAAIADQAJACAAAIQAAAHgOAGIgCAAIgFAEIgCAFQAAAFAIANIAlA5IAfgwQALgRAAgFQAAgFgDgDQgDgDgIgEQgHgDgCgCQgDgCAAgFQAAgIAIgCQAHgDAfAAQAeAAAIADQAIACAAAIQAAAHgKAFIgPAHQgIAGgSAbQgRAagcAvIABAgQABA/AFADIAIAEQAMAEAAAIQAAAJgKADQgLADgdAAQgcAAgLgDg");
	this.shape_4.setTransform(-21.6,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D6E47").s().p("AgmCDQgLgDAAgJQAAgIAMgEIAIgEQAEgDACgWQABgWAAg6IgBhGQgCgagCgEQgCgDgKgEQgKgEAAgHQAAgIAJgCQAIgDAgAAQAhAAAJADQAIACAAAIQAAAHgMAEIgIAFQgDACgCATIgBA9IABBYQABAgACAEQACACAKAEQAKADAAAIQAAAJgKADQgKADgeAAQgcAAgKgDg");
	this.shape_5.setTransform(-39.7,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D6E47").s().p("AgnCGIgYgBIgPABIgPAAQgXAAgIgDQgGgDgBgIQAAgHAKgEQAKgEACgCQADgEABgcIABhHIgBhFQgCgcgCgEQgCgCgJgEQgLgFAAgHQABgHAHgEQAIgDAXAAIAPABIATAAIAYgBIAWAAQBEAAAmAkQAmAjAABBQAABBgnAhQgnAhhIAAgAgohpQgJADgCAGQgCAHgBAWIgBA4IABBGQABAdACAGQACAGANAEQAMAEARAAQApAAAWgaQAVgaABg0QAAg2gZgdQgYgdguAAQgOAAgJADg");
	this.shape_6.setTransform(-60.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.diyinterstitial, new cjs.Rectangle(-76.5,-24,153,48.1), null);


(lib.ctarollovervideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AvlEsIAApXIfLAAIAAJXg");
	this.shape.setTransform(0,0,0.86,0.593);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarollovervideo, new cjs.Rectangle(-85.8,-17.8,171.6,35.6), null);


(lib.ctarectangleinterstitial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AtZCyIAAljIazAAIAAFjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangleinterstitial, new cjs.Rectangle(-85.7,-17.7,171.6,35.6), null);


(lib.cookietwo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwo();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwo_1, new cjs.Rectangle(-105,-86,210,172), null);


(lib.cookietwelve_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwelve();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwelve_1, new cjs.Rectangle(-105,-86,210,172), null);


(lib.cookiesixteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesixteen();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiesixteen_1, new cjs.Rectangle(-105,-86,210,172), null);


(lib.cookiesix_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesix();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiesix_1, new cjs.Rectangle(-105,-86,210,172), null);


(lib.cookienine_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookienine();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookienine_1, new cjs.Rectangle(-105,-86,210,172), null);


(lib.cookiegreens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiegreens();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiegreens_1, new cjs.Rectangle(-105,-86,210,172), null);


(lib.cookiefrosting_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefrosting();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefrosting_1, new cjs.Rectangle(-105,-86,210,172), null);


(lib.cookiefour_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefour();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefour_1, new cjs.Rectangle(-105,-86,210,172), null);


(lib.cookiebluetray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieone();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiebluetray, new cjs.Rectangle(-105,-86,210,172), null);


(lib.cookieberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieberries();
	this.instance.parent = this;
	this.instance.setTransform(-105,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieberries_1, new cjs.Rectangle(-105,-86,210,172), null);


(lib.blackrectangleinbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgkQMAu3AAAMAAABIhMgu3AAAg");
	this.shape.setTransform(0,0,1.063,1.032);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5,-240.5,321,481);


(lib.kalelogointerstial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logokale("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.269,0.269,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kalelogointerstial, new cjs.Rectangle(-46.9,-46.9,94,94), null);


(lib.ctarollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// Layer 1
	this.instance = new lib.ctarollovervideo();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.8,-17.8,171.6,35.6);


// stage content:
(lib.interstitialfillyourinboxthird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_48 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(131).call(this.frame_179).wait(6));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(160.4,240.1,1.553,0.731,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(185));

	// black-rectangle
	this.instance = new lib.blackrectangleinbox("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185));

	// fade-from-white
	this.instance_1 = new lib.whiterectanglefade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(172.5,253.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(176));

	// fill-your-inbox-with
	this.instance_2 = new lib.fillyourinboxInterstitial();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160,172.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({y:170.2},0).to({alpha:1},10).wait(145));

	// logo
	this.instance_3 = new lib.kalelogointerstial();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160,37);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({scaleX:0.06,scaleY:0.06},0).to({scaleX:1.09,scaleY:1.09,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(162));

	// sign-up-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlkcpIAAoNIYIAAIAAINg");
	mask.setTransform(118.8,183.3);

	// sign-up
	this.instance_4 = new lib.signupinterstitial();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160,327.4);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({y:290.3},0).to({y:332.4,alpha:1},10,cjs.Ease.get(1)).to({y:327.4},8,cjs.Ease.get(1)).wait(119));

	// cta-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AupGEIAAsHIdTAAIAAMHg");
	mask_1.setTransform(163.8,347.3);

	// cta-rollover
	this.cta_rollover = new lib.ctarollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(160,326.8);

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(48).to({y:290.3,alpha:0},0).to({y:331.8,alpha:1},10,cjs.Ease.get(1)).to({y:326.8},8,cjs.Ease.get(1)).wait(119));

	// cta-rectangle-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AupGEIAAsHIdTAAIAAMHg");
	mask_2.setTransform(163.8,347.3);

	// cta-rectangle
	this.instance_5 = new lib.ctarectangleinterstitial();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160,326.8);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48).to({y:290.3},0).to({y:331.8,alpha:1},10,cjs.Ease.get(0.96)).to({y:326.8},8,cjs.Ease.get(1)).wait(119));

	// Party-Ready Recipes
	this.instance_6 = new lib.partyreadyinterstitial();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,254.7);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({alpha:1},10).wait(36).to({alpha:0},5).wait(94));

	// something-delicious
	this.instance_7 = new lib.somethingdeliciousInterstitial();
	this.instance_7.parent = this;
	this.instance_7.setTransform(160,254.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(146).to({alpha:1},10).wait(29));

	// Holiday
	this.instance_8 = new lib.holidayinterstitial();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,254.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(116).to({alpha:1},10).wait(20).to({alpha:0},5).wait(34));

	// DIY Tips
	this.instance_9 = new lib.diyinterstitial();
	this.instance_9.parent = this;
	this.instance_9.setTransform(160,233.6);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(86).to({y:235.6},0).to({alpha:1},10).wait(20).to({alpha:0},5).wait(64));

	// cookie-greens
	this.instance_10 = new lib.cookiegreens_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(219,398);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({alpha:1},0).wait(130));

	// cookie-berries
	this.instance_11 = new lib.cookieberries_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(219,398);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(52).to({alpha:1},0).wait(133));

	// cookie-frosting
	this.instance_12 = new lib.cookiefrosting_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(219,398);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(45).to({alpha:1},0).wait(140));

	// cookie-sixteen
	this.instance_13 = new lib.cookiesixteen_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(219,398);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({alpha:1},0).wait(146));

	// cookie-twelve
	this.instance_14 = new lib.cookietwelve_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(219,398);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(33).to({alpha:1},0).wait(152));

	// cookie-nine
	this.instance_15 = new lib.cookienine_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(219,398);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(27).to({alpha:1},0).wait(158));

	// cookie-six
	this.instance_16 = new lib.cookiesix_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(219,398);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(21).to({alpha:1},0).wait(164));

	// cookie-four
	this.instance_17 = new lib.cookiefour_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(219,398);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15).to({alpha:1},0).wait(170));

	// cookie-two
	this.instance_18 = new lib.cookietwo_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(219,398);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(9).to({alpha:1},10).wait(166));

	// cookie-one
	this.instance_19 = new lib.cookiebluetray();
	this.instance_19.parent = this;
	this.instance_19.setTransform(219,398);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(185));

	// table
	this.instance_20 = new lib.Interstitialtable_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(185));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.1,221.1,395,545);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.jpg", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;