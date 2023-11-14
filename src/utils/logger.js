// Requirements
const chalk = require("chalk");

// Nya-logger
const logger = (functionInfo) => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours().toString().padStart(2, "0");
  const currentMinute = currentTime.getMinutes().toString().padStart(2, "0");
  const currentSecond = currentTime.getSeconds().toString().padStart(2, "0");

  let currentTimeString = chalk.blue(
    `[${currentHour}:${currentMinute}:${currentSecond}]`
  );
  let functionName = chalk.magenta(`[${functionInfo.name}]`);

  // Orange: warning
  let functionType = functionInfo.type;
  if (functionType == "error") {
    functionType = chalk.redBright(`[${functionType}]`);
  } else if (functionType == "info") {
    functionType = chalk.green(`[${functionType}]`);
  } else if (functionType == "warning") {
    functionType = chalk.yellow(`[${functionType}]`);
  } else if (functionType == "chat") {
    functionType = chalk.grey(`[${functionType}]`);
  } else {
    functionType = chalk.blue(`[${functionType}]`); // For custom
  }

  info = `${currentTimeString} ${functionName} ${functionType} ${functionInfo.content}`;
  console.log(info);

  /* return info; */
};

module.exports = logger;
