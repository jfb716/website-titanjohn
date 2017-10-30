$(document).ready(function(){

  $('button').click(function(){

    bidReq = parseInt($('#bidRequests').val());
    matchRate = parseFloat($('#matchRate').val());
    viewability = parseFloat($('#viewability').val());
    clickRate = parseInt($('#ctr').val());
    format = parseFloat($('#format').val());
    priceFloor = parseFloat($('#priceFloor').val());
    directSold = parseFloat($('#directSold').val());
    var cpm1;

    console.log("Bid Requests: " + bidReq);
    console.log("Match Rate: " + matchRate);
    console.log("Viewability: " + viewability);
    console.log("CTR: " + clickRate);
    console.log("Format: " + format);
    console.log("Price Floor: " + priceFloor);
    console.log("Direct Sold: " + directSold);

    switch (clickRate) {
      case 1:
        cpm1 = 1.25;
        break;
      case 2:
        cpm1 = 1.50;
        break;
      case 3:
        cpm1 = 1.75;
        break;
      case 4:
        cpm1 = 2.00;
        break;
      case 5:
        cpm1 = 2.25;
        break;
      case 6:
        cpm1 = 2.50;
        break;
      case 7:
        cpm1 = 2.75;
        break;
      case 8:
        cpm1 = 3.00;
        break;
      case 9:
        cpm1 = 3.25;
        break;
      case 10:
        cpm1 = 3.50;
        break;
      case 11:
        cpm1 = 3.75;
        break;
      case 12:
        cpm1 = 4.00;
        break;
      case 13:
        cpm1 = 4.25;
        break;
      case 14:
        cpm1 = 4.50;
        break;
      case 15:
        cpm1 = 4.75;
        break;
    };

    //CPM Calculation
    cpm2 = cpm1 * viewability;
    finalCpm = cpm2 * format;
    console.log("CPM: " + finalCpm);
    $(".cpmPill").text("$" + finalCpm.toFixed(2));

    //Available Requests Calculation
    availableRequests = (bidReq * (1 - directSold)) * matchRate;
    console.log("Available Requests: " + availableRequests.toFixed());
    availReq = Number(availableRequests.toFixed()).toLocaleString('en', {minimumFractionDigits: 0});
    $(".reqPill").text(availReq);

    //Competitiveness Score
    var compScore;

      switch (format = '0.5') {
        case (finalCpm < .5):
          compScore = .1;
          break;
        case (finalCpm >= .5 && finalCpm < .75):
          compScore = .3;
          break;
        case (finalCpm >= .75 && finalCpm < 1):
          compScore = .5;
          break;
        case (finalCpm >= 1 && finalCpm < 1.25):
          compScore = .7;
          break;
        case (finalCpm >= 1.25 && finalCpm < 1.5):
          compScore = .8;
          break;
        case (finalCpm >= 1.5 && finalCpm < 1.75):
          compScore = .9;
          break;
        case (finalCpm >= 1.75 && finalCpm < 2):
          compScore = 1;
          break;
      }

    console.log("Competitiveness: " + compScore);


  });

});
