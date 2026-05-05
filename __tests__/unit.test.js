// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid iPhone number 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
})

test('valid iPhone number 2', () => {
  expect(isPhoneNumber('555-555-5555')).toBe(true);
})

test('invalid iPhone number 1', () => {
  expect(isPhoneNumber('123-43')).toBe(false);
})

test('invalid iPhone number 2', () => {
  expect(isPhoneNumber('67')).toBe(false);
})

test('valid email 1', () => {
  expect(isEmail('testemail@gmail.com')).toBe(true);
})

test('valid email 2', () => {
  expect(isEmail('ucsdstudent@ucsd.com')).toBe(true);
})    

test('invalid email 1', () => {
  expect(isEmail('testemail@gmail.com.net@')).toBe(false);
})

test('invalid email 2', () => {
  expect(isEmail('ucsdstudent@@ucsd.com.')).toBe(false);
})

test('valid strong password 1', () => {
  expect(isStrongPassword('Password123')).toBe(true);
})

test('valid strong password 2', () => {
  expect(isStrongPassword('Gfc12')).toBe(true);
})

test('invalid strong password 1', () => {
  expect(isStrongPassword('111')).toBe(false);
})

test('invalid strong password 2', () => {
  expect(isStrongPassword('aaa')).toBe(false);
})

test('valid date 1', () => {
  expect(isDate('01/01/2026')).toBe(true);
})

test('valid date 2', () => {
  expect(isDate('12/31/2026')).toBe(true);
})

test('invalid date 1', () => {
  expect(isDate('01/01/26')).toBe(false);
})

test('invalid date 2', () => {
  expect(isDate('01/01/20266')).toBe(false);
})

test('valid hex color 1', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
})

test('valid hex color 2', () => {
  expect(isHexColor('#000000')).toBe(true);
})

test('invalid hex color 1', () => {
  expect(isHexColor('#FFFFFFF')).toBe(false);
})

test('invalid hex color 2', () => {
  expect(isHexColor('#00DEB000')).toBe(false);
})