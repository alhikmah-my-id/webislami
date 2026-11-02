<?php
// Dashboard Routing Berdasarkan Role
session_start();
$role = $_SESSION['user_role'] ?? 'Contributor';
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <title>Dashboard - ALHIKMAH Admin</title>
    <link rel="stylesheet" href="/wp-content/themes/alhikmah/style.css">
</head>
<body>
    <div class="dashboard-wrap">
        <h2>Dashboard Panel (Level: <?php echo $role; ?>)</h2>
        <ul>
            <li><a href="edit.php">Kelola Artikel</a></li>
            <?php if ($role === 'Admin'): ?>
                <li><a href="users.php">Manajemen User</a></li>
            <?php endif; ?>
        </ul>
    </div>
</body>
</html>
