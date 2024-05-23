const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

image1.addEventListener('click', function() {
    image1.classList.add('pushed'); // Добавляем класс для анимации исчезновения
    image2.classList.add('appeared'); // Добавляем класс для анимации появления
});
