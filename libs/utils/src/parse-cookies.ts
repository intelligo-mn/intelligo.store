function tryDecode(str: string, decode: any) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

export function parseContextCookie(str: string, options?: any) {
  const pairSplitRegExp = /; */;
  const decode = decodeURIComponent;
  const obj: any = {};
  const opt = options || {};
  const pairs = str?.split(pairSplitRegExp) ?? [];
  const dec = opt.decode || decode;

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    let eq_idx = pair.indexOf("=");

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    const key = pair.substr(0, eq_idx).trim();
    let val = pair.substr(++eq_idx, pair.length).trim();

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
