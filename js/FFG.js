/*
import React, { useState } from 'react';
import * as ml5 from 'ml5';

function App() {
  const [image, setImage] = useState(null);

  const generateImage = () => {
    const gan = ml5.GAN('https://cdn.jsdelivr.net/gh/ml5js/training-data/flower_photos/flowers-optimized-256x256.json', () => {
      gan.generate(async (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const imageBlob = await fetch(result.image).then(r => r.blob());
        setImage(URL.createObjectURL(imageBlob));
      }, { noise: true });
    });
  };

  return (
    <div>
      <button onClick={generateImage}>Generate Image</button>
      {image && <img src={image} alt="Generated Image" />}
    </div>
  );
}

export default App;
*/
