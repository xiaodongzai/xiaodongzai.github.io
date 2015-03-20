//产生随机

var xMath = {
	round: function(n){
		var num = Math.random()*(n);
		return Math.floor(num);
	}
};

var xHeadImg = {
	effect: ["profilepic-rorate","profilepic-rorate-op",
			 "profilepic-scale","profilepic-scale-op",
			 "profilepic-scale-rotate","profilepic-scale-rotate"],
	getEffect: function(n){
		if(typeof n === 'number')
			return this.effect[n];
		else{
			return  xHeadImg.effect[xMath.round(this.effect.length)];
		}
	},
	currentEffect: ''
}

var prof = $('.profilepic,.header-author-a');

prof.hover(function(){
	xHeadImg.currentEffect = xHeadImg.getEffect();
	prof.addClass(xHeadImg.currentEffect);
},function(){
	prof.removeClass(xHeadImg.currentEffect);
});
