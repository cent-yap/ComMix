
window.onload = () => {
  const tab_switchers = document.querySelectorAll('[data-switcher]');

  for (let i = 0; i < tab_switchers.length; i++) {
      const tab_switcher = tab_switchers[i];
      const page_id = tab_switcher.dataset.tab;

      tab_switcher.addEventListener('click', () => {
          document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
          tab_switcher.parentNode.classList.add('is-active');

          SwitchPage(page_id);
      });
  }
}

function SwitchPage (page_id) {
  console.log(page_id);

  const current_page = document.querySelector('.pages .page.is-active');
  current_page.classList.remove('is-active');

  const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
  next_page.classList.add('is-active');
}
  
  $(document).ready(function() {
    $('.next').click(function() {
      var $active = $('.tabs').find('.tab.is-active');
      var $next = $active.next('.tab');
      if ($next.length) {
        $active.removeClass('is-active');
        $next.addClass('is-active');
      } else {
        $active.removeClass('is-active');
        $('.tabs .tab').eq(0).addClass('is-active'); // Go to first tab
      }
      var nextPageId = $('.tabs .tab.is-active').find('a[data-switcher]').data('tab');
      SwitchPage(nextPageId);
    });
  
    $('.prev').click(function() {
      var $active = $('.tabs').find('.tab.is-active');
      var $prev = $active.prev('.tab');
      if ($prev.length) {
        $active.removeClass('is-active');
        $prev.addClass('is-active');
      } else {
        $active.removeClass('is-active');
        $('.tabs .tab').eq(2).addClass('is-active'); // Go to last tab
      }
      var prevPageId = $('.tabs .tab.is-active').find('a[data-switcher]').data('tab');
      SwitchPage(prevPageId);
    });
  });
