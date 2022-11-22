function tryDecode(str: string, decode: any) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

export function parseContextCookie(str: string, options?: any) {
  var pairSplitRegExp = /; */;
  var decode = decodeURIComponent;
  var obj: any = {};
  var opt = options || {};
  var pairs = str?.split(pairSplitRegExp) ?? [];
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf("=");

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}
