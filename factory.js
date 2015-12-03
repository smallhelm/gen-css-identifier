var i = 0;
module.exports = function(prefix){
  return function(){
    i++;
    return prefix + i.toString(36);
  };
};
