
// import { getDocument } from 'pdfjs-dist';
import * as pdfJS from 'pdfjs-dist';
// import { pdfJS } from 'pdfjs-dist';
// import pdfJS from 'pdfjs-dist'
// const pdfjsLib = require('pdfjs-dist');
import { readFileSync } from 'fs';

async function extractTextFromPdf(pdfPath) {
    const buffer = readFileSync(pdfPath);
    const pdfData = new Uint8Array(buffer);
    const pdf = await pdfJS.getDocument({ data: pdfData }).promise;
    let textContent = '';

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const text = await page.getTextContent();
        // Process each item in the text.items array

        /*
                const svg = await page.getOperatorList().then((opList) => {
        
                    const svgGfx = new pdfJS.SVGGraphics(
                        page.commonObjs,
                        page.objs
                    );
                    return svgGfx.getSVG(opList, viewport).then((svg) => {
                        const svgData = new XMLSerializer().serializeToString(svg);
                        return svgData;
                    });
                });
                console.log('svg', svg);
        */
        text.items.forEach(item => {
            //  const fontSize = item.transform[5]; // Assuming the font size is at this position
            const fontSize = item.transform[3]; // this one is 'scale' - seems close

            // Determine if the item is a top-level heading
            if (isTopLevelHeading(item, fontSize)) {
                textContent += `# ${item.str}\n\n`; // Markdown for a top-level heading
            } else {
                textContent += `${item.str} `;
            }
        });
        textContent += '\n';
    }
    return textContent;
}

function temp() {
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        pagesPromises.push(


            pdf.getPage(pageNumber).then((page) => {
                const viewport = page.getViewport({ scale: 1.0 });
                // const canvasFactory = new pdfjsLib.DOMCanvasFactory();

                return page.getOperatorList().then((opList) => {
                    const svgGfx = new pdfjsLib.SVGGraphics(
                        page.commonObjs,
                        page.objs
                    );
                    return svgGfx.getSVG(opList, viewport).then((svg) => {
                        const svgData = new XMLSerializer().serializeToString(svg);
                        return svgData;
                    });
                });
            })
        );
    }
}
/*

*/
function isTopLevelHeading(item, fontSize) {
    //  console.log('fontSize', fontSize);
    // Define a font size threshold for top-level headings
    const headingFontSizeThreshold = 11;
    return fontSize >= headingFontSizeThreshold;
}


export { extractTextFromPdf };
