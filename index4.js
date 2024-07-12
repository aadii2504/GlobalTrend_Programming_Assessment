function areAnagrams(str1, str2) {
    const formatStr = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return formatStr(str1) === formatStr(str2);
  }

  console.log(areAnagrams("listen", "silent"));