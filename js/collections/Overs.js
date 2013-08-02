define(['.', '../models/Over'], function(Backbone, Over){
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
    return Overs;
});