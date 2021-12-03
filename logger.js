let logfile;
const fs = require('fs');

const Gradient = require('gradient-string');

const clr = require('chalk'); // 4.1.0 only

const date = require('date-and-time');
    const ordinaldate = require('date-and-time/plugin/ordinal');
        date.plugin(ordinaldate);

const colorRegExp = /^#([0-9A-F]{3}){1,2}$/i;

var LoggerOptions = [];

module.exports = {
    "Logger": class Logger {
        constructor(options={"filename":"logs.txt","filepath":"./",}) {

            LoggerOptions.filename = options.filename;
            LoggerOptions.filepath = options.filepath;

            this.log = module.exports.log;
            this.error = module.exports.error;
            this.warn = module.exports.warn;
            this.info = module.exports.info;
            this.debug = module.exports.debug;


       }
    },
    "log": (text, options = {"gradient": false, "color": "#fff"}) => {

        if(LoggerOptions.filename == undefined || LoggerOptions.filepath == null || LoggerOptions.filepath == "logs.txt" && LoggerOptions.filepath == "./") {
            logfile = "./logs.txt"
        } else {
            logfile = LoggerOptions.filepath + "/" + LoggerOptions.filename;
            if(!fs.existsSync(LoggerOptions.filepath)) fs.mkdirSync(LoggerOptions.filepath);
        }

        let log = `[LOG] [${date.format(new Date(), 'dddd HH:mm:ss - DDD MMM YYYY')}]\n● ${text}\n`;

        if(!text) {
            throw new SyntaxError("Invalid arguments, you must provide a text to log.");
        } else if(typeof text != "string") {
            throw new TypeError("Text must be a type of string.");
        } else if(text && !options.gradient && !options.color) {

            console.log(log);

            if(!fs.existsSync(logfile)) {
                try {fs.writeFileSync(logfile, "")} catch(e) {console.error(e)};
            }

            fs.appendFileSync(logfile, log + "\n");

        } else if(text && !options.gradient && options.color.length > 1) {

            if(colorRegExp.test(options.color) === false) {

                throw new TypeError("Invalid color, please provide a valid color.");

            } else {

                    const stringcolor = clr.hex(options.color)
                    
                    console.log(stringcolor(log));
    
                    if(!fs.existsSync(logfile)) {
                        try {fs.writeFileSync(logfile, "")} catch(e) {console.error(e)};
                    }
    
                    fs.appendFileSync(logfile, log + "\n");
    
            }

        } else if(text && typeof options.gradient === "boolean" && !options.color) {

            if(options.gradient_colors) {
                if(typeof options.gradient_colors != "object") {
                    console.log(typeof options.gradient_colors)
                    throw new TypeError("Gradient colors must be an array.")
                } else {
                    var gradient = new Gradient(options.gradient_colors);
                }
            } else {
                var gradient = new Gradient('#fa0000', '#ffa600', '#5eff00', '#0048ff', '#8400ff', '#ff00a2')
            }
            

            console.log(gradient(log));

            if(!fs.existsSync(logfile)) {
                try {fs.writeFileSync(logfile, "")} catch(e) {console.error(e)};
            }

            fs.appendFileSync(logfile, log + "\n");

        } else if(text && typeof options.gradient === "boolean" && typeof options.color === "string") {

            throw new SyntaxError("You can't use gradient and color both.");

        } else if(text && typeof options.gradient != "boolean" || typeof options.color != "string") {

            throw new SyntaxError("Invalid arguments, one of arguments must be boolean or string.");

        }
    },
    "warn": (text) => {

        if(LoggerOptions.filename == undefined || LoggerOptions.filepath == null || LoggerOptions.filepath == "logs.txt" && LoggerOptions.filepath == "./") {
            logfile = "./logs.txt"
        } else {
            logfile = LoggerOptions.filepath + "/" + LoggerOptions.filename;
            if(!fs.existsSync(LoggerOptions.filepath)) fs.mkdirSync(LoggerOptions.filepath);
        }

        let log = `[WARN] [${date.format(new Date(), 'dddd HH:mm:ss - DDD MMM YYYY')}]\n● ${text}\n`;

        const stringcolor = clr.hex('#c3ff00')
                    
        console.log(stringcolor(log));

        if(!fs.existsSync(logfile)) {
            try {fs.writeFileSync(logfile, "")} catch(e) {console.error(e)};
        }

        fs.appendFileSync(logfile, log + "\n");

    },
    "error": (text) => {

        if(LoggerOptions.filename == undefined || LoggerOptions.filepath == null || LoggerOptions.filepath == "logs.txt" && LoggerOptions.filepath == "./") {
            logfile = "./logs.txt"
        } else {
            logfile = LoggerOptions.filepath + "/" + LoggerOptions.filename;
            if(!fs.existsSync(LoggerOptions.filepath)) fs.mkdirSync(LoggerOptions.filepath);
        }

        let log = `[ERROR] [${date.format(new Date(), 'dddd HH:mm:ss - DDD MMM YYYY')}]\n● ${text}\n`;

        const stringcolor = clr.hex('#ff0800')
                    
        console.log(stringcolor(log));

        if(!fs.existsSync(logfile)) {
            try {fs.writeFileSync(logfile, "")} catch(e) {console.error(e)};
        }

        fs.appendFileSync(logfile, log + "\n");

    },
    "info": (text) => {

        if(LoggerOptions.filename == undefined || LoggerOptions.filepath == null || LoggerOptions.filepath == "logs.txt" && LoggerOptions.filepath == "./") {
            logfile = "./logs.txt"
        } else {
            logfile = LoggerOptions.filepath + "/" + LoggerOptions.filename;
            if(!fs.existsSync(LoggerOptions.filepath)) fs.mkdirSync(LoggerOptions.filepath);
        }

        let log = `[INFO] [${date.format(new Date(), 'dddd HH:mm:ss - DDD MMM YYYY')}]\n● ${text}\n`;

        const stringcolor = clr.hex('#00c8ff')
                    
        console.log(stringcolor(log));

        if(!fs.existsSync(logfile)) {
            try {fs.writeFileSync(logfile, "")} catch(e) {console.error(e)};
        }

        fs.appendFileSync(logfile, log + "\n");

    },
    "debug": (text) => {

        if(LoggerOptions.filename == undefined || LoggerOptions.filepath == null || LoggerOptions.filepath == "logs.txt" && LoggerOptions.filepath == "./") {
            logfile = "./logs.txt"
        } else {
            logfile = LoggerOptions.filepath + "/" + LoggerOptions.filename;
            if(!fs.existsSync(LoggerOptions.filepath)) fs.mkdirSync(LoggerOptions.filepath);
        }

        let log = `[DEBUG] [${date.format(new Date(), 'dddd HH:mm:ss - DDD MMM YYYY')}]\n● ${text}\n`;

        const stringcolor = clr.hex('#2fb80d')
                    
        console.log(stringcolor(log));

        if(!fs.existsSync(logfile)) {
            try {fs.writeFileSync(logfile, "")} catch(e) {console.error(e)};
        }

        fs.appendFileSync(logfile, log + "\n");


    }
}