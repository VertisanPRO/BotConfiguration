module.exports = [
    {
        keywords: [["Failed opening required '/var/www/pterodactyl/vendor/autoload.php'"]],
        response: {
            "title": "Composer core dependency install interrupted or failed",
            "footer": "",
            "body": [
                "Your composer core dependency install `composer install --no-dev --optimize-autoloader` was interrupted or failed. Try again and post here any errors that you might receive. If the command doesn't work, go to https://discord.gg/pterodactyl and ask for support there"
            ]
        }
    },
    {
        keywords: [
            ["ran", "optimize"],
            ["Route", "not defined"],
            ["RouteNotFoundException"]
        ],
        response: {
            "title": "Did you run php artisan optimize?",
            "footer": "And yes running 2 commands twice somehow fixes it",
            "body": [
                "If yes, you should run the following commands:",
                "```",
                "php artisan optimize",
                "composer dump-autoload --optimize",
                "```",
                "```",
                "php artisan optimize",
                "composer dump-autoload --optimize",
                "```"
            ]
        }
    },
    {
        keywords: [["500 SERVER ERROR"]],
        response: {
            "title": "Getting Panel Logs",
            "footer": "",
            "body": [
                "Get your panel logs with this simple command:",
                "```",
                "tail -n 100 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log | nc pteropaste.com 99",
                "```"
            ]
        }
    },
    {
        keywords: [["Base table or view not found: 1146 Table 'panel.billing"], ["401 Unauthorized"]],
        response: {
            "title": "Problems with installing Billing v1",
            "footer": "",
            "body": [
                "Seems you don't own/haven't bought Billing v2. You can buy it on https://wemx.net",
                "",
                "If you need to install the installer for Billing v1, you have to download it where you bought ([PterodactylMarket](https://pterodactylmarket.com/resource/336), [Pterodactyl-Resources](https://pterodactyl-resources.com/resources/resource/13), [BuiltByBit](https://https://builtbybit.com/resources/21909))",
                "",
                "If you already have an installer and need to install Billing v1, run",
                "```",
                "php artisan billing:install legacy",
                "```"
            ]
        }
    },
    {
        keywords: [["domains do not match"]],
        response: {
            "title": "Setting up Pterodactyl properly",
            "footer": "If you need to change the URL, open up a ticket",
            "body": [
                "When the license was created it was assigned to a Panel URL, it must match in `/var/www/pterodactyl/.env` at `APP_URL`",
                "",
                "For example if your license has been created for `https://example.com`, in the config it should like this:",
                "```do",
                "APP_URL=\"https://example.com\"",
                "```"
            ]
        }
    },
    {
        keywords: [["you use a proxy"]],
        response: {
            "title": "Installing an Addon/a Theme",
            "footer": "",
            "body": [
                "Seems that you use a proxy, it could be Cloudflare, or your own. If you want to keep it, open up a ticket at <#898665521640267869> and send the error there",
                "",
                "After the commands that the Staff ran, you can install the Addon/Theme now"
            ]
        }
    }
];
