'use strict';

var moment = require('moment');

exports.init = function (engine) {

    var original = engine.loadContent;

    engine.loadContent = function (entry, content, callback) {
        original(entry, content, function (transformedContent) {
            
            var options = engine.getOptions();
            var date = moment(entry.date);
            date.locale(options.date.locale);
            var format = options.date.format;
            entry.date = date.format(format);

            callback(transformedContent);
        });
    };
};