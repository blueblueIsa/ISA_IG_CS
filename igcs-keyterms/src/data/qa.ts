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
  },
  "cs-3": {
    "Architecture": [
      {
        question: "Name the three buses in Von Neumann architecture and state their roles.",
        answer: "Data bus carries data; Address bus carries memory addresses; Control bus carries control signals.",
        paper: "2023 May/June Paper 11",
        topic: "Architecture",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["state", "explain"],
        marks: 3,
        keywords: ["data bus", "address bus", "control bus", "von neumann"]
      },
      {
        question: "Explain the function of the ALU and Control Unit in a CPU.",
        answer: "The ALU performs arithmetic and logic operations; the Control Unit fetches, decodes and coordinates execution of instructions.",
        paper: "2024 Oct/Nov Paper 12",
        topic: "Architecture",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["explain"],
        marks: 3,
        keywords: ["ALU", "control unit", "CPU", "fetch-decode-execute"]
      }
    ],
    "Memory": [
      {
        question: "Compare RAM and ROM with one use case for each.",
        answer: "RAM is volatile working memory used during program execution. ROM is non-volatile and stores firmware that runs at start-up.",
        paper: "2025 Feb/Mar Paper 13",
        topic: "Memory",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["compare"],
        marks: 4,
        keywords: ["RAM", "ROM", "volatile", "firmware"]
      }
    ],
    "Storage": [
      {
        question: "State one advantage and one disadvantage of SSD compared to HDD.",
        answer: "Advantage: faster access and no moving parts. Disadvantage: typically higher cost per GB.",
        paper: "2023 Oct/Nov Paper 22",
        topic: "Storage",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["compare", "state"],
        marks: 2,
        keywords: ["SSD", "HDD", "speed", "cost"]
      }
    ],
    "I/O": [
      {
        question: "Give one example each of an input device, output device and sensor.",
        answer: "Input: keyboard; Output: monitor; Sensor: temperature sensor.",
        paper: "2024 May/June Paper 21",
        topic: "I/O",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["state"],
        marks: 3,
        keywords: ["input", "output", "sensor", "devices"]
      }
    ],
    "Systems": [
      {
        question: "Define embedded system and give an example.",
        answer: "An embedded system is dedicated to a specific function within a larger system, e.g., a washing machine controller.",
        paper: "2025 Oct/Nov Paper 12",
        topic: "Systems",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["define", "example"],
        marks: 2,
        keywords: ["embedded system", "controller"]
      }
    ]
  },
  "cs-4": {
    "OS": [
      {
        question: "State two functions of an operating system.",
        answer: "Examples: memory management, file management, process scheduling, device control, security.",
        paper: "2023 May/June Paper 13",
        topic: "OS",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["state"],
        marks: 2,
        keywords: ["operating system", "functions", "memory", "files", "scheduling"]
      }
    ],
    "Languages": [
      {
        question: "Compare compiler and interpreter.",
        answer: "A compiler translates the whole program into object code before execution; an interpreter translates and executes line by line at runtime.",
        paper: "2024 Oct/Nov Paper 12",
        topic: "Languages",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["compare"],
        marks: 4,
        keywords: ["compiler", "interpreter", "object code", "runtime"]
      }
    ],
    "Software": [
      {
        question: "Explain the difference between system software and application software.",
        answer: "System software manages and supports computer operations; application software performs user-facing tasks.",
        paper: "2025 May/June Paper 12",
        topic: "Software",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["explain"],
        marks: 3,
        keywords: ["system software", "application software"]
      }
    ]
  },
  "cs-5": {
    "Web": [
      {
        question: "Describe the role of DNS in accessing websites.",
        answer: "DNS translates human-readable domain names into IP addresses to locate servers on the internet.",
        paper: "2023 Oct/Nov Paper 22",
        topic: "Web",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["describe"],
        marks: 2,
        keywords: ["DNS", "IP address", "domain"]
      },
      {
        question: "Explain the difference between HTTP and HTTPS.",
        answer: "HTTPS uses TLS/SSL to encrypt communication and verify server identity; HTTP does not provide encryption.",
        paper: "2024 May/June Paper 21",
        topic: "Web",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["compare", "explain"],
        marks: 3,
        keywords: ["HTTP", "HTTPS", "TLS", "SSL", "encryption"]
      }
    ],
    "Security": [
      {
        question: "State two methods to protect users from phishing.",
        answer: "Examples: educate users to check URLs and certificates, use spam filters, enable two-factor authentication.",
        paper: "2025 Feb/Mar Paper 13",
        topic: "Security",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["state"],
        marks: 2,
        keywords: ["phishing", "awareness", "filters", "2FA"]
      }
    ],
    "Communication": [
      {
        question: "Identify a suitable protocol for sending emails and one for retrieving emails.",
        answer: "SMTP is used to send emails; POP3 or IMAP is used to retrieve/manage emails.",
        paper: "2023 May/June Paper 11",
        topic: "Communication",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["identify", "state"],
        marks: 2,
        keywords: ["SMTP", "POP3", "IMAP", "email"]
      }
    ]
  },
  "apl-7": {
    "Algorithms": [
      {
        question: "Trace this pseudocode and state the final value of total given input n=5.",
        answer: "For i from 1 to 5, total accumulates 15. Final value: 15.",
        paper: "2024 Oct/Nov Paper 12",
        topic: "Algorithms",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["trace", "calculate"],
        marks: 3,
        keywords: ["pseudocode", "loop", "trace", "accumulate"]
      },
      {
        question: "Explain the difference between selection and iteration using pseudocode examples.",
        answer: "Selection uses if/else to choose a path; iteration uses loops to repeat steps. Example: IF X>0 THEN...; FOR i=1 TO n ...",
        paper: "2025 May/June Paper 12",
        topic: "Algorithms",
        source: "PastPapers.Co",
        link: "https://pastpapers.co/cie/?dir=IGCSE%2FComputer-Science-0478",
        tags: ["explain", "compare"],
        marks: 4,
        keywords: ["selection", "iteration", "pseudocode", "if", "loop"]
      }
    ]
  }
};
