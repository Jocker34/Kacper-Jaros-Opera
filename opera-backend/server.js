const express = require("express");
const cors = require("cors"); 
const app = express();
app.use(cors());

const slides = [
  {
    id: 1,
    text: 'This is slide 1 text',
    imageURL: "https://thumbs.dreamstime.com/z/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg?w=992",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    text: 'This is slide 2 text',
    imageURL: "https://thumbs.dreamstime.com/z/adraga-beach-sunset-3993924.jpg?w=992",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    text: 'This is slide 3 text',
    imageURL: "https://thumbs.dreamstime.com/z/bay-beach-sunset-1274433.jpg?w=992",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    text: 'This is slide 4 text',
    imageURL: "https://thumbs.dreamstime.com/z/tropical-beach-2313069.jpg?w=992",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 5,
    text: 'This is slide 5 text',
    imageURL: "https://thumbs.dreamstime.com/z/palmtree-tropical-beach-exotic-island-saona-caribbean-sea-dominican-republic-exotic-beach-dominican-republic-punta-cana-110331666.jpg?w=992",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];
// Normally, for a larger project, a better solution is to use some database such as SQLlite or MongoDB. But here was such a small query that there was no point

app.get("/slides", (req, res) => {
  res.send(slides);
});

app.listen(3000, () => {
  console.log("Node API app is running on port 3000");
});
