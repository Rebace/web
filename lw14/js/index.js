window.onload = () => {
  const c = document.getElementById("myCanvas"); 
  const ctx = c.getContext("2d");

  //голова
  ctx.beginPath();
  ctx.arc(250, 250, 58, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFEDC2";
  ctx.fill();

  //шапка
  ctx.fillStyle = '#ff2042';
  ctx.beginPath();
  ctx.moveTo(190, 248);
  ctx.lineTo(190, 236);
  ctx.lineTo(200, 232);
  ctx.lineTo(225, 225);
  ctx.lineTo(250, 223);
  ctx.lineTo(270, 224);
  ctx.lineTo(290, 226);
  ctx.lineTo(309, 230);
  ctx.lineTo(309, 244);
  ctx.lineTo(290, 240);
  ctx.lineTo(270, 237);
  ctx.lineTo(250, 237);
  ctx.lineTo(230, 238);
  ctx.fill();
  ctx.fillStyle = '#3B74C5';
  ctx.beginPath();
  ctx.moveTo(194, 234);
  ctx.bezierCurveTo(210, 180, 285, 180, 305, 230);
  ctx.lineTo(290, 226);
  ctx.lineTo(270, 224);
  ctx.lineTo(250, 223);
  ctx.lineTo(240, 224);
  ctx.lineTo(220, 227);
  ctx.fill();

  //помпон
  ctx.strokeStyle = '#ff2042';
  ctx.beginPath();
  ctx.moveTo(235, 192);
  ctx.lineTo(257, 200);
  ctx.moveTo(238, 185);
  ctx.lineTo(253, 205);
  ctx.moveTo(245, 183);
  ctx.lineTo(247, 207);
  ctx.moveTo(253, 185);
  ctx.lineTo(240, 205);
  ctx.moveTo(258, 192);
  ctx.lineTo(235, 200);
  ctx.lineWidth = 3;
  ctx.stroke();

  //глаза
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.ellipse(234, 258, 15, 19, Math.PI / 4, 0, 2*Math.PI);
  ctx.fill();

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.ellipse(267, 255, 19, 15, Math.PI / 4, 0, 2*Math.PI);
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(260, 256, 2, 0, 2*Math.PI)
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(240, 257, 2, 0, 2*Math.PI)
  ctx.fill();

  //брови
  ctx.beginPath();
  ctx.moveTo(213, 243);
  ctx.lineTo(224, 230);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#513A42'
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(285, 240);
  ctx.lineTo(270, 230);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#513A42'
  ctx.stroke(); 

  //рот
  ctx.beginPath();
  ctx.moveTo(238, 283);
  ctx.bezierCurveTo(240, 282, 250, 283, 268, 281);
  ctx.moveTo(238, 283);
  ctx.lineTo(253, 295);
  ctx.bezierCurveTo(255, 292, 258, 293, 268, 281);
  ctx.fillStyle = '#312C30'
  ctx.lineWidth = 1;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(242, 284);
  ctx.bezierCurveTo(243, 283, 251, 287, 266, 282);
  ctx.moveTo(241, 284);
  ctx.lineTo(244, 287); 
  ctx.lineTo(261, 287);
  ctx.lineTo(266, 282);
  ctx.fillStyle = '#fff';
  ctx.lineWidth = 1;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(242, 284);
  ctx.lineTo(241, 285);  
  ctx.moveTo(248, 283);
  ctx.lineTo(247, 287);
  ctx.moveTo(253, 282);
  ctx.lineTo(253, 287);  
  ctx.moveTo(260, 282);
  ctx.lineTo(258, 287);  
  ctx.strokeStyle = '#312C30';
  ctx.lineWidth = 1;
  ctx.stroke();

  //контур тела
  ctx.fillStyle = '#d36e60';
  ctx.beginPath();
  ctx.moveTo(213, 295);
  ctx.lineTo(208, 300);
  ctx.lineTo(205, 304);
  ctx.lineTo(200, 314);
  ctx.lineTo(198, 320);
  ctx.lineTo(197, 327);
  ctx.lineTo(213, 327);
  ctx.lineTo(209, 345);
  ctx.lineTo(216, 347);
  ctx.lineTo(225, 348);
  ctx.lineTo(240, 350);
  ctx.lineTo(254, 351);
  ctx.lineTo(265, 350);
  ctx.lineTo(280, 348);
  ctx.lineTo(294, 345);
  ctx.lineTo(289, 330);
  ctx.lineTo(304, 330);
  ctx.lineTo(302, 320);
  ctx.lineTo(298, 310);
  ctx.lineTo(293, 300);
  ctx.lineTo(289, 293);
  ctx.lineTo(287, 295);
  ctx.lineTo(280, 300);
  ctx.lineTo(265, 306);
  ctx.lineTo(258, 308);
  ctx.lineTo(250, 309);
  ctx.lineTo(240, 307);
  ctx.lineTo(230, 305);
  ctx.lineTo(220, 300);
  ctx.lineTo(213, 295);
  ctx.lineWidth = 1;
  ctx.fill(); 

  //воротник
  ctx.fillStyle = '#ff2042';
  ctx.beginPath();
  ctx.moveTo(213, 295);
  ctx.lineTo(222, 302);
  ctx.lineTo(227, 305);
  ctx.lineTo(239, 308);
  ctx.lineTo(245, 309);
  ctx.lineTo(255, 309);
  ctx.lineTo(265, 306);
  ctx.lineTo(275, 303);
  ctx.lineTo(285, 297);
  ctx.lineTo(287, 295);
  ctx.lineTo(289, 300);
  ctx.lineTo(284, 304);
  ctx.lineTo(275, 310);
  ctx.lineTo(260, 315);
  ctx.lineTo(250, 316);
  ctx.lineTo(245, 315);
  ctx.lineTo(240, 314);
  ctx.lineTo(230, 309);
  ctx.lineTo(225, 305);
  ctx.fill();

  //детали тела
  ctx.beginPath();
  ctx.moveTo(213, 327);
  ctx.lineTo(215, 318);
  ctx.moveTo(289, 330);
  ctx.lineTo(287, 319);
  ctx.moveTo(251, 351);
  ctx.lineTo(252, 309);
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = '#513A42';
  ctx.beginPath();
  ctx.arc(247, 318, 1.5, 0, 2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(247, 330, 1.5, 0, 2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(246, 342, 1.5, 0, 2*Math.PI);
  ctx.fill();

  //руки
  ctx.fillStyle = '#ff2042';
  ctx.beginPath();
  ctx.arc(205, 333, 10, 0, 2*Math.PI)
  ctx.fill();

  ctx.fillStyle = '#ff2042';
  ctx.beginPath();
  ctx.arc(296, 336, 10, 0, 2*Math.PI)
  ctx.fill();

  ctx.fillStyle = '#ff2042';
  ctx.beginPath();
  ctx.arc(288, 333, 4, 0, 2*Math.PI)
  ctx.fill();
  ctx.strokeWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#ff2042';
  ctx.beginPath();
  ctx.arc(213, 332, 4, 0, 2*Math.PI)
  ctx.fill();
  ctx.strokeWidth = 1;
  ctx.stroke();

  //ноги
  ctx.fillStyle = '#3971c6';
  ctx.beginPath();
  ctx.moveTo(213, 346);
  ctx.lineTo(213, 358);
  ctx.lineTo(225, 356);
  ctx.lineTo(235, 356);
  ctx.lineTo(245, 357);
  ctx.lineTo(252, 359);
  ctx.lineTo(260, 357);
  ctx.lineTo(275, 357);
  ctx.lineTo(285, 358);
  ctx.lineTo(293, 359);
  ctx.lineTo(293, 345);
  ctx.lineTo(275, 348);
  ctx.lineTo(265, 350);
  ctx.lineTo(255, 351);
  ctx.lineTo(235, 349);
  ctx.fill();

  //ботинки
  ctx.fillStyle = '#321c21';
  ctx.beginPath();
  ctx.moveTo(206, 361);
  ctx.lineTo(213, 358);
  ctx.lineTo(225, 355);
  ctx.lineTo(240, 355);
  ctx.lineTo(253, 359);
  ctx.lineTo(264, 356);
  ctx.lineTo(275, 356);
  ctx.lineTo(285, 357);
  ctx.lineTo(295, 360);
  ctx.lineTo(301, 362);
  ctx.fill();

  ///////////// 2 character /////////////

  //голова
  ctx.fillStyle='#ffebc0';
  ctx.beginPath();
  ctx.arc(390, 250, 58, 0, 2*Math.PI);
  ctx.fill();

  //шапка

  ctx.fillStyle = '#4dc73c';
  ctx.beginPath();
  ctx.moveTo(330, 222);
  ctx.lineTo(330, 188);
  ctx.lineTo(334, 180);
  ctx.lineTo(338, 178);
  ctx.lineTo(440, 178);
  ctx.lineTo(443, 181);
  ctx.lineTo(448, 188);
  ctx.lineTo(448, 225);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#4dc73c';
  ctx.beginPath();
  ctx.ellipse(330, 240, 10, 34, 15*Math.PI/180, 0, 2*Math.PI);
  ctx.fill();

  ctx.fillStyle = '#4dc73c';
  ctx.beginPath();
  ctx.ellipse(445, 240, 10, 34,165*Math.PI/180, 0, 2*Math.PI);
  ctx.fill();

  ctx.fillStyle = '#00ad52';
  ctx.beginPath();
  ctx.fillRect(338, 199, 100, 30);

  ctx.beginPath();
  ctx.moveTo(330, 215);
  ctx.lineTo(333, 214);
  ctx.lineTo(338, 216);
  ctx.strokeWidth = 1;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(448, 218);
  ctx.lineTo(443, 216);
  ctx.lineTo(438, 217);
  ctx.strokeWidth = 1;
  ctx.stroke();

  //лицо

  //рот
  ctx.beginPath();
  ctx.moveTo(375, 275);
  ctx.bezierCurveTo(383, 275, 395, 274, 410, 273);
  ctx.moveTo(375, 275);
  ctx.lineTo(390, 290);
  ctx.bezierCurveTo(391, 289, 397, 287, 410, 273);
  ctx.fillStyle = '#312C30'
  ctx.lineWidth = 1;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(378, 277);
  ctx.bezierCurveTo(383, 277, 395, 276, 407, 275);
  ctx.moveTo(378, 277);
  ctx.lineTo(383, 280);    
  ctx.lineTo(402, 279);
  ctx.lineTo(407, 275);
  ctx.fillStyle = '#fff';
  ctx.lineWidth = 1;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(385, 276);
  ctx.lineTo(384, 281);  
  ctx.moveTo(392, 276);
  ctx.lineTo(392, 281);
  ctx.moveTo(400, 275);
  ctx.lineTo(398, 281);    
  ctx.strokeStyle = '#312C30';
  ctx.lineWidth = 1;
  ctx.stroke();

  //глаза
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.ellipse(374, 248, 15, 19, Math.PI / 4, 0, 2*Math.PI);
  ctx.fill();

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.ellipse(407, 245, 19, 15, Math.PI / 4, 0, 2*Math.PI);
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(379, 248, 2, 0, 2*Math.PI)
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(398, 248, 2, 0, 2*Math.PI)
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(357, 230);
  ctx.lineTo(374, 220);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#424642'
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(423, 230);
  ctx.lineTo(406, 222);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#424642'
  ctx.stroke();

  //контур тела
  ctx.fillStyle = '#ff6218';
  ctx.beginPath();
  ctx.moveTo(348, 290);
  ctx.lineTo(338, 305);
  ctx.lineTo(336, 309);
  ctx.lineTo(334, 319);
  ctx.lineTo(332, 325);
  ctx.lineTo(331, 332);
  ctx.lineTo(343, 332);
  ctx.lineTo(339, 340);
  ctx.lineTo(346, 342);
  ctx.lineTo(355, 344);
  ctx.lineTo(370, 346);
  ctx.lineTo(384, 347);
  ctx.lineTo(395, 347);
  ctx.lineTo(410, 347);
  ctx.lineTo(414, 347);
  ctx.lineTo(428, 346);
  ctx.lineTo(429, 345);
  ctx.lineTo(429, 330);
  ctx.lineTo(445, 334);
  ctx.lineTo(440, 315);
  ctx.lineTo(436, 305);
  ctx.lineTo(429, 290);
  ctx.lineTo(417, 301);
  ctx.lineTo(410, 305);
  ctx.lineTo(395, 308);
  ctx.lineTo(388, 309);
  ctx.lineTo(380, 308);
  ctx.lineTo(370, 304);
  ctx.lineTo(360, 300);
  ctx.lineTo(355, 296);
  ctx.lineTo(349, 290);
  ctx.fill();

  //воротник
  ctx.fillStyle = '#00ae52';
  ctx.beginPath();
  ctx.moveTo(348, 290);
  ctx.lineTo(356, 294);
  ctx.lineTo(357, 295);
  ctx.lineTo(369, 300);
  ctx.lineTo(375, 302);
  ctx.lineTo(385, 304);
  ctx.lineTo(395, 303);
  ctx.lineTo(405, 300);
  ctx.lineTo(430, 290);
  ctx.lineTo(430, 292);
  ctx.lineTo(419, 300);
  ctx.lineTo(414, 303);
  ctx.lineTo(405, 307);
  ctx.lineTo(390, 310);
  ctx.lineTo(380, 308);
  ctx.lineTo(375, 307);
  ctx.lineTo(370, 304);
  ctx.lineTo(360, 301);
  ctx.lineTo(355, 296);
  ctx.fill();

  //детали тела
  ctx.beginPath();
  ctx.moveTo(347, 327);
  ctx.lineTo(350, 315);
  ctx.moveTo(428, 330);
  ctx.lineTo(426, 314);
  ctx.moveTo(390, 347);
  ctx.lineTo(390, 309);
  ctx.moveTo(362, 334);
  ctx.lineTo(362, 314);
  ctx.lineTo(379, 314);
  ctx.lineTo(379, 334);
  ctx.closePath();
  ctx.lineWidth = 1.2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(362, 314);
  ctx.lineTo(371, 323);
  ctx.lineTo(378, 314);
  ctx.lineTo(372, 314);
  ctx.closePath();
  ctx.strokeWidth = 1;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(400, 314);
  ctx.lineTo(416, 314);
  ctx.lineTo(416, 333);
  ctx.lineTo(400, 333);
  ctx.closePath();
  ctx.strokeWidth = 1;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(400, 314);
  ctx.lineTo(408, 322);
  ctx.lineTo(416, 314);
  ctx.closePath();
  ctx.strokeWidth = 1;
  ctx.stroke();

  //руки
  ctx.fillStyle = '#4fc43f';
  ctx.beginPath();
  ctx.arc(436, 336, 10, 0, 2*Math.PI)
  ctx.fill();

  ctx.fillStyle = '#4fc43f';
  ctx.beginPath();
  ctx.arc(339, 333, 10, 0, 2*Math.PI)
  ctx.fill();

  ctx.fillStyle = '#4fc43f';
  ctx.beginPath();
  ctx.arc(346, 330, 4, 0, 2*Math.PI)
  ctx.fill();
  ctx.strokeWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#4fc43f';
  ctx.beginPath();
  ctx.arc(429, 333, 4, 0, 2*Math.PI)
  ctx.fill();
  ctx.strokeWidth = 1;
  ctx.stroke();

  //ноги
  ctx.fillStyle = '#21827b';
  ctx.beginPath();
  ctx.moveTo(350, 343);
  ctx.lineTo(350, 356);
  ctx.lineTo(360, 356);
  ctx.lineTo(370, 355);
  ctx.lineTo(380, 355);
  ctx.lineTo(390, 354);
  ctx.lineTo(400, 355);
  ctx.lineTo(420, 357);
  ctx.lineTo(427, 358);
  ctx.lineTo(427, 345);
  ctx.lineTo(420, 346);
  ctx.lineTo(410, 347);
  ctx.lineTo(400, 347);
  ctx.lineTo(390, 347);
  ctx.lineTo(370, 345);
  ctx.fill();

  //ботинки
  ctx.fillStyle = '#321c21';
  ctx.beginPath();
  ctx.moveTo(346, 358);
  ctx.lineTo(434, 359);
  ctx.lineTo(428, 357);
  ctx.lineTo(418, 356);
  ctx.lineTo(408, 354);
  ctx.lineTo(396, 354);
  ctx.lineTo(383, 354);
  ctx.lineTo(373, 354);
  ctx.lineTo(363, 355);
  ctx.lineTo(353, 356);
  ctx.fill();
} 