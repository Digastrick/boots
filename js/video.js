const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-video-id');
        const video = document.querySelector(`#${videoId}`);
        
        if (video) {
            const thumbnail = button.closest('.small-video-placeholder')?.querySelector('.video-thumbnail') 
                              || button.closest('.video-placeholder')?.querySelector('.video-thumbnail');

            if (!thumbnail) {
                console.error('Thumbnail not found for the button.');
                return;
            }

            if (!video.paused) {
                video.pause();
                thumbnail.style.display = 'block'; // Показываем миниатюру при паузе

                // Показываем кнопки воспроизведения и текст
                const videoPlaceholder = button.closest('.small-video-placeholder') || button.closest('.video-placeholder');
                if (videoPlaceholder) {
                    const playButton = videoPlaceholder.querySelector('.play-button');
                    if (playButton) {
                        playButton.style.display = 'block'; // Показываем кнопку
                    }
                    const textSection = videoPlaceholder.querySelector('.text-section');
                    if (textSection) {
                        textSection.style.display = 'block'; // Показываем текст
                    }
                }
            } else {
                // Если видео не воспроизводится, проверяем основное видео
                const mainVideo = document.getElementById('main-video');
                if (mainVideo && !mainVideo.paused) {
                    mainVideo.pause(); // Ставим основное видео на паузу
                    const mainThumbnail = mainVideo.previousElementSibling.querySelector('.video-thumbnail');
                    if (mainThumbnail) {
                        mainThumbnail.style.display = 'block'; // Показываем миниатюру основного видео
                    }
                    const mainPlayButton = mainVideo.previousElementSibling.querySelector('.play-button');
                    if (mainPlayButton) {
                        mainPlayButton.style.display = 'block'; // Показываем кнопку основного видео
                    }
                    const mainTextSection = mainVideo.previousElementSibling.querySelector('.text-section');
                    if (mainTextSection) {
                        mainTextSection.style.display = 'block'; // Показываем текст основного видео
                    }
                }

                // Скрываем и воспроизводим маленькое видео
                video.style.display = 'block'; // Убедитесь, что маленькое видео отображается
                thumbnail.style.display = 'none'; // Скрываем миниатюру
                const playButton = button.closest('.small-video-placeholder')?.querySelector('.play-button');
                if (playButton) {
                    playButton.style.display = 'none'; // Скрываем кнопку маленького видео
                }
                const textSection = button.closest('.small-video-placeholder')?.querySelector('.video-description');
                if (textSection) {
                    textSection.style.display = 'none'; // Скрываем текст маленького видео
                }

                // Убедитесь, что контейнер основного видео остается видимым
                const mainVideoPlaceholder = document.querySelector('.video-placeholder');
                if (mainVideoPlaceholder) {
                    mainVideoPlaceholder.style.display = 'none'; // Убедитесь, что контейнер основного видео виден
                }

                // Запускаем маленькое видео
                video.play().catch(error => {
                    console.error('Error trying to play the video:', error);
                });
            }
        } else {
            console.error(`Video with id ${videoId} not found.`);
        }
    });
});
