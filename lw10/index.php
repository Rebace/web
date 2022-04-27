<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Лаба 10</title>
	<link rel="stylesheet" href="css/style.css">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Roboto+Condensed&display=swap" rel="stylesheet">
</head>
<body>
	<div class="popup buttonnoff"></div>
	<?php include 'src/form.php'; ?>

  	<div class="header">
		<div class="header__content">
			<img class="header__logo logo" src="img/headerlogo.svg" alt="image">
			<nav class="header__menu">
				<a href="#" class="header__link">Что будет на курсе?</a>
				<a href="#" class="header__link">Вопросы</a>
				<a href="#" class="header__link">Автор</a>
				<a href="#" class="header__link header__button button button-open-form">Записаться на курс</a>
			</nav>
		</div>
	</div>
	<div class="main">
		<div class="main__blog">
			<div class="blog__info">
				<div class="blog__title">Не <span class="extra">делай</span> это</div>
				<div class="blog__subtitle">Онлайн-курс для творческих людей, о том, как управлять своим временем </div>
				<a href="#" class="button_wider button button-open-form">Записаться на курс</a>
			</div>
			<img class="main__img" src="img/blog.png" alt="image">
		</div>

		<div class="main__row">
			<div class="row__panel">
				<div class="row__column">
					<img class="column__img" src="img/row1.svg" alt="image">
					<div class="column__info text">Для тех, у кого слишком много идей и слишком мало времени</div>
				</div>
				<div class="row__column">
					<img class="column__img" src="img/row2.svg" alt="image">
					<div class="column__info text">Метод «списка не дел», который позволит успевать и реализовывать</div>
				</div>
				<div class="row__column">
					<img class="column__img" src="img/row3.svg" alt="image">				
					<div class="column__info text">Курс научит творческих людей сосредоточиваться</div>
				</div>
			</div>
		</div>

		<div class="main__body">
			<div class="main__deadline">
				<img class="deadline__imgfirst" src="img/deadlinefirst.png" alt="image">
				<div class="deadline__info">
					<div class="deadline__title">Ты не успеешь</div>
					<div class="deadline__subtitle">Всех творческих людей объединяет одна проблема - отсутствие времени на реализацию идей. Как прибавить суткам часы, рассмотрим в нашем курсе.</div>
				</div>
			</div>
			<div class="main__deadline">
				<div class="deadline__info">
					<div class="deadline__title">Опять дедлайн</div>
					<div class="deadline__subtitle">В мире, где столько всего интересного, когда же успевать жить?</div>
				</div>
				<img class="deadline__imgsecond" src="img/deadlinesecond.png" alt="image">
			</div>
		</div>

		<div class="main__info">
			<div class="info__title">На курсе ты <span class="extra">сможешь</span></div>
			<div class="info__softskills">
				<div class="info__block">
					<img class="info__img" src="img/info1.svg" alt="image">
					<div class="info__text text info__text_pxtop">Понять, что нужно делать, а что делать не стоит.</div>
				</div>
				<div class="info__block">
					<img class="info__img" src="img/info2.svg" alt="image">					
					<div class="info__text text info__text_pxtop info__text_pxleft">Перестать себя искусственно ограничивать.</div>
				</div>
				<div class="info__block">
					<img class="info__img" src="img/info3.svg" alt="image">					
					<div class="info__text text info__text_pxtop">Определить сильные стороны и начать использовать слабые.</div>
				</div>
				<div class="info__block">
					<img class="info__img" src="img/info4.svg" alt="image">					
					<div class="info__text text info__text_pxtop">Научиться достигать любой цели в 3 понятных шага.</div>
				</div>
				<div class="info__block">
					<img class="info__img" src="img/info5.svg" alt="image">	
					<div class="info__text text info__text_pxtop info__text_pxleft">Сотрудничать эффективно и с правильными людьми.</div>
				</div>
				<div class="info__block">
					<img class="info__img" src="img/info6.svg" alt="image">				
					<div class="info__text text info__text_pxtop">Оптимизировать общение с клиентами и проведение совещаний.</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer">
		<img class="footer__logo logo" src="img/footerlogo.svg" alt="image">			
	</div>

	<script src="script/script.js"></script>

</body>
</html>