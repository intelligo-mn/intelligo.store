(function(Prism) {
  Prism.languages.prisma = {
    keyword: /\b(?:datasource|generator|model|enum)\b/,
    builtin: /\b(?:String|Int|Boolean|DateTime)\b/
  };
})(Prism);
