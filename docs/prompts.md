here is a zip of some text files. please extract to /mnt/data/ then read them one at a time and without telling me anything else, translate each into italian, saving the result in a file with the same name but a .it.md extension in /mnt/data/ Continue until you have translated all the files, then zip the translations and provide a link so i can download the zip.

You are a node javascript expert.
I will upload a zip file containing a utility application for extracting text from pdf documents. It's written in ES6 and runs in Node.
Please extract this to /mnt/data/
It contains a file called abstract.md which you should read first. Do not display this or any of the other source files.
The job today is to give the utility the ability to extract structural formatting from the source PDF file using the pdf.js api and insert corresponding formatting into the output text file. The formatting will be inserted into the output text as markdown syntax.

1. Examine the existing code to understand the current operation of the application.

2. Research pdf.js API to find methods that allow the extraction of text along with its formatting details. Begin with top-level headings which would correspond to the # character in Markdown syntax. Look for ways of inferring these from what pdf.js provides.

3. Create a plan for modifying pdfTextExtractor.js to add the facility to identify top-level headings in the source PDF and insert them into the extracted text at the appropriate locations.

---

4. Adapt the text extraction process to include formatting details. This may involve adjusting how the PDF is parsed and how text items are processed.
   Implement logic to map PDF formatting to Markdown syntax. For example, detect bold text and wrap it with \*\* (Markdown syntax for bold), or recognize headings based on font size and position, then prepend them with the appropriate number of # characters.
   Update Output Generation to Include Markdown Formatting:

5. Ensure that the extracted text, now including Markdown formatting, is correctly written to the output file.
   This may involve enhancing the function that writes to the output file to handle the insertion of Markdown syntax alongside the extracted text.
   Test the Enhanced Utility:

such as font weight (for bold text), font style (for italic text), and possibly text position or structure (to infer headings, lists, etc.).

Then begin applying the steps to the files in /mnt/data/

Examine pdf.js Documentation for Structural Formatting Extraction:

Use the sample.pdf or other PDFs with known formatting to test the enhanced utility.
Verify that the output text file correctly reflects the structural formatting of the source PDF as Markdown.

given code like the following using pdf.js, what specifically are each of the values to be found in item.transform?

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const text = await page.getTextContent();
        // Process each item in the text.items array
        text.items.forEach(item => {
            const fontSize = item.transform[5]; // Assuming the font size is at this position
