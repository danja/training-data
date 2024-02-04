
import { getDocument } from 'pdfjs-dist';
import { readFileSync } from 'fs';

async function extractTextFromPdf(pdfPath) {
    const buffer = readFileSync(pdfPath);
    const pdfData = new Uint8Array(buffer);
    const pdf = await getDocument({ data: pdfData }).promise;
    let textContent = '';

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const text = await page.getTextContent();
        // Process each item in the text.items array
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

/*

*/
function isTopLevelHeading(item, fontSize) {
    //  console.log('fontSize', fontSize);
    // Define a font size threshold for top-level headings
    const headingFontSizeThreshold = 11;
    return fontSize >= headingFontSizeThreshold;
}


export { extractTextFromPdf };
