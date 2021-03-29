
var images = {
  1: "assets/1800_1",
  2: "assets/1800_2",
  3: "assets/1800_3",
  4: "assets/1800_4",
  5: "assets/1800_5",
  6: "assets/1800_6",
  7: "assets/1800_7",
  8: "assets/1800_8",
  9: "assets/1800_9",
  10: "assets/1800_10",
  11: "assets/1800_11",
  12: "assets/1800_12",
  13: "assets/1800_13",
  14: "assets/1800_14",
  15: "assets/1800_15",
  16: "assets/1800_16",
  17: "assets/1800_17",
  18: "assets/1800_18",
  19: "assets/1800_19",
  20: "assets/1800_29",
  21: "assets/1800_21",
  22: "assets/1800_22",
  23: "assets/1800_23",
  24: "assets/1800_24",
  25: "assets/1800_25",
  26: "assets/1800_26",
  27: "assets/1800_27",
  28: "assets/1800_28",
};

var links = {
	1: 'https://www.si.edu/object/carpet-fragment%3Achndm_1967-5-1-a',
	2: 'https://www.si.edu/object/carpet-fragment%3Achndm_1958-53-1',
	3: 'https://www.si.edu/object/design-rug-or-tapestry%3Achndm_1954-7-47',
	4: 'https://www.si.edu/object/carpet-fragment%3Achndm_1968-135-149-b',
	5: 'https://www.si.edu/object/shawl-fragment%3Achndm_1953-90-1',
	6: 'https://www.si.edu/object/carpet-fragment%3Achndm_1966-39-1',
	7: 'https://www.si.edu/object/carpet%3Achndm_1977-82-2',
	8: 'https://www.si.edu/object/carpet-fragment%3Achndm_1967-20-25',
	9: 'https://www.si.edu/object/carpet-fragment%3Achndm_1970-23-1',
	10: 'https://www.si.edu/object/carpet-fragment%3Achndm_1958-53-2-a',
	11: 'https://www.si.edu/object/carpet-fragment%3Achndm_1956-42-74',
	12: 'https://www.si.edu/object/carpet%3Achndm_1968-135-86',
	13: 'https://www.si.edu/object/carpet-fragment%3Achndm_1975-13-1',
	14: 'https://www.si.edu/object/carpet%3Achndm_1957-132-1-a',
	15: 'https://www.si.edu/object/floor-cloth-fragment%3Achndm_1959-139-1',
	16: 'https://www.si.edu/object/carpet-fragment%3Achndm_1956-42-72-a',
	17: 'https://www.si.edu/object/shawl-fragment%3Achndm_1941-80-4',
	18: 'https://www.si.edu/object/carpet-fragment%3Achndm_1958-53-3',
	19: 'https://www.si.edu/object/panel%3Achndm_1903-9-18',
	20: 'https://www.si.edu/object/panel-five-dragons-flaming-pearls-clouds-and-floral-patterns%3Afsg_F1909.396',
	21: 'https://www.si.edu/object/carpet-fragment%3Achndm_1968-135-87-a',
	22: 'https://www.si.edu/object/shawl%3Achndm_1980-38-3',
	23: 'https://www.si.edu/object/kelim-tapestry-poncho-fringe%3Anmnhanthropology_8013093',
	24: '',
	25: 'https://www.si.edu/object/carpet-fragment%3Achndm_1950-48-1',
	26: '',
	27: 'https://www.si.edu/object/carpet%3Achndm_1951-15-1',
	28: '',
}


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




