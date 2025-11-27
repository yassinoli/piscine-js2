function blockChain(data , prev){
    if (!prev){
        prev = { index : 0 , hash :'0'}
    }
    let index = prev.index + 1;
  let stringData = JSON.stringify(data);
    var hash = hashCode(index + prev.hash + stringData);

  let block = {
    index : index ,
    hash : hash,
    data : data,
    prev : prev,
    chain : function(next){
        return blockChain(next , block)
    }
  }
  return block

}
const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)

