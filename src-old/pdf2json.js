import fs from "fs";
import PDFParser from "pdf2json";

const pdfParser = new PDFParser();

pdfParser.loadPDF("../pdfs/llm-kg-completion.pdf");

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("../output/llm-kg-completion.json", JSON.stringify(pdfData), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File written successfully");
        }
    });
});