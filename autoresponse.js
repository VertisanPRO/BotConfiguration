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
    }
];
