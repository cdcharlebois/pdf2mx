/**
 * Helpful links:
 * - https://github.com/engalar/MendixModelSDKDemo/tree/master
 * - https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Folder.html#createIn
 */


import 'dotenv/config';
import { connectToModel } from "./connect";
import { IInputModel, createEntity } from "./createEntity";
import { createPage } from './addPage';


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
        {
            name: "SomeBoolean",
            type: "Boolean"
        },
    ]
}

async function main() {
    // const res = await connectToModel();
    // const { model, workingCopy } = res;
    await createEntity(JSON_MODEL);
    await createPage(JSON_MODEL);
    // now, create the page from the entity;
    
}

main();