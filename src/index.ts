/**
 * Helpful links:
 * - https://github.com/engalar/MendixModelSDKDemo/tree/master
 * - https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Folder.html#createIn
 */


import 'dotenv/config';
import { connectToModel } from "./connect";
import { IInputModel, IMendixAttribute, createEntity } from "./createEntity";
import { createPage } from './addPage';


const JSON_MODEL: IInputModel = {"moduleName":"GeneratedModule","entityName":"GeneratedEntity","attributes":[{"name":"Spouse's First Name","type":"String"},{"name":"Phone #","type":"String"},{"name":"Address Change","type":"Boolean"},{"name":"Spouse's Signature","type":"String"},{"name":"Last Name","type":"String"},{"name":"First Name","type":"String"},{"name":"Preparer Signature","type":"String"},{"name":"Taxpayer Signature","type":"String"},{"name":"1. Net Taxable Dividends (School Income Tax Regulation 203(a))","type":"String"},{"name":"10. Deductible Expenses (cannot exceed line 9) (Reg. 204(a))","type":"String"},{"name":"PHTIN","type":"String"},{"name":"Date","type":"String"},{"name":"Phone #","type":"String"},{"name":"Taxpayer E-mail Address","type":"String"},{"name":"Phone #","type":"String"},{"name":"City","type":"String"},{"name":"Zip / Postal Code","type":"String"},{"name":"State","type":"String"},{"name":"12. Gross Tax Due (Multiply line 11 by .037500) 12.","type":"String"},{"name":"SSN","type":"String"},{"name":"Spouse's SSN","type":"String"},{"name":"MI","type":"String"},{"name":"Date","type":"String"},{"name":"14. TAX DUE If Line 12 is greater than Line 13, enter the difference here and on the PAYMENT COUPON 14.","type":"String"},{"name":"Amended Return","type":"Boolean"},{"name":"DUE DATE:","type":"String"},{"name":"Spouse's Last Name","type":"String"},{"name":"MI","type":"String"},{"name":"Street Address","type":"String"},{"name":"11. Net Taxable Income (Subtract line 10 from line 9) 11.","type":"String"},{"name":"Date","type":"String"},{"name":"Apt/Suite","type":"String"},{"name":"13. Credit from overpayment of prior year or tax previously paid with an extension coupon","type":"String"},{"name":"4. Limited Partnership Income (Reg. 203(i)). If loss, enter \"0\" (zero)","type":"String"},{"name":"5. Taxable Income received by a Beneficiary of an Estate or Trust (Reg. 205)","type":"String"},{"name":"3. \"Subchapter S\" Corporation Income Distribution (Regs. 203(j))","type":"String"},{"name":"7. Net Rental Income (Reg. 203(c)). If loss, enter \"0\" (zero)","type":"String"},{"name":"9. Total Taxable Income (Add lines 1 through 8)","type":"String"},{"name":"15B. APPLIED to the 2024 School Income Tax","type":"String"},{"name":"8. Other Taxable Income","type":"String"},{"name":"2. Taxable Interest (Reg. 203(b)) 2.","type":"String"},{"name":"Final Return: (add Cease Date)","type":"String"},{"name":"6. Net Short Term Capital Gains (held 6 months or less) (Reg. 203(d) and 204(b)). If loss, enter \"0\" (zero)","type":"String"},{"name":"15A. REFUNDED. Do not file a separate Refund Petition 15a.","type":"String"},{"name":"If you were a partial year resident in 2023, refer to page 1 of instructions and enter dates of residency here:","type":"String"},{"name":"2023 SIT","type":"String"}]}



async function main() {

    /**
     * remove dupes from input
     */
    const dedupedAttributes : IMendixAttribute[] = []
    JSON_MODEL.attributes.forEach(attr => {
        if (dedupedAttributes.find(existing => existing.name === attr.name)){
            return;
        }
        dedupedAttributes.push(attr);
    })
    const cleanedInput : IInputModel = {
        ...JSON_MODEL,
        attributes: dedupedAttributes
    }
    if (JSON_MODEL.attributes.length != cleanedInput.attributes.length){
        console.warn(`Removed ${JSON_MODEL.attributes.length - cleanedInput.attributes.length} duplicate attributes`)
    }
    

    await createEntity(cleanedInput);
    await createPage(cleanedInput);
    // now, create the page from the entity;

}

main();