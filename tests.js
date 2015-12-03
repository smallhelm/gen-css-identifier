var test = require("tape");
var factory = require("./factory");

var isValid = function(v){
  return /^[a-z][a-z0-9\-]*$/i.test(v);
};

var repeat = function(times, fn){
  var i;
  for(i=0;i<times;i++){
    fn();
  }
};

var generated_ids = {};

test("it", function(t){

  ["one", "B", "c", "one"].forEach(function(prefix){
    var fn = factory(prefix);
    repeat(100, function(){
      var id = fn();
      t.ok(isValid(id), "isValid("+id+")");
      t.notOk(generated_ids[id], "ensure "+id+" is not already taken");
      generated_ids[id] = true;
    });
  });

  t.end();
});
