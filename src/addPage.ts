import { pages, projects } from "mendixmodelsdk";
import { commit, connectToModel } from "./connect";
import 'dotenv/config';
const { MENDIX_TOKEN, APP_ID, BRANCH } = process.env;

async function createSamplePage() {    
    const res = await connectToModel(MENDIX_TOKEN as string, APP_ID as string, BRANCH as string);
    const { model, workingCopy } = res;
    const p = model.allProjects().find(project => true);
    if (!p) {
        throw new Error("failed to find a project");
    }


    // const l = model.allLayouts().find(l => true);
    // if (!l) {
    //     throw new Error("No Layout found")
    // }
    // create a new module in the project
    const m = projects.Module.createIn(p);
    m.name = "SampleModule"
    const f = projects.Folder.createIn(m);
    f.name = "SampleFolder"
    const page = pages.Page.createIn(f);
    page.name = "SamplePage";
    await commit(workingCopy, model, "added sample page")
}

createSamplePage();