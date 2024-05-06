// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('Valid phone number 1', () => {
  expect(isPhoneNumber("(619)472-1840")).toBeTruthy();
});

test("Valid phone number 2", () => {
  expect(isPhoneNumber("(239)123-4567")).toBeTruthy();
})

test("Invalid phone number 1", () => {
  expect(isPhoneNumber("Hello")).toBeFalsy();
})

test("Invalid phone number 2", () => {
  expect(isPhoneNumber(10)).toBeFalsy();
})

test("Valid email 1", () => {
  expect(isEmail("hello@gmail.com")).toBeTruthy();
})

test("Valid email 2", () => {
  expect(isEmail("thisisatest@hotmail.com")).toBeTruthy();
})

test("Invalid email 1", () => {
  expect(isEmail("Hello World!")).toBeFalsy();
})

test("Invalid email 2", () => {
  expect(isEmail("(123)456-7890")).toBeFalsy();
})

test("Valid strong password 1", () => {
  expect(isStrongPassword("a1234")).toBeTruthy();
})

test("Valid strong password 2", () => {
  expect(isStrongPassword("c_249asdjsfh")).toBeTruthy();
})

test("Invalid strong password 1", () => {
  expect(isStrongPassword("1234567890")).toBeFalsy();
})

test("Invalid strong password 2", () => {
  expect(isStrongPassword("a_9283ushfaskdjausdou")).toBeFalsy();
})

test("Valid date 1", () => {
  expect(isDate("1/1/2020")).toBeTruthy();
})

test("Valid date 2", () => {
  expect(isDate("12/12/4040")).toBeTruthy();
})

test("Invalid date 1", () => {
  expect(isDate("2020/12/2302")).toBeFalsy();
})

test("Invalid date 2", () => {
  expect(isDate("This is invalid")).toBeFalsy();
})

test("Valid hex color 1", () => {
  expect(isHexColor("FFF")).toBeTruthy();
})

test("Valid hex color 2", () => {
  expect(isHexColor("F12748")).toBeTruthy();
})

test("Invalid hex color 1", () => {
  expect(isHexColor("Invalid hex")).toBeFalsy();
})

test("Invalid hex color 2", () => {
  expect(isHexColor("F")).toBeFalsy();
})