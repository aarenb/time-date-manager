import { Date } from '../src/Date.js'

// const testDate = new Date('2003', '07', '11')

describe('getFormatedDate', () => {
  test('dd/mm/yyyy should result in 11/07/2003', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2003')
  })

  test('dd/mm/yy should result in 11/07/03', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('dd/mm/yy')).toBe('11/07/03')
  })

  test('yyyy/mm/dd should result in 2003/07/11', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('yyyy/mm/dd')).toBe('2003/07/11')
  })

  test('yy/mm/dd should result in 03/07/11', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('yy/mm/dd')).toBe('03/07/11')
  })

  test('mm/dd/yy should result in 07/11/03', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('mm/dd/yy')).toBe('07/11/03')
  })

  test('mm/dd/yyyy should result in 07/11/2003', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('mm/dd/yyyy')).toBe('07/11/2003')
  })

  test('dd month yyyy should result in 11 July 2003', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('dd month yyyy')).toBe('11 July 2003')
  })
})

describe('addDays', () => {
  test('10 should result in 21/07/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.addDays(10)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('21/07/2003')
  })

  test('30 should result in 10/08/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.addDays(30)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('10/08/2003')
  })

  test('12 should result in 01/01/2004', () => {
    const testDate = new Date(2003, 12, 20)
    testDate.addDays(12)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('01/01/2004')
  })

  test('18 should result in 01/03/2003 (not leap year)', () => {
    const testDate = new Date(2003, 2, 11)
    testDate.addDays(18)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('01/03/2003')
  })

  test('18 should result in 29/02/2004 (leap year)', () => {
    const testDate = new Date(2004, 2, 11)
    testDate.addDays(18)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('29/02/2004')
  })
})

describe('addMonths', () => {
  // TODO: Add tests
})

// describe('addTime', () => {
//   test('1, 0, 0 should result in 11/07/2004', () => {
//     testDate.addTime(1, 0, 0)
//     expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2004')
//   })

//   test('0, 7, 0 should result in 11/02/2005', () => {
//     testDate.addTime(0, 7, 0)
//     expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/02/2005')
//   })

//   test('0, 0, 22 should result in 05/03/2005', () => {
//     testDate.addTime(0, 0, 22)
//     expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('05/03/2005')
//   })

//   test('5, 2, 26 should result in 31/05/2010', () => {
//     testDate.addTime(5, 2, 26)
//     expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('31/05/2010')
//   })
// })

// describe('removeTime', () => {
//   test('1, 0, 0 should result in 31/05/2009', () => {
//     testDate.removeTime(1, 0, 0)
//     expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('31/05/2009')
//   })

//   test('0, 6, 0 should result in 31/12/2008', () => {
//     testDate.removeTime(0, 6, 0)
//     expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('31/11/2008')
//   })

//   test('0, 0, 32 should result in 30/10/2008', () => {
//     testDate.removeTime(0, 0, 32)
//     expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('30/10/2008')
//   })
// })
