function UnitHandler(typeconvs) {
    this.types = typeconvs;
}

UnitHandler.prototype.addConvs = function(toAdd) {
    this.types = Object.assign(this.types, toAdd);
};

UnitHandler.prototype.setStandardConvs = function() {
    this.types = 
};


module.exports = {
    UnitHandler
}