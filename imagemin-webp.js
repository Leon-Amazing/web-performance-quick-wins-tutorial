const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async() => {
  const files = await imagemin(
      ['img/*.jpg'],
      {
        destination: 'dist/img',
        plugins: [
          imageminWebp({quality: 50})
        ]
      }
  );
  console.log(files);
})();