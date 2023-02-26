import chalk, {Chalk} from 'chalk'

console.log(chalk.red('hello chalk'))
console.log(chalk.red('Hello chalk')+'!!!'+chalk.blue('hello chalk'))
console.log(chalk.red.bgCyan.bold('Hello chalk'))
console.log(chalk.red('Hello chalk',chalk.underline('anne')))
console.log(chalk.rgb(255,0,0).underline('anne'))
console.log(chalk.hex("#ff000").underline('anne'))

const error = (...text) => chalk.bold.hex("#ff0000")(text)
const warning = (...text) => chalk.bold.hex("#ffa500")(text)

const result1 = error('Error!')
const result2 = warning('Warning!')

console.log(result1)
console.log(result2)

const customChalk = new Chalk({level:3});
console.log(customChalk.blue('崔恒哥哥'))
console.log(customChalk.hex('#ffaaaa')('崔恒哥哥'))