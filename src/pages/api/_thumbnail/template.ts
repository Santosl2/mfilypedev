interface GetHtmlProps {
  title: string;
  image?: string;
}

export function getHtml({ title, image }: GetHtmlProps) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Thumbnail</title>
  
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet">
  
    <style>
      body {
        margin: 0;
        font-family: Inter, sans-serif;
        color: #ffffff;
        background-image: url(http://localhost:3000/images/${image});
        background-size: cover;
        height: 100vh;
        position: relative;
      }

      body:before {
        position: absolute;
        content: "";
        background-color: rgba(0, 0, 0, 0.75);
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      h1 {
        font-size: 62px;
        line-height: 80px;
        max-width: 80%;
      }
      p {
        font-size: 30px;
      }
    </style>
  </head>

  <body>
    <div id="wrapper">
      <h1>${title}</h1>

      <p>mfilype.dev</p>
    </div>
  </body>
  </body>
  </html>`;
}
