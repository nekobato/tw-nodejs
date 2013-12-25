// Generated by CoffeeScript 1.6.3
(function() {
  var View, clc, moment;

  clc = require('cli-color');

  moment = require('moment');

  moment.lang('ens');

  View = function() {
    return this.style = {
      date: clc.xterm(220),
      name: clc.xterm(111).bold,
      sname: clc.xterm(20),
      text: clc.xterm(250)
    };
  };

  View.prototype.stream = function(d) {
    var date;
    date = moment(d.created_at).format('HH:mm');
    return "" + (this.style.date(date)) + " " + (this.style.name(d.user.name)) + " " + (this.style.sname(d.user.screen_name)) + " :\n " + (this.style.text(d.text)) + "\n";
  };

  View.prototype.stream_online = function(d) {
    var date;
    date = moment(d.created_at).format('HH:mm');
    return "" + (this.style.date(date)) + " " + (this.style.name(d.user.name)) + " " + (this.style.sname(d.user.screen_name)) + " " + (this.style.text(d.text));
  };

  module.exports = View;

  View.__proto__ = new View;

}).call(this);
