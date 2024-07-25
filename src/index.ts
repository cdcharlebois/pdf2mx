/**
 * Helpful links:
 * - https://github.com/engalar/MendixModelSDKDemo/tree/master
 * - https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Folder.html#createIn
 */

import { pages, domainmodels, projects } from "mendixmodelsdk";
import { MendixPlatformClient, setPlatformConfig } from "mendixplatformsdk";
import 'dotenv/config';
import { commit, connectToModel } from "./connect"
const { MENDIX_TOKEN, APP_ID, BRANCH } = process.env;




// deleteSamplePage();
// createSamplePage();