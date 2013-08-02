define(['backbone'], function(Backbone){
    var Bowler = Backbone.Model.extend({
        defaults: {
            id: '',
            overs: 0,
            runs: 0,
            wickets: 0,
            maidens: 0,
            economy: 0
        },
        validate: function(attrs) {
            if(attrs.id == '' || attrs.id == null || attrs.id == undefined) {
                return false;
            }
            return true;
        },
        addOver: function(over){
            this.overs += 1;
            this.wickets += over.wickets;
            if(over.isMaiden()) {
                this.maidens++;
            } else {
                this.runs += over.runs;
            }
        }
    });
    return Bowler;
});