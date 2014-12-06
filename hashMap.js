var hashMap=function(){
    this.hashDict={};//dictionary
    this.size=0;
    this.debug=true;
    return this;
}
hashMap.prototype.add=function(_key,_value){
    if (!this.hashDict.hasOwnProperty(_key)) {
        this.hashDict[_key] = _value;
        ++this.size;
    }
    else if(this.debug)
        throw 'duplicate keys not allowed. key : '+_key;
    
}
hashMap.prototype.addAll=function(_keyArray,_valueArray){
    if(_keyArray.length===_valueArray.length) {
        _l=_keyArray.length;
        for(i=0;i<_l;i++) {
            _key=_keyArray[i];
            _value=_valueArray[i];
            this.add(_key,_value);
        }
    }
}
hashMap.prototype.remove=function(_key){
    if (this.hashDict.hasOwnProperty(_key)) {
        delete this.hashDict[_key];
        --this.size;
    }
    else if(this.debug)
        throw 'key not found';
}
hashMap.prototype.get=function(_key){
    if (this.hashDict.hasOwnProperty(_key))
    {
        return this.hashDict[_key];
    }
    else if(this.debug)
        throw 'no key found';
}
