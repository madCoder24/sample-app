import * as os from 'os';
import * as electron from 'electron';
import * as fs from 'fs';

import { LogGroupRule, AbstractCategoryLogger, Category, RuntimeSettings, CategoryLogMessage } from 'typescript-logging';

export class CustomLoggerImpl extends AbstractCategoryLogger {
    private fileLocation;

    constructor(rootCategory: Category, runtimeSettings: RuntimeSettings) {
        super(rootCategory, runtimeSettings);

        if (electron.remote.process.platform === 'win32') {
            this.fileLocation = electron.remote.process.env.LOCALAPPDATA + '\\MadLink\\ui-log.txt';
        } else {
            this.fileLocation = '/tmp/ui-log.txt';
        }
    }

    protected doLog(msg: CategoryLogMessage): void {
        console.log(msg);
        fs.appendFileSync(this.fileLocation, this.createDefaultLogMessage(msg) + os.EOL);
    }
}
