/**
 * Helpful links:
 * - https://github.com/engalar/MendixModelSDKDemo/tree/master
 * - https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Folder.html#createIn
 */

import "dotenv/config";
import { connectToModel, commit } from "./connect";
import { IInputModel, IMendixAttribute, createEntity } from "./createEntity";
import { createPage } from "./addPage";

const JSON_MODEL: IInputModel = {
    moduleName: "GeneratedModule",
    entityName: "GeneratedEntity",
    attributes: [
        {
            name: "phtin",
            label: "PHTIN",
            type: "String",
            top: 1.05135787,
            row: 1,
            left: 0.68291432,
            height: 0.02320263,
            width: 0.20432197,
        },
        {
            name: "duedate",
            label: "DUE DATE:",
            type: "DateTime",
            top: 1.07885455,
            row: 2,
            left: 0.35698229,
            height: 0.01314232,
            width: 0.12906231,
        },
        {
            name: "ssn",
            label: "SSN",
            type: "String",
            top: 1.08093851,
            row: 2,
            left: 0.68254822,
            height: 0.02349224,
            width: 0.20509844,
        },
        {
            name: "firstname",
            label: "First Name",
            type: "String",
            top: 1.13111764,
            row: 3,
            left: 0.05275351,
            height: 0.02193767,
            width: 0.22752473,
        },
        {
            name: "mi",
            label: "MI",
            type: "String",
            top: 1.13130063,
            row: 3,
            left: 0.286441,
            height: 0.02166917,
            width: 0.03087514,
        },
        {
            name: "lastname",
            label: "Last Name",
            type: "String",
            top: 1.13074766,
            row: 3,
            left: 0.32370892,
            height: 0.02277103,
            width: 0.27544785,
        },
        {
            name: "taxpayeremailaddress",
            label: "Taxpayer E-mail Address",
            type: "String",
            top: 1.13084248,
            row: 3,
            left: 0.60586452,
            height: 0.02262028,
            width: 0.34087276,
        },
        {
            name: "streetaddress",
            label: "Street Address",
            type: "String",
            top: 1.16914696,
            row: 4,
            left: 0.05265603,
            height: 0.02293593,
            width: 0.41273159,
        },
        {
            name: "aptsuite",
            label: "Apt/Suite",
            type: "String",
            top: 1.16935781,
            row: 4,
            left: 0.47678918,
            height: 0.02286767,
            width: 0.07789819,
        },
        {
            name: "city",
            label: "City",
            type: "String",
            top: 1.16900894,
            row: 4,
            left: 0.56319994,
            height: 0.02312172,
            width: 0.20104434,
        },
        {
            name: "state",
            label: "State",
            type: "String",
            top: 1.16908248,
            row: 4,
            left: 0.77104199,
            height: 0.02307699,
            width: 0.04332128,
        },
        {
            name: "zippostalcode",
            label: "Zip / Postal Code",
            type: "String",
            top: 1.16914801,
            row: 4,
            left: 0.8241086,
            height: 0.02245781,
            width: 0.12282903,
        },
        {
            name: "spousesssn",
            label: "Spouse's SSN",
            type: "String",
            top: 1.21245417,
            row: 5,
            left: 0.18538702,
            height: 0.02388295,
            width: 0.20226827,
        },
        {
            name: "spousesfirstname",
            label: "Spouse's First Name",
            type: "String",
            top: 1.21276169,
            row: 5,
            left: 0.39628845,
            height: 0.0235894,
            width: 0.22482964,
        },
        {
            name: "mi_1",
            label: "MI",
            type: "String",
            top: 1.21231441,
            row: 5,
            left: 0.62549281,
            height: 0.02397915,
            width: 0.03933085,
        },
        {
            name: "spouseslastname",
            label: "Spouse's Last Name",
            type: "String",
            top: 1.21259716,
            row: 5,
            left: 0.66821903,
            height: 0.02382674,
            width: 0.2753869,
        },
        {
            name: "ifyouwereapartialyea",
            label:
                "If you were a partial year resident in 2023, refer to page 1 of instructions and enter dates of residency here:",
            type: "DateTime",
            top: 1.2518461,
            row: 6,
            left: 0.48735458,
            height: 0.00800571,
            width: 0.19748406,
        },
        {
            name: "addresschange",
            label: "Address Change",
            type: "Boolean",
            top: 1.27411559,
            row: 7,
            left: 0.22764534,
            height: 0.01909579,
            width: 0.02363107,
        },
        {
            name: "amendedreturn",
            label: "Amended Return",
            type: "Boolean",
            top: 1.27422717,
            row: 7,
            left: 0.37476853,
            height: 0.01831577,
            width: 0.02365944,
        },
        {
            name: "finalreturnaddceased",
            label: "Final Return: (add Cease Date)",
            type: "DateTime",
            top: 1.28499037,
            row: 8,
            left: 0.68860829,
            height: 0.00259437,
            width: 0.00743218,
        },
        {
            name: "_1nettaxabledividend",
            label: "1. Net Taxable Dividends (School Income Tax Regulation 203(a))",
            type: "String",
            top: 1.30546507,
            row: 9,
            left: 0.69147491,
            height: 0.02207723,
            width: 0.21492781,
        },
        {
            name: "_2taxableinterestreg",
            label: "2. Taxable Interest (Reg. 203(b)) 2.",
            type: "String",
            top: 1.34690633,
            row: 10,
            left: 0.67295533,
            height: 0.00958034,
            width: 0.01201288,
        },
        {
            name: "_3subchapterscorpora",
            label: '3. "Subchapter S" Corporation Income Distribution (Regs. 203(j))',
            type: "String",
            top: 1.36914843,
            row: 11,
            left: 0.69128764,
            height: 0.02239003,
            width: 0.2144257,
        },
        {
            name: "_4limitedpartnership",
            label:
                '4. Limited Partnership Income (Reg. 203(i)). If loss, enter "0" (zero)',
            type: "String",
            top: 1.40072665,
            row: 12,
            left: 0.69177002,
            height: 0.02267153,
            width: 0.21326908,
        },
        {
            name: "_5taxableincomerecei",
            label:
                "5. Taxable Income received by a Beneficiary of an Estate or Trust (Reg. 205)",
            type: "String",
            top: 1.43305954,
            row: 13,
            left: 0.69234133,
            height: 0.02192643,
            width: 0.21337806,
        },
        {
            name: "_6netshorttermcapita",
            label:
                '6. Net Short Term Capital Gains (held 6 months or less) (Reg. 203(d) and 204(b)). If loss, enter "0" (zero)',
            type: "String",
            top: 1.47459632,
            row: 14,
            left: 0.67307162,
            height: 0.00901064,
            width: 0.0119521,
        },
        {
            name: "_7netrentalincomereg",
            label: '7. Net Rental Income (Reg. 203(c)). If loss, enter "0" (zero)',
            type: "String",
            top: 1.49664512,
            row: 15,
            left: 0.69167984,
            height: 0.02167409,
            width: 0.21387507,
        },
        {
            name: "_8othertaxableincome",
            label: "8. Other Taxable Income",
            type: "String",
            top: 1.52846551,
            row: 16,
            left: 0.69096667,
            height: 0.02140835,
            width: 0.21467347,
        },
        {
            name: "_9totaltaxableincome",
            label: "9. Total Taxable Income (Add lines 1 through 8)",
            type: "String",
            top: 1.56063586,
            row: 17,
            left: 0.69145221,
            height: 0.02072405,
            width: 0.21478514,
        },
        {
            name: "_10deductibleexpense",
            label: "10. Deductible Expenses (cannot exceed line 9) (Reg. 204(a))",
            type: "String",
            top: 1.59215099,
            row: 18,
            left: 0.69224614,
            height: 0.02174257,
            width: 0.21391539,
        },
        {
            name: "_11nettaxableincomes",
            label: "11. Net Taxable Income (Subtract line 10 from line 9) 11.",
            type: "String",
            top: 1.6244607,
            row: 19,
            left: 0.69182593,
            height: 0.02124576,
            width: 0.21389274,
        },
        {
            name: "_12grosstaxduemultip",
            label: "12. Gross Tax Due (Multiply line 11 by .037500) 12.",
            type: "String",
            top: 1.65650165,
            row: 20,
            left: 0.69275284,
            height: 0.02117277,
            width: 0.21310882,
        },
        {
            name: "_13creditfromoverpay",
            label:
                "13. Credit from overpayment of prior year or tax previously paid with an extension coupon",
            type: "String",
            top: 1.68705547,
            row: 21,
            left: 0.69262213,
            height: 0.02177411,
            width: 0.21309154,
        },
        {
            name: "_14taxdueifline12isg",
            label:
                "14. TAX DUE If Line 12 is greater than Line 13, enter the difference here and on the PAYMENT COUPON 14.",
            type: "String",
            top: 1.71971411,
            row: 22,
            left: 0.69297224,
            height: 0.02038335,
            width: 0.21319687,
        },
        {
            name: "_15arefundeddonotfil",
            label: "15A. REFUNDED. Do not file a separate Refund Petition 15a.",
            type: "String",
            top: 1.75173181,
            row: 23,
            left: 0.65750098,
            height: 0.02084991,
            width: 0.24911135,
        },
        {
            name: "_15bappliedtothe2024",
            label: "15B. APPLIED to the 2024 School Income Tax",
            type: "String",
            top: 1.78353322,
            row: 24,
            left: 0.69347137,
            height: 0.02066105,
            width: 0.21220735,
        },
        {
            name: "taxpayersignature",
            label: "Taxpayer Signature",
            type: "String",
            top: 1.8605383,
            row: 25,
            left: 0.19494018,
            height: 0.01182139,
            width: 0.28775322,
        },
        {
            name: "date",
            label: "Date",
            type: "DateTime",
            top: 1.85463506,
            row: 25,
            left: 0.51987594,
            height: 0.01735149,
            width: 0.16318998,
        },
        {
            name: "phone_1",
            label: "Phone #",
            type: "String",
            top: 1.86101258,
            row: 25,
            left: 0.73238927,
            height: 0.01158531,
            width: 0.18191609,
        },
        {
            name: "spousessignature",
            label: "Spouse's Signature",
            type: "String",
            top: 1.89099532,
            row: 26,
            left: 0.19391443,
            height: 0.01220045,
            width: 0.28724757,
        },
        {
            name: "date_1",
            label: "Date",
            type: "DateTime",
            top: 1.88693947,
            row: 26,
            left: 0.51450199,
            height: 0.01592396,
            width: 0.16316064,
        },
        {
            name: "phone",
            label: "Phone #",
            type: "String",
            top: 1.88923216,
            row: 26,
            left: 0.72881329,
            height: 0.01439645,
            width: 0.18056591,
        },
        {
            name: "preparersignature",
            label: "Preparer Signature",
            type: "String",
            top: 1.91979212,
            row: 27,
            left: 0.19224554,
            height: 0.01359461,
            width: 0.2942318,
        },
        {
            name: "date_1_1",
            label: "Date",
            type: "DateTime",
            top: 1.91557813,
            row: 27,
            left: 0.5203746,
            height: 0.01743859,
            width: 0.16223963,
        },
        {
            name: "phone_1_1",
            label: "Phone #",
            type: "String",
            top: 1.91968423,
            row: 27,
            left: 0.7327922,
            height: 0.01376105,
            width: 0.18159361,
        },
        {
            name: "_2023sit",
            label: "2023 SIT",
            type: "String",
            top: 1.9421891,
            row: 28,
            left: 0.77513903,
            height: 0.00696312,
            width: 0.05204931,
        },
    ],
};

async function main(data: IInputModel) {
    /**
     * remove dupes from input
     */
    const dedupedAttributes: IMendixAttribute[] = [];
    data.attributes.forEach((attr) => {
        if (dedupedAttributes.find((existing) => existing.name === attr.name)) {
            return;
        }
        dedupedAttributes.push(attr);
    });
    const cleanedInput: IInputModel = {
        ...data,
        attributes: dedupedAttributes,
    };
    if (data.attributes.length != cleanedInput.attributes.length) {
        console.warn(
            `Removed ${JSON_MODEL.attributes.length - cleanedInput.attributes.length
            } duplicate attributes`
        );
    }

    const {model, workingCopy} = await connectToModel();
    await createEntity(cleanedInput, model, workingCopy);
    await createPage(cleanedInput, model, workingCopy);
    await commit(workingCopy, model, `Add Entity ${data.moduleName}.${data.entityName} and page.`);
    // now, create the page from the entity;
}

exports.handler = async (event: any) => {
    try {
        console.log("Received event:", JSON.stringify(event, null, 2));
        // Call the main function
        await main(event as IInputModel);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Function executed successfully"
            })
        };
    } catch (error: any) {
        console.error("Error:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Function execution failed",
                error: error.message
            })
        };
    }
};
