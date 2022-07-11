function parseCount(value) {
    number = Number.parseInt(value);
    if (Number.isNaN(number)) throw new Error("Невалидное значение");
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

class Triangle {

    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = 0.5 * (this.a + this.b + this.c);
        const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        let triangle = {
            getArea: () => 'Ошибка! Треугольник не существует',
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        };
        return triangle;
    }
}