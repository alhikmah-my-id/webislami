<?php
/**
 * Core User Capabilities & Permissions Handler
 */

function alhikmah_check_permission($role, $action, $is_owner = false) {
    switch ($role) {
        case 'Admin':
        case 'Editor':
            return true; // Kontrol penuh
            
        case 'Author':
            // Bisa publikasi, edit, dan upload media untuk miliknya sendiri
            if (in_array($action, ['publish', 'edit', 'upload'])) {
                return $is_owner;
            }
            return false;
            
        case 'Contributor':
            // Hanya bisa kirim draf dan melihat komentar sendiri
            if ($action == 'submit_draft') {
                return true;
            }
            return false;
            
        default:
            return false;
    }
}
