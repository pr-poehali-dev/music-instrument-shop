
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>МузМаг - Музыкальные инструменты</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'montserrat': ['Montserrat', 'sans-serif'],
                    }
                }
            }
        }
    </script>
</head>
<body class="min-h-screen">
    <?php include 'components/header.php'; ?>
    <?php include 'components/hero.php'; ?>
    <?php include 'components/product-grid.php'; ?>
    <?php include 'components/footer.php'; ?>

    <script src="js/main.js"></script>
</body>
</html>
