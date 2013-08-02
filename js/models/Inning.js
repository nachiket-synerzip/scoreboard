define(['backbone', '../collections/Bowlers', '../collections/Batters', '../collections/Overs'],
    function(Backbone, Bowlers, Batters, Overs){
        var Inning = Backbone.Model.extend({
            defaults: {
                overs: new Overs(),
                batters: new Batters(),
                bowlers: new Bowlers()
            },
            start: function(){

            }
        });
        return Inning;
    }
);