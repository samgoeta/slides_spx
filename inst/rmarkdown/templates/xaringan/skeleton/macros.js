remark.macros.largeur = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};
remark.macros.hauteur = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="height: ' + percentage + '" />';
};
