define(['backbone'], function(Backbone){
    var Batsman = Backbone.Model.extend({
        defaults: {
            id: '',
            runs: 0,
            balls: 0,
            strikeRate: 0,
            isBatting: false
        },
        validate: function(attrs) {
            if(attrs.id == '' || attrs.id == null || attrs.id == undefined) {
                return false;
            }
            return true;
        },
        updateScore: function(runs, balls) {
            this.runs += runs;
            this.balls += balls;
            if(this.balls > 0) {
                this.strikeRate = (runs / balls) * 100;
            }
        }
    });
    return Batsman;
});