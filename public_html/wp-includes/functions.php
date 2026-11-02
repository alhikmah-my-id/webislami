<?php
function alhikmah_render_meta($title, $description, $canonical_url) {
    $logo = "https://blogger.googleusercontent.com/img/a/AVvXsEiW2Sfw5ogSKhZbFiB-VdNXwmZoMGLTGPgx5ZYrTY8859clBvRGxgx-Dwc3i03YiUs1WiiL84uTSAlZ8civ17IWTI5Emt2vXmpuT-yRTzf4620rY_4Ib_vmUEGFfLXjzMiCfmQoWUg1mmj5hQu1IpD1CYguF9GocJ81MhsQTuPgt79-I8uOaPyGT0Qzs00=s200";
    echo '
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>' . htmlspecialchars($title) . ' - ALHIKMAH</title>
    <link rel="canonical" href="' . htmlspecialchars($canonical_url) . '">
    <meta name="description" content="' . htmlspecialchars($description) . '">
    <link rel="icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="' . $logo . '">
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#0b6b4f">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="ALHIKMAH">
    <meta property="og:title" content="' . htmlspecialchars($title) . '">
    <meta property="og:description" content="' . htmlspecialchars($description) . '">
    <meta property="og:url" content="' . htmlspecialchars($canonical_url) . '">
    <meta property="og:image" content="' . $logo . '">
    <link rel="stylesheet" href="/wp-content/themes/alhikmah/style.css">
    ';
}
