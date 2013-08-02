define(['backbone', '../models/Batsman'], function(Backbone, Batsman){
    var Batters = Backbone.Collection.extend({
        model: Batsman
    });
    return Batters;
});