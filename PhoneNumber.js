module.exports = class PhoneNumber{
  //data = Number[]
  constructor(phoneStr){
    if (this.isValid(phoneStr)){
      this.data = null;
      this.setData(phoneStr);
    }else
      throw new Error("Phone string is invalid");
  }

  isValid(phoneStr){
    let digits = phoneStr.match(/\d/g);
    if (digits.length > 11 || digits.length < 10 ||
    (digits.length == 11 && digits[0] != '1'))
      return false;
    
    return true;
  }

  setData(phoneStr){
    let digits = phoneStr.match(/\d/g);
    if (digits.length === 11 && digits[0] == '1')
      digits.splice(0, 1);

    this.data = digits;
  }

  number(){
    return this.data.join('');
  }

  areaCode(){
    return this.data.slice(0,3).join('');
  }

  exchangeCode(){
    return this.data.slice(3,6).join('');
  }

  lineNumber(){
    return this.data.slice(6,10).join('');
  }

  pretty(){
    let str = "(";
    for (let i = 0; i < 3; i++)
      str += this.data[i];
    str += ") ";
    for (let i = 3; i < 6; i++)
      str += this.data[i];
    str += "-";
    for (let i = 6; i < 10; i++)
      str += this.data[i];
    return str;
  }
}




