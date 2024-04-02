
const generateDiceBearAvataaars = (seed) =>
`https://api.dicebear.com/8.x/avataaars/svg?seed=${seed}`;

const generateDiceBearBottts = (seed) =>
  `https://api.dicebear.com/8.x/bottts/svg?seed=${seed}`;

const generateDiceBearAdventurer = (seed) =>
  `https://api.dicebear.com/8.x/adventurer/svg?seed=${seed}`;

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAvataaars(parseInt(Math.random()*10));
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearBottts(parseInt(Math.random()*10));
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAdventurer(parseInt(Math.random()*10));
    data.push(res);
  }
  return data;
};