import { IModel, JavaScriptSerializer } from "mendixmodelsdk";
import fs from "fs"
import { connectToModel } from "./connect";

export enum IUnitType {
    page = "page",
    entity = "entity"
}
async function serializeUnit(name: string, type: IUnitType) {
    const {model, workingCopy} = await connectToModel();
    let doc;
    if (type === IUnitType.page) {
        doc = model.allPages().find(p => p.name === name);
        if (!doc) {
            throw new Error(`document ${name} not found as ${type}`)
            // handleError(name, type);
        }
        console.log("writing file")
        fs.writeFileSync(`./${name}_serialized.js`, JavaScriptSerializer.serializeToJs(await doc.load()))
        console.log("writing done")
    } else if (type === IUnitType.entity) {
        const moduleName = name.split(".")[0]
        const module = model.allModules().find(m => m.name === moduleName);
        if (!module) throw new Error(`module ${moduleName} not found`);
        const entity = module.domainModel.entities.find(e => e.name === name.split(".")[1])
        if (!entity) throw new Error(`document ${name} not found as ${type}`)
        fs.writeFileSync(`./${name}_serialized.js`, JavaScriptSerializer.serializeToJs(await module.domainModel.load()))
    } else {
        throw new Error(`unsupported unit type: ${type}`);
    }
}

export default serializeUnit