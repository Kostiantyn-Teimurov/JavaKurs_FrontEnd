const oak = {
  height: 140,
  year: 2025,
  grow() {
    (this.height += 30), (this.year += 1);
  },
};

console.log(oak);

for (let i = 0; i < 20; i++) {
  oak.grow();
}

console.log(oak);

const { grow } = oak;

const oak2 = {
    height: 10,
    year: 1,
};

const growOak2 = grow.bind(oak2);

growOak2();

console.log(oak2);