const { Command } = require("commander");

const program = new Command();

program
    .name("String Operations")
    .description("Testing commander.js")
    .version("1.0.0");

program
    .command("split")
    .description("Splits a string into array of characters")
    .argument("<string>", "Enter the string")
    .option("--first", "display just the first substring")
    .option("-s, --separator <char>", "separator character", ",")
    .action((str, option) => {
        const limit = option.first ? 1 : undefined;
        console.log(str.split(option.separator, limit));
    });
program.parse();
