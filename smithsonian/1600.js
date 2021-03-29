
var images = {
  1: "assets/1600_1",
  2: "assets/1600_2",
  3: "assets/1600_3",
  4: "assets/1600_4",
  5: "assets/1600_5",
  6: "assets/1600_6",
  7: "assets/1600_7",
  8: "assets/1600_8",
  9: "assets/1600_9",
  10: "assets/1600_10",
  11: "assets/1600_11",
  12: "assets/1600_12",
  13: "assets/1600_13",
  14: "assets/1600_14",
  15: "assets/1600_15",
  16: "assets/1600_16",
  17: "assets/1600_17",
  18: "assets/1600_18",
  19: "assets/1600_19",
  20: "assets/1600_29",
  21: "assets/1600_21",
  22: "assets/1600_22",
  23: "assets/1600_23",
  24: "assets/1600_24",
  25: "assets/1600_25",
  26: "assets/1600_26",
  27: "assets/1600_27",
  28: "assets/1600_28",
};

var links = {
  1: "https://www.si.edu/object/cushion-cover%3Achndm_1944-91-9",
  2: "https://www.si.edu/object/fragment%3Achndm_1971-50-59",
  3: "https://www.si.edu/object/panels-bag%3Achndm_1902-1-496-a_b",
  4: "https://www.si.edu/object/carpet-fragment%3Achndm_1969-62-12-b",
  5: "https://www.si.edu/object/fragment-rank-badge%3Achndm_1902-1-506-b",
  6: "https://www.si.edu/object/mantle%3Achndm_1902-1-783",
  7: "https://www.si.edu/object/fragment%3Achndm_1943-43-95",
  8: "https://www.si.edu/object/purse%3Achndm_1962-55-9",
  9: "https://www.si.edu/object/purse%3Achndm_1962-55-8",
  10: "https://www.si.edu/object/rank-badge-buzi%3Achndm_1902-1-433",
  11: "https://www.si.edu/object/cushion-cover%3Achndm_1926-22-318",
  12: "https://www.si.edu/object/purse%3Achndm_1959-170-6",
  13: "https://www.si.edu/object/pillow-cover%3Achndm_1972-2-3",
  14: "https://www.si.edu/object/cushion-cover%3Achndm_a-t-18",
  15: "https://www.si.edu/object/carpet-fragment%3Achndm_1969-62-12-a",
  16: "https://www.si.edu/object/carpet-fragment%3Achndm_1955-96-1",
  17: "https://www.si.edu/object/carpet%3Achndm_1959-13-2-b",
  18: "https://www.si.edu/object/carpet-fragments%3Achndm_1959-13-1-a_c",
  19: "https://www.si.edu/object/carpet-fragment%3Achndm_1955-162-1",
  20: "https://www.si.edu/object/tapestries-ko-ssu%3Afsg_F1918.48a-h",
  21: "https://www.si.edu/object/tapestry-bowl-two-jars-flowers-and-fruit%3Afsg_F1916.549",
  22: "https://www.si.edu/object/tapestry-daoist-female-immortal-and-attendant-under-pine%3Afsg_F1917.198",
  23: "https://www.si.edu/object/tapestry-fruit-trees-and-hollyhocks%3Afsg_F1916.542",
  24: "https://www.si.edu/object/tapestry-landscape-palace-among-mountains%3Afsg_F1917.119",
  25: "https://www.si.edu/object/tapestry-birds-peach-tree-rocks-and-flowers-blue-ground%3Afsg_F1916.71",
  26: "https://www.si.edu/object/phoenix-among-rocks-and-flowers%3Afsg_F1911.163s",
  27: "https://www.si.edu/object/tapestry-peony-and-butterfly%3Afsg_F1916.571a",
  28: "https://www.si.edu/object/tapestry-peonies%3Afsg_F1916.571j",
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




