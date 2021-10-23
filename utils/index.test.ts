import { appendOrdinalSuffix } from '.';

describe('index', () => {
  describe('convertToPositional', () => {
    it('should return the number with its correct ordinal suffix', () => {
      expect(appendOrdinalSuffix(0)).toEqual('0th');
      expect(appendOrdinalSuffix(1)).toEqual('1st');
      expect(appendOrdinalSuffix(2)).toEqual('2nd');
      expect(appendOrdinalSuffix(3)).toEqual('3rd');
      expect(appendOrdinalSuffix(4)).toEqual('4th');
      expect(appendOrdinalSuffix(11)).toEqual('11th');
      expect(appendOrdinalSuffix(12)).toEqual('12th');
      expect(appendOrdinalSuffix(13)).toEqual('13th');
      expect(appendOrdinalSuffix(21)).toEqual('21st');
      expect(appendOrdinalSuffix(101)).toEqual('101st');
      expect(appendOrdinalSuffix(102)).toEqual('102nd');
      expect(appendOrdinalSuffix(103)).toEqual('103rd');
      expect(appendOrdinalSuffix(111)).toEqual('111th');
      expect(appendOrdinalSuffix(112)).toEqual('112th');
      expect(appendOrdinalSuffix(113)).toEqual('113th');
    });
  });
});
