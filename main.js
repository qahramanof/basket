$(document).ready(function() {
    function updateBasketCount() {
      var basketCount = localStorage.getItem('basketCount') || 0;
      $('#sepetcount').text(basketCount);
    }
    
    $('.sepeteEkle').click(function() {
      var basketCount = localStorage.getItem('basketCount') || 0;
      basketCount++;
      localStorage.setItem('basketCount', basketCount);
      updateBasketCount();
    });
    
    updateBasketCount();
  });
  