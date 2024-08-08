import { IModel, IWorkingCopy } from "mendixmodelsdk";
import { MendixPlatformClient, OnlineWorkingCopy, setPlatformConfig } from "mendixplatformsdk";
import 'dotenv/config';
const { MENDIX_TOKEN, APP_ID, BRANCH } = process.env;

export interface IConnectionReturn {
    model: IModel,
    workingCopy: OnlineWorkingCopy
}

export async function connectToModel() : Promise<IConnectionReturn> {
    console.debug(`Attempting to connect to app: ${APP_ID}:${BRANCH}`)
    setPlatformConfig({
        "mendixToken": MENDIX_TOKEN
    })
    const client = new MendixPlatformClient();
    console.debug("got client");
    const app = await client.getApp(APP_ID as string) // app id
    console.debug("got app");
    // this takes the name of the branch to checkout
    const workingCopy = await app.createTemporaryWorkingCopy(BRANCH as string);
    console.debug("got working copy");
    const model = await workingCopy.openModel();
    console.debug("got model");
    return {
        model,
        workingCopy
    };
}

export async function commit(workingCopy: OnlineWorkingCopy, model: IModel, message: string){
    await model.flushChanges()
    await workingCopy.commitToRepository(process.env.BRANCH, {
        "commitMessage": message 
    });
}