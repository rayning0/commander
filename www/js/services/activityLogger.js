commander.factory('activityLogger', function() {
  return new function() {
    var self = this;
    var executionStatus = null;
    var connectionIndicatorVisible = null;
    var log = [];
    
    this.saveLog = function(success, msg){
      if (success){
        executionStatus = 'success';
      }
      else {
        executionStatus = 'failed';
      }
      log.unshift({message:msg, status: executionStatus});
    }

    this.showConnectionIndicator = function(){
      connectionIndicatorVisible = true;
      executionStatus = 'connecting';
    }

    this.hideConnectionIndicator = function(){
      connectionIndicatorVisible = false;
    }
    
    this.getLog = function(msg){ return log; }

    this.status = function(){ return executionStatus; }

    this.connectionIndicatorVisible = function(){ return connectionIndicatorVisible; }

    this.clear = function(){
      log = [];
      executionStatus = null;
    }
  }
})
