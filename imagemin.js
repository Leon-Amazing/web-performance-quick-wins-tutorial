const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async() => {
  const files = await imagemin(
      ['img/*.jpg'],
      {
        destination: 'dist/img',
        plugins: [
          imageminMozjpeg({quality: 60}),
        ]
      }
  );
  console.log(files);
})();