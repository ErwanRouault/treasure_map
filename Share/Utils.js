function isValidPosition(map, x, y) {
  return x >= 0 && x < map.width && y >= 0 && y < map.height;
}

function isNumber(value) {
  return isNaN(value) ? value : parseInt(value);
}

module.exports = {isValidPosition, isNumber};
