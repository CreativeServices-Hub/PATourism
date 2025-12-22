(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"970x250_atlas_1", frames: [[0,135,970,214],[0,0,1651,133],[1393,135,463,100],[1393,237,435,87],[972,135,419,420]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["970x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["970x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["970x250_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["970x250_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.soccerball = function() {
	this.initialize(ss["970x250_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-236,-30,0.4439,0.4439);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236,-30,732.9,59.1);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(223,-20,0.4506,0.4506);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(223,-20,196,39.2);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_9
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(187,-29,0.5775,0.5775);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187,-29,267.4,57.8);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.soccerball();
	this.instance.setTransform(-230,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-210,419,420);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-148,-58,0.7511,0.7511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-58,728.6,160.8);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(110.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.8,-210,419,420);


// stage content:
(lib._970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_5
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(667.85,148.75,0.5984,0.5984);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86).to({_off:false},0).to({regY:0.1,y:157.15,alpha:1},13,cjs.Ease.get(1)).wait(141));

	// Symbol_3
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(1102.8,127.75,0.5984,0.5984,-135,0,0,89.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:89.5,rotation:0,x:4.15,y:125.65},28).wait(212));

	// Symbol_6
	this.instance_2 = new lib.Symbol6("synched",0);
	this.instance_2.setTransform(330,185.8,0.4155,0.4155);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({scaleX:0.5984,scaleY:0.5984,alpha:1},19,cjs.Ease.backOut).wait(178));

	// Symbol_4
	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.setTransform(670.15,111.4,0.5984,0.5984,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240));

	// Layer_13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EArqAMjIAAy/MBGVAAAIAAS/g");
	var mask_graphics_1 = new cjs.Graphics().p("EApBAMjIAAy/MBGwAAAIAAS/g");
	var mask_graphics_2 = new cjs.Graphics().p("EAmXAMjIAAy/MBHLAAAIAAS/g");
	var mask_graphics_3 = new cjs.Graphics().p("EAjtAMjIAAy/MBHnAAAIAAS/g");
	var mask_graphics_4 = new cjs.Graphics().p("EAhDAMjIAAy/MBICAAAIAAS/g");
	var mask_graphics_5 = new cjs.Graphics().p("AeZMjIAAy/MBIeAAAIAAS/g");
	var mask_graphics_6 = new cjs.Graphics().p("AbwMjIAAy/MBI4AAAIAAS/g");
	var mask_graphics_7 = new cjs.Graphics().p("AZGMjIAAy/MBJUAAAIAAS/g");
	var mask_graphics_8 = new cjs.Graphics().p("AWcMjIAAy/MBJwAAAIAAS/g");
	var mask_graphics_9 = new cjs.Graphics().p("ATyMjIAAy/MBKLAAAIAAS/g");
	var mask_graphics_10 = new cjs.Graphics().p("ARIMjIAAy/MBKnAAAIAAS/g");
	var mask_graphics_11 = new cjs.Graphics().p("AOeMjIAAy/MBLCAAAIAAS/g");
	var mask_graphics_12 = new cjs.Graphics().p("AL1MjIAAy/MBLdAAAIAAS/g");
	var mask_graphics_13 = new cjs.Graphics().p("AJLMjIAAy/MBL4AAAIAAS/g");
	var mask_graphics_14 = new cjs.Graphics().p("AGhMjIAAy/MBMUAAAIAAS/g");
	var mask_graphics_15 = new cjs.Graphics().p("AD3MjIAAy/MBMvAAAIAAS/g");
	var mask_graphics_16 = new cjs.Graphics().p("ABNMjIAAy/MBNLAAAIAAS/g");
	var mask_graphics_17 = new cjs.Graphics().p("AhbMjIAAy/MBNlAAAIAAS/g");
	var mask_graphics_18 = new cjs.Graphics().p("AkFMjIAAy/MBOAAAAIAAS/g");
	var mask_graphics_19 = new cjs.Graphics().p("AmvMjIAAy/MBOcAAAIAAS/g");
	var mask_graphics_20 = new cjs.Graphics().p("ApZMjIAAy/MBO3AAAIAAS/g");
	var mask_graphics_21 = new cjs.Graphics().p("AsDMjIAAy/MBPTAAAIAAS/g");
	var mask_graphics_22 = new cjs.Graphics().p("AusMjIAAy/MBPtAAAIAAS/g");
	var mask_graphics_23 = new cjs.Graphics().p("AxWMjIAAy/MBQJAAAIAAS/g");
	var mask_graphics_24 = new cjs.Graphics().p("A0AMjIAAy/MBQkAAAIAAS/g");
	var mask_graphics_25 = new cjs.Graphics().p("A2qMjIAAy/MBRAAAAIAAS/g");
	var mask_graphics_26 = new cjs.Graphics().p("A5UMjIAAy/MBRbAAAIAAS/g");
	var mask_graphics_27 = new cjs.Graphics().p("A79MjIAAy/MBR2AAAIAAS/g");
	var mask_graphics_28 = new cjs.Graphics().p("A+nMjIAAy/MBSSAAAIAAS/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:729.5206,y:80.3154}).wait(1).to({graphics:mask_graphics_1,x:715.2753,y:80.3154}).wait(1).to({graphics:mask_graphics_2,x:701.03,y:80.3154}).wait(1).to({graphics:mask_graphics_3,x:686.7846,y:80.3154}).wait(1).to({graphics:mask_graphics_4,x:672.5393,y:80.3154}).wait(1).to({graphics:mask_graphics_5,x:658.2939,y:80.3154}).wait(1).to({graphics:mask_graphics_6,x:644.0486,y:80.3154}).wait(1).to({graphics:mask_graphics_7,x:629.8032,y:80.3154}).wait(1).to({graphics:mask_graphics_8,x:615.5579,y:80.3154}).wait(1).to({graphics:mask_graphics_9,x:601.3126,y:80.3154}).wait(1).to({graphics:mask_graphics_10,x:587.0672,y:80.3154}).wait(1).to({graphics:mask_graphics_11,x:572.8219,y:80.3154}).wait(1).to({graphics:mask_graphics_12,x:558.5765,y:80.3154}).wait(1).to({graphics:mask_graphics_13,x:544.3312,y:80.3154}).wait(1).to({graphics:mask_graphics_14,x:530.0858,y:80.3154}).wait(1).to({graphics:mask_graphics_15,x:515.8405,y:80.3154}).wait(1).to({graphics:mask_graphics_16,x:501.5952,y:80.3154}).wait(1).to({graphics:mask_graphics_17,x:487.3498,y:80.3154}).wait(1).to({graphics:mask_graphics_18,x:473.1045,y:80.3154}).wait(1).to({graphics:mask_graphics_19,x:458.8591,y:80.3154}).wait(1).to({graphics:mask_graphics_20,x:444.6138,y:80.3154}).wait(1).to({graphics:mask_graphics_21,x:430.3685,y:80.3154}).wait(1).to({graphics:mask_graphics_22,x:416.1231,y:80.3154}).wait(1).to({graphics:mask_graphics_23,x:401.8778,y:80.3154}).wait(1).to({graphics:mask_graphics_24,x:387.6324,y:80.3154}).wait(1).to({graphics:mask_graphics_25,x:373.3871,y:80.3154}).wait(1).to({graphics:mask_graphics_26,x:359.1417,y:80.3154}).wait(1).to({graphics:mask_graphics_27,x:344.8964,y:80.3154}).wait(1).to({graphics:mask_graphics_28,x:330.6686,y:80.3154}).wait(212));

	// Symbol_1
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(274.3,81.95,0.5984,0.5984,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(240));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#072141").s().p("AySUpMAAAgpRMAklAAAMAAAApRg");
	this.shape.setTransform(858.925,121.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008CFF").s().p("Eg8qAUBMAAAgoBMB5VAAAMAAAAoBg");
	this.shape_1.setTransform(382.45,125.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363.9,73.8,916.4,231.39999999999998);
// library properties:
lib.properties = {
	id: '6BC6F8835C36405BA858F0AF46DBB3FC',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/970x250_atlas_1.png", id:"970x250_atlas_1"}
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
an.compositions['6BC6F8835C36405BA858F0AF46DBB3FC'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;