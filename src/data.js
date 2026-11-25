export const DATA = {
  id: 'dsh-angular-cheilitis',
  name: '口角炎',
  prefix: 'cheilitis',
  label: '口角炎',
  defaultEeriness: 2,
  gain: 0.3,
  flareChance: 0.2,
  flareGain: 14,
  triggerWeight: 0.95,
  flareWeight: 0.85,
  reliefs: [
    { id: 'balm', label: '涂润唇膏/药膏', relief: 18, minutes: 45, calm: 6 },
    { id: 'notlick', label: '忍住别舔嘴角', relief: 12, minutes: 30, calm: 4 },
    { id: 'vitamin', label: '吃点维生素', relief: 10, minutes: 120, calm: 3 },
  ],
  body: {
    stiff: '嘴角有点紧，张嘴的时候扯一下。',
    ache: '右边嘴角裂开一小条，说话、吃饭都得小心；笑起来会疼。',
    flare: '一张嘴就裂，说话漏风；只能压着声音、少动嘴。',
  },
  voice: {
    base: '允许发音有点漏风、允许不敢大笑（「这个我笑不了」）；别解释嘴角怎么了。',
    flare: '允许一句话短一截、允许用「嗯」代替一句玩笑；不要描述伤口。',
  },
}
