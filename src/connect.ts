import { IModel, IWorkingCopy } from "mendixmodelsdk";
import { MendixPlatformClient, OnlineWorkingCopy, setPlatformConfig } from "mendixplatformsdk";

export interface IConnectionReturn {
    model: IModel,
    workingCopy: OnlineWorkingCopy
}

export async function connectToModel(token: string, appId: string, branch: string) : Promise<IConnectionReturn> {
    setPlatformConfig({
        "mendixToken": token
    })
    const client = new MendixPlatformClient();
    const app = await client.getApp(appId) // app id
    // this takes the name of the branch to checkout
    const workingCopy = await app.createTemporaryWorkingCopy(branch);
    const model = await workingCopy.openModel();
    return {
        model,
        workingCopy
    };
}

export async function commit(workingCopy: OnlineWorkingCopy, model: IModel, message: string){
    await model.flushChanges()
    await workingCopy.commitToRepository("main", {
        "commitMessage": message
    });
}