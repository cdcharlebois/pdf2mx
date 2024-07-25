import { IModel, JavaScriptSerializer } from "mendixmodelsdk";
import fs from "fs"

export enum IUnitType {
    page = "page"
}
async function serializeUnit(name: string, type: IUnitType, model: IModel) {
    let doc;
    if (type === IUnitType.page){
        doc = model.allPages().find(p => p.name === name);
        if (!doc) {
            throw new Error(`document ${name} not found as ${type}`)
        }
        console.log("writing file")
        fs.writeFileSync(`./${name}_serialized.js`, JavaScriptSerializer.serializeToJs(await doc.load()))
        console.log("writing done")
    }
}

export default serializeUnit