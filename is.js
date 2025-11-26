 const is = {
    num : function(val){
        return typeof(val)==='number'
    } ,
    nan : function(val){
        return val !== val
    } ,
    str : function(a){
        return typeof a ==='string'
    } ,
    bool : function(a){
        return typeof(a)==='boolean'
    } ,
    undef : function(a){
        return typeof(a)==='undefined'
    } ,
    def : function(a){
        return typeof(a)!=='undefined'
    } ,
    arr : function(a){
        return Array.isArray(a)
    } ,
    obj : function(a){
        return typeof(a)==='object' && !is.arr(a) && a !== null
    } ,
    fun : function(a){
        return typeof(a)=== 'function'
    } ,
     truthy: function(a){
        return a
    } ,
    falsy : function (a){
        return !a
    }
 }

