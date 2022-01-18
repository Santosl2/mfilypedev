import chrome from 'chrome-aws-lambda'

const chromeExecPaths = {
    win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    linux: '/usr/bin/google-chrome',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
}

const exePath = chromeExecPaths[process.platform]

interface IOptions {
    args: string[];
    executablePath: string;
    headless: boolean;
}

export async function getOptions(development: boolean): Promise<IOptions> {
    let options: IOptions;

    if (development) {
        options = {
            args: [],
            executablePath: exePath,
            headless: true // vai rodar em background
        }
    } else {
        options = {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless
        }
    }

    return options;
}
