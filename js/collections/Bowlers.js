define(['backbone', '../models/Bowler'], function(Backbone, Bowler){
    var Bowlers = Backbone.Collection.extend({
        model: Bowler
    });
    return Bowlers;
});