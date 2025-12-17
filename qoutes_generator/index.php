<?php
$quotes = [
    ['author' => 'Walt Disney', 'text' => 'The best way to get started is to quit talking and begin doing.'],
    ['author' => 'Winston Churchill', 'text' => 'Success is not final, failure is not fatal: It is the courage to continue that counts.'],
    ['author' => 'Will Rogers', 'text' => 'Don’t let yesterday take up too much of today.'],
    ['author' => 'Chris Grosser', 'text' => 'Opportunities don’t happen, you create them.'],
    ['author' => 'Nelson Mandela', 'text' => 'It always seems impossible until it’s done.'],
    ['author' => 'Theodore Roosevelt', 'text' => 'Do what you can, with what you have, where you are.'],
    ['author' => 'Anonymous', 'text' => 'If you want to achieve greatness stop asking for permission.'],
    ['author' => 'Norman Vaughan', 'text' => 'Dream big and dare to fail.'],
    ['author' => 'C.S. Lewis', 'text' => 'Hardships often prepare ordinary people for an extraordinary destiny.'],
    ['author' => 'Sam Levenson', 'text' => 'Don’t watch the clock; do what it does. Keep going.'],
];

$quote = $quotes[rand(0, count($quotes) - 1)];
$quotesText = $quote['text'];
$quotesAuthor = $quote['author'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Quotes</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <div class="quote-box">
        <h2>&ldquo;<?php echo $quotesText; ?>&rdquo;</h2>
        <strong>- <?php echo $quotesAuthor; ?></strong>
    </div>
</body>

</html>