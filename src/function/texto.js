//secret_BdAooXHte7xhVYtoxhnY1XjbVpSuzcRdZ7TT7GqDUkS

import { Client } from '@notionhq/client';

async function getNotionData(pageId, notionClient) {
    try {
        const response = await notionClient.blocks.children.list({
            block_id: pageId,
        });

        // Verificar si hay resultados en la respuesta
        if (response.results) {
            // Filtrar los bloques de texto

            //const textBlocks = response.results.filter(block => block);
            const textBlocks = response.results.filter(block => block.type === 'paragraph');

            // Obtener el texto de los bloques
            console.log(textBlocks);
            console.log(typeof textBlocks);

            //const textContent = textBlocks.map((block) => block.paragraph.text.map(text => text.plain_text).join('')).join('');
            const textContent = textBlocks.map(
                (block) => block.paragraph.rich_text.map(text => text.plain_text).join("")
            );

            var texto = textContent.join(".");
            console.log(texto);
            console.log(typeof texto);
            return texto;
        } else {
            console.log('No se encontraron bloques en la página.');
            return null;
    }

    } catch (error) {
        console.error('Error al obtener el texto de la página:', error);
        return null;
    }
}

const notion = new Client({ auth: "secret_BdAooXHte7xhVYtoxhnY1XjbVpSuzcRdZ7TT7GqDUkS" });
const notionPageId = "f726a52133df4465a1a4d02f576ff826";

var info = getNotionData(notionPageId, notion);
if (info == null) {
    console.log("Hubo un Error al Generar El Texto de Notion");
    return;
}


