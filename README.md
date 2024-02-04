# training-data - not here

I was going to use this to store data but remembered GitHub's file size limit. But I can still use it - work in progress bits for generating data.

```
cd src

node pdf2txt.js ../pdfs/solar-hybrid.pdf ../output/solar-hybrid.md
```

interesting bits in src/pdfTextExtractor.js, check 'isTopLevelHeading'

handy standard command :

`split solar-hybrid.md -n 10`

splits into 10 files

funny bit in docs/funny.md
