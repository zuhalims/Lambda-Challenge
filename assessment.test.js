const {
  helloWorld,
  lambdaSchool,
} = require('./assessment'); 

describe('Lambda School Precourse Assessment', () => {
  describe('helloWorld', () => {
    it('should return a string', () => {
      expect(typeof helloWorld()).toBe('string');
    });
    it('should return the string \'Hello World!\'', () => {
      expect(helloWorld()).toBe('Hello World!');
    });
  }); 
  describe('lambdaSchool', () => {
    it('should return \'Lambda\' for a number divisible by 3', () => {
      expect(lambdaSchool(12)).toBe('Lambda');
      expect(lambdaSchool(63)).toBe('Lambda');
      expect(lambdaSchool(999)).toBe('Lambda');
    });
    it('should return \'School\' for a number divisible by 5', () => {
      expect(lambdaSchool(10)).toBe('School');
      expect(lambdaSchool(155)).toBe('School');
      expect(lambdaSchool(1000)).toBe('School');
    });
    it('should return \'Lambda School\' for a number divisible by 3 and 5', () => {
      expect(lambdaSchool(15)).toBe('Lambda School');
      expect(lambdaSchool(30)).toBe('Lambda School');
      expect(lambdaSchool(180)).toBe('Lambda School');
    });
  }); 
});

