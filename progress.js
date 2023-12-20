
        document.addEventListener('DOMContentLoaded', function () {
            const sidebarIcon = document.getElementById('sidebar-icon');
            const sidebar = document.querySelector('.right');

            sidebarIcon.addEventListener('click', function () {
                sidebar.classList.toggle('show-sidebar');
            });
            document.addEventListener('click', function (event) {
                if (!sidebar.contains(event.target) && !sidebarIcon.contains(event.target)) {
                    sidebar.classList.remove('show-sidebar');
                }
            });
        });
   