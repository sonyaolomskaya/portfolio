
var images = {
  1: "assets/1900_1",
  2: "assets/1900_2",
  3: "assets/1900_3",
  4: "assets/1900_4",
  5: "assets/1900_5",
  6: "assets/1900_6",
  7: "assets/1900_7",
  8: "assets/1900_8",
  9: "assets/1900_9",
  10: "assets/1900_10",
  11: "assets/1900_11",
  12: "assets/1900_12",
  13: "assets/1900_13",
  14: "assets/1900_14",
  15: "assets/1900_15",
  16: "assets/1900_16",
  17: "assets/1900_17",
  18: "assets/1900_18",
  19: "assets/1900_19",
  20: "assets/1900_20",
  21: "assets/1900_21",
  22: "assets/1900_22",
  23: "assets/1900_23",
  24: "assets/1900_24",
  25: "assets/1900_25",
  26: "assets/1900_26",
  27: "assets/1900_27",
  28: "assets/1900_28",
};

var links = {
  1: "https://www.si.edu/object/blanket%3Anmnhanthropology_8941106",
  2: "https://www.si.edu/object/rug%3ANMAI_278187",
  3: "https://www.si.edu/object/cheney-brothers-silk-furnishing-fabric-1913%3Anmah_624467",
  4: "https://www.si.edu/object/shawl%3Achndm_1968-50-1",
  5: "https://www.si.edu/object/rug%3ANMAI_278161",
  6: "https://www.si.edu/object/textile%3Achndm_1952-105-75",
  7: "https://www.si.edu/object/cheney-brothers-design-furnishing-fabric-1-6-sheets-1913%3Anmah_644404",
  8: "https://www.si.edu/object/frieze%3Achndm_1979-91-369",
  9: "https://www.si.edu/object/hanging-or-portiere%3Achndm_1993-110-1",
  10: "https://www.si.edu/object/rug%3Achndm_1964-24-62",
  11: "https://www.si.edu/object/sidewall%3Achndm_1980-73-27",
  12: "https://www.si.edu/object/sidewall%3Achndm_1981-65-19",
  13: "https://www.si.edu/object/shawl%3Achndm_1954-58-2",
  14: "https://www.si.edu/object/sample-book%3Achndm_1976-74-2-1_204",
  15: "https://www.si.edu/object/carpet-fragment%3Achndm_1941-77-1-a",
  16: "https://www.si.edu/object/tapestry-birds-peach-tree-rocks-and-flowers-blue-ground%3Afsg_F1916.71",
  17: "https://www.si.edu/object/tapestry-five-sages-garden-under-pines%3Afsg_F1916.548",
  18: "https://www.si.edu/object/tapestry-flowers-rock-birds-and-butterflies%3Afsg_F1918.10",
  19: "https://www.si.edu/object/sidewall%3Achndm_1992-139-66",
  20: "https://www.si.edu/object/rod-crocus-red-crocus%3Achndm_1964-24-41",
  21: "https://www.si.edu/object/tapestry%3Achndm_1993-20-9",
  22: "https://www.si.edu/object/tapestry%3Achndm_40.2016.2",
  23: "https://www.si.edu/object/tapestry-weave-rag-jerga%3Asaam_1995.46",
  24: "https://www.si.edu/object/cheney-brothers-tapestry-furnishing-fabric-1913%3Anmah_624469",
  25: "https://www.si.edu/object/textile%3Achndm_1952-105-78",
  26: "https://www.si.edu/object/sidewall%3Achndm_1992-157-8",
  27: "https://www.si.edu/object/textile%3Achndm_1941-102-24",
  28: "https://www.si.edu/object/poncho%3Achndm_1966-60-9",
};

$(document).ready(function () {
  for (const image in images) {
    $(".background").append(
      `<div class="image"><img src="${images[image]}.png"></div>`
    );
    $(".image-container").append(
      `<div class="image"><img src="${images[image]}.gif"></div>`
    );
    $(".overlay-container").append(
      `<div class="overlay" id="${image}"><img src="${images[image]}.png"></div>`
    );
    $(`#${image}`).mouseover(function () {
      $(`#${image}`).css("opacity", 1);
    });
    $(".links-container").append(
      `<a class="period" href="${links[image]}" target="_blank"><img src="${images[image]}.png"> </a>`
    );
  }

  $(".button").click(function () {
    $(".image-container").empty();
    $(".overlay-container").empty();

    var randomNumbers = [];
    for (var i = 1; i <= 28; i++) {
      randomNumbers.push(i);
    }
    randomNumbers.sort(() => 0.5 - Math.random());

    console.log("checkgin randomNumbers", randomNumbers);

    for (i = 0; i < randomNumbers.length; i++) {
      $(".image-container").append(
        `<div class="image"><img src="${images[randomNumbers[i]]}.gif"></div>`
      );
      $(".overlay-container").append(
        `<div class="overlay" id="${randomNumbers[i]}"><img src="${
          images[randomNumbers[i]]
        }.png"></div>`
      );
      $(`#${randomNumbers[i]}`).mouseover(function () {
        $(`#${this.id}`).css("opacity", 1);
      });
    }
  });
});




