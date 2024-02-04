
// import { getDocument } from 'pdfjs-dist/legacy/build/pdf.js';
// import * as pdfjs from 'pdfjs-dist';
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
        textContent += text.items.map(item => item.str).join(' ') + '\n';
    }

    return textContent;
}

export { extractTextFromPdf };
