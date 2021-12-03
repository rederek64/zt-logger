
# zt-logger

Another node.js logger.


## Installation

```bash
  npm i zt-logger
```
    
## Usage/Example

```javascript
const ztlogger = require('zt-logger'); // import module

// setup logger
const logger = new zt-logger.Logger(
    {
        filename: 'logs.txt',
        filepath: "./logs"
    }
);

// logs

logger.log("Hello World!");
logger.info("I'm bored...");
logger.warn("Something went wrong!");
logger.error("Beep boop");
logger.debug("Debug message")

```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Feedback

If you have any feedback, please reach out to us at rederek@essa.fun

