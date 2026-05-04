'use strict';

const PI = Math.PI;
const $ = id => document.getElementById(id);

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function round2(x) {
  return Math.round(x * 100) / 100;
}

function fmt(n) {
  if (!Number.isFinite(n)) return String(n);
  const r = round2(n);
  if (Number.isInteger(r)) return String(r);
  return r.toFixed(2);
}

const TOPIC_LABEL = {
  parallelogram: 'Parallelogram',
  triangle: 'Triangle',
  trapezium: 'Trapezium',
  circle: 'Circle',
  cylinder: 'Cylinder',
  sphere: 'Sphere',
  cone: 'Cone',
  pyramid: 'Pyramid',
  cuboid: 'Cuboid',
  prism: 'Prism',
  mixed: 'Mixed',
};

const UNITS = ['cm', 'm', 'mm'];

const generators = {
  parallelogram: [
    () => {
      const u = pick(UNITS);
      const b = randInt(3, 30);
      const h = randInt(3, 25);
      return {
        topic: 'parallelogram',
        question: `Determine the area of a parallelogram with base ${b} ${u} and perpendicular height ${h} ${u}.`,
        answer: `${fmt(b * h)} ${u}²`,
      };
    },
    () => {
      const u = pick(UNITS);
      const b = randInt(4, 25);
      const h = randInt(4, 25);
      const A = b * h;
      return {
        topic: 'parallelogram',
        question: `A parallelogram has area ${A} ${u}² and base ${b} ${u}. Calculate its perpendicular height.`,
        answer: `${fmt(h)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const b = randInt(4, 25);
      const h = randInt(4, 25);
      const A = b * h;
      return {
        topic: 'parallelogram',
        question: `The area of a parallelogram is ${A} ${u}² and its perpendicular height is ${h} ${u}. Find the length of the base.`,
        answer: `${fmt(b)} ${u}`,
      };
    },
    () => {
      const b = randInt(8, 40);
      const h = randInt(4, 20);
      return {
        topic: 'parallelogram',
        question: `A field shaped like a parallelogram has a base of ${b} m and a perpendicular height of ${h} m. Determine the area of the field.`,
        answer: `${fmt(b * h)} m²`,
      };
    },
    () => {
      const u = pick(['cm', 'mm']);
      const b = randInt(5, 20);
      const h = randInt(5, 20);
      const n = randInt(5, 30);
      return {
        topic: 'parallelogram',
        question: `A parallelogram tile has base ${b} ${u} and perpendicular height ${h} ${u}. Determine the total area covered by ${n} such tiles laid flat.`,
        answer: `${fmt(n * b * h)} ${u}²`,
      };
    },
  ],

  triangle: [
    () => {
      const u = pick(UNITS);
      const b = randInt(3, 30);
      const h = randInt(2, 28);
      return {
        topic: 'triangle',
        question: `Find the area of a triangle with base ${b} ${u} and perpendicular height ${h} ${u}.`,
        answer: `${fmt((b * h) / 2)} ${u}²`,
      };
    },
    () => {
      const u = pick(UNITS);
      const b = randInt(4, 24);
      const h = randInt(4, 24);
      const A = (b * h) / 2;
      return {
        topic: 'triangle',
        question: `A triangle has area ${fmt(A)} ${u}² and base ${b} ${u}. Calculate its perpendicular height.`,
        answer: `${fmt(h)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const b = randInt(4, 24);
      const h = randInt(4, 24);
      const A = (b * h) / 2;
      return {
        topic: 'triangle',
        question: `The area of a triangle is ${fmt(A)} ${u}² and its perpendicular height is ${h} ${u}. Determine the length of the base.`,
        answer: `${fmt(b)} ${u}`,
      };
    },
    () => {
      const b = randInt(6, 30);
      const h = randInt(4, 20);
      return {
        topic: 'triangle',
        question: `A triangular sail has a base of ${b} m and a perpendicular height of ${h} m. Calculate the area of the sail.`,
        answer: `${fmt((b * h) / 2)} m²`,
      };
    },
    () => {
      const u = pick(UNITS);
      const b = randInt(4, 18);
      const h = randInt(4, 18);
      const A = (b * h) / 2;
      return {
        topic: 'triangle',
        question: `A right-angled triangle has perpendicular sides of ${b} ${u} and ${h} ${u}. Find its area.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
  ],

  trapezium: [
    () => {
      const u = pick(UNITS);
      const a = randInt(3, 18);
      const b = randInt(a + 2, 30);
      const h = randInt(2, 24);
      const A = ((a + b) * h) / 2;
      return {
        topic: 'trapezium',
        question: `Determine the area of a trapezium with parallel sides ${a} ${u} and ${b} ${u}, and perpendicular height ${h} ${u}.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
    () => {
      const u = pick(UNITS);
      const a = randInt(4, 16);
      const b = randInt(a + 2, 26);
      const h = randInt(4, 20);
      const A = ((a + b) * h) / 2;
      return {
        topic: 'trapezium',
        question: `A trapezium has parallel sides of length ${a} ${u} and ${b} ${u}. If its perpendicular height is ${h} ${u}, find its area.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
    () => {
      const u = pick(UNITS);
      const a = randInt(4, 14);
      const b = randInt(a + 2, 22);
      const h = randInt(4, 18);
      const A = ((a + b) * h) / 2;
      return {
        topic: 'trapezium',
        question: `The area of a trapezium is ${fmt(A)} ${u}². The parallel sides are ${a} ${u} and ${b} ${u}. Calculate the perpendicular height.`,
        answer: `${fmt(h)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const a = randInt(4, 14);
      const b = randInt(a + 2, 22);
      const h = randInt(4, 18);
      const A = ((a + b) * h) / 2;
      return {
        topic: 'trapezium',
        question: `A trapezium has area ${fmt(A)} ${u}², perpendicular height ${h} ${u}, and one parallel side of length ${a} ${u}. Determine the length of the other parallel side.`,
        answer: `${fmt(b)} ${u}`,
      };
    },
    () => {
      const a = randInt(8, 22);
      const b = randInt(a + 4, 40);
      const h = randInt(5, 18);
      const A = ((a + b) * h) / 2;
      return {
        topic: 'trapezium',
        question: `A garden bed is shaped like a trapezium with parallel sides of ${a} m and ${b} m, separated by a perpendicular distance of ${h} m. Find the area of the garden bed.`,
        answer: `${fmt(A)} m²`,
      };
    },
  ],

  circle: [
    () => {
      const u = pick(UNITS);
      const r = randInt(2, 25);
      const A = round2(PI * r * r);
      return {
        topic: 'circle',
        question: `Calculate the area of a circle with radius ${r} ${u}. Give your answer to 2 decimal places.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(2, 25);
      const C = round2(2 * PI * r);
      return {
        topic: 'circle',
        question: `Determine the circumference of a circle with radius ${r} ${u}. Give your answer to 2 decimal places.`,
        answer: `${fmt(C)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const d = randInt(4, 50);
      const r = d / 2;
      const A = round2(PI * r * r);
      return {
        topic: 'circle',
        question: `A circle has diameter ${d} ${u}. Find its area, correct to 2 decimal places.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
    () => {
      const u = pick(UNITS);
      const d = randInt(4, 50);
      const C = round2(PI * d);
      return {
        topic: 'circle',
        question: `A circle has diameter ${d} ${u}. Calculate its circumference, correct to 2 decimal places.`,
        answer: `${fmt(C)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 20);
      const A = round2(PI * r * r);
      return {
        topic: 'circle',
        question: `A circular pond has area ${fmt(A)} ${u}². Determine its radius, correct to 2 decimal places.`,
        answer: `${fmt(r)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 20);
      const C = round2(2 * PI * r);
      return {
        topic: 'circle',
        question: `The circumference of a circle is ${fmt(C)} ${u}. Find its radius, correct to 2 decimal places.`,
        answer: `${fmt(r)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 20);
      const A = round2(PI * r * r);
      return {
        topic: 'circle',
        question: `A circular plate has area ${fmt(A)} ${u}². Determine its diameter, correct to 2 decimal places.`,
        answer: `${fmt(2 * r)} ${u}`,
      };
    },
    () => {
      const r = randInt(3, 18);
      const A = round2(PI * r * r);
      const C = round2(2 * PI * r);
      return {
        topic: 'circle',
        question: `A circle has radius ${r} cm. Calculate (i) its area and (ii) its circumference, both to 2 decimal places.`,
        answer: `Area: ${fmt(A)} cm²; Circumference: ${fmt(C)} cm`,
      };
    },
  ],

  cylinder: [
    () => {
      const u = pick(UNITS);
      const r = randInt(2, 12);
      const h = randInt(3, 20);
      const V = round2(PI * r * r * h);
      return {
        topic: 'cylinder',
        question: `Find the volume of a cylinder with radius ${r} ${u} and height ${h} ${u}. Give your answer to 2 decimal places.`,
        answer: `${fmt(V)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(2, 12);
      const h = randInt(3, 20);
      const A = round2(2 * PI * r * h);
      return {
        topic: 'cylinder',
        question: `Calculate the area of the curved surface of a cylinder with radius ${r} ${u} and height ${h} ${u}. Give your answer to 2 decimal places.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
    () => {
      const r = randInt(3, 10);
      const h = randInt(4, 18);
      const V = round2(PI * r * r * h);
      return {
        topic: 'cylinder',
        question: `A cylindrical water tank has radius ${r} m and height ${h} m. Determine the volume of water it can hold, to 2 decimal places.`,
        answer: `${fmt(V)} m³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 10);
      const h = randInt(4, 18);
      const V = round2(PI * r * r * h);
      return {
        topic: 'cylinder',
        question: `A cylinder has volume ${fmt(V)} ${u}³ and radius ${r} ${u}. Find its height, correct to 2 decimal places.`,
        answer: `${fmt(h)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 10);
      const h = randInt(4, 18);
      const A = round2(2 * PI * r * h);
      return {
        topic: 'cylinder',
        question: `A cylinder has curved surface area ${fmt(A)} ${u}² and radius ${r} ${u}. Calculate its height, correct to 2 decimal places.`,
        answer: `${fmt(h)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 10);
      const h = randInt(4, 18);
      const V = round2(PI * r * r * h);
      return {
        topic: 'cylinder',
        question: `A cylindrical can has volume ${fmt(V)} ${u}³ and height ${h} ${u}. Determine its radius, correct to 2 decimal places.`,
        answer: `${fmt(r)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 9);
      const h = randInt(5, 16);
      const A = round2(2 * PI * r * h);
      return {
        topic: 'cylinder',
        question: `A label is wrapped exactly around a cylinder of radius ${r} ${u} and height ${h} ${u}. Find the area of the label, to 2 decimal places.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
  ],

  sphere: [
    () => {
      const u = pick(UNITS);
      const r = randInt(2, 15);
      const V = round2((4 / 3) * PI * r * r * r);
      return {
        topic: 'sphere',
        question: `Determine the volume of a sphere with radius ${r} ${u}. Give your answer to 2 decimal places.`,
        answer: `${fmt(V)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(2, 15);
      const A = round2(4 * PI * r * r);
      return {
        topic: 'sphere',
        question: `Calculate the surface area of a sphere with radius ${r} ${u}. Give your answer to 2 decimal places.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 12);
      const A = round2(4 * PI * r * r);
      return {
        topic: 'sphere',
        question: `A sphere has surface area ${fmt(A)} ${u}². Find its radius, correct to 2 decimal places.`,
        answer: `${fmt(r)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const d = randInt(4, 24);
      const r = d / 2;
      const V = round2((4 / 3) * PI * r * r * r);
      return {
        topic: 'sphere',
        question: `A spherical balloon has diameter ${d} ${u}. Determine its volume, correct to 2 decimal places.`,
        answer: `${fmt(V)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 10);
      const V = round2((4 / 3) * PI * r * r * r);
      return {
        topic: 'sphere',
        question: `A spherical ball has volume ${fmt(V)} ${u}³. Calculate its radius, correct to 2 decimal places.`,
        answer: `${fmt(r)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const d = randInt(6, 24);
      const r = d / 2;
      const A = round2(4 * PI * r * r);
      return {
        topic: 'sphere',
        question: `A football has diameter ${d} ${u}. Find its surface area, correct to 2 decimal places.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
  ],

  cone: [
    () => {
      const u = pick(UNITS);
      const r = randInt(2, 12);
      const h = randInt(3, 20);
      const V = round2((1 / 3) * PI * r * r * h);
      return {
        topic: 'cone',
        question: `Find the volume of a cone with radius ${r} ${u} and vertical height ${h} ${u}. Give your answer to 2 decimal places.`,
        answer: `${fmt(V)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(2, 12);
      const l = randInt(r + 2, r + 18);
      const A = round2(PI * r * l);
      return {
        topic: 'cone',
        question: `Determine the area of the curved surface of a cone with radius ${r} ${u} and slant height ${l} ${u}. Give your answer to 2 decimal places.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
    () => {
      const r = randInt(3, 10);
      const h = randInt(5, 15);
      const V = round2((1 / 3) * PI * r * r * h);
      return {
        topic: 'cone',
        question: `A conical container has radius ${r} cm and vertical height ${h} cm. Calculate its volume, correct to 2 decimal places.`,
        answer: `${fmt(V)} cm³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 10);
      const h = randInt(5, 18);
      const V = round2((1 / 3) * PI * r * r * h);
      return {
        topic: 'cone',
        question: `A cone has volume ${fmt(V)} ${u}³ and radius ${r} ${u}. Find its vertical height, correct to 2 decimal places.`,
        answer: `${fmt(h)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 10);
      const l = randInt(r + 2, r + 15);
      const A = round2(PI * r * l);
      return {
        topic: 'cone',
        question: `The curved surface area of a cone is ${fmt(A)} ${u}² and its radius is ${r} ${u}. Determine the slant height, correct to 2 decimal places.`,
        answer: `${fmt(l)} ${u}`,
      };
    },
    () => {
      const r = randInt(3, 8);
      const l = randInt(r + 3, r + 12);
      const A = round2(PI * r * l);
      return {
        topic: 'cone',
        question: `An ice-cream cone has a radius of ${r} cm and a slant height of ${l} cm. Find the area of paper required to make its curved surface, correct to 2 decimal places.`,
        answer: `${fmt(A)} cm²`,
      };
    },
  ],

  pyramid: [
    () => {
      const u = pick(UNITS);
      const A = randInt(20, 200);
      const h = randInt(3, 18);
      const V = round2((1 / 3) * A * h);
      return {
        topic: 'pyramid',
        question: `Determine the volume of a pyramid with base area ${A} ${u}² and vertical height ${h} ${u}.`,
        answer: `${fmt(V)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const s = randInt(3, 15);
      const A = s * s;
      const h = randInt(4, 18);
      const V = round2((1 / 3) * A * h);
      return {
        topic: 'pyramid',
        question: `A square-based pyramid has a base of side length ${s} ${u} and a vertical height of ${h} ${u}. Find its volume, correct to 2 decimal places.`,
        answer: `${fmt(V)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const s = randInt(4, 14);
      const A = s * s;
      const h = randInt(5, 18);
      const V = round2((1 / 3) * A * h);
      return {
        topic: 'pyramid',
        question: `A square-based pyramid has volume ${fmt(V)} ${u}³ and a base of side ${s} ${u}. Calculate its vertical height, correct to 2 decimal places.`,
        answer: `${fmt(h)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const l = randInt(4, 12);
      const w = randInt(4, 12);
      const A = l * w;
      const h = randInt(4, 16);
      const V = round2((1 / 3) * A * h);
      return {
        topic: 'pyramid',
        question: `A pyramid has a rectangular base ${l} ${u} by ${w} ${u} and a vertical height of ${h} ${u}. Determine its volume, correct to 2 decimal places.`,
        answer: `${fmt(V)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const A = randInt(30, 180);
      const h = randInt(5, 18);
      const V = round2((1 / 3) * A * h);
      return {
        topic: 'pyramid',
        question: `A pyramid has volume ${fmt(V)} ${u}³ and vertical height ${h} ${u}. Calculate the area of its base, correct to 2 decimal places.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
  ],

  cuboid: [
    () => {
      const u = pick(UNITS);
      const l = randInt(3, 20);
      const w = randInt(2, 18);
      const h = randInt(2, 18);
      return {
        topic: 'cuboid',
        question: `Find the volume of a cuboid with length ${l} ${u}, width ${w} ${u} and height ${h} ${u}.`,
        answer: `${fmt(l * w * h)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const l = randInt(4, 20);
      const w = randInt(3, 15);
      const h = randInt(3, 15);
      const V = l * w * h;
      return {
        topic: 'cuboid',
        question: `A cuboid has volume ${V} ${u}³, length ${l} ${u} and width ${w} ${u}. Determine its height.`,
        answer: `${fmt(h)} ${u}`,
      };
    },
    () => {
      const l = randInt(8, 25);
      const w = randInt(4, 15);
      const h = randInt(2, 4);
      return {
        topic: 'cuboid',
        question: `A swimming pool in the shape of a cuboid is ${l} m long, ${w} m wide, and ${h} m deep. Calculate its volume.`,
        answer: `${fmt(l * w * h)} m³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const l = randInt(4, 16);
      const w = randInt(3, 14);
      const h = randInt(3, 14);
      const V = l * w * h;
      return {
        topic: 'cuboid',
        question: `A cuboid container has volume ${V} ${u}³, width ${w} ${u} and height ${h} ${u}. Find its length.`,
        answer: `${fmt(l)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const l = randInt(5, 18);
      const w = randInt(4, 12);
      const h = randInt(4, 12);
      return {
        topic: 'cuboid',
        question: `A box has a base ${l} ${u} by ${w} ${u} and a height of ${h} ${u}. Determine the volume of the box.`,
        answer: `${fmt(l * w * h)} ${u}³`,
      };
    },
  ],

  prism: [
    () => {
      const u = pick(UNITS);
      const A = randInt(15, 120);
      const h = randInt(3, 25);
      return {
        topic: 'prism',
        question: `Determine the volume of a prism with cross-sectional area ${A} ${u}² and length ${h} ${u}.`,
        answer: `${fmt(A * h)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const b = randInt(4, 14);
      const ht = randInt(4, 12);
      const A = (b * ht) / 2;
      const len = randInt(5, 20);
      const V = A * len;
      return {
        topic: 'prism',
        question: `A triangular prism has a triangular cross-section with base ${b} ${u} and height ${ht} ${u}. The length of the prism is ${len} ${u}. Find its volume.`,
        answer: `${fmt(V)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const A = randInt(20, 100);
      const h = randInt(4, 20);
      const V = A * h;
      return {
        topic: 'prism',
        question: `A prism has volume ${V} ${u}³ and length ${h} ${u}. Calculate the area of its cross-section.`,
        answer: `${fmt(A)} ${u}²`,
      };
    },
    () => {
      const u = pick(UNITS);
      const a = randInt(3, 12);
      const b = randInt(a + 2, 18);
      const ht = randInt(3, 10);
      const A = ((a + b) * ht) / 2;
      const len = randInt(5, 18);
      const V = A * len;
      return {
        topic: 'prism',
        question: `A prism has a trapezium-shaped cross-section with parallel sides ${a} ${u} and ${b} ${u}, and perpendicular height ${ht} ${u}. If the prism is ${len} ${u} long, determine its volume.`,
        answer: `${fmt(V)} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const A = randInt(25, 150);
      const len = randInt(4, 18);
      const V = A * len;
      return {
        topic: 'prism',
        question: `A prism has cross-sectional area ${A} ${u}² and volume ${V} ${u}³. Determine its length.`,
        answer: `${fmt(len)} ${u}`,
      };
    },
  ],

  mixed: [
    () => {
      const u = pick(['cm', 'm']);
      const r = randInt(2, 8);
      const h = randInt(4, 14);
      const Vcyl = PI * r * r * h;
      const rSph = round2(Math.cbrt((3 * Vcyl) / (4 * PI)));
      return {
        topic: 'mixed',
        question: `A solid cylinder of radius ${r} ${u} and height ${h} ${u} is melted and recast into a single sphere. Determine the radius of the sphere, correct to 2 decimal places.`,
        answer: `${fmt(rSph)} ${u}`,
      };
    },
    () => {
      const u = pick(['cm', 'm']);
      const r = randInt(3, 10);
      const h = randInt(4, 16);
      const Vc = (1 / 3) * PI * r * r * h;
      const rSph = round2(Math.cbrt((3 * Vc) / (4 * PI)));
      return {
        topic: 'mixed',
        question: `A cone has radius ${r} ${u} and vertical height ${h} ${u}. The cone is melted to form a sphere. Find the radius of the sphere, correct to 2 decimal places.`,
        answer: `${fmt(rSph)} ${u}`,
      };
    },
    () => {
      const u = pick(['cm', 'm']);
      const l = randInt(4, 12);
      const w = randInt(4, 12);
      const h = randInt(4, 12);
      const r = randInt(2, 6);
      const Vcub = l * w * h;
      const heightCyl = round2(Vcub / (PI * r * r));
      return {
        topic: 'mixed',
        question: `A cuboid measuring ${l} ${u} by ${w} ${u} by ${h} ${u} has the same volume as a cylinder of radius ${r} ${u}. Calculate the height of the cylinder, correct to 2 decimal places.`,
        answer: `${fmt(heightCyl)} ${u}`,
      };
    },
    () => {
      const u = pick(['cm', 'm']);
      const r = randInt(3, 10);
      const Vsph = (4 / 3) * PI * r * r * r;
      const Vcyl = PI * r * r * (2 * r);
      const diff = round2(Vcyl - Vsph);
      return {
        topic: 'mixed',
        question: `A sphere of radius ${r} ${u} fits exactly inside a cylinder of the same radius and height ${2 * r} ${u}. Calculate the volume of the empty space inside the cylinder, correct to 2 decimal places.`,
        answer: `${fmt(diff)} ${u}³`,
      };
    },
    () => {
      const u = pick(['cm', 'm']);
      const r = randInt(3, 8);
      const h = randInt(4, 14);
      const V = (PI * r * r * h) + (1 / 2) * (4 / 3) * PI * r * r * r;
      return {
        topic: 'mixed',
        question: `A solid is made of a cylinder of radius ${r} ${u} and height ${h} ${u} with a hemisphere of the same radius on top. Find the total volume, correct to 2 decimal places.`,
        answer: `${fmt(round2(V))} ${u}³`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(3, 12);
      const A = (1 / 2) * 4 * PI * r * r + PI * r * r;
      return {
        topic: 'mixed',
        question: `A solid hemisphere has radius ${r} ${u}. Determine its total surface area (curved surface plus flat circular base), correct to 2 decimal places.`,
        answer: `${fmt(round2(A))} ${u}²`,
      };
    },
    () => {
      const u = pick(['cm', 'm']);
      const r1 = randInt(3, 8);
      const h1 = randInt(4, 12);
      const r2 = randInt(2, 6);
      const Vcone = (1 / 3) * PI * r1 * r1 * h1;
      const hcyl = round2(Vcone / (PI * r2 * r2));
      return {
        topic: 'mixed',
        question: `A cone has radius ${r1} ${u} and vertical height ${h1} ${u}. A cylinder has the same volume as the cone and a radius of ${r2} ${u}. Find the height of the cylinder, correct to 2 decimal places.`,
        answer: `${fmt(hcyl)} ${u}`,
      };
    },
    () => {
      const u = pick(UNITS);
      const r = randInt(2, 10);
      const h = randInt(4, 18);
      const A = 2 * PI * r * h + 2 * PI * r * r;
      return {
        topic: 'mixed',
        question: `A closed cylinder has radius ${r} ${u} and height ${h} ${u}. Calculate its total surface area (curved surface plus two circular ends), correct to 2 decimal places.`,
        answer: `${fmt(round2(A))} ${u}²`,
      };
    },
    () => {
      const u = pick(['cm', 'm']);
      const r = randInt(2, 6);
      const Vsmall = (4 / 3) * PI * r * r * r;
      const R = randInt(r + 4, r + 10);
      const Vbig = (4 / 3) * PI * R * R * R;
      const n = Math.floor(Vbig / Vsmall);
      return {
        topic: 'mixed',
        question: `A large sphere of radius ${R} ${u} is melted down and recast into smaller spheres each of radius ${r} ${u}. Determine the maximum number of small spheres that can be made.`,
        answer: `${n} spheres`,
      };
    },
  ],
};

const TOPIC_KEYS = Object.keys(generators);

function generateQuestion(topicFilter) {
  let topic;
  if (topicFilter && topicFilter !== 'all' && generators[topicFilter]) {
    topic = topicFilter;
  } else {
    const pool = TOPIC_KEYS.filter(k => k !== 'mixed');
    topic = Math.random() < 0.15 ? 'mixed' : pool[Math.floor(Math.random() * pool.length)];
  }
  const templates = generators[topic];
  const tpl = templates[Math.floor(Math.random() * templates.length)];
  return tpl();
}

function generateSet(topicFilter, count) {
  const set = [];
  const seen = new Set();
  let attempts = 0;
  const maxAttempts = count * 25;
  while (set.length < count && attempts < maxAttempts) {
    const q = generateQuestion(topicFilter);
    if (!seen.has(q.question)) {
      seen.add(q.question);
      set.push(q);
    }
    attempts++;
  }
  while (set.length < count) {
    set.push(generateQuestion(topicFilter));
  }
  return set;
}

let setNum = 0;
let totalGenerated = 0;

function render(questions) {
  const container = $('questions');
  container.innerHTML = '';
  const frag = document.createDocumentFragment();
  questions.forEach((q, i) => {
    const card = document.createElement('article');
    card.className = 'question-card';

    const head = document.createElement('div');
    head.className = 'question-head';
    const label = document.createElement('span');
    label.className = 'q-label';
    label.textContent = `Q${i + 1}`;
    const topic = document.createElement('span');
    topic.className = 'q-topic';
    topic.textContent = TOPIC_LABEL[q.topic] || q.topic;
    head.append(label, topic);

    const text = document.createElement('p');
    text.className = 'q-text';
    text.textContent = q.question;

    const btn = document.createElement('button');
    btn.className = 'reveal-btn';
    btn.type = 'button';
    btn.textContent = 'Reveal Answer';

    const ans = document.createElement('div');
    ans.className = 'answer';
    ans.textContent = q.answer;

    btn.addEventListener('click', () => {
      const shown = ans.classList.toggle('shown');
      btn.textContent = shown ? 'Hide Answer' : 'Reveal Answer';
    });

    card.append(head, text, btn, ans);
    frag.appendChild(card);
  });
  container.appendChild(frag);
}

function refresh() {
  const topic = $('topic-filter').value;
  const count = parseInt($('set-size').value, 10);
  const set = generateSet(topic, count);
  render(set);
  setNum += 1;
  totalGenerated += set.length;
  $('set-counter').textContent = setNum;
  $('total-counter').textContent = totalGenerated;
}

function revealAll(show) {
  document.querySelectorAll('.question-card').forEach(card => {
    const ans = card.querySelector('.answer');
    const btn = card.querySelector('.reveal-btn');
    if (show) {
      ans.classList.add('shown');
      btn.textContent = 'Hide Answer';
    } else {
      ans.classList.remove('shown');
      btn.textContent = 'Reveal Answer';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  $('generate-btn').addEventListener('click', refresh);
  $('topic-filter').addEventListener('change', refresh);
  $('set-size').addEventListener('change', refresh);
  $('reveal-all-btn').addEventListener('click', () => revealAll(true));
  $('hide-all-btn').addEventListener('click', () => revealAll(false));
  refresh();
});
