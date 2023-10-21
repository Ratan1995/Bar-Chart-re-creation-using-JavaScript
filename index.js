// Label variables
let separatorLabel = '–';
let bracketLabel = '{';
// Label position variables

let yMarginTop = 60;
let yMarginBottom = 60;

let age1LabelXPosition = 65;
let separatorXPosition = 81;
let age2LabelXPosition = 90;
let bracketLabelPosition = 105;

//Bracket level Y position defined
let bracketLabelYTOPposition = 54;
let bracketLabelYButtomposition = 60;

//Age Level Y position defined
let agelevelYTopposition = 75;
let agelevelYBottomposition = 60;
// Bar position
let barXposition = 120;
let barHeight = 20;

// Orange bar attribute
let orangebarYTopYposition = 81;
let orangebarYBottomposition = 60;
// Percentage level position converted into list
let blacklevelXpositions = [260, 260, 200, 180, 155, 145, 145, 135];
let blacklevelYpositions = [65, 125, 185, 244, 305, 364, 424, 484];

let orangelevelXpositions = [200, 200, 190, 190, 190, 190, 170, 150];
let orangelevelYpositions = [85, 146, 205, 265, 325, 385, 445, 505];

// Select the SVG element
let svg = document.getElementById('chart');

// JASON data set

let data = [
  {
    blackwidth: 265,
    orangewidth: 175,
    blackBarlevel: '30.1%',
    orangeBarlevel: '17.5%',
  },
  {
    age1Label: 10,
    age2Label: 20,
    blackwidth: 265,
    orangewidth: 175,
    blackBarlevel: '26.1%',
    orangeBarlevel: '17.4%',
  },
  {
    age1Label: 20,
    age2Label: 30,
    blackwidth: 175,
    orangewidth: 160,
    blackBarlevel: '17.3%',
    orangeBarlevel: '16.3%',
  },
  {
    age1Label: 30,
    age2Label: 40,
    blackwidth: 100,
    orangewidth: 140,
    blackBarlevel: '10.6%',
    orangeBarlevel: '13.8%',
  },
  {
    age1Label: 40,
    age2Label: 50,
    blackwidth: 60,
    orangewidth: 130,
    blackBarlevel: '6.8%',
    orangeBarlevel: '12.3%',
  },
  {
    age1Label: 50,
    age2Label: 60,
    blackwidth: 48,
    orangewidth: 120,
    blackBarlevel: '4.8%',
    orangeBarlevel: '10.1%',
  },
  {
    age1Label: 60,
    age2Label: 70,
    blackwidth: 40,
    orangewidth: 100,
    blackBarlevel: '2.9%',
    orangeBarlevel: '7.6%',
  },
  {
    blackwidth: 28,
    orangewidth: 60,
    blackBarlevel: '1.6%',
    orangeBarlevel: '5%',
  },
];

for (let index = 0; index < data.length; index++) {
  let item = data[index];
  let yPosition = yMarginTop + index * yMarginBottom;
  let orangeYposition =
    orangebarYTopYposition + index * orangebarYBottomposition;
  let ageYposition = agelevelYTopposition + index * agelevelYBottomposition;
  let bracketyPosition =
    bracketLabelYTOPposition + index * bracketLabelYButtomposition;

  // Create a '<g>' element to hold children
  let itemGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  //Declaration Global variable for SVG
  function createTextElement(x, y, text, className) {
    let textElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );
    textElement.setAttribute('x', x);
    textElement.setAttribute('y', y);
    textElement.setAttribute('dominant-baseline', 'hanging');
    textElement.textContent = text;
    if (className) {
      textElement.classList.add(className);
    }
    return textElement;
  }
  let age1LabelElement = createTextElement(
    age1LabelXPosition,
    ageYposition,
    item.age1Label,
    'title'
  );
  itemGroup.appendChild(age1LabelElement);
  let age2LabelElement = createTextElement(
    age2LabelXPosition,
    ageYposition,
    item.age2Label,
    'title'
  );
  itemGroup.appendChild(age2LabelElement);

  if (index === 0) {
    // For the first index, use tspan structure
    let ageTspan1 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'tspan'
    );
    ageTspan1.setAttribute('x', '63');
    ageTspan1.setAttribute('dy', '-1.5em');
    ageTspan1.textContent = 'AGES ';

    let ageTspan2 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'tspan'
    );
    ageTspan2.setAttribute('x', '50');
    ageTspan2.setAttribute('dy', '1.5em');
    ageTspan2.textContent = 'UNDER 10';
    age1LabelElement.appendChild(ageTspan1);
    age1LabelElement.appendChild(ageTspan2);
  }
  if (index === 7) {
    // For the first index, use tspan structure
    let ageTspan1 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'tspan'
    );
    ageTspan1.setAttribute('x', '63');
    ageTspan1.setAttribute('dy', '-1.5em');
    ageTspan1.textContent = '70 AND  ';

    let ageTspan2 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'tspan'
    );
    ageTspan2.setAttribute('x', '70');
    ageTspan2.setAttribute('dy', '1.5em');
    ageTspan2.textContent = 'OVER';
    age1LabelElement.appendChild(ageTspan1);
    age1LabelElement.appendChild(ageTspan2);
  }

  // Second text element
  let separatorElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'text'
  );
  if (index !== 0 && index !== 7) {
    separatorElement.setAttribute('x', separatorXPosition);
    separatorElement.setAttribute('y', ageYposition);
    separatorElement.setAttribute('dominant-baseline', 'hanging');
    separatorElement.textContent = separatorLabel;
    separatorElement.classList.add('title');
    itemGroup.appendChild(separatorElement);
  }

  // Fourth text element
  let bracketElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'text'
  );
  bracketElement.setAttribute('x', bracketLabelPosition);
  bracketElement.setAttribute('y', bracketyPosition);
  bracketElement.setAttribute('dominant-baseline', 'hanging');
  bracketElement.textContent = bracketLabel;
  bracketElement.classList.add('subtitle');
  itemGroup.appendChild(bracketElement);

  function createRectangleElement(x, y, width, height, className) {
    let rectElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'rect'
    );
    rectElement.setAttribute('x', x);
    rectElement.setAttribute('y', y);
    rectElement.setAttribute('width', width);
    rectElement.setAttribute('height', height);
    if (className) {
      rectElement.classList.add(className);
    }
    return rectElement;
  }
  let blackBar = createRectangleElement(
    barXposition,
    yPosition,
    item.blackwidth,
    barHeight,
    'rectangle'
  );
  itemGroup.appendChild(blackBar);

  let orangeBar = createRectangleElement(
    barXposition,
    orangeYposition,
    item.orangewidth,
    barHeight,
    'orange-rectangle'
  );
  itemGroup.appendChild(orangeBar);

  function createBarElement(x, y, text, className) {
    let barElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );
    barElement.setAttribute('x', x);
    barElement.setAttribute('y', y);
    barElement.setAttribute('dominant-baseline', 'hanging');
    barElement.textContent = text;
    if (className) {
      barElement.classList.add(className);
    }
    return barElement;
  }

  let blackBarElement = createBarElement(
    blacklevelXpositions[index],
    blacklevelYpositions[index],
    item.blackBarlevel,
    'percentage-label'
  );
  itemGroup.appendChild(blackBarElement);

  let orangeBarElement = createBarElement(
    orangelevelXpositions[index],
    orangelevelYpositions[index],
    item.orangeBarlevel,
    'orangelevel'
  );
  itemGroup.appendChild(orangeBarElement);

  // // Append the itemGroup to the SVG
  svg.appendChild(itemGroup);
}
