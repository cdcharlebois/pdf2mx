/**
 * Helpful links:
 * - https://github.com/engalar/MendixModelSDKDemo/tree/master
 * - https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Folder.html#createIn
 */

import { pages, domainmodels, projects } from "mendixmodelsdk";
import { MendixPlatformClient, setPlatformConfig } from "mendixplatformsdk";

import { commit, connectToModel } from "./connect"
import serializeUnit, { IUnitType } from "./serializeUnit";
import 'dotenv/config';
import { createEntity } from "./createEntity";
const { MENDIX_TOKEN, APP_ID, BRANCH } = process.env;




async function main() {
    const res = await connectToModel();
    const { model, workingCopy } = res;
    await serializeUnit("SampleModule.Sample", IUnitType.entity, model);
    // await createEntity();
}

main();