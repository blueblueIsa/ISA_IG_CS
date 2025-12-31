import type { QAData } from '../types';

export const qaData: QAData = {
  "cs-1": {
    "Numbers": [
      {
        question: "Explain why overflow occurs in 8-bit unsigned binary addition. Give an example.",
        answer: "In 8-bit unsigned binary, the largest value is 255. If the result exceeds 255, the most significant bit is discarded, causing wrap-around. Example: 11111111₂ (255) + 00000001₂ (1) → 00000000₂ with carry out.",
        paper: "2023 May/June Paper 11",
        topic: "Numbers",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478"
      }
    ],
    "Text": [
      {
        question: "Describe a difference between ASCII and Unicode and why Unicode is needed.",
        answer: "ASCII uses 7/8 bits and covers a limited set of characters, mainly Latin. Unicode assigns code points to characters from many languages and symbols, supporting internationalization and emojis.",
        paper: "2024 Oct/Nov Paper 12",
        topic: "Text",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478"
      }
    ],
    "Images": [
      {
        question: "Define colour depth and explain its effect on image file size.",
        answer: "Colour depth is the number of bits per pixel. Higher colour depth increases the number of representable colours and increases file size because more bits are stored per pixel.",
        paper: "2025 Feb/Mar Paper 13",
        topic: "Images",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478"
      }
    ],
    "Sound": [
      {
        question: "State how sample rate and resolution affect sound quality and file size.",
        answer: "Higher sample rate captures more frequent samples, and higher resolution stores each sample with more precision. Both increase sound fidelity and file size due to more data per second.",
        paper: "2023 Oct/Nov Paper 22",
        topic: "Sound",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478"
      }
    ],
    "Compression": [
      {
        question: "Compare lossless and lossy compression with a suitable use case for each.",
        answer: "Lossless preserves all data, suitable for text or source code where exact recovery is essential. Lossy removes some data, suitable for images/audio where small quality loss is acceptable to reduce size.",
        paper: "2024 May/June Paper 21",
        topic: "Compression",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478"
      },
      {
        question: "Explain RLE and when it is effective.",
        answer: "Run-length encoding stores consecutive repeated values as count-value pairs (e.g., AAAA → 4A). It is effective when data has long runs of repeated values, such as simple graphics; not effective for random data.",
        paper: "2025 Oct/Nov Paper 12",
        topic: "Compression",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478"
      }
    ]
  },
  "cs-2": {
    "Modes": [
      {
        question: "Differentiate synchronous and asynchronous transmission.",
        answer: "Synchronous uses a shared clock to align bits, efficient for continuous streams. Asynchronous adds start/stop bits and does not rely on shared clock, suitable for intermittent transmission.",
        paper: "2023 May/June Paper 13",
        topic: "Modes",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478"
      }
    ],
    "Errors": [
      {
        question: "Describe parity bits and a limitation of parity checking.",
        answer: "Parity adds a bit to make the number of 1s even or odd. Limitation: it detects single-bit errors but not all multi-bit errors (e.g., two-bit flips retain parity).",
        paper: "2024 Oct/Nov Paper 23",
        topic: "Errors",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478"
      }
    ],
    "Protocols": [
      {
        question: "Explain handshaking and why it is used in network communication.",
        answer: "Handshaking is the negotiation process where devices agree on parameters (speed, protocol features) before data transfer, ensuring compatibility and reliable communication.",
        paper: "2025 May/June Paper 12",
        topic: "Protocols",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478"
      }
    ]
  }
};
