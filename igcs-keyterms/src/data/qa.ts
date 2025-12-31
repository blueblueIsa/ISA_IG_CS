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
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["explain"],
        marks: 3,
        keywords: ["overflow", "8-bit", "binary addition"]
      },
      {
        question: "Convert 11010110₂ to denary and hexadecimal.",
        answer: "Denary: 214. Hexadecimal: D6₁₆.",
        paper: "2024 Oct/Nov Paper 12",
        topic: "Numbers",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["calculate"],
        marks: 3,
        keywords: ["convert", "binary", "hexadecimal", "denary"]
      },
      {
        question: "State two reasons why hexadecimal is used by computer scientists.",
        answer: "It is more compact than binary and easier for humans to read; it maps neatly to 4-bit nibbles.",
        paper: "2025 Feb/Mar Paper 13",
        topic: "Numbers",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["describe"],
        marks: 2,
        keywords: ["hexadecimal", "nibble", "readability"]
      }
    ],
    "Text": [
      {
        question: "Describe a difference between ASCII and Unicode and why Unicode is needed.",
        answer: "ASCII uses 7/8 bits and covers a limited set of characters, mainly Latin. Unicode assigns code points to characters from many languages and symbols, supporting internationalization and emojis.",
        paper: "2024 Oct/Nov Paper 12",
        topic: "Text",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["compare", "explain"],
        marks: 3,
        keywords: ["ASCII", "Unicode", "code points", "character set"]
      },
      {
        question: "Explain why extended ASCII is insufficient for representing some languages.",
        answer: "Extended ASCII provides 256 codes which still cannot cover the full range of characters for many languages, whereas Unicode supports thousands of code points.",
        paper: "2023 Oct/Nov Paper 22",
        topic: "Text",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["explain"],
        marks: 2,
        keywords: ["extended ASCII", "Unicode", "languages"]
      }
    ],
    "Images": [
      {
        question: "Define colour depth and explain its effect on image file size.",
        answer: "Colour depth is the number of bits per pixel. Higher colour depth increases the number of representable colours and increases file size because more bits are stored per pixel.",
        paper: "2025 Feb/Mar Paper 13",
        topic: "Images",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["define", "explain"],
        marks: 3,
        keywords: ["colour depth", "bits per pixel", "file size"]
      },
      {
        question: "Calculate the file size of a 400×300 image with 16-bit colour depth, uncompressed.",
        answer: "Pixels: 400×300 = 120,000. Bits: 120,000×16 = 1,920,000 bits. Bytes: 240,000 bytes ≈ 234.4 KB.",
        paper: "2024 May/June Paper 21",
        topic: "Images",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["calculate"],
        marks: 4,
        keywords: ["file size", "image", "colour depth", "resolution"]
      }
    ],
    "Sound": [
      {
        question: "State how sample rate and resolution affect sound quality and file size.",
        answer: "Higher sample rate captures more frequent samples, and higher resolution stores each sample with more precision. Both increase sound fidelity and file size due to more data per second.",
        paper: "2023 Oct/Nov Paper 22",
        topic: "Sound",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["describe"],
        marks: 3,
        keywords: ["sample rate", "resolution", "file size"]
      },
      {
        question: "Calculate the file size of a 30-second mono audio clip, 44.1 kHz sample rate, 16-bit resolution, uncompressed.",
        answer: "Samples: 44,100×30 = 1,323,000. Bits: 1,323,000×16 = 21,168,000 bits. Bytes: 2,646,000 bytes ≈ 2.52 MB.",
        paper: "2025 Oct/Nov Paper 12",
        topic: "Sound",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["calculate"],
        marks: 4,
        keywords: ["audio", "file size", "sample rate", "resolution"]
      }
    ],
    "Compression": [
      {
        question: "Compare lossless and lossy compression with a suitable use case for each.",
        answer: "Lossless preserves all data, suitable for text or source code where exact recovery is essential. Lossy removes some data, suitable for images/audio where small quality loss is acceptable to reduce size.",
        paper: "2024 May/June Paper 21",
        topic: "Compression",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["compare"],
        marks: 4,
        keywords: ["lossless", "lossy", "use case"]
      },
      {
        question: "Explain RLE and when it is effective.",
        answer: "Run-length encoding stores consecutive repeated values as count-value pairs (e.g., AAAA → 4A). It is effective when data has long runs of repeated values, such as simple graphics; not effective for random data.",
        paper: "2025 Oct/Nov Paper 12",
        topic: "Compression",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["explain"],
        marks: 3,
        keywords: ["RLE", "runs", "graphics"]
      },
      {
        question: "Describe what a dictionary-based compression method does in general terms.",
        answer: "It builds a dictionary of repeated patterns and replaces occurrences with shorter codes referencing the dictionary entries.",
        paper: "2023 May/June Paper 13",
        topic: "Compression",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["describe"],
        marks: 3,
        keywords: ["dictionary", "compression", "patterns"]
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
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["compare"],
        marks: 4,
        keywords: ["synchronous", "asynchronous", "start/stop bits", "clock"]
      }
    ],
    "Errors": [
      {
        question: "Describe parity bits and a limitation of parity checking.",
        answer: "Parity adds a bit to make the number of 1s even or odd. Limitation: it detects single-bit errors but not all multi-bit errors (e.g., two-bit flips retain parity).",
        paper: "2024 Oct/Nov Paper 23",
        topic: "Errors",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["describe", "explain"],
        marks: 3,
        keywords: ["parity", "error detection", "limitation"]
      },
      {
        question: "Explain what a checksum is and how it is used.",
        answer: "A checksum is a value computed from the data; the sender transmits it with the packet and the receiver recomputes and compares to detect errors.",
        paper: "2025 May/June Paper 12",
        topic: "Errors",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["explain"],
        marks: 3,
        keywords: ["checksum", "error detection"]
      }
    ],
    "Protocols": [
      {
        question: "Explain handshaking and why it is used in network communication.",
        answer: "Handshaking is the negotiation process where devices agree on parameters (speed, protocol features) before data transfer, ensuring compatibility and reliable communication.",
        paper: "2025 May/June Paper 12",
        topic: "Protocols",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["explain"],
        marks: 3,
        keywords: ["handshaking", "protocols", "negotiation"]
      },
      {
        question: "Compare packet switching and circuit switching.",
        answer: "Packet switching splits data into packets routed independently; circuit switching establishes a dedicated path for the entire session. Packet switching is efficient for variable traffic, circuit switching offers consistent latency.",
        paper: "2024 May/June Paper 21",
        topic: "Protocols",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["compare"],
        marks: 4,
        keywords: ["packet switching", "circuit switching"]
      }
    ]
  }
};
