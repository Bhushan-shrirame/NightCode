import type {Command} from "./type";
import { COMMANDS } from "./commands";

export function getFilterCommands(query : string): Command[] {
    if(query.length === 0 ) return COMMANDS;
    return COMMANDS
        .filter((cmd) => cmd.name.toLowerCase().startsWith(query.toLowerCase()));
}
    
