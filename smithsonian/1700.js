
var images = {
  1: "assets/1700_1",
  2: "assets/1700_2",
  3: "assets/1700_3",
  4: "assets/1700_4",
  5: "assets/1700_5",
  6: "assets/1700_6",
  7: "assets/1700_7",
  8: "assets/1700_8",
  9: "assets/1700_9",
  10: "assets/1700_10",
  11: "assets/1700_11",
  12: "assets/1700_12",
  13: "assets/1700_13",
  14: "assets/1700_14",
  15: "assets/1700_15",
  16: "assets/1700_16",
  17: "assets/1700_17",
  18: "assets/1700_18",
  19: "assets/1700_19",
  20: "assets/1700_20",
  21: "assets/1700_21",
  22: "assets/1700_22",
  23: "assets/1700_23",
  24: "assets/1700_24",
  25: "assets/1700_25",
  26: "assets/1700_26",
  27: "assets/1700_27",
  28: "assets/1700_28",
};

var links = {
  1: "https://www.si.edu/object/purse%3Achndm_1962-55-11",
  2: "https://www.si.edu/object/chairs%3Achndm_1968-33-1-a_b",
  3: "https://www.si.edu/object/shawl%3Achndm_1959-60-1-a",
  4: "https://www.si.edu/object/fragments%3Achndm_1971-50-62-a_c",
  5: "https://www.si.edu/object/band%3Achndm_1951-134-4-a",
  6: "https://www.si.edu/object/shawl%3Achndm_1940-69-1",
  7: "https://www.si.edu/object/armchair%3Achndm_1972-86-1-b",
  8: "https://www.si.edu/object/carpet-fragment%3Achndm_1955-123-10",
  9: "https://www.si.edu/object/mantle%3Achndm_1902-1-782",
  10: "https://www.si.edu/object/purse%3Achndm_1962-55-4",
  11: "https://www.si.edu/object/purse%3Achndm_1962-55-8",
  12: "https://www.si.edu/object/purse%3Achndm_1962-55-10",
  13: "https://www.si.edu/object/shawl-fragment%3Achndm_1958-148-5-b",
  14: "https://www.si.edu/object/band%3Achndm_1962-27-14",
  15: "https://www.si.edu/object/pillow-cover%3Achndm_1972-2-3",
  16: "https://www.si.edu/object/cut-velvet-hanging-tapestry%3Afsg_F1968.51",
  17: "https://www.si.edu/object/armchair%3Achndm_1970-2-2",
  18: "https://www.si.edu/object/project-tapestry-dedicated-farm-life%3Achndm_1911-28-142",
  19: "https://www.si.edu/object/textile%3Achndm_1960-1-14-c",
  20: "https://www.si.edu/object/side-chairs%3Achndm_1972-18-1-b_d",
  21: "https://www.si.edu/object/shawl%3Achndm_1924-11-18",
  22: "https://www.si.edu/object/designs-gobelins-tapestry-april-les-mois-grotesques-par-bandes%3Achndm_1911-28-1-1",
  23: "https://www.si.edu/object/kesi-tapestry-two-birds-and-flowering-tree%3Afsg_F1917.197",
  24: "https://www.si.edu/object/weft-woven-tapestry-kesi-three-star-gods-and-joy-personified-two-children%3Afsg_F1917.118",
  25: "https://www.si.edu/object/kesi-tapestry-two-birds-and-flowering-tree%3Afsg_F1917.197",
  26: "https://www.si.edu/object/carpet%3Afsg_F1912.67",
  27: "https://www.si.edu/object/textile%3Achndm_1951-111-15",
  28: "https://www.si.edu/object/purse%3Achndm_1962-55-11",
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




