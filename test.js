const o = { a: 1, b: 2, c: 3 };
console.log(o.b);

function add(x, y) {
	if (x > 0) {
		return x - y;
	}

	return x + y;
}

const s = (z, y) => z + y;

s();

document.activeElement = () => {
	console.log('Active element');
};
