
 function displayContent() {

            for (var i = 0; i < nameData.length; i++) {

             //document.write("" + nameData[i] + " ," + gradeData[i] + "<br>");

               if (gradeData[i] >= 90) {

                    document.write( "" + nameData[i] + "A");
                }
                else if (gradeData[i]>= 80) {

                    document.write("" + nameData[i] + "B");
                }
                else if (gradeData[i]>= 70) {
                    document.write("" + nameData[i] + "C");
                }
                else if (gradeData[i]>= 60) {
                    document.write("" + nameData[i] + "D");
                }
                else {
                    document.write("" + nameData[i] + "F");
                }

            }

            }
