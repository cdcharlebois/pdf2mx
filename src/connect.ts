import { IModel, IWorkingCopy } from "mendixmodelsdk";
import { MendixPlatformClient, OnlineWorkingCopy, setPlatformConfig } from "mendixplatformsdk";
import 'dotenv/config';
const { MENDIX_TOKEN, APP_ID, BRANCH } = process.env;

export interface IConnectionReturn {
    model: IModel,
    workingCopy: OnlineWorkingCopy
}

export async function connectToModel() : Promise<IConnectionReturn> {
    setPlatformConfig({
        "mendixToken": MENDIX_TOKEN
    })
    const client = new MendixPlatformClient();
    const app = await client.getApp(APP_ID as string) // app id
    // this takes the name of the branch to checkout
    const workingCopy = await app.createTemporaryWorkingCopy(BRANCH as string);
    const model = await workingCopy.openModel();
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