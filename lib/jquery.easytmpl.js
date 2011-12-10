(function($){
  var unit = function(name, gSet, gEvent){
    return $.extend(function(){ this.init.apply(this, arguments); }, {
      prototype: {
          init: function(lSet, lEvent){
            var url, cb;
            if(lSet && typeof lSet === 'string'){
              url = lSet;
              lSet = {};
              if(lEvent && typeof lEvent === 'function'){
                cb = lEvent;
                lEvent = {};
              }
            }
            var self = this
            , set = $.extend(gSet, lSet)
            , event = $.extend(gEvent, lEvent)
            , path
            ;
            this._view = $($('#tmpl-'+name).html());

            for(path in set){
              this.set(path, set[path]);
            }
            for(path in event){
              for(var etype in event[path]){
                if(typeof event[path][etype] === 'function'){
                  this.on(path, etype, event[path][etype]);
                }
              }
            }

            if(url){
              $.getJSON(url).done(function(res){
                if(res.err)
                  throw res.err;
                if(cb){
                  cb.call(self, res);
                }else{
                  var set = res.result;
                  for(var path in set ){
                  }
                }
              });
            }
          }
        , set: function(path, val, isHtml){
          if(path && typeof path === 'object'){
              var set = path
            , _isHtml = val || false;
            for(var _path in set){
              this.set(path, set[path], _isHtml);
            }
          }else{
            if(val instanceof jQuery){
              this._view.find(path).append(val);
            }else{
              if(!isHtml){
                this._view.find(path).text(val);
              }else{
                this._view.find(path).html(val);
              }
            }
          }
        }
        , append: function(path, val){
          this._view.find(path).append(val);
        }
        , on: function(path, etype, handler){
          this._view.find(path).on(etype, handler.bind(this._view));
        }
        , view: function(){
          return this._view;
        }
      }
    });
  };
  $.ezUnit = unit;
}(jQuery));