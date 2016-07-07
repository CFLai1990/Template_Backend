/**
 * Created by Chufan Lai at 2015/12/14
 * model for fetching and processing data
 */

 define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone',
    'config',
    // 'collection',
    ], function(require, Mn, _, $, Backbone, Config){
        'use strict';

        return window.Datacenter = new (Backbone.Model.extend({
            defaults: function(){
                return {
                };
            },

            initialize: function(url){
                var self = this;
                var t_default = {
                    ready: false,
                };
                _.extend(this, t_default);
                // this.collection = new Collection();
                this.bindAll();
            },

            bindAll: function(){
                // this.listenTo(this.data, "Data__DataReady", this.updateData);
            },

            start: function(){
                this.trigger("DataCenter__initialized");
                // this.loadData(dataPath);
            },

            loadData: function(v_path){
                var self = this;
                // d3.csv(v_path, function(d){
                //     // Process Data
                // });
            },

            updateData: function(){
                console.info("DataCenter: data ready!");
                // this.collection.clearAll();
                // Update Data
        },
    }))();
});
