var hashMap=function(){
    this.hashArray={};//dictionary
    this.size=0;
    this.debug=true;
    return this;
}
hashMap.prototype.add=function(_key,_value){
    if (!this.hashArray.hasOwnProperty(_key)) {
        this.hashArray[_key] = _value;
        ++this.size;
    }
    else if(this.debug)
    {
        throw 'duplicate keys not allowed. key : '+_key;
        return;
    }
}
hashMap.prototype.addAll=function(_keyArray,_valueArray){
    //note:addAll
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
    if (this.hashArray.hasOwnProperty(_key)) {
        delete this.hashArray[_key];
        --this.size;
    }
    else if(this.debug)
    {
        throw 'key not found';
        return;
    }
}
hashMap.prototype.get=function(_key){
    if (this.hashArray.hasOwnProperty(_key))
    {
        return this.hashArray[_key];
    }
    else if(this.debug)
    {
        throw 'no key found';
        return;
    }
}
