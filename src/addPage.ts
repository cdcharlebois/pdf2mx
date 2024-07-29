import { pages, projects, JavaScriptSerializer } from "mendixmodelsdk";
import fs from "fs";
import { commit, connectToModel } from "./connect";


async function createSamplePage() {    
    const res = await connectToModel();
    const { model, workingCopy } = res;
    const p = model.allProjects().find(project => true);
    if (!p) {
        throw new Error("failed to find a project");
    }

    const layoutCall = pages.LayoutCall.create(model);
    layoutCall.layout = model.findLayoutByQualifiedName("Atlas_Core.Atlas_Default")
   
    const m = projects.Module.createIn(p);
    m.name = "SampleModule"
    const f = projects.Folder.createIn(m);
    f.name = "SampleFolder"
    const page = pages.Page.createIn(f);
    page.name = "SamplePage";
    page.layoutCall = layoutCall;
    await commit(workingCopy, model, "added sample page")
}

createSamplePage();