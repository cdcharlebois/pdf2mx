import { IModel, domainmodels, projects } from "mendixmodelsdk";
import { commit, connectToModel } from "./connect"

export interface IMendixAttribute {
    name: string,
    type: "Boolean" | "DateTime" | "Decimal" | "Enumeration" | "Integer" | "Long" | "String"
}
export interface IInputModel {
    attributes: IMendixAttribute[],
    entityName: string,
    moduleName: string
}
const JSON_MODEL : IInputModel = {
    moduleName: "SampleModule",
    entityName: "SomeEntity",
    attributes: [
        {
            name: "SomeName",
            type: "String"
        },
        {
            name: "SomeNumber",
            type: "Integer"
        },
    ]
}

function getAttributeType(model: IModel, attr:IMendixAttribute) : domainmodels.AttributeType {
    let at : domainmodels.AttributeType | undefined;
    
    switch (attr.type){
        case "Boolean":
            at = domainmodels.BooleanAttributeType.create(model);
            break;
        case "Enumeration":
            
        case "DateTime":
            at = domainmodels.DateTimeAttributeType.create(model);
            break;
        case "Decimal":
            at = domainmodels.DecimalAttributeType.create(model);
            break;
        case "Integer":
            at = domainmodels.IntegerAttributeType.create(model);
            break;
        case "Long":
            at = domainmodels.LongAttributeType.create(model);
            break;
        case "String":
            at = domainmodels.StringAttributeType.create(model);
            break;
        default:
            at = domainmodels.StringAttributeType.create(model);
            break;
    }
    return at;
}

function createAttribute(model: IModel, data: IMendixAttribute) : domainmodels.Attribute{
    const attr = domainmodels.Attribute.create(model);
    const sv = domainmodels.StoredValue.create(model);
    if (data.type === "Boolean") {
        sv.defaultValue = "false"
        attr.value = sv;
    }
    attr.name = data.name;
    attr.type = getAttributeType(model, data);
    return attr;
}

export async function createEntity(input: IInputModel) {
    const {model, workingCopy} = await connectToModel();
    const m = model.allModules().find(module => module.name === input.moduleName)
    if (!m) {
        throw new Error(`Unknown module: ${input.moduleName}`);
    }
    // create the entity
    const entity = domainmodels.Entity.create(model);
    entity.name = input.entityName;
    entity.location = {"x": 100, "y": 100};
    entity.imageData = "";
    // add each attribute
    input.attributes.forEach(a => {
        entity.attributes.push(createAttribute(model, a))
    })
    await m.domainModel.load();

    m.domainModel.entities.push(entity);

    await commit(workingCopy, model, `Add Entity ${input.moduleName}.${input.entityName}`);


}

// createEntity(JSON_MODEL);