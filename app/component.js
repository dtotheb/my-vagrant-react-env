module.exports = function () {
  var element = document.createElement('h1');

  element.innerHTML = 'hello outside world';

  return element;
};
