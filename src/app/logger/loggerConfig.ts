import {
    Category, RuntimeSettings, CategoryDefaultConfiguration, LogLevel, LoggerType,
    CategoryLogFormat, CategoryServiceFactory, CategoryLogger, DateFormat, DateFormatEnum
} from 'typescript-logging';

import { CustomLoggerImpl } from './MadLinkLoggerImpl';

export const catRoot = new Category('logger');

// Create options instance and specify 2 LogGroupRules:
// * One for any logger with a name starting with model, to log on debug
// * The second one for anything else to log on info
const config = new CategoryDefaultConfiguration(
    LogLevel.Debug, LoggerType.Custom, new CategoryLogFormat(new DateFormat(DateFormatEnum.YearMonthDayTime, '-')),
    (root: Category, runtimeSettings: RuntimeSettings) => new CustomLoggerImpl(root, runtimeSettings)
);

// Create a named loggerfactory and pass in the options and export the factory.
// Named is since version 0.2.+ (it's recommended for future usage)
CategoryServiceFactory.setDefaultConfiguration(config);
export const logger: CategoryLogger = CategoryServiceFactory.getLogger(catRoot);
