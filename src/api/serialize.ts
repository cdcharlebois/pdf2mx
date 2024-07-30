import serializeUnit, { IUnitType } from "../serializeUnit";

const targetType : string = process.argv[2];
const targetDoc : string = process.argv[3];

// console.log(target);
serializeUnit(targetDoc, targetType as IUnitType);