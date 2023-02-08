def view_logs
    remote.run 'cd "/var/www/system_classroom/current/log" && tail -200 production.log', raise_on_error: false
end