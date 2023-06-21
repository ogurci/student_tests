// Функция для расчета уровня эмоционального интеллекта
		function calculateEmotionalIntelligence(event) {
		event.preventDefault()
		  // Определение шкал и соответствующих вопросов
		  const scales = {
			"Эмоциональная осведомленность": [1, 2, 4, 17, 19, 25],
			"Управление своими эмоциями": [3, 7, 8, 10, 18, 30],
			"Самомотивация": [5, 6, 13, 14, 16, 22],
			"Эмпатия": [9, 11, 20, 21, 23, 28],
			"Распознавание эмоций других людей": [12, 15, 24, 26, 27, 29]
		  };

		  // Объект для хранения результатов
		  const results = {};

		  // Проход по каждой шкале и подсчет результатов
		  for (const scale in scales) {
			const questions = scales[scale];
			let score = 0;

			// Подсчет суммарного балла для шкалы
			for (const question of questions) {
			  const answer = parseInt(document.querySelector(`input[name=q${question}]:checked`).value);
			  score += answer;
			}

			// Сохранение результата для шкалы
			results[scale] = score;
		  }

		  // Расчет уровня парциального эмоционального интеллекта
		  const emotionalAwareness = results["Эмоциональная осведомленность"];
		  const emotionalManagement = results["Управление своими эмоциями"];
		  const selfMotivation = results["Самомотивация"];
		  const empathy = results["Эмпатия"];
		  const recognitionOfEmotions = results["Распознавание эмоций других людей"];

		  // Определение уровней парциального эмоционального интеллекта
		  const emotionalIntelligenceLevels = {
			"Эмоциональная осведомленность": calculatePartialIntelligenceLevel(emotionalAwareness),
			"Управление своими эмоциями": calculatePartialIntelligenceLevel(emotionalManagement),
			"Самомотивация": calculatePartialIntelligenceLevel(selfMotivation),
			"Эмпатия": calculatePartialIntelligenceLevel(empathy),
			"Распознавание эмоций других людей": calculatePartialIntelligenceLevel(recognitionOfEmotions)
		  };

		  // Расчет интегративного уровня эмоционального интеллекта
		  const integrativeLevel = emotionalAwareness + emotionalManagement + selfMotivation + empathy + recognitionOfEmotions;

		  // Определение уровня интегративного эмоционального интеллекта
		  const integrativeIntelligenceLevel = calculateIntegrativeIntelligenceLevel(integrativeLevel);

		  // Вывод результатов в консоль (можно изменить для сохранения или использования результатов)

		  console.log("Результаты шкал:");
		  console.log(results);
		  console.log("Уровни парциального эмоционального интеллекта:");
		  console.log(emotionalIntelligenceLevels);
		  console.log("Интегративный уровень эмоционального интеллекта:");
		  console.log(integrativeLevel);
		  console.log("Уровень интегративного эмоционального интеллекта:");
		  console.log(integrativeIntelligenceLevel);
		  $(document).ready(function() {
            var p = score;

            $("#send-my-url-to-django-button").click(function() {
                $.ajax({
                    url: "test",
                    method: "GET",
                    dataType: "json",
                    data: {
                        url: p,
                        csrfmiddlewaretoken: '{{ csrf_token }}'
                        },
                    success : function(json) {
                        alert("Successfully sent the URL to Django");
                    },
                    error : function(xhr,errmsg,err) {
                        alert("Could not send URL to Django. Error: " + xhr.status + ": " + xhr.responseText);
                    }
                });
            });
          }
        )



		// Функция для расчета уровня парциального эмоционального интеллекта
		function calculatePartialIntelligenceLevel(score) {
		  if (score >= 14) {
			return "Высокий";
		  } else if (score >= 8) {
			return "Средний";
		  } else {
			return "Низкий";
		  }
		}

		// Функция для расчета уровня интегративного эмоционального интеллекта
		function calculateIntegrativeIntelligenceLevel(score) {
		  if (score >= 70) {
			return "Высокий";
		  } else if (score >= 40) {
			return "Средний";
		  } else {
			return "Низкий";
		  }
		}
}