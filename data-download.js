// From https://stackoverflow.com/questions/37614649/how-can-i-download-and-save-a-file-using-the-fetch-api-node-js

import { resolve } from 'path';
import { existsSync, createWriteStream, unlink } from 'fs';
import { mkdir } from 'fs/promises';
import { Readable } from 'stream';
import { finished } from 'stream/promises';


console.log("Starting data download...")

if (!existsSync("downloads")) await mkdir("downloads");

const downloadFile = (async (url, fileName) => {
    const destination = resolve("downloads", fileName);
    const fileStream = createWriteStream(destination);
    try {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Download error: ${response.statusText}`);
        }

        await finished(Readable.fromWeb(res.body).pipe(fileStream));
        
        console.log("Downloaded " + fileName + " from " + url)
    } catch (err) {
        console.error('Error downloading file ' + fileName + ':', err.message);
        unlink(destination, (err) => {
            if (err) console.error('Error in removing partially downloaded file ' + fileName + ':', err.message);
        });
    }
     
})

await downloadFile("https://elezioni.interno.gov.it/daithome/documenti/Europee_Scrutini_ITALIA_20240609.csv", "europee_2024.csv")