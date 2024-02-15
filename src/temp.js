function convertPdfToHtml(pdfPath, outputFolderPath) {
    const filename = path.basename(pdfPath, ".pdf");
    const outputFilePath = path.join(outputFolderPath, `${filename}.html`);

    const loadingTask = pdfjsLib.getDocument(pdfPath);
    console.log(loadingTask);
    loadingTask.promise
        .then((pdf) => {
            const totalPages = pdf.numPages;
            const pagesPromises = [];

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

            // new pdfjsLib.SVGGraphics pdfjsLib.SVGGraphics is not a constructor
            Promise.all(pagesPromises).then((pageContents) => {
                const html = `<html><body>${pageContents.join("")}</body></html>`;
                fs.writeFileSync(outputFilePath, html);

                console.log(`Converted ${pdfPath} to ${outputFilePath}`);
            });
        })
        .catch((error) => {
            console.error(`Error converting ${pdfPath}: ${error}`);
        });
}