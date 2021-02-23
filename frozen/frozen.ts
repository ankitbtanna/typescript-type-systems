export function freeze(toFreeze: any): any {
    return doElsaMagic(toFreeze);
}

export function thaw(toFreeze: any): any {
    void 0;
}


// Ask Elsa to write the magic code here
function doElsaMagic(thing) {
    return thing;
}