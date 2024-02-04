
import { extractTextFromPdf } from './pdfTextExtractorModule.js';
import { writeFile } from 'fs/promises';
import path from 'path';

async function main() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.log('Usage: node this_script.js <input_pdf_path> [output_text_path]');
        return;
    }

    const inputPdfPath = args[0];
    let outputTextPath = args[1];

    if (!outputTextPath) {
        const parsedPath = path.parse(inputPdfPath);
        outputTextPath = path.join(parsedPath.dir, `${parsedPath.name}.md`);
    }

    try {
        const textContent = await extractTextFromPdf(inputPdfPath);
        await writeFile(outputTextPath, textContent);
        console.log(`Extracted text saved to ${outputTextPath}`);
    } catch (error) {
        console.error('Error extracting text from PDF:', error);
    }
}

main();
