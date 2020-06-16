const toString = Object.prototype.toString;
export const array = Array.isArray;
export function primitive(s){
    return typeof s === "number" || typeof s === "string"
}
export function getType(params) {
    return toString.call(params).slice(8,-1).toLowerCase();
}
export function object(s) {
    return getType(s) === "object"
}