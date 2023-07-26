var daySelect = document.querySelector("#day-select");
            var monthSelect = document.querySelector("#month-select");
            var yearSelect = document.querySelector("#year-select");

            var monthsR = [" января ", " февраля ", " марта ", " апреля ", " мая ", " июня ", " июля ", " августа ", " сентября ", " октября ", " ноября ", " декабря "];

            var todayLabel = document.querySelector("#today");
            todayLabel.innerHTML = "<span>Сегодня:</span> " + new Date().getDate() + monthsR[new Date().getMonth()] + new Date().getFullYear() + " года";
            var dateDiffLabel = document.querySelector("#event-happened");

            for (let index = new Date().getFullYear(); index >= 1900; index--) {
                yearSelect.add(new Option(index, "y" + index));
            }
            updateDayCount();
            showDateDiff();

            monthSelect.onchange = function () {
                updateDayCount();
                showDateDiff();
            }
            yearSelect.onchange = function () {
                updateDayCount();
                showDateDiff();
            }
            daySelect.onchange = function () {
                showDateDiff();
            }

            function updateDayCount() {
                var dayCount = 33 - new Date(new Date().getFullYear() - yearSelect.options.selectedIndex, monthSelect.options.selectedIndex, 33).getDate();
                var selectedDayIndex = 0;
                if (daySelect.options.length > 1) {
                    selectedDayIndex = daySelect.options.selectedIndex;
                    if (selectedDayIndex > dayCount - 1) {
                        selectedDayIndex = dayCount - 1;
                    }
                }
                removeOptions(daySelect);
                for (let index = 0; index < dayCount; index++) {
                    daySelect.add(new Option(index + 1, "d" + index));
                }
                daySelect.options.selectedIndex = selectedDayIndex;
            }
            function removeOptions(selectElement) {
                var i, L = selectElement.options.length - 1;
                for (i = L; i >= 0; i--) {
                    selectElement.remove(i);
                }
            }
            function showDateDiff() {
                var timePassed = passed(daySelect.options.selectedIndex + 1,
                    monthSelect.options.selectedIndex,
                    (new Date().getFullYear() - yearSelect.options.selectedIndex),
                    new Date().getDate(), new Date().getMonth(), new Date().getFullYear());

                diffInDays = timePassed[2];
                diffInMonth = timePassed[1];
                diffInYears = timePassed[0];

                var resultString = "Событие произошло: <span>";
                if (diffInDays == 0 && diffInMonth == 0 && diffInYears == 0) {
                    dateDiffLabel.innerHTML = "Событие произошло <span>сегодня</span>";
                } else if (diffInDays < 0) {
                    dateDiffLabel.innerHTML = "Событие <span>еще не произошло</span>";
                } else {
                    if (diffInYears != 0) {
                        resultString += " " + diffInYears + " лет,";
                    }
                    if (diffInMonth != 0) {
                        resultString += " " + diffInMonth + " месяцев,";
                    }
                    if (diffInDays != 0) {
                        resultString += " " + diffInDays + " дней ";
                    }
                    resultString = resultString.substring(0, resultString.length - 1)
                    resultString += "</span> назад";
                    dateDiffLabel.innerHTML = resultString;

                }
            }

            function passed(d, m, g, dd, mm, gg) {
                var a = new Date(g, m - 1, d, 0, 0, 0, 0), b = new Date(gg, mm - 1, dd, 0, 0, 0, 0);
                for (m = 0; ; m++) {
                    g = new Date(a.getFullYear(), a.getMonth() + 2, 0);
                    g.getDate() > d && g.setDate(d);
                    if (g > b) break;
                    a = g
                }
                d = b - a;
                d = Math.round(d / 864E5);
                g = Math.floor(m / 12);
                m = m % 12;
                return [g, m, d]
            }
