function convert() {
    var content = document.getElementById("content").value;

    //Ticket
    var indexOfInfra = content.indexOf("Infra Ticket Number:  ");
    var indexOfTicketNumber = indexOfInfra + 29;
    var substringTicketNumber = content.substring(indexOfInfra, indexOfTicketNumber);
    var ticketNumber = substringTicketNumber.substring(21, 29);
    document.getElementById("ticketNumber").innerHTML = ticketNumber;

    //Resolving Team
    var indexOfInfra = content.indexOf("Infra Ticket Number:  ");
    var indexOfProblemTeam = content.indexOf("Problem Team/Owner:  ");
    var lengthProblemTeamOwner = indexOfInfra - indexOfProblemTeam;
    var indexOfProblemTeamOwner = indexOfProblemTeam + lengthProblemTeamOwner;
    var substringProblemTeamOwner = content.substring(indexOfProblemTeam, indexOfProblemTeamOwner);
    var problemTeamAnswer = substringProblemTeamOwner.substring(21, lengthProblemTeamOwner);
    document.getElementById("problemTeamAnswer").innerHTML = problemTeamAnswer;

    //Start Date
    var indexOfIssueResolved = content.indexOf("Issue Resolved:  ");
    var indexOfIssueDiscovered = content.indexOf("Issue Discovered:  ");
    var lengthStartDate = indexOfIssueResolved - indexOfIssueDiscovered;
    var indexOfStartDate = indexOfIssueDiscovered + lengthStartDate;
    var substringStartDate = content.substring(indexOfIssueDiscovered, indexOfStartDate);
    var startDate = substringStartDate.substring(19, lengthStartDate);
    document.getElementById("startDate").innerHTML = startDate;

    var startCESTDay = startDate.substring(0, 2);
    var dashAfterStartCESTMonth = startDate.indexOf("-", 3);
    var startCESTMonth = startDate.substring(3, dashAfterStartCESTMonth);
    var startCESTYear = startDate.substring(dashAfterStartCESTMonth + 1, dashAfterStartCESTMonth + 5);
    var startCESTHour = startDate.substring(dashAfterStartCESTMonth + 6, dashAfterStartCESTMonth + 8);
    var startCESTMinute = startDate.substring(dashAfterStartCESTMonth + 9, dashAfterStartCESTMonth + 11);

    if (startCESTMonth == "Jan") {
        startCESTMonth = "01";
    } else if (startCESTMonth == "Feb") {
        startCESTMonth = "02";
    } else if (startCESTMonth == "Mar") {
        startCESTMonth = "03";
    } else if (startCESTMonth == "Apr") {
        startCESTMonth = "04";
    } else if (startCESTMonth == "May") {
        startCESTMonth = "05";
    } else if (startCESTMonth == "Jun") {
        startCESTMonth = "06";
    } else if (startCESTMonth == "Jul") {
        startCESTMonth = "07";
    } else if (startCESTMonth == "Aug") {
        startCESTMonth = "08";
    } else if (startCESTMonth == "Sep") {
        startCESTMonth = "09";
    } else if (startCESTMonth == "Oct") {
        startCESTMonth = "10";
    } else if (startCESTMonth == "Nov") {
        startCESTMonth = "11";
    } else if (startCESTMonth == "Dec") {
        startCESTMonth = "12";
    }
    
    var startDateFormat = new Date(startCESTMonth + "/" + startCESTDay + "/" + startCESTYear + " " + startCESTHour + ":" + startCESTMinute);
  
    //End Date
    var indexOfRootCause = content.indexOf("Root Cause:  ");
    var indexOfIssueResolved = content.indexOf("Issue Resolved:  ");
    var lengthEndDate = indexOfRootCause - indexOfIssueResolved;
    var indexOfEndDate = indexOfIssueResolved + lengthEndDate;
    var substringEndDate = content.substring(indexOfIssueResolved, indexOfEndDate);
    var endDate = substringEndDate.substring(17, lengthEndDate);
    document.getElementById("endDate").innerHTML = endDate;

    var endCESTDay = endDate.substring(0, 2);
    var dashAfterEndCESTMonth = endDate.indexOf("-", 3);
    var endCESTMonth = endDate.substring(3, dashAfterEndCESTMonth);
    var endCESTYear = endDate.substring(dashAfterEndCESTMonth + 1, dashAfterEndCESTMonth + 5);
    var endCESTHour = endDate.substring(dashAfterEndCESTMonth + 6, dashAfterEndCESTMonth + 8);
    var endCESTMinute = endDate.substring(dashAfterEndCESTMonth + 9, dashAfterEndCESTMonth + 11);

    if (endCESTMonth == "Jan") {
        endCESTMonth = "01";
    } else if (endCESTMonth == "Feb") {
        endCESTMonth = "02";
    } else if (endCESTMonth == "Mar") {
        endCESTMonth = "03";
    } else if (endCESTMonth == "Apr") {
        endCESTMonth = "04";
    } else if (endCESTMonth == "May") {
        endCESTMonth = "05";
    } else if (endCESTMonth == "Jun") {
        endCESTMonth = "06";
    } else if (endCESTMonth == "Jul") {
        endCESTMonth = "07";
    } else if (endCESTMonth == "Aug") {
        endCESTMonth = "08";
    } else if (endCESTMonth == "Sep") {
        endCESTMonth = "09";
    } else if (endCESTMonth == "Oct") {
        endCESTMonth = "10";
    } else if (endCESTMonth == "Nov") {
        endCESTMonth = "11";
    } else if (endCESTMonth == "Dec") {
        endCESTMonth = "12";
    }

    var endDateFormat = new Date(endCESTMonth + "/" + endCESTDay + "/" + endCESTYear + " " + endCESTHour + ":" + endCESTMinute);
  
    //Total Down Time
    var result = (endDateFormat - startDateFormat) / (60 * 1000);
    if (result < 59) {
        document.getElementById("totalDownTime").innerHTML = result + "min";
    } 
    else if (result > 59) {
        var hours = Math.floor(result / 60);
        var minutes = result % 60;

        if (hours > 23) {
            var days = Math.floor(hours / 24);
            hours = Math.floor(hours % 24);
            minutes = result % 60;
            document.getElementById("totalDownTime").innerHTML = days + "dni " + hours + "h " + minutes + "min";
        } 
        else {
            document.getElementById("totalDownTime").innerHTML = hours + "h " + minutes + "min";
        }
    }

    //EDT or CEST
    var timeFormat = substringStartDate.substring(37, 38);
    if (timeFormat == "E") {
        document.getElementById("table").style.color = "red";

        var dataStart = startDate.substring(0, 16);
        var dataEnd = endDate.substring(0, 16);
        
        var mydateStart = new Date(dataStart);
        mydateStart.toDateString();
        mydateStart.setHours(mydateStart.getHours() + 6);
        var mydateEnd = new Date(dataEnd);
        mydateEnd.toDateString();
        mydateEnd.setHours(mydateEnd.getHours() + 6);
       
        var hoursEDTStart = mydateStart.getHours();
        if (hoursEDTStart < 10) {
            hoursEDTStart = "0" + hoursEDTStart;
        }

        var minutesEDTStart = mydateStart.getMinutes();

        var monthEDTStart = mydateStart.getMonth() + 1;
        if (monthEDTStart < 10) {
            monthEDTStart = "0" + monthEDTStart;
        }
        var dayEDTStart = mydateStart.getDate();
        if (dayEDTStart < 10) {
            dayEDTStart = "0" + dayEDTStart;
        }
        var yearEDTStart = mydateStart.getFullYear();
        
        var hoursEDTEnd = mydateEnd.getHours();
        if (hoursEDTEnd < 10) {
            hoursEDTEnd = "0" + hoursEDTEnd;
        }

        var minutesEDTEnd = mydateEnd.getMinutes();
        if (minutesEDTEnd < 10) {
            minutesEDTEnd = "0" + minutesEDTEnd;
        }
        var dayEDTEnd = mydateEnd.getDate();
        if (dayEDTEnd < 10) {
            dayEDTEnd = "0" + dayEDTEnd;
        }
        var monthEDTEnd = mydateEnd.getMonth() + 1;
        if (monthEDTEnd < 10) {
            monthEDTEnd = "0" + monthEDTEnd;
        }
        var yearEDTEnd = mydateEnd.getFullYear();

        document.getElementById("startDate").innerHTML = dayEDTStart + "/" + monthEDTStart + "/" + yearEDTStart + " " + hoursEDTStart + ":" + startCESTMinute + " CEST";
        document.getElementById("endDate").innerHTML = dayEDTEnd + "/" + monthEDTEnd + "/" + yearEDTEnd + " " + hoursEDTEnd + ":" + endCESTMinute + " CEST";
        
    } 
    else if (timeFormat == "C") {
        document.getElementById("table").style.color = "green";
        document.getElementById("startDate").innerHTML = startCESTDay + "/" + startCESTMonth + "/" + startCESTYear + " " + startCESTHour + ":" + startCESTMinute + " CEST";
        document.getElementById("endDate").innerHTML = endCESTDay + "/" + endCESTMonth + "/" + endCESTYear + " " + endCESTHour + ":" + endCESTMinute + " CEST";
    }

}
