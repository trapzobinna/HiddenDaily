
        document.addEventListener('DOMContentLoaded', function () {
            console.log('DOMContentLoaded event fired');
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
        // Define an array of image sources
    const imageSources = ['Capture.png', 'hh.jpg',];
    let currentIndex = 0;

    // Function to switch the image
    function switchImage() {
        const box2 = document.querySelector('.box2');
        box2.style.backgroundImage = `url(${imageSources[currentIndex]})`;

        // Increment the index, and reset to 0 if it exceeds the array length
        currentIndex = (currentIndex + 1) % imageSources.length;
    }

    // Set an interval to switch images every 5 seconds (adjust as needed)
    const imageSwitchInterval = setInterval(switchImage, 5000);

    sidebarIcon.addEventListener('click', function () {
        sidebar.classList.toggle('show-sidebar');
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !sidebarIcon.contains(event.target)) {
            sidebar.classList.remove('show-sidebar');
        }
    });
