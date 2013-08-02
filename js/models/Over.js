define(['backbone'], function(Backbone){
    var Over = Backbone.model.extend({
        defaults: {
            wickets: 0,
            runs: 0,
            number: 0,
            balls: 0
        },
        validate: function(attrs){
            if(this.number < 0 || this.number > 50) {
                return false;
            }
            if(this.balls < 0 || this.balls > 6) {
                return false;
            }
            return true;
        },
        isMaiden: function() {
            return (this.runs === 0);
        },
        updateBall: function(wicket, runs) {
            if(this.balls < 6) {
                this.wickets += wicket;
                this.runs += runs;
                this.balls++;
            }
        },
        isDone: function(){
            return (this.balls >= 6);
        }
    });
    return Over;
    var Overs = Backbone.Collection.extend({
        model: Over,
        getTotalOvers: function() {
            return this.reduce(function(mem, over) {
                if(over.isDone()) {
                    return mem + 1;
                }
                return mem;
            }, 0);
        },
        getMaidens: function(){
            return this.reduce(function(mem, over){
                if(over.isMaiden()){
                    return mem + 1;
                }
                return mem;
            }, 0);
        },
        getTotalRuns: function(){
            return this.reduce(function(mem, over){
                return mem + over.runs;
            }, 0);
        },
        getTotalWickets: function(){
            return this.reduce(function(mem, over){
                return mem + over.wickets;
            }, 0);
        }
    });
});