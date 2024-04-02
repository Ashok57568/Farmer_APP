const backButton = document.querySelector('.btn1');

    function navigateToIndex() {
        window.location.href = 'index.html';
    }

    backButton.addEventListener('click', navigateToIndex);