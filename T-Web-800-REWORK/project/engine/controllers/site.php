<?php

return function ($kirby, $site, $page, $visitor) {
    /**
     * Maintenance
     */
    if (
        $site->development_maintenance()->toBool() === true &&
        $page->uid() != 'maintenance'
    ) {
        $field = $site
            ->content()
            ->get('development_ips')
            ->value();
        $authorized_ips = preg_split("/\r\n|\n|\r/", $field);
        $visitor_ip = $kirby->visitor()->ip();

        foreach ($authorized_ips as $k => $ip) {
            if (!V::ip($ip)) {
                unset($ips[$k]);
            }
        }

        if (!in_array($visitor_ip, $authorized_ips)) {
            go('/maintenance', 307);
        }
    }
};
