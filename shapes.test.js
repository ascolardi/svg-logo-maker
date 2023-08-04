const Shapes = require("../index");
const jest = require('jest');

describe('shapes', () => {
  describe('circle', () => {
    it('should generate an svg file with a circle', () => {
      const response = "circle";
      const shape = new Shapes ();
      expect(shape.response(circle)).toEqual(response);
    })
  })
})

describe('shapes', () => {
  describe('square', () => {
    it('should generate an svg file with a square', () => {
      const response = "square";
      const shape = new Shapes ();
      expect(shape.response(square)).toEqual(response);
    })
  })
})

describe('shapes', () => {
  describe('triangle', () => {
    it('should generate an svg file with a triangle', () => {
      const response = "triangle";
      const shape = new Shapes ();
      expect(shape.response(triangle)).toEqual(response);
    })
  })
})

