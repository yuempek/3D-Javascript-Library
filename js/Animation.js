var Animation = {
	fns: [],
	addCallback: function(f){
		this.fns.push(f);
	},
	start: function() {
		var fns = this.fns;
		var step = function() {
			for (var i = 0; i < fns.length; ++i) {
				fns[i]();
			}
			window.requestAnimationFrame(step);
		};
		window.requestAnimationFrame(step);
	}
};
