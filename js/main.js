$(window).on("scroll", function(e) {
    if ($(window).scrollTop() > 45) {
        $(".logo").addClass("min");
    } else {
         $(".logo").removeClass("min");
    }
})

document.addEventListener('DOMContentLoaded', function() {
var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  events: [
    {
      title  : '',
      className: 'feirense futebol',
      start  : '2022-08-15'
    },
    {
      title  : '',
      className: 'mafra andebol',
      start  : '2022-08-20'
    },
    {
      title  : '',
      className: 'braga beach',
      start    : '2022-08-26'
    }
  ]
});
calendar.render();
});
