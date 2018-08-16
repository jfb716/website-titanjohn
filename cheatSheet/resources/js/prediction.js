$(document).ready(function(){

  $('.predictionButton').click(function(){

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
        cpm1 = .50;
        break;
      case 2:
        cpm1 = .75;
        break;
      case 3:
        cpm1 = 1.25;
        break;
      case 4:
        cpm1 = 1.75;
        break;
      case 5:
        cpm1 = 2.00;
        break;
      case 6:
        cpm1 = 2.50;
        break;
      case 7:
        cpm1 = 3.00;
        break;
      case 8:
        cpm1 = 3.50;
        break;
      case 9:
        cpm1 = 3.75;
        break;
      case 10:
        cpm1 = 4.25;
        break;
      case 11:
        cpm1 = 4.75;
        break;
      case 12:
        cpm1 = 5.25;
        break;
      case 13:
        cpm1 = 5.50;
        break;
      case 14:
        cpm1 = 5.75;
        break;
      case 15:
        cpm1 = 6.00;
        break;
    };

    //CPM Calculation
    cpm2 = cpm1 * viewability;
    finalCpm = (cpm2 * format);
    console.log("CPM: " + finalCpm);
    $(".cpmPill").text("$" + finalCpm.toFixed(2));

    //Pice Floor Demand Weight
    var floorWeight;
    switch (true) {
      case (priceFloor === 0):
        floorWeight = .000001;
        break;
      case (priceFloor === .25):
        floorWeight = .1;
        break;
      case (priceFloor === .50):
        floorWeight = .2;
        break;
      case (priceFloor === .75):
        floorWeight = .3;
        break;
      case (priceFloor === 1):
        floorWeight === .4;
        break;
      case (priceFloor === 1.25):
        floorWeight = .5;
        break;
      case (priceFloor === 1.50):
        floorWeight = .6;
        break;
      case (priceFloor === 1.75):
        floorWeight = .7;
        break;
      case (priceFloor === 2):
        floorWeight = .8;
        break;
    }
    console.log("Demand Weight: " + floorWeight);

    //Available Requests Calculation
    availableRequests = ((bidReq * (1 - directSold)) * matchRate) * (1 - floorWeight);
    console.log("Available Requests: " + availableRequests.toFixed());
    availReq = Number(availableRequests.toFixed()).toLocaleString('en', {minimumFractionDigits: 0});
    $(".reqPill").text(availReq);

    //Competitiveness Score
    var compScore;

    if (format === .5) {
      switch (true) {
        case (finalCpm < .5):
          compScore = .01;
          break;
        case (finalCpm >= .5 && finalCpm < .75):
          compScore = .1;
          break;
        case (finalCpm >= .75 && finalCpm < 1):
          compScore = .15;
          break;
        case (finalCpm >= 1 && finalCpm < 1.25):
          compScore = .2;
          break;
        case (finalCpm >= 1.25 && finalCpm < 1.5):
          compScore = .25;
          break;
        case (finalCpm >= 1.5 && finalCpm < 1.75):
          compScore = .3;
          break;
        case (finalCpm >= 1.75 && finalCpm < 2):
          compScore = .4;
          break;
      }
    } else if (format === 1) {
      switch (true) {
        case (finalCpm < .5):
          compScore = .01;
          break;
        case (finalCpm >= .5 && finalCpm < .75):
          compScore = .05;
          break;
        case (finalCpm >= .75 && finalCpm < 1):
          compScore = .1;
          break;
        case (finalCpm >= 1 && finalCpm < 1.25):
          compScore = .15;
          break;
        case (finalCpm >= 1.25 && finalCpm < 1.5):
          compScore = .2;
          break;
        case (finalCpm >= 1.5 && finalCpm < 1.75):
          compScore = .25;
          break;
        case (finalCpm >= 1.75 && finalCpm < 2):
          compScore = .3;
          break;
        case (finalCpm >= 2 && finalCpm < 2.25):
          compScore = .35;
          break;
        case (finalCpm >= 2.25 && finalCpm < 2.50):
          compScore = .40;
          break;
        case (finalCpm >= 2.50 && finalCpm < 2.75):
          compScore = .45;
          break;
        case (finalCpm >= 2.75 && finalCpm < 3.00):
          compScore = .50;
          break;
        case (finalCpm >= 3.00 && finalCpm < 3.50):
          compScore = .55;
          break;
        case (finalCpm >= 3.50 && finalCpm < 3.75):
          compScore = .60;
          break;
        case (finalCpm >= 3.75 && finalCpm < 4.00):
          compScore = .65;
          break;
        case (finalCpm >= 4.00 && finalCpm < 4.25):
          compScore = .70;
          break;
        case (finalCpm >= 4.25 && finalCpm < 4.50):
          compScore = .75;
          break;
        case (finalCpm >= 4.50 && finalCpm < 5.00):
          compScore = .80;
          break;
        case (finalCpm >= 5.00 && finalCpm < 5.50):
          compScore = .85;
          break;
        case (finalCpm >= 5.50 && finalCpm < 6.76):
          compScore = .90;
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
    if (dailyRev >= 500) {
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
