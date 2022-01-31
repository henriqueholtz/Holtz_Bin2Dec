
export function ConverterToDecimal(binary) {
    const reversed = binary && binary.length > 0 && binary?.split('').reverse() || null;
    if (!reversed || !reversed.length > 0) return 0
    let dec = 0;
    
    for (let c = 0; c < reversed.length; c++) {
      if (reversed[c] === '1') {
        dec += Math.pow(2, c);
      }
    }
  
    return dec;
}

export function ConverterToBinary(decimal = 0) {
    return (decimal >>> 0).toString(2);
}

 