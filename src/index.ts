/**
 * Helpful links:
 * - https://github.com/engalar/MendixModelSDKDemo/tree/master
 * - https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Folder.html#createIn
 */

import { pages, domainmodels, projects } from "mendixmodelsdk";
import { MendixPlatformClient, setPlatformConfig } from "mendixplatformsdk";
import 'dotenv/config';
import { commit, connectToModel } from "./connect"
import serializeUnit, { IUnitType } from "./serializeUnit";
const { MENDIX_TOKEN, APP_ID, BRANCH } = process.env;




async function main() {
    const res = await connectToModel(MENDIX_TOKEN as string, APP_ID as string, BRANCH as string);
    const { model, workingCopy } = res;
    await serializeUnit("TargetPage", IUnitType.page, model);
}

main();