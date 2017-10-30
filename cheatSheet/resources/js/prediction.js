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
    finalCpm = (cpm2 * format);
    console.log("CPM: " + finalCpm);
    $(".cpmPill").text("$" + finalCpm.toFixed(2));

    //Available Requests Calculation
    availableRequests = (bidReq * (1 - directSold)) * matchRate;
    console.log("Available Requests: " + availableRequests.toFixed());
    availReq = Number(availableRequests.toFixed()).toLocaleString('en', {minimumFractionDigits: 0});
    $(".reqPill").text(availReq);

    //Competitiveness Score
    var compScore;

    if (format === .5) {
      switch (true) {
        case (finalCpm < .5):
          compScore = .1;
          break;
        case (finalCpm >= .5 && finalCpm < .75):
          compScore = .2;
          break;
        case (finalCpm >= .75 && finalCpm < 1):
          compScore = .25;
          break;
        case (finalCpm >= 1 && finalCpm < 1.25):
          compScore = .3;
          break;
        case (finalCpm >= 1.25 && finalCpm < 1.5):
          compScore = .4;
          break;
        case (finalCpm >= 1.5 && finalCpm < 1.75):
          compScore = .5;
          break;
        case (finalCpm >= 1.75 && finalCpm < 2):
          compScore = .6;
          break;
      }
    } else if (format === 1) {
      switch (true) {
        case (finalCpm < .5):
          compScore = .1;
          break;
        case (finalCpm >= .5 && finalCpm < .75):
          compScore = .15;
          break;
        case (finalCpm >= .75 && finalCpm < 1):
          compScore = .2;
          break;
        case (finalCpm >= 1 && finalCpm < 1.25):
          compScore = .25;
          break;
        case (finalCpm >= 1.25 && finalCpm < 1.5):
          compScore = .3;
          break;
        case (finalCpm >= 1.5 && finalCpm < 1.75):
          compScore = .35;
          break;
        case (finalCpm >= 1.75 && finalCpm < 2):
          compScore = .4;
          break;
        case (finalCpm >= 2 && finalCpm < 2.25):
          compScore = .5;
          break;
        case (finalCpm >= 2.25 && finalCpm < 2.50):
          compScore = .55;
          break;
        case (finalCpm >= 2.50 && finalCpm < 2.75):
          compScore = .60;
          break;
        case (finalCpm >= 2.75 && finalCpm < 3.00):
          compScore = .65;
          break;
        case (finalCpm >= 3.25 && finalCpm < 3.50):
          compScore = .70;
          break;
        case (finalCpm >= 3.50 && finalCpm < 3.75):
          compScore = .75;
          break;
        case (finalCpm >= 3.75 && finalCpm < 4.00):
          compScore = .80;
          break;
        case (finalCpm >= 4.00 && finalCpm < 4.25):
          compScore = .85;
          break;
          case (finalCpm >= 4.25 && finalCpm < 4.50):
            compScore = .9;
            break;
      }
    }

    console.log("Competitiveness: " + compScore);

    //Win Rate Calculation
    predWins = availableRequests * compScore;
    winPerc = (predWins / bidReq) * 100;
    console.log("Win Rate: " + winPerc);
    $(".winPill").text(winPerc.toFixed() + "%");

    //Daily Revenue Calculation
    dailyRev1 = (predWins * finalCpm)/1000;
    dailyRev = dailyRev1.toFixed();
    console.log("Daily Revenue: " + dailyRev);
    $(".revPill").text("$" + dailyRev);

    //Onboard Calculation
    var onboardPub;
    if (dailyRev >= 1000) {
      onboardPub = "YES";
      $(".onPill").removeClass("badge-danger");
      $(".onPill").addClass("badge-success");
    } else {
      onboardPub = "NO";
      $(".onPill").removeClass("badge-success");
      $(".onPill").addClass("badge-danger");
    }
    console.log("Onboard Pub: " + onboardPub);
    $(".onPill").text(onboardPub);
  });

});
