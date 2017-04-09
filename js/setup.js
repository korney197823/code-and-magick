'use strict';

var setup = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = document.querySelector('.setup-close');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = setup.querySelector('.setup-similar-list');


var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECONDNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

// Функции открытия и закрытия диалога настроек персонажа
setupOpenButton.addEventListener('click', function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      setup.classList.add('hidden');
    }
  });
});

setupOpenButton.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    setup.classList.remove('hidden');
  }
});

setupCloseButton.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupCloseButton.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    setup.classList.add('hidden');
  }
});

document.querySelector('.setup-similar').classList.remove('hidden');

// объявление функции генерации случайных данных
function getRandomElement(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

// Функция изменения цвета мантии по нажатию
var wizardCoat = document.querySelector('.wizard-coat');
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElement(COAT_COLORS);
});

// Функция изменения цвета глаз по нажатию
var wizardEyes = document.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElement(EYES_COLORS);
});

// Функция изменения цвета файрбола
var fireball = document.querySelector('.setup-fireball-wrap');
fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = getRandomElement(FIREBALL_COLORS);
});
