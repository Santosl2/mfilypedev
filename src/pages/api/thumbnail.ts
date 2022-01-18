import { getHtml } from "./_thumbnail/template";
import { getScreenshot } from "./_thumbnail/getThumbnail"


export default async (req, res) => {
    try {
        const { title, background } = req.query;

        const html = getHtml({ title, image: background });
        const file = await getScreenshot(html, true, background);

        res.statusCode = 200;

        res.setHeader('Content-Type', `image/png`);
        res.setHeader(
            'Cache-Control',
            'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
        );

        return res.end(file);
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
        console.error(e);
    }
}