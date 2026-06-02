import type { Command } from "./type";

export const COMMANDS: Command[] = [
    {
        name: "new ",
        description: "Start a new conversation",
        value: "/new"
    },
    {
        name: "agents ",
        description: "Switch agent",
        value: "/agents"
    },
    {
        name: "models ",
        description: "Select AI model for generation",
        value: "/models"
    },
    {
        name: "sessions ",
        description: "Browse past sessions",
        value: "/sessions"
    },
    {
        name: "theme ",
        description: "Switch UI theme",
        value: "/themes"
    },
    {
        name: "login ",
        description: "Sign in with your browser",
        value: "/login"
    },
    {
        name: "logout ",
        description: "Sign out of your accont",
        value: "/logout"
    },
    {
        name: "upgrade ",
        description: "Upgrade to NightCode Plus",
        value: "/upgrade"
    },
    {
        name: "usage ",
        description: "open billing portal in your browser",
        value: "/usage"
    },
    {
        name: "exit",
        description: "Quit the applicaiton",
        value: "/exit",
        action: (ctx) => {
            ctx.exit();
        },
    },
]