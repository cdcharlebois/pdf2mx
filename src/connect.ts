import { IModel, IWorkingCopy } from "mendixmodelsdk";
import { MendixPlatformClient, OnlineWorkingCopy, setPlatformConfig } from "mendixplatformsdk";
import 'dotenv/config';
import { IParams } from "./index";
const { MENDIX_TOKEN, APP_ID, BRANCH } = process.env;

export interface IConnectionReturn {
    model: IModel,
    workingCopy: OnlineWorkingCopy
}

async function connect(params: IParams) : Promise<IConnectionReturn> {
    const { mendix_token, app_id, branch } = params;
    console.debug(`Attempting to connect to app: ${app_id}:${branch}`)
    setPlatformConfig({
        "mendixToken": mendix_token
    })
    const client = new MendixPlatformClient();
    console.debug("got client");
    const app = await client.getApp(app_id as string) // app id
    console.debug("got app", app.appId);
    // this takes the name of the branch to checkout
    const workingCopy = await app.createTemporaryWorkingCopy(branch as string);
    console.debug("got working copy", workingCopy.workingCopyId);
    const model = await workingCopy.openModel();
    console.debug("got model");
    return {
        model,
        workingCopy
    };
} 

export async function connectToModel(params?: IParams): Promise<IConnectionReturn> {
    // const { mendix_token, app_id, branch } = params;
    if (params){
        console.debug(`connection params included in request. Using those.`, params)   
        return await connect(params); 
    }
    return await connect({mendix_token: MENDIX_TOKEN, app_id: APP_ID, branch: BRANCH} as IParams);
    
}

export async function commit(workingCopy: OnlineWorkingCopy, model: IModel, message: string, branchName: string) {
    await model.flushChanges()
    await workingCopy.commitToRepository(branchName, {
        "commitMessage": message
    });
}