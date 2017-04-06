'use strict';

var setup = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = setup.querySelector('.setup-similar-list');


var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECONDNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: (getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SECONDNAMES)),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  },
  {
    name: (getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SECONDNAMES)),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  },
  {
    name: (getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SECONDNAMES)),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  },
  {
    name: (getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SECONDNAMES)),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  }
];

// функция рендера DOM элемента
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// функция вставки DOM элемента

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

// объявление и вызов функции удаления класса элемента
function removeClass(element, classRemove) {
  element.classList.remove(classRemove);
}
removeClass(setup, 'hidden');
removeClass(document.querySelector('.setup-similar'), 'hidden');

// объявление функции генерации случайных данных
function getRandomElement(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
